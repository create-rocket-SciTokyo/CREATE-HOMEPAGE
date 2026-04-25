
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Poppins, Montserrat, Noto_Sans_JP } from "next/font/google"
import { Suspense } from 'react'
import type React from "react"
import Loading from "./loading"
import { LanguageProvider } from "@/context/LanguageContext"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"], variable: "--font-poppins" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto-sans-jp" })

export const metadata: Metadata = {
    title: {
        default: "CREATE | 東京科学大学ロケットサークル",
        template: "%s | CREATE"
    },
    description: "東京科学大学ロケットサークル CREATE の公式サイトです。ロケット、エンジン、CanSatなどの開発プロジェクトを紹介します。",
    icons: {
        icon: "/CREATE-LOGO.png",
        shortcut: "/CREATE-LOGO.png",
        apple: "/CREATE-LOGO.png",
    },
    openGraph: {
        title: "東京科学大学ロケットサークル",
        images: ["/CREATE_moji.png"],
    },
    verification: {
        google: "0sS2zDvaqPHZv-CAtckXYHYnp2zamcP9Q9K1n5tx2AM" ,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja" className={`${inter.variable} ${poppins.variable} ${montserrat.variable} ${notoSansJP.variable}`}>
            <body className="min-h-screen w-full">
                <Suspense>
                    <LanguageProvider>
                        <Loading />
                        {children}
                        <Analytics />
                    </LanguageProvider>
                </Suspense>
            </body>
        </html>
    )
}