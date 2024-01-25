/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:'cdn.myanimelist.net'
            },
            {
                hostname:"'havatars.githubusercontent.com"
            }
        ]
    }
}

module.exports = nextConfig
