/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        //domains: [],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
        ],
    },
}

module.exports = nextConfig
