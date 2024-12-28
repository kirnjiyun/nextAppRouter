import { getChampionData } from "../../../utils/api";
import ChampionDetail from "./ChampionDetail";

export default async function ChampionDetailPage({
    params,
}: {
    params: { championId: string };
}) {
    const champion = await getChampionData(params.championId);
    return <ChampionDetail champion={champion} />;
}
