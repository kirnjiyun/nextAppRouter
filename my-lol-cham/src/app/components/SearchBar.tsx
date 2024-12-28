// app/components/SearchBar.tsx
"use client";

import styles from "../../styles/searchbar.module.css";

interface SearchBarProps {
    searchText: string;
    onChange: (value: string) => void;
}

export default function SearchBar({ searchText, onChange }: SearchBarProps) {
    return (
        <div className={styles.searchBarContainer}>
            <input
                type="text"
                placeholder="챔피언 이름 검색..."
                value={searchText}
                onChange={(e) => onChange(e.target.value)}
                className={styles.searchInput}
            />
        </div>
    );
}
