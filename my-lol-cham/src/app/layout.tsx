import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* 깃허브 아이콘 라이브러리 */
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

/* 모듈 CSS import */
import styles from "../styles/layout.module.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "롤 챔피언",
    description: "롤 챔피언 검색하는 사이트",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${styles.bodyWrap}`}
            >
                <main className={styles.main}>{children}</main>

                <footer className={styles.footer}>
                    <div className={styles.footerInner}>
                        <span className={styles.footerText}>
                            © 2025, @kirnjiyun
                        </span>
                        <Link
                            href="https://github.com/kirnjiyun"
                            target="_blank"
                            className={styles.githubLink}
                        >
                            <FaGithub size={20} />
                            <span>GitHub</span>
                        </Link>
                    </div>
                </footer>
            </body>
        </html>
    );
}
