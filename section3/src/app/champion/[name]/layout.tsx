"use client";

import { useRouter } from "next/navigation";

export default function ChampionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();

    return (
        <div>
            <header
                style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "20px",
                    backgroundColor: "#444",
                    color: "white",
                }}
            >
                <button
                    onClick={() => router.push("/")} // 홈으로 이동
                    style={{
                        marginRight: "10px",
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                        color: "white",
                        fontSize: "18px",
                    }}
                >
                    🏠
                </button>
                <h2>Champion Details</h2>
            </header>
            <main>{children}</main>
        </div>
    );
}
