---
title:  "[PHP] 부동 소수점 정밀도 문제 해결"

categories:
  - PHP
tags:
  - Precision
  - Floating point number
  - Timestamp
  - Milesecond
  - Microtime

toc: true
toc_sticky: true

date: 2022-09-07

editLink: false
lastUpdated: true
---

::: info
📢 포스팅 작성자는 PHP 개발자가 아니며 이슈 해소 과정을 담은 것입니다.  
포스팅 상 틀린 내용이 있다면 댓글로 수정이 필요한 내용을 어필 부탁드립니다.
:::


## 🎇 테스트 환경
- CentOS Linux release 7.6.1810 (Core)
- PHP 5.5.38

## 🤔 발생 상황
- 서비스에 신규 기능을 반영하는 도중 일부 API 호출 과정에서 오류가 발생됐다.
- 개발 용도 서버에서는 정상적으로 반영 됨이 확인됐으나 운영 서버의 문제였다.
- 발생된 오류는 `Authentication Failed`로 계정 정보 확인 간 오류로 확인됐다.

## 🔍 오류 분석
우선 `Authentication Failed` 오류가 서버가 차단을 당한 것은 아닌지 확인했다.  
여기서 문제가 된 API는 [NCP에서 제공하는 API](https://api.ncloud-docs.com/docs/common-ncpapi)로 아래와 같이 Shell을 작성하였다.

```bash
#!/bin/bash
TIMESTAMP=$(echo $(($(date +%s%N)/1000000)))
ACCESSKEY="ACCESSKEY!!!"
SECRETKEY="SECRETKEY!!!"
APIURL="https://ncloud.apigw.ntruss.com"
METHOD="GET"

echo $TIMESTAMP

nl=$'\\n'
URI="/server/v2/getZoneList?regionNo=1"

SIG="$METHOD $URI${nl}"
SIG+="$TIMESTAMP${nl}"
SIG+="$ACCESSKEY"

SIGNATURE=$(echo -n -e "$SIG"|iconv -t utf8 |openssl dgst -sha256 -hmac $SECRETKEY -binary|openssl enc -base64)
result=`curl -X $METHOD -H "Content-type: application/xml" -H "x-ncp-apigw-timestamp:$TIMESTAMP" -H "x-ncp-iam-access-key:$ACCESSKEY" -H "x-ncp-apigw-signature-v2:$SIGNATURE" $APIURL$URI`
echo $result
```

Shell Script를 이용하여 필요한 값을 입력해두니 정상적으로 조회가 가능하였다.  
이로 보았을 때에는 대상 서버에 대한 차단은 이뤄지지 않은 것으로 확인되었다.

다음은 PHP를 이용해 API를 호출하고 이에 대한 디버깅을 진행해보는 것이었다.

나는 여기서 문제 요소를 두 가지 정도로 함축하여 생각했고 아래와 같았다.

1. Signature 암호화 과정에서 문제가 발생됐거나.
2. Timestamp를 가져오는 과정에서 뭔가 문제가 됐거나.

이때 확인하려고 작성한 코드는 아래와 같다. ~~(PHP를 배운 적이 없어 스파게티다.)~~

```php
<?php
$access_key = "ACCESSKEY!!!";
$secret_key = iconv('euc-kr', 'utf-8', "SECRETKEY!!!");

$time_stamp = explode(' ', microtime());
print($time_stamp[0]);
print("\n");
print($time_stamp[1]);
print("\n");

print(($time_stamp[0] + $time_stamp[1]) * 1000);
print("\n");
$time_stamp = floor(($time_stamp[0] + $time_stamp[1]) * 1000);
print($time_stamp);
print("\n");

$url = "https://ncloud.apigw.ntruss.com";
$method = 'GET ';
$request_url = "/server/v2/getZoneList";
$request_parameters = "?regionNo=1";

$signature_request = $method.$request_url.$request_parameters."\n".$time_stamp."\n".$access_key;
$signature_request = iconv('euc-kr', 'utf-8', $signature_request);
$signature = base64_encode(hash_hmac('sha256', $signature_request, $secret_key, true));

print($signature);

$ch = curl_init();
$header = array(
        "Content-type:application/xml"
        , "charset=utf-8"
        , "x-ncp-apigw-timestamp:".$time_stamp
        , "x-ncp-iam-access-key:".$access_key
        , "x-ncp-apigw-signature-v2:".$signature
);

$api_url = $url.$request_url.$request_parameters;

curl_setopt($ch, CURLOPT_URL, $api_url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
curl_setopt($ch, CURL_HTTP_VERSION_1_1, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

$curl_result = curl_exec($ch);
print($curl_result);

curl_close ($ch);
?>
```

코드 실행 후 확신을 갖게 됐는데 Timestamp 출력 간 아래와 같은 결과가 확인됐다.

```bash
$ php test.php
1.66251826915E+12
```

해당 값은 부동 소수점 정밀도로 인한 올림되어 표기되는 이슈 사항으로 확인되었다.  
우선 이게 문제가 맞는지 확신을 갖기 위해 String을 이용한 코드를 작성해보았다.

```php
<?php
$access_key = "ACCESSKEY!!!";
$secret_key = iconv('euc-kr', 'utf-8', "SECRETKEY!!!");

$times = time();
list($microtime, $times) = explode(' ',microtime());
$time_stamp = $times . substr($microtime, 2, 3);
print($time_stamp);
print("\n");

$url = "https://ncloud.apigw.ntruss.com";
$method = 'GET ';
$request_url = "/server/v2/getZoneList";
$request_parameters = "?regionNo=1";

$signature_request = $method.$request_url.$request_parameters."\n".$time_stamp."\n".$access_key;
$signature_request = iconv('euc-kr', 'utf-8', $signature_request);
$signature = base64_encode(hash_hmac('sha256', $signature_request, $secret_key, true));

print($signature);

$ch = curl_init();
$header = array(
        "Content-type:application/xml"
        , "charset=utf-8"
        , "x-ncp-apigw-timestamp:".$time_stamp
        , "x-ncp-iam-access-key:".$access_key
        , "x-ncp-apigw-signature-v2:".$signature
);

$api_url = $url.$request_url.$request_parameters;

curl_setopt($ch, CURLOPT_URL, $api_url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
curl_setopt($ch, CURL_HTTP_VERSION_1_1, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

$curl_result = curl_exec($ch);
print($curl_result);

curl_close ($ch);
?>
```

중간에 확인해보면 Timestamp를 가져오는 코드가 변경된 것을 확인할 수 있다.  
또한 substr을 이용하여 가져온 내용을 잘라 이어 붙이는 형식으로 변경하였다.

```bash
$ php test.php
1662520085387
```

상위와 같이 Timestamp가 정상적으로 출력되고 API 호출도 정상 동작 됐다.

## 🔧 오류 해결
그렇다면 이렇게 다른 값이 나오는 이유는 무엇일까 고민하게 됐다.  
이를 찾기 위해 PHP 설정 파일인 `php.ini` 파일에서 검색하게 됐다.

검색어는 `floating point number`로 지정하여 검색을 하게 됐는데  
아래와 같이 `precision` 설정 상단에 주석으로 작성된 점이 확인됐다.

```ini
; The number of significant digits displayed in floating point numbers.
; http://php.net/precision
precision = 12
```

여기서 `precision`이 뭘까 싶어 검색해본 결과 부동 소수점의 정밀도를  
숫자 단위로 변경할 수 있도록 제공하고 있는 PHP의 설정 값 중 하나였다.

개발 서버와 이 부분에서 차이가 존재하여 문제가 됐구나 싶어 확인해본 결과  
개발 서버는 `precision` 값이 14로 설정되어 있어 운영 서버도 변경하게 됐다.

```ini
; The number of significant digits displayed in floating point numbers.
; http://php.net/precision
precision = 14
```

이후 이전 작성한 구문을 실행하였을 때 문제없이 API 호출 및 데이터 확인이 됐고,  
설정 반영을 위해 일정을 수립하여 Apache 프로세스를 재가동 후 문제없이 동작됐다.

---

굉장히 간단한 문제였지만 부동소수점의 문제를 실제로 경험해볼 수 있었고,  
PHP에 설정 값 중 정밀도를 조절하는 설정을 찾아서 하나 배워간거 같았다.

끝까지 포스팅을 읽어주셔서 감사드리며, 틀린 내용이 있다면 댓글 부탁드립니다. 😎