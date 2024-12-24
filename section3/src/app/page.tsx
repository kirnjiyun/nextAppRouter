"use client";

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { languageState } from "./atoms/languageState";

const HomePage = () => {
    const [championData, setChampionData] = useState<any[]>([]);
    const language = useRecoilValue(languageState); // 언어 상태 가져오기

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
                console.error("데이터 가져오기 실패", err);
            }
        };

        fetchChampionData();
    }, [language]); // 언어 변경 시 API 호출

    return (
        <div>
            <div className="grid">
                {championData.map((champion: any) => (
                    <div className="card" key={champion.id}>
                        <img
                            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                            alt={champion.name}
                        />
                        <h3>{champion.name}</h3>
                        <p>{champion.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
