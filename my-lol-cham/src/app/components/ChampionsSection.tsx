"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import ChampionsList from "./ChampionsList";

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

export default function ChampionsSection({
    championData,
}: {
    championData: ChampionJson;
}) {
    const [searchText, setSearchText] = useState("");

    return (
        <>
            <SearchBar
                searchText={searchText}
                onChange={(val) => setSearchText(val)}
            />
            <ChampionsList
                championData={championData}
                searchText={searchText}
            />
        </>
    );
}
