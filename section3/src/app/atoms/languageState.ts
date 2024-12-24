import { atom } from "recoil";

export const languageState = atom({
    key: "languageState",
    default: "ko_KR", // 기본 언어: 한국어
});
