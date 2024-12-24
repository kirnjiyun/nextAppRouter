"use client";
import { RecoilRoot } from "recoil";
import { useRecoilState } from "recoil";
import { themeState } from "./atoms/themeState";
import { useEffect } from "react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useRecoilState(themeState);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <html lang="en">
            <body>
                <RecoilRoot>
                    {" "}
                    <header>
                        <h1>League of Legend</h1>
                        <div>
                            <button
                                className="dark-mode-toggle"
                                onClick={toggleTheme}
                            >
                                {theme === "light"
                                    ? "🌙 다크 모드"
                                    : "☀️ 라이트 모드"}
                            </button>
                        </div>
                    </header>
                    <main>{children}</main>
                    <footer>© 2024 League of Legend</footer>
                </RecoilRoot>
            </body>
        </html>
    );
}
