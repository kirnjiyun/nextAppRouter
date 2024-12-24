import { use } from "react";

const fetchChampionData = async (name: string) => {
    const response = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion/${name}.json`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch champion data");
    }
    const data = await response.json();
    return data.data[name];
};

const ChampionDetailPage = ({ params }: { params: { name: string } }) => {
    // Unwrap `params` and fetch champion data
    const champion = use(fetchChampionData(params.name));

    return (
        <div style={{ padding: "20px" }}>
            <h1>
                {champion.name} - {champion.title}
            </h1>
            <p>{champion.blurb}</p>
            <img
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${params.name}_0.jpg`}
                alt={champion.name}
                style={{ maxWidth: "400px", borderRadius: "8px" }}
            />
        </div>
    );
};

export default ChampionDetailPage;
