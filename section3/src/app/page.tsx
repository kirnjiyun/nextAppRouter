"use client";

import { useChampionData } from "./components/ThemeProvider";
import Link from "next/link";

const HomePage = () => {
    const championData = useChampionData();

    return (
        <div>
            <div className="grid">
                {championData.map((champion: any) => (
                    <div className="card" key={champion.id}>
                        <Link href={`/champion/${champion.id}`}>
                            <img
                                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                                alt={champion.name}
                            />
                            <h3>{champion.name}</h3>
                            <p>{champion.title}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
