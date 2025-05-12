
export interface Kana {
    sound: string,
    gif: string,
    label: string,
    todo: boolean,
    strokes: number
}

export type KanaGrid = Kana | string



export const hiragana: KanaGrid[][] = [
    ["", "a", "i", "u", "e", "o"],
    ["", { sound: "a.mp3", gif: "a.gif", label: "あ", todo: false, strokes: 3 }, { sound: "i.mp3", gif: "i.gif", label: "い", todo: false, strokes: 2 }, { sound: "u.mp3", gif: "u.gif", label: "う", todo: false, strokes: 2 }, { sound: "e.mp3", gif: "e.gif", label: "え", todo: false, strokes: 2 }, { sound: "o.mp3", gif: "o.gif", label: "お", todo: false, strokes: 3 }],
    ["k", { sound: "ka.mp3", gif: "ka.gif", label: "か", todo: false, strokes: 3 }, { sound: "ki.mp3", gif: "ki.gif", label: "き", todo: false, strokes: 3 }, { sound: "ku.mp3", gif: "ku.gif", label: "く", todo: false, strokes: 1 }, { sound: "ke.mp3", gif: "ke.gif", label: "け", todo: false, strokes: 3 }, { sound: "ko.mp3", gif: "ko.gif", label: "こ", todo: false, strokes: 2 }],
    ["s", { sound: "sa.mp3", gif: "sa.gif", label: "さ", todo: false, strokes: 2 }, { sound: "shi.mp3", gif: "shi.gif", label: "し", todo: false, strokes: 1 }, { sound: "su.mp3", gif: "su.gif", label: "す", todo: false, strokes: 2 }, { sound: "se.mp3", gif: "se.gif", label: "せ", todo: false, strokes: 3 }, { sound: "so.mp3", gif: "so.gif", label: "そ", todo: false, strokes: 1 }],
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