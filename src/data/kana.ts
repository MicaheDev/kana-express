
export interface Kana {
    sound: string,
    gif: string,
    label: string,
    todo: boolean,
    strokes: number
}

export type KanaGrid = Kana | string


type KanaPractice = {
    [key: string]: string
}

export enum Modes {
    hiragana = 'hiragana',
    katakana = 'katakana'
}

export enum Variations {
    mainKana = 'mainKana',
    dakutenKana = 'dakutenKana',
    combinationKana = 'combinationKana'
}


export const HiraganaList: KanaPractice = {
    "あ": "a", "い": "i", "う": "u", "え": "e", "お": "o",
    "か": "ka", "き": "ki", "く": "ku", "け": "ke", "こ": "ko",
    "さ": "sa", "し": "shi", "す": "su", "せ": "se", "そ": "so",
    "た": "ta", "ち": "chi", "つ": "tsu", "て": "te", "と": "to",
    "な": "na", "に": "ni", "ぬ": "nu", "ね": "ne", "の": "no",
    "は": "ha", "ひ": "hi", "ふ": "fu", "へ": "he", "ほ": "ho",
    "ま": "ma", "み": "mi", "む": "mu", "め": "me", "も": "mo",
    "や": "ya", "ゆ": "yu", "よ": "yo",
    "ら": "ra", "り": "ri", "る": "ru", "れ": "re", "ろ": "ro",
    "わ": "wa", "を": "wo",
    "ん": "n",
};

export const HiraganaDakutenList: KanaPractice = {
    "が": "ga", "ぎ": "gi", "ぐ": "gu", "げ": "ge", "ご": "go",
    "ざ": "za", "じ": "ji", "ず": "zu", "ぜ": "ze", "ぞ": "zo",
    "だ": "da", "ぢ": "ji", "づ": "zu", "で": "de", "ど": "do",
    "ば": "ba", "び": "bi", "ぶ": "bu", "べ": "be", "ぼ": "bo",
    "ぱ": "pa", "ぴ": "pi", "ぷ": "pu", "ぺ": "pe", "ぽ": "po",
}

export const HiraganaCombinationList: KanaPractice = {
    "きゃ": "kya", "きゅ": "kyu", "きょ": "kyo",
    "しゃ": "sha", "しゅ": "shu", "しょ": "sho",
    "ちゃ": "cha", "ちゅ": "chu", "ちょ": "cho",
    "にゃ": "nya", "にゅ": "nyu", "にょ": "nyo",
    "ひゃ": "hya", "ひゅ": "hyu", "ひょ": "hyo",
    "みゃ": "mya", "みゅ": "myu", "みょ": "myo",
    "りゃ": "rya", "りゅ": "ryu", "りょ": "ryo"
}

export const KatakanaList = {
    "ア": "a", "イ": "i", "ウ": "u", "エ": "e", "オ": "o",
    "カ": "ka", "キ": "ki", "ク": "ku", "ケ": "ke", "コ": "ko",
    "サ": "sa", "シ": "shi", "ス": "su", "セ": "se", "ソ": "so",
    "タ": "ta", "チ": "chi", "ツ": "tsu", "テ": "te", "ト": "to",
    "ナ": "na", "ニ": "ni", "ヌ": "nu", "ネ": "ne", "ノ": "no",
    "ハ": "ha", "ヒ": "hi", "フ": "fu", "ヘ": "he", "ホ": "ho",
    "マ": "ma", "ミ": "mi", "ム": "mu", "メ": "me", "モ": "mo",
    "ヤ": "ya", "ユ": "yu", "ヨ": "yo",
    "ラ": "ra", "リ": "ri", "ル": "ru", "レ": "re", "ロ": "ro",
    "ワ": "wa", "ヲ": "wo",
    "ン": "n",
};

export const KatakanaDakutenList: KanaPractice = {
    "ガ": "ga", "ギ": "gi", "グ": "gu", "ゲ": "ge", "ゴ": "go",
    "ザ": "za", "ジ": "ji", "ズ": "zu", "ゼ": "ze", "ゾ": "zo",
    "ダ": "da", "ヂ": "ji", "ヅ": "zu", "デ": "de", "ド": "do",
    "バ": "ba", "ビ": "bi", "ブ": "bu", "ベ": "be", "ボ": "bo",
    "パ": "pa", "ピ": "pi", "プ": "pu", "ペ": "pe", "ポ": "po",
}

export const KatakanaCombinationList: KanaPractice = {
    "キャ": "kya", "キュ": "kyu", "キョ": "kyo",
    "シャ": "sha", "シュ": "shu", "ショ": "sho",
    "チャ": "cha", "チュ": "chu", "チョ": "cho",
    "ニャ": "nya", "ニュ": "nyu", "ニョ": "nyo",
    "ヒャ": "hya", "ヒュ": "hyu", "ヒョ": "hyo",
    "ミャ": "mya", "ミュ": "myu", "ミョ": "myo",
    "リャ": "rya", "リュ": "ryu", "リョ": "ryo"
}




export const hiragana: KanaGrid[][] = [
    ["", "a", "i", "u", "e", "o"],
    ["", { sound: "a.mp3", gif: "a.gif", label: "あ", todo: false, strokes: 3 }, { sound: "i.mp3", gif: "i.gif", label: "い", todo: false, strokes: 2 }, { sound: "u.mp3", gif: "u.gif", label: "う", todo: false, strokes: 2 }, { sound: "e.mp3", gif: "e.gif", label: "え", todo: false, strokes: 2 }, { sound: "o.mp3", gif: "o.gif", label: "お", todo: false, strokes: 3 }],
    ["k", { sound: "ka.mp3", gif: "ka.gif", label: "か", todo: false, strokes: 3 }, { sound: "ki.mp3", gif: "ki.gif", label: "き", todo: false, strokes: 4 }, { sound: "ku.mp3", gif: "ku.gif", label: "く", todo: false, strokes: 1 }, { sound: "ke.mp3", gif: "ke.gif", label: "け", todo: false, strokes: 3 }, { sound: "ko.mp3", gif: "ko.gif", label: "こ", todo: false, strokes: 2 }],
    ["s", { sound: "sa.mp3", gif: "sa.gif", label: "さ", todo: false, strokes: 3 }, { sound: "shi.mp3", gif: "shi.gif", label: "し", todo: false, strokes: 1 }, { sound: "su.mp3", gif: "su.gif", label: "す", todo: false, strokes: 2 }, { sound: "se.mp3", gif: "se.gif", label: "せ", todo: false, strokes: 3 }, { sound: "so.mp3", gif: "so.gif", label: "そ", todo: false, strokes: 1 }],
    ["t", { sound: "ta.mp3", gif: "ta.gif", label: "た", todo: false, strokes: 4 }, { sound: "chi.mp3", gif: "chi.gif", label: "ち", todo: false, strokes: 2 }, { sound: "tsu.mp3", gif: "tsu.gif", label: "つ", todo: false, strokes: 1 }, { sound: "te.mp3", gif: "te.gif", label: "て", todo: false, strokes: 1 }, { sound: "to.mp3", gif: "to.gif", label: "と", todo: false, strokes: 2 }],
    ["n", { sound: "na.mp3", gif: "na.gif", label: "な", todo: false, strokes: 4 }, { sound: "ni.mp3", gif: "ni.gif", label: "に", todo: false, strokes: 3 }, { sound: "nu.mp3", gif: "nu.gif", label: "ぬ", todo: false, strokes: 2 }, { sound: "ne.mp3", gif: "ne.gif", label: "ね", todo: false, strokes: 2 }, { sound: "no.mp3", gif: "no.gif", label: "の", todo: false, strokes: 1 }],
    ["h", { sound: "ha.mp3", gif: "ha.gif", label: "は", todo: false, strokes: 3 }, { sound: "hi.mp3", gif: "hi.gif", label: "ひ", todo: false, strokes: 1 }, { sound: "fu.mp3", gif: "fu.gif", label: "ふ", todo: false, strokes: 4 }, { sound: "he.mp3", gif: "he.gif", label: "へ", todo: false, strokes: 1 }, { sound: "ho.mp3", gif: "ho.gif", label: "ほ", todo: false, strokes: 4 }],
    ["m", { sound: "ma.mp3", gif: "ma.gif", label: "ま", todo: false, strokes: 3 }, { sound: "mi.mp3", gif: "mi.gif", label: "み", todo: false, strokes: 2 }, { sound: "mu.mp3", gif: "mu.gif", label: "む", todo: false, strokes: 3 }, { sound: "me.mp3", gif: "me.gif", label: "め", todo: false, strokes: 2 }, { sound: "mo.mp3", gif: "mo.gif", label: "も", todo: false, strokes: 3 }],
    ["y", { sound: "ya.mp3", gif: "ya.gif", label: "や", todo: false, strokes: 3 }, "", { sound: "yu.mp3", gif: "yu.gif", label: "ゆ", todo: false, strokes: 2 }, "", { sound: "yo.mp3", gif: "yo.gif", label: "よ", todo: false, strokes: 2 }],
    ["r", { sound: "ra.mp3", gif: "ra.gif", label: "ら", todo: false, strokes: 2 }, { sound: "ri.mp3", gif: "ri.gif", label: "り", todo: false, strokes: 2 }, { sound: "ru.mp3", gif: "ru.gif", label: "る", todo: false, strokes: 1 }, { sound: "re.mp3", gif: "re.gif", label: "れ", todo: false, strokes: 2 }, { sound: "ro.mp3", gif: "ro.gif", label: "ろ", todo: false, strokes: 1 }],
    ["w", { sound: "wa.mp3", gif: "wa.gif", label: "わ", todo: false, strokes: 2 }, "", { sound: "n.mp3", gif: "n.gif", label: "ん", todo: false, strokes: 1 }, "", { sound: "wo.mp3", gif: "wo.gif", label: "を", todo: false, strokes: 3 }],
];

export const katakana: KanaGrid[][] = [
    ["", "a", "i", "u", "e", "o"],
    ["", { sound: "a.mp3", gif: "a.gif", label: "ア", todo: false, strokes: 2 }, { sound: "i.mp3", gif: "i.gif", label: "イ", todo: false, strokes: 2 }, { sound: "u.mp3", gif: "u.gif", label: "ウ", todo: false, strokes: 3 }, { sound: "e.mp3", gif: "e.gif", label: "エ", todo: false, strokes: 3 }, { sound: "o.mp3", gif: "o.gif", label: "オ", todo: false, strokes: 3 }],
    ["k", { sound: "ka.mp3", gif: "ka.gif", label: "カ", todo: false, strokes: 2 }, { sound: "ki.mp3", gif: "ki.gif", label: "キ", todo: false, strokes: 3 }, { sound: "ku.mp3", gif: "ku.gif", label: "ク", todo: false, strokes: 2 }, { sound: "ke.mp3", gif: "ke.gif", label: "ケ", todo: false, strokes: 3 }, { sound: "ko.mp3", gif: "ko.gif", label: "コ", todo: false, strokes: 2 }],
    ["s", { sound: "sa.mp3", gif: "sa.gif", label: "サ", todo: false, strokes: 3 }, { sound: "shi.mp3", gif: "shi.gif", label: "シ", todo: false, strokes: 3 }, { sound: "su.mp3", gif: "su.gif", label: "ス", todo: false, strokes: 2 }, { sound: "se.mp3", gif: "se.gif", label: "セ", todo: false, strokes: 2 }, { sound: "so.mp3", gif: "so.gif", label: "ソ", todo: false, strokes: 2 }],
    ["t", { sound: "ta.mp3", gif: "ta.gif", label: "タ", todo: false, strokes: 3 }, { sound: "chi.mp3", gif: "chi.gif", label: "チ", todo: false, strokes: 3 }, { sound: "tsu.mp3", gif: "tsu.gif", label: "ツ", todo: false, strokes: 3 }, { sound: "te.mp3", gif: "te.gif", label: "テ", todo: false, strokes: 3 }, { sound: "to.mp3", gif: "to.gif", label: "ト", todo: false, strokes: 2 }],
    ["n", { sound: "na.mp3", gif: "na.gif", label: "ナ", todo: false, strokes: 2 }, { sound: "ni.mp3", gif: "ni.gif", label: "ニ", todo: false, strokes: 2 }, { sound: "nu.mp3", gif: "nu.gif", label: "ヌ", todo: false, strokes: 2 }, { sound: "ne.mp3", gif: "ne.gif", label: "ネ", todo: false, strokes: 4 }, { sound: "no.mp3", gif: "no.gif", label: "ノ", todo: false, strokes: 1 }],
    ["h", { sound: "ha.mp3", gif: "ha.gif", label: "ハ", todo: false, strokes: 2 }, { sound: "hi.mp3", gif: "hi.gif", label: "ヒ", todo: false, strokes: 2 }, { sound: "fu.mp3", gif: "fu.gif", label: "フ", todo: false, strokes: 1 }, { sound: "he.mp3", gif: "he.gif", label: "ヘ", todo: false, strokes: 1 }, { sound: "ho.mp3", gif: "ho.gif", label: "ホ", todo: false, strokes: 4 }],
    ["m", { sound: "ma.mp3", gif: "ma.gif", label: "マ", todo: false, strokes: 2 }, { sound: "mi.mp3", gif: "mi.gif", label: "ミ", todo: false, strokes: 3 }, { sound: "mu.mp3", gif: "mu.gif", label: "ム", todo: false, strokes: 2 }, { sound: "me.mp3", gif: "me.gif", label: "メ", todo: false, strokes: 2 }, { sound: "mo.mp3", gif: "mo.gif", label: "モ", todo: false, strokes: 3 }],
    ["y", { sound: "ya.mp3", gif: "ya.gif", label: "ヤ", todo: false, strokes: 2 }, "", { sound: "yu.mp3", gif: "yu.gif", label: "ユ", todo: false, strokes: 2 }, "", { sound: "yo.mp3", gif: "yo.gif", label: "ヨ", todo: false, strokes: 3 }],
    ["r", { sound: "ra.mp3", gif: "ra.gif", label: "ラ", todo: false, strokes: 2 }, { sound: "ri.mp3", gif: "ri.gif", label: "リ", todo: false, strokes: 2 }, { sound: "ru.mp3", gif: "ru.gif", label: "ル", todo: false, strokes: 2 }, { sound: "re.mp3", gif: "re.gif", label: "レ", todo: false, strokes: 1 }, { sound: "ro.mp3", gif: "ro.gif", label: "ロ", todo: false, strokes: 3 }],
    ["w", { sound: "wa.mp3", gif: "wa.gif", label: "ワ", todo: false, strokes: 2 }, "", { sound: "n.mp3", gif: "n.gif", label: "ン", todo: false, strokes: 2 }, "", { sound: "wo.mp3", gif: "wo.gif", label: "ヲ", todo: false, strokes: 3 }],
];