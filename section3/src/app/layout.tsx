"use client";
import { RecoilRoot } from "recoil";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <RecoilRoot>
            <html lang="en">
                <body>{children}</body>
            </html>
        </RecoilRoot>
    );
}
