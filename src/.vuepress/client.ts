import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
    enhance: ({ router }) => {
        router.beforeEach((to, from, next) => {
            const redirectList = {
                '/centos/CentOS-OpenVPN-Server-Client-Setting/': '/posts/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Server-Client-Setting.html',
                '/centos/CentOS-How-to-connect-OpenVPN-on-Linux/': '/posts/Computing/OS/Linux/CentOS/CentOS-How-to-connect-OpenVPN-on-Linux.html',
                '/windows/Windows-Server-RDP-Setting/': '/posts/Computing/OS/Windows/Windows-Server-RDP-Setting.html',
                '/windows/Windows-Server-RDP-Log-Check/': '/posts/Computing/OS/Windows/Windows-Server-RDP-Log-Check.html',
                '/centos/CentOS-Samba-Network-Storage-Setting/': '/posts/Computing/OS/Linux/CentOS/CentOS-Samba-Network-Storage-Setting.html',
                '/centos/CentOS-OpenVPN-Private-Connect-MySQL/': '/posts/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Private-Connect-MySQL.html',
                '/centos/CentOS-OpenVPN-Client-to-Client/': '/posts/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Client-to-Client.html',
                '/centos/CentOS-Apache-CBand/': '/posts/Computing/OS/Linux/CentOS/CentOS-Apache-CBand.html',
                '/centos/CentOS-Nginx-VTS/': '/posts/Computing/OS/Linux/CentOS/CentOS-Nginx-VTS.html',
                '/windows/Windows-Update-Temp-file-Delete/': '/posts/Computing/OS/Windows/Windows-Update-Temp-file-Delete.html',
                '/windows/Windows-Server-Update-Services-Set-up/': '/posts/Computing/OS/Windows/Windows-Server-Update-Services-Set-up.html',
                '/windows/Windows-Server-Update-Services-Client-Set-up/': '/posts/Computing/OS/Windows/Windows-Server-Update-Services-Client-Set-up.html',
                '/ubuntu/Ubuntu-NVIDIA-Driver-Install/': '/posts/Computing/OS/Linux/Ubuntu/Ubuntu-NVIDIA-Driver-Install.html',
                '/mysql/MySQL-Migration-Crash/': '/posts/Computing/Database/MySQL/MySQL-Migration-Crash.html',
                '/network/REST-API-Theory/': '/posts/Computing/Structure/REST-API-Structure.html',
                '/golang/REST-API-Implement-GoLang/': '/posts/Computing/Develop/GoLang/REST-API-Implement-GoLang.html',
                '/mysql/HeidiSQL-SSH-Tunnel/': '/posts/Computing/Database/MySQL/HeidiSQL-SSH-Tunnel.html',
                '/security/WordPress-Redirect-Exploit/': '/posts/Computing/Security/WordPress-Redirect-Exploit.html',
                '/blog/GitHub-Blog-Sitemap-Google/': '/posts/Personal/Blog/GitHub-Blog-Sitemap-Google.html',
                '/mysql/MariaDB-ProtectHome-Setting/': '/posts/Computing/Database/MySQL/MariaDB-ProtectHome-Setting.html',
                '/blog/GitHub-Blog-Timezone/': '/posts/Personal/Blog/GitHub-Blog-Timezone.html',
                '/centos/JAVA-multiple-install/': '/posts/Computing/OS/Linux/CentOS/JAVA-multiple-install.html',
                '/golang/WebSite-Checker-GitHub-Upload/': '/posts/Computing/Develop/GoLang/WebSite-Checker-GitHub-Upload.html',
                '/centos/ffmpeg-streaming-delayed/': '/posts/Computing/OS/Linux/CentOS/ffmpeg-streaming-delayed.html',
                '/github/GitHub-Profile-Setting/': '/posts/Computing/GitHub/GitHub-Profile-Setting.html',
                '/blog/Minimal-mistakes-change-contents-size/': '/posts/Personal/Blog/Minimal-mistakes-change-contents-size.html',
                '/php/PHP-Change-Precision/': '/posts/Computing/Develop/PHP/PHP-Change-Precision.html',
                '/think/Wait-for-2022-09-Apple-events/': '/posts/Personal/Remember/Wait-for-2022-09-Apple-events.html',
                '/think/Apple-events-review-2022-09/': '/posts/Personal/Remember/Apple-events-review-2022-09.html',
                '/mysql/MySQL-Check-Procedure/': '/posts/Computing/Database/MySQL/MySQL-Check-Procedure.html',
                '/personal/NCP-Expert-review/': '/posts/Personal/Certified/NCP-Expert-review.html',
                '/think/NHN-Forward-22-review/': '/posts/Personal/Remember/NHN-Forward-22-review.html',
                '/personal/Engineer-Information-Processing-review/': '/posts/Personal/Certified/Engineer-Information-Processing-review.html',
                '/personal/Ncloud-AI-Cert-Review/': '/posts/Personal/Certified/Ncloud-AI-Cert-Review.html'
            }
            const redirect = redirectList[to.path]

            if (redirect) {
                next({path: redirect})
            } else next()
        })
    }
});