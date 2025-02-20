export const TAGS = {
  1: {
    name: "일러스트",
    img: "/test1.png",
    subTags: ["캐릭터", "여자", "남자", "음식", "배경화면", "포스터", "빈티지"],
  },
  2: {
    name: "애니",
    img: "/test2.jpg",
    subTags: ["캐릭터", "캐릭터", "배경화면", "프로필", "일본", "고전"],
  },
  3: {
    name: "실사",
    img: "/test1.png",
    subTags: ["여자", "남자", "동물", "음식", "풍경"],
  },
  4: {
    name: "자연",
    img: "/test2.jpg",
    subTags: ["실사", "일러스트", "숲", "바다", "꽃", "눈"],
  },
  5: {
    name: "판타지",
    img: "/test1.png",
    subTags: ["아트", "다크", "일러스트", "풍경"],
  },
  6: {
    name: "회화",
    img: "/test2.jpg",
    subTags: [],
  },
  7: {
    name: "동물",
    img: "/test1.png",
    subTags: ["실사", "강아지", "고양이", "드로잉"],
  },
  8: {
    name: "무채색",
    img: "/test1.png",
    subTags: ["배경화면", "캐릭터", "감성", "인테리어"],
  },
};

export const TAGS_MAIN = {
  일러스트: {
    id: 1,
    name: "일러스트",
    img: "/test1.png",
    subTag: [8, 9, 10, 11],
  },
  애니: { id: 2, name: "애니", img: "/test2.jpg", subTag: [12, 13, 14] },
  실사: {
    id: 3,
    name: "실사",
    img: "/test1.png",
    subTag: [15, 16, 17, 18, 19],
  },
  자연: { id: 4, name: "자연", img: "/test2.jpg", subTag: [20, 21] },
  판타지: { id: 5, name: "판타지", img: "/test1.png", subTag: [] },
  동물: { id: 6, name: "동물", img: "/test1.png", subTag: [26, 27, 28] },
  무채색: {
    id: 7,
    name: "무채색",
    img: "/test1.png",
    subTag: [29, 30, 31, 32],
  },
} as const;

export const TAGS_SUB = {
  일러스트: {
    여자: 8,
    남자: 9,
    포스터: 10,
    빈티지: 11,
  },
  애니: {
    캐릭터: 12,
    배경화면: 13,
    고전: 14,
  },
  실사: {
    여자: 15,
    남자: 16,
    동물: 17,
    음식: 18,
    풍경: 19,
  },
  자연: {
    숲: 20,
    눈: 21,
  },
  동물: {
    실사: 25,
    강아지: 26,
    고양이: 27,
    드로잉: 28,
  },
  무채색: {
    배경화면: 29,
    캐릭터: 30,
    감성: 31,
    인테리어: 32,
  },
} as const;

export function reverseTags<T extends Record<string, { id: number }>>(tags: T) {
  return Object.fromEntries(
    Object.entries(tags).map(([key, value]) => [value.id, key]),
  ) as Record<number, keyof T>;
}

export const TAGS_MAIN_REVERSE = reverseTags(TAGS_MAIN);

export function reverseSubTags<
  T extends Record<string, Record<string, number>>,
>(tags: T) {
  return Object.fromEntries(
    Object.entries(tags).flatMap(([, subTags]) =>
      Object.entries(subTags).map(([subTag, id]) => [id, subTag]),
    ),
  ) as Record<number, string>;
}

export const TAGS_SUB_REVERSE = reverseSubTags(TAGS_SUB);
