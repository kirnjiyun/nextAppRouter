"use client";

import { useState } from "react";
import styles from "./ChampionDetail.module.css";

export default function ChampionDetail({ champion }: { champion: any }) {
    const [showAttributes, setShowAttributes] = useState(false);
    const [showStats, setShowStats] = useState(false);

    const championImg = `https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/${champion.image.full}`;

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <img
                    src={championImg}
                    alt={champion.name}
                    className={styles.championImage}
                />
                <div>
                    <h1 className={styles.heading}>{champion.name}</h1>
                    <h2 className={styles.subheading}>{champion.title}</h2>
                </div>
            </div>
            <p className={styles.blurb}>{champion.blurb}</p>

            {/* Attributes Section */}
            <div
                className={styles.toggleSection}
                onClick={() => setShowAttributes(!showAttributes)}
            >
                <div className={styles.sectionHeader}>
                    <h3 className={styles.sectionTitle}>Attributes</h3>
                    <span
                        className={`${styles.arrow} ${
                            showAttributes ? styles.arrowOpen : ""
                        }`}
                    ></span>
                </div>
                {showAttributes && (
                    <ul className={styles.infoList}>
                        <li className={styles.listItem}>
                            Attack: {champion.info.attack}
                        </li>
                        <li className={styles.listItem}>
                            Defense: {champion.info.defense}
                        </li>
                        <li className={styles.listItem}>
                            Magic: {champion.info.magic}
                        </li>
                        <li className={styles.listItem}>
                            Difficulty: {champion.info.difficulty}
                        </li>
                    </ul>
                )}
            </div>

            {/* Stats Section */}
            <div
                className={styles.toggleSection}
                onClick={() => setShowStats(!showStats)}
            >
                <div className={styles.sectionHeader}>
                    <h3 className={styles.sectionTitle}>Stats</h3>
                    <span
                        className={`${styles.arrow} ${
                            showStats ? styles.arrowOpen : ""
                        }`}
                    ></span>
                </div>
                {showStats && (
                    <ul className={styles.statsList}>
                        <li className={styles.listItem}>
                            HP: {champion.stats.hp}
                        </li>
                        <li className={styles.listItem}>
                            HP per Level: {champion.stats.hpperlevel}
                        </li>
                        <li className={styles.listItem}>
                            MP: {champion.stats.mp}
                        </li>
                        <li className={styles.listItem}>
                            MP per Level: {champion.stats.mpperlevel}
                        </li>
                        <li className={styles.listItem}>
                            Armor: {champion.stats.armor}
                        </li>
                        <li className={styles.listItem}>
                            Attack Damage: {champion.stats.attackdamage}
                        </li>
                        <li className={styles.listItem}>
                            Attack Speed: {champion.stats.attackspeed}
                        </li>
                    </ul>
                )}
            </div>
        </main>
    );
}
