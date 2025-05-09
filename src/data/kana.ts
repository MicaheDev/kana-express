
export interface Kana {
    sound: string,
    gif: string,
    label: string
}

export type KanaGrid = Kana | string



export const hiragana: KanaGrid[][] = [
    ["", "a", "i", "u", "e", "o"],
    ["", { sound: "a.mp3", gif: "a.gif", label: "あ" }, { sound: "i.mp3", gif: "i.gif", label: "い" }, { sound: "u.mp3", gif: "u.gif", label: "う" }, { sound: "e.mp3", gif: "e.gif", label: "え" }, { sound: "o.mp3", gif: "o.gif", label: "お" }],
    ["k", { sound: "ka.mp3", gif: "ka.gif", label: "か" }, { sound: "ki.mp3", gif: "ki.gif", label: "き" }, { sound: "ku.mp3", gif: "ku.gif", label: "く" }, { sound: "ke.mp3", gif: "ke.gif", label: "け" }, { sound: "ko.mp3", gif: "ko.gif", label: "こ" }],
    ["s", { sound: "sa.mp3", gif: "sa.gif", label: "さ" }, { sound: "shi.mp3", gif: "shi.gif", label: "し" }, { sound: "su.mp3", gif: "su.gif", label: "す" }, { sound: "se.mp3", gif: "se.gif", label: "せ" }, { sound: "so.mp3", gif: "so.gif", label: "そ" }],
    ["t", { sound: "ta.mp3", gif: "ta.gif", label: "た" }, { sound: "chi.mp3", gif: "chi.gif", label: "ち" }, { sound: "tsu.mp3", gif: "tsu.gif", label: "つ" }, { sound: "te.mp3", gif: "te.gif", label: "て" }, { sound: "to.mp3", gif: "to.gif", label: "と" }],
    ["n", { sound: "na.mp3", gif: "na.gif", label: "な" }, { sound: "ni.mp3", gif: "ni.gif", label: "に" }, { sound: "nu.mp3", gif: "nu.gif", label: "ぬ" }, { sound: "ne.mp3", gif: "ne.gif", label: "ね" }, { sound: "no.mp3", gif: "no.gif", label: "の" }],
    ["h", { sound: "ha.mp3", gif: "ha.gif", label: "は" }, { sound: "hi.mp3", gif: "hi.gif", label: "ひ" }, { sound: "fu.mp3", gif: "fu.gif", label: "ふ" }, { sound: "he.mp3", gif: "he.gif", label: "へ" }, { sound: "ho.mp3", gif: "ho.gif", label: "ほ" }],
    ["m", { sound: "ma.mp3", gif: "ma.gif", label: "ま" }, { sound: "mi.mp3", gif: "mi.gif", label: "み" }, { sound: "mu.mp3", gif: "mu.gif", label: "む" }, { sound: "me.mp3", gif: "me.gif", label: "め" }, { sound: "mo.mp3", gif: "mo.gif", label: "も" }],
    ["y", { sound: "ya.mp3", gif: "ya.gif", label: "や" }, "", { sound: "yu.mp3", gif: "yu.gif", label: "ゆ" }, "", { sound: "yo.mp3", gif: "yo.gif", label: "よ" }],
    ["r", { sound: "ra.mp3", gif: "ra.gif", label: "ら" }, { sound: "ri.mp3", gif: "ri.gif", label: "り" }, { sound: "ru.mp3", gif: "ru.gif", label: "る" }, { sound: "re.mp3", gif: "re.gif", label: "れ" }, { sound: "ro.mp3", gif: "ro.gif", label: "ろ" }],
    ["w", { sound: "wa.mp3", gif: "wa.gif", label: "わ" }, "", { sound: "n.mp3", gif: "n.gif", label: "ん" }, "", { sound: "wo.mp3", gif: "wo.gif", label: "を" }],
];


export const katakana: KanaGrid[][] = [
    ["", "a", "i", "u", "e", "o"],
    ["", { sound: "a.mp3", gif: "a.gif", label: "ア" }, { sound: "i.mp3", gif: "i.gif", label: "イ" }, { sound: "u.mp3", gif: "u.gif", label: "ウ" }, { sound: "e.mp3", gif: "e.gif", label: "エ" }, { sound: "o.mp3", gif: "o.gif", label: "オ" }],
    ["k", { sound: "ka.mp3", gif: "ka.gif", label: "カ" }, { sound: "ki.mp3", gif: "ki.gif", label: "キ" }, { sound: "ku.mp3", gif: "ku.gif", label: "ク" }, { sound: "ke.mp3", gif: "ke.gif", label: "ケ" }, { sound: "ko.mp3", gif: "ko.gif", label: "コ" }],
    ["s", { sound: "sa.mp3", gif: "sa.gif", label: "サ" }, { sound: "shi.mp3", gif: "shi.gif", label: "シ" }, { sound: "su.mp3", gif: "su.gif", label: "ス" }, { sound: "se.mp3", gif: "se.gif", label: "セ" }, { sound: "so.mp3", gif: "so.gif", label: "ソ" }],
    ["t", { sound: "ta.mp3", gif: "ta.gif", label: "タ" }, { sound: "chi.mp3", gif: "chi.gif", label: "チ" }, { sound: "tsu.mp3", gif: "tsu.gif", label: "ツ" }, { sound: "te.mp3", gif: "te.gif", label: "テ" }, { sound: "to.mp3", gif: "to.gif", label: "ト" }],
    ["n", { sound: "na.mp3", gif: "na.gif", label: "ナ" }, { sound: "ni.mp3", gif: "ni.gif", label: "ニ" }, { sound: "nu.mp3", gif: "nu.gif", label: "ヌ" }, { sound: "ne.mp3", gif: "ne.gif", label: "ネ" }, { sound: "no.mp3", gif: "no.gif", label: "ノ" }],
    ["h", { sound: "ha.mp3", gif: "ha.gif", label: "ハ" }, { sound: "hi.mp3", gif: "hi.gif", label: "ヒ" }, { sound: "fu.mp3", gif: "fu.gif", label: "フ" }, { sound: "he.mp3", gif: "he.gif", label: "ヘ" }, { sound: "ho.mp3", gif: "ho.gif", label: "ホ" }],
    ["m", { sound: "ma.mp3", gif: "ma.gif", label: "マ" }, { sound: "mi.mp3", gif: "mi.gif", label: "ミ" }, { sound: "mu.mp3", gif: "mu.gif", label: "ム" }, { sound: "me.mp3", gif: "me.gif", label: "メ" }, { sound: "mo.mp3", gif: "mo.gif", label: "モ" }],
    ["y", { sound: "ya.mp3", gif: "ya.gif", label: "ヤ" }, "", { sound: "yu.mp3", gif: "yu.gif", label: "ユ" }, "", { sound: "yo.mp3", gif: "yo.gif", label: "ヨ" }],
    ["r", { sound: "ra.mp3", gif: "ra.gif", label: "ラ" }, { sound: "ri.mp3", gif: "ri.gif", label: "リ" }, { sound: "ru.mp3", gif: "ru.gif", label: "ル" }, { sound: "re.mp3", gif: "re.gif", label: "レ" }, { sound: "ro.mp3", gif: "ro.gif", label: "ロ" }],
    ["w", { sound: "wa.mp3", gif: "wa.gif", label: "ワ" }, "", { sound: "n.mp3", gif: "n.gif", label: "ン" }, "", { sound: "wo.mp3", gif: "wo.gif", label: "ヲ" }],
];