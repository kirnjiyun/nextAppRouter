let cachedChampionData: any = null; // 데이터를 캐싱할 변수

export async function getChampionData(championId: string) {
    try {
        // 캐시된 데이터가 없으면 fetch 실행
        if (!cachedChampionData) {
            const res = await fetch(
                `https://ddragon.leagueoflegends.com/cdn/10.6.1/data/ko_KR/champion.json`
            );

            if (!res.ok) {
                throw new Error(
                    `Failed to fetch champions list: ${res.status}`
                );
            }

            const data = await res.json();
            cachedChampionData = data.data; // 모든 챔피언 데이터를 캐싱
        }

        // championId를 대문자로 변환
        const upperCaseId =
            championId.charAt(0).toUpperCase() +
            championId.slice(1).toLowerCase();

        // 캐싱된 데이터에서 챔피언 검색
        const champion = cachedChampionData[upperCaseId];
        if (!champion) {
            throw new Error(`Champion with ID ${upperCaseId} not found`);
        }

        return champion;
    } catch (error) {
        console.error(`Error fetching champion data:`, error);
        throw error;
    }
}

export async function getChampionsList() {
    try {
        const res = await fetch(
            `https://ddragon.leagueoflegends.com/cdn/10.6.1/data/ko_KR/champion.json`
        );
        if (!res.ok) {
            throw new Error(`Failed to fetch champions list`);
        }
        const data = await res.json();
        console.log("Fetched champions list:", data); // 콘솔 출력
        return data; // data 객체 전체 반환
    } catch (error) {
        console.error("Error fetching champions list:", error);
        throw error;
    }
}
