/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: '',
    env: {
        APPWRITE_ENDPOINT: process.env.APPWRITE_ENDPOINT,
        APPWRITE_PROJ_ID: process.env.APPWRITE_PROJ_ID,
        RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
        RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
