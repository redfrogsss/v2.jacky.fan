/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: '',
    env: {
        APPWRITE_ENDPOINT: process.env.APPWRITE_ENDPOINT,
        APPWRITE_PROJ_ID: process.env.APPWRITE_PROJ_ID,
    }
}

module.exports = nextConfig
