import ChampionsSection from "./components/ChampionsSection";
import styles from "./page.module.css";
import { getChampionsList } from "../utils/api";

export default async function HomePage() {
    const championData = await getChampionsList();

    return (
        <main style={{ padding: "2rem" }}>
            <h1 className={styles.title}>리그 오브 레전드 챔피언</h1>

            <ChampionsSection championData={championData} />
        </main>
    );
}
