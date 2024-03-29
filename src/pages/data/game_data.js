let gamelist = [
    {
        name: '리니지W',
        rank: 7,
        rank_before: 1,
        standard: '100일 다이아',
    },
    {
        name: '메이플스토리',
        rank: 3,
        rank_before: 2,
        standard: '1억 메소',
    },
    {
        name: '바람의나라:연',
        rank: 6,
        rank_before: 3,
        standard: '1000일 게임머니',
    },
    {
        name: '리니지2M',
        rank: 19,
        rank_before: 4,
        standard: '1만 다이아',
    },
    {
        name: '리니지M',
        rank: 13,
        rank_before: 5,
        standard: '1000일 다이아',
    },
    {
        name: '리니지',
        rank: 10,
        rank_before: 6,
        standard: '100만 아데나',
    },
    {
        name: '던전앤파이터',
        rank: 4,
        rank_before: 7,
        standard: '1000만 골드',
    },
    {
        name: '패스오브엑자일',
        rank: 12,
        rank_before: 8,
        standard: '10일 게임머니',
    },
    {
        name: '월드오브워크래프트:클래식',
        rank: 22,
        rank_before: 9,
        standard: '1000일 골드',
    },
    {
        name: '바람의나라',
        rank: 15,
        rank_before: 10,
        standard: '100만 바돈',
    },
    {
        name: '블레이드앤소울',
        rank: 31,
        rank_before: 11,
        standard: '1만 금',
    },
    {
        name: '아이온',
        rank: 9,
        rank_before: 12,
        standard: '100만 카나',
    },
    {
        name: '마비노기',
        rank: 20,
        rank_before: 13,
        standard: '1000만 수표',
    },
    {
        name: '마비노기영웅전',
        rank: 32,
        rank_before: 14,
        standard: '1000만 골드',
    },
    {
        name: '리니지2',
        rank: 21,
        rank_before: 15,
        standard: '100만 아데나',
    },
    {
        name: '거상',
        rank: 17,
        rank_before: 16,
        standard: '1억 냥',
    },
    {
        name: '로스트아크',
        rank: 1,
        rank_before: 17,
        standard: '10000일 게임머니',
    },
    {
        name: '에오스레드',
        rank: 30,
        rank_before: 18,
        standard: '1만 다이아',
    },
    {
        name: 'V4',
        rank: 29,
        rank_before: 19,
        standard: '1000일 레드젬',
    },
    {
        name: '가디우스',
        rank: 28,
        rank_before: 20,
        standard: '100만 게임머니',
    },
    {
        name: '다크에덴오리진',
        rank: 33,
        rank_before: 21,
        standard: '10억 레이',
    },
    {
        name: '블레이드앤소울2',
        rank: 27,
        rank_before: 22,
        standard: '100일 게임머니',
    },
    {
        name: '소울워커',
        rank: 34,
        rank_before: 23,
        standard: '1억 제니',
    },
    {
        name: '아스텔리아',
        rank: 35,
        rank_before: 24,
        standard: '1000만 게임머니',
    },
    {
        name: '언디셈버',
        rank: 14,
        rank_before: 25,
        standard: '100일 게임머니',
    },
    {
        name: '엘리온',
        rank: 36,
        rank_before: 26,
        standard: '100만 게임머니',
    },
    {
        name: '오딘:발할라라이징',
        rank: 2,
        rank_before: 27,
        standard: '1000일 게임머니',
    },
    {
        name: '트릭스터M',
        rank: 37,
        rank_before: 37,
        standard: '1000일 게임머니',
    },
    {
        name: '디아블로2레저렉션',
        rank: 5,
        rank_before: 29,
        standard: '1000일 게임머니',
    },
    {
        name: '메이플스토리M',
        rank: 8,
        rank_before: 30,
        standard: '1000일 게임머니',
    },
    {
        name: '서든어택',
        rank: 11,
        rank_before: 31,
        standard: '1000일 게임머니',
    },
    {
        name: '던전앤파이터모바일',
        rank: 16,
        rank_before: 32,
        standard: '1000일 게임머니',
    },
    {
        name: '피파온라인4',
        rank: 18,
        rank_before: 33,
        standard: '1000일 게임머니',
    },
    {
        name: '아스가르드',
        rank: 23,
        rank_before: 34,
        standard: '1000일 게임머니',
    },
    {
        name: '그라나도에스파다',
        rank: 24,
        rank_before: 35,
        standard: '1000일 게임머니',
    },
    {
        name: '부활얍카',
        rank: 25,
        rank_before: 36,
        standard: '1000일 게임머니',
    },
    {
        name: 'EGON',
        rank: 26,
        rank_before: 37,
        standard: '1000일 게임머니',
    },
];

export function getGameList() {
    return gamelist;
}

export function getGame(name) {
    return gamelist.find((game) => game.name === name);
}