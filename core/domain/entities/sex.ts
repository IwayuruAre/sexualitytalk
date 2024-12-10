export const SexList = [
    "男性",
    "女性"
] as const;

export type Sex = typeof SexList[number];