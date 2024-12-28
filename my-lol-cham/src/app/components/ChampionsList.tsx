// app/components/ChampionsList.tsx
"use client";

import Link from "next/link";
import styles from "../../styles/championsList.module.css";

interface ChampionJson {
    data: {
        [key: string]: ChampionData;
    };
}

interface ChampionData {
    id: string;
    key: string;
    name: string;
    title: string;
    image: {
        full: string;
        sprite: string;
        group: string;
    };
    tags: string[];
    partype: string;
}

interface ChampionsListProps {
    championData: ChampionJson;
    searchText: string;
}

export default function ChampionsList({
    championData,
    searchText,
}: ChampionsListProps) {
    if (!championData || !championData.data) {
        return <div>Loading champions...</div>; // 로딩 상태 표시
    }

    // 챔피언 데이터 키 추출
    const champKeys = Object.keys(championData.data);

    const filteredKeys = champKeys.filter((key) => {
        const champ = championData.data[key];
        return champ.name.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
        <div className={styles.championsContainer}>
            {filteredKeys.map((champKey) => {
                const champion = championData.data[champKey];
                const championImg = `https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/${champion.image.full}`;

                return (
                    <Link
                        key={champKey}
                        href={`/champions/${champKey.toLowerCase()}`}
                        className={styles.championCard}
                    >
                        <img src={championImg} alt={champion.name} />
                        <div className={styles.championName}>
                            {champion.name}
                        </div>
                        <div className={styles.championTitle}>
                            {champion.title}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
