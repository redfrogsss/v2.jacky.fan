"use client"

import React from "react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

export function RecaptchaProviders({ children }: { children: React.ReactNode }) {
    return <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITE_KEY ?? "reCaptchaKeyIsUndefined"}>
        {children}
    </GoogleReCaptchaProvider>
}