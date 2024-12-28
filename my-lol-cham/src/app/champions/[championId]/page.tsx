import { getChampionData } from "../../../utils/api";

export default async function ChampionDetailPage({
    params,
}: {
    params: { championId: string };
}) {
    try {
        const champion = await getChampionData(params.championId);

        // 스타일 정의
        const styles = {
            main: {
                padding: "2rem",
                fontFamily: "'Arial', sans-serif",
                lineHeight: "1.6",
                color: "#333",
                textAlign: "center" as "center",
            },
            heading: {
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#2c3e50",
            },
            subheading: {
                fontSize: "1.5rem",
                fontWeight: "normal",
                marginBottom: "1rem",
                color: "#95a5a6",
            },
            image: {
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginBottom: "1rem",
            },
            paragraph: {
                fontSize: "1rem",
                color: "#555",
                textAlign: "justify" as "justify",
            },
        };

        return (
            <main style={styles.main}>
                <h1 style={styles.heading}>{champion.name}</h1>
                <h2 style={styles.subheading}>{champion.title}</h2>
                <img
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.championId}_0.jpg`}
                    alt={champion.name}
                    style={styles.image}
                />
                <p style={styles.paragraph}>{champion.blurb}</p>
            </main>
        );
    } catch (error) {
        const errorStyles = {
            main: {
                padding: "2rem",
                textAlign: "center" as "center",
                color: "#d9534f",
                fontFamily: "'Arial', sans-serif",
            },
            heading: {
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
            },
            paragraph: {
                fontSize: "1rem",
                color: "#555",
            },
        };

        return (
            <main style={errorStyles.main}>
                <h1 style={errorStyles.heading}>Error</h1>
                <p style={errorStyles.paragraph}>
                    Failed to load champion data. Please try again later.
                </p>
            </main>
        );
    }
}
