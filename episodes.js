/* =============================================================================
 * 俗物ラジオ2nd 公式サイト  —  データファイル
 * =============================================================================
 * このファイルだけを編集すればページが更新されます。HTML/CSS は触りません。
 *
 * ■ 新しい回を追加するとき
 *   EPISODES 配列の先頭に、下のテンプレを 1 ブロック足すだけです（順番は自由。
 *   並び替えはページ側でやります）。
 *
 *     {
 *       number: 5,                     // 回数（No.）。数字だけ
 *       title:  "俗物ラジオ2nd ○○ No.5",// 動画タイトル
 *       date:   "2026-09-14",          // 配信日  YYYY-MM-DD
 *       youtubeId: "xxxxxxxxxxx",      // YouTube の watch?v= の後ろ 11 文字
 *       people: ["押尾", "トロオドン"],  // 出演者（絞り込みチップになる）
 *       tags:   ["ゲスト回"],           // 自由タグ（絞り込みチップになる）
 *       description: "この回の内容メモ。", // 概要。未定なら "" でOK
 *     },
 *
 *   ・youtubeId は https://youtu.be/XXXXXXXXXXX の XXXXXXXXXXX 部分。
 *   ・people / tags は空配列 [] でも可。表記を揃えると絞り込みがまとまります。
 *   ・description は日本語の普通の文章でOK（改行はそのまま表示されます）。
 *
 * ■ 下の初期データについて
 *   YouTube の再生リスト（PLAyRqtGIJQes）の公開フィードから自動取得しました。
 *   date は「YouTube への公開日時」です。Twitch の配信日と違う場合は直してください。
 *   people / description は仮です。正しい内容に差し替えてください。
 * ========================================================================== */

const SHOW = {
  title: "俗物ラジオ2nd",
  tagline: "powered by 北和総合技研",
  poweredBy: "北和総合技研", // フッターの帰属・著作権表記に使用

  // 運営元の紹介（トップの「運営」セクションに表示）。name を空にすると非表示
  publisher: {
    name: "北和総合技研",
    logo: "assets/hge-logo.png",
    desc: "北和総合技研は、ロジカルな安寧とテクニカルな穏やかさに基づく暮らしを目標としています。",
  },
  description:
    "47歳と31歳がなんとなくラジオを始めてしまいました。清く正しく俗物らしく語ります。毎週日曜21:00更新予定です。",

  // YouTube 再生リスト
  youtubePlaylistId: "PLAyRqtGIJQes",
  youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLAyRqtGIJQes",

  // Twitch チャンネル
  twitchChannel: "oshio_games",
  twitchDisplayName: "マダム押尾",
  twitchUrl: "https://www.twitch.tv/oshio_games",

  // 配信予定（ヘッダーに表示。自由に書き換え可）
  scheduleNote:
    "だいたい週 1 本ペースで配信中。次回の予定は Twitch チャンネルの告知をご確認ください。",

  // 公式アカウント（ページ下部に表示）。増減は自由
  officialLinks: [
    { label: "X（@zkbt_radio_2nd）", url: "https://x.com/zkbt_radio_2nd" },
    { label: "gorone.xyz（@zkbt_radio_2nd）", url: "https://gorone.xyz/@zkbt_radio_2nd" },
  ],

  // Twitch 埋め込みプレイヤーに必要な「親ドメイン」。
  // 公開中のドメインは自動で追加されるので、通常はこのままでOK。
  // 別ドメインからも読み込むならここに足す（例: "example.com"）。
  embedParents: ["localhost", "127.0.0.1"],

  // パーソナリティ（プロフィールページ index.html に表示）
  //   name / image(assets 内) / role(肩書き) / age / bio(紹介文・改行反映) / links[{label,url}]
  hosts: [
    {
      name: "押尾",
      image: "assets/host-oshio.png",
      role: "パーソナリティ",
      age: "47歳",
      bio: "ぼーっと生きる主婦。だいたい何も考えずに暮らしている。特技は「なぐって解決」。あなたのハートにぐさりと刺さります。",
      links: [{ label: "Twitch", url: "https://www.twitch.tv/oshio_games" }],
    },
    {
      name: "トロオドン",
      image: "assets/host-toroodon.png",
      role: "パーソナリティ",
      age: "31歳",
      bio: "北和総合技研代表者。鉄道・戦争・歴史・人の業。それこそが人の生きる道だと信じている32歳成人男性。",
      links: [{ label: "Twitch", url: "https://www.twitch.tv/yamashiro1944" }],
    },
  ],

  // コーナー紹介（プロフィールページ index.html に表示）
  //   title / image(assets 内) / desc(説明) / url(任意・画像クリックで遷移)
  corners: [
    {
      title: "珍コーナー ポロっとしてよトロオドン",
      image: "assets/corner-poro.png",
      desc: "昨今、社会にもまれ疲れ果ててるリスナーの皆を、トロオドンの何気ないポロっとしたトークでリラックスさせるコーナー。",
    },
    {
      title: "押尾の怪傑相談",
      image: "assets/corner-kaiketsu.png",
      desc: "歴戦の猛者こと押尾のお姉さんが、リスナーの悩みや相談を真摯に聞き、ズバッと怪傑（解決）してくれるコーナー。",
    },
    {
      title: "ラジオレター大募集",
      image: "assets/corner-letter.png",
      desc: "ラジオレターを随時募集しています。画像をクリックすると投稿フォームへ。",
      url: "https://note.com/qa/1944yamashiro",
    },
  ],
};

const EPISODES = [
  {
    number: 4,
    title: "俗物ラジオ2nd【カフェキチ＆トロオドン】No 4",
    date: "2026-09-07",
    youtubeId: "CdRUXclZNvA",
    people: ["カフェキチ", "トロオドン"],
    tags: ["ゲスト回"],
    description: "",
  },
  {
    number: 3,
    title: "俗物ラジオ2nd【押尾＆トロオドン】No 3",
    date: "2026-08-30",
    youtubeId: "rW1sexhgmpA",
    people: ["押尾", "トロオドン"],
    tags: [],
    description: "",
  },
  {
    number: 2,
    title: "俗物ラジオ2nd【押尾＆トロオドン】No.2",
    date: "2026-08-23",
    youtubeId: "ZPqVDg4gclI",
    people: ["押尾", "トロオドン"],
    tags: [],
    description: "",
  },
  {
    number: 1,
    title: "俗物ラジオ2nd_01",
    date: "2026-08-16",
    youtubeId: "N6pZLJiK-Yc",
    people: [],
    tags: [],
    description: "",
  },
  {
    number: 0,
    title: "【俗物ラジオ】2nd NO.0",
    date: "2026-08-04",
    youtubeId: "zmicGnNklKc",
    people: [],
    tags: ["初回"],
    description: "",
  },
];
