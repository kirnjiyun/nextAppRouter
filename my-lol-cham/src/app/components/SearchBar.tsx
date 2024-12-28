// app/components/SearchBar.tsx
"use client";

import styles from "../../styles/searchbar.module.css";
// ↑ 모듈 CSS 사용 예시 (원치 않으면 삭제하고 인라인 스타일 써도 됨)

interface SearchBarProps {
    searchText: string; // 현재 검색어
    onChange: (value: string) => void; // 검색어 변경 시 호출
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
