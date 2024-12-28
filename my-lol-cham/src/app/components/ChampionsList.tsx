// app/components/ChampionsList.tsx
"use client";

import Link from "next/link";
import styles from "../../styles/championsList.module.css";
// (원치 않으면 인라인 스타일만 사용 가능)

interface ChampionJson {
    data: {
        [key: string]: ChampionData;
    };
}

interface ChampionData {
    id: string;
    key: string;
    name: string; // "아리", "아트록스" 등 한글 이름
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
    championData: ChampionJson; // 서버에서 넘어온 전체 챔피언 데이터
    searchText: string; // 필터에 사용할 검색어
}

export default function ChampionsList({
    championData,
    searchText,
}: ChampionsListProps) {
    // 모든 챔피언 키 ex) "Aatrox", "Ahri", ...
    const champKeys = Object.keys(championData.data);

    // 이름으로 필터
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
