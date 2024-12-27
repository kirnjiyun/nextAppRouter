"use client";

import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect, useState, createContext, useContext } from "react";
import { themeState } from "../atoms/themeState";
import { languageState } from "../atoms/languageState";

const ChampionContext = createContext<any[]>([]);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useRecoilState(themeState);
    const [language] = useRecoilState(languageState);
    const [championData, setChampionData] = useState<any[]>([]);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    useEffect(() => {
        const fetchChampionData = async () => {
            try {
                const response = await fetch(
                    `http://ddragon.leagueoflegends.com/cdn/13.1.1/data/${language}/champion.json`
                );
                const data = await response.json();
                const champions = Object.values(data.data);
                setChampionData(champions);
            } catch (err) {
                console.error("Failed to fetch champion data", err);
            }
        };

        fetchChampionData();
    }, [language]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ChampionContext.Provider value={championData}>
            <>
                <header>
                    <h1>League of Legends</h1>
                    <button onClick={toggleTheme}>
                        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                    </button>
                </header>
                <main>{children}</main>
                <footer>© 2024 League of Legends</footer>
            </>
        </ChampionContext.Provider>
    );
}

export const useChampionData = () => {
    return useContext(ChampionContext);
};
