import { atom } from "recoil";

export const themeState = atom({
    key: "themeState",
    default: "light", // 기본값: 라이트 모드
});
