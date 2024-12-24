"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Next.js Router

const SearchPage = () => {
    const [championData, setChampionData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState<string>("");

    // 데이터 가져오기
    useEffect(() => {
        const fetchChampionData = async () => {
            try {
                const response = await fetch(
                    "http://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion.json"
                );
                if (!response.ok)
                    throw new Error("데이터를 가져오는데 실패했습니다.");
                const data = await response.json();
                setChampionData(data);
            } catch (err: any) {
                setError(err.message);
            }
        };

        fetchChampionData();
    }, []);

    if (error) {
        return <div>에러 발생: {error}</div>;
    }

    if (!championData) {
        return <div>로딩 중...</div>;
    }

    // 검색 결과 필터링
    const filteredChampions = Object.keys(championData.data).filter(
        (championKey) =>
            championData.data[championKey].name.includes(searchQuery)
    );

    // 검색 입력 변경 시 처리
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);

        // URL에 쿼리스트링 반영
        router.replace(`/search?q=${encodeURIComponent(value)}`);
    };

    // 클릭 시 챔피언 상세 페이지로 이동
    const handleChampionClick = (championName: string) => {
        router.push(`/champion/${championName}`);
    };

    return (
        <div>
            <h1>챔피언 검색</h1>
            <input
                type="text"
                placeholder="챔피언 이름을 입력하세요"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{
                    padding: "8px",
                    marginBottom: "16px",
                    width: "100%",
                    maxWidth: "400px",
                }}
            />
            <ul>
                {filteredChampions.map((championKey) => (
                    <li
                        key={championKey}
                        style={{
                            cursor: "pointer",
                            color: "blue",
                            textDecoration: "underline",
                        }}
                        onClick={() =>
                            handleChampionClick(
                                championData.data[championKey].name
                            )
                        }
                    >
                        {championData.data[championKey].name} -{" "}
                        {championData.data[championKey].title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchPage;
