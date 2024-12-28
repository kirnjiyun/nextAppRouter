// app/page.tsx

import ChampionsSection from "./components/ChampionsSection";

// 1) 서버에서 챔피언 JSON 데이터 Fetch
async function getChampions() {
    const res = await fetch(
        "https://ddragon.leagueoflegends.com/cdn/10.6.1/data/ko_KR/champion.json"
    );

    if (!res.ok) {
        throw new Error("Failed to fetch champion data");
    }

    return res.json();
}

// 2) 메인 페이지 컴포넌트(서버 컴포넌트)
export default async function HomePage() {
    // (A) 서버 사이드에서 데이터 가져오기
    const championData = await getChampions();

    // (B) 클라이언트 컴포넌트에 props로 넘김
    return (
        <main style={{ padding: "1rem" }}>
            <h1>League of Legends</h1>
            <ChampionsSection championData={championData} />
        </main>
    );
}
