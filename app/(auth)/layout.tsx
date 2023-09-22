import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Style } from "../globals.css";

export const metadata = {
    title: "Reputation Infrastructure",
    description : "A new rating system or infrastructure"
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout ({ children } : { children : React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className = { `${inter.className} bg-dark-1` }>
                    {children}

                </body>

            </html>

        </ClerkProvider>
    )
}