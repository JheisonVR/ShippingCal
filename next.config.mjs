/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname:'agilex.com.co'
            },
            {
                protocol: 'https',
                hostname: 'agilexapp.co'
            }
        ]
    }
};

export default nextConfig;
