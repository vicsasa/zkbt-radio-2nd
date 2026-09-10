# 俗物ラジオ2nd powered by 北和総合技研

Web ラジオ「俗物ラジオ2nd」（配信: Twitch [マダム押尾](https://www.twitch.tv/oshio_games) /
アーカイブ: [YouTube 再生リスト](https://www.youtube.com/playlist?list=PLAyRqtGIJQes)）の
公式サイト。ビルド不要の静的サイトです。

- **2 ページ構成**:
  - `index.html` … プロフィール（トップ）。番組紹介・パーソナリティ・各リンク・「アーカイブ一覧を見る →」
  - `archive.html` … アーカイブ一覧。YouTube 埋め込み／出演者・タグ絞り込み／並び替え／配信プレイヤー／各回の共有リンク
- **データは `episodes.js` だけ**を編集（両ページが読み込みます）
- CSS/JS は各 HTML に内蔵。共通スタイルは 2 ファイルに複製しているので、色やフォントを変えるときは両方直してください

---

## 回を追加・修正する

`episodes.js` の `EPISODES` 配列にブロックを足すだけです。並び順は気にしなくて OK
（ページ側で日付・回数順に並べます）。

```js
{
  number: 5,                        // 回数（No.）。数字だけ
  title:  "俗物ラジオ2nd ○○ No.5",  // 動画タイトル
  date:   "2026-09-14",             // 配信日  YYYY-MM-DD
  youtubeId: "xxxxxxxxxxx",         // https://youtu.be/xxxxxxxxxxx の後半 11 文字
  people: ["押尾", "トロオドン"],     // 出演者（絞り込みチップ・検索対象）
  tags:   ["ゲスト回"],              // 自由タグ（絞り込みチップ・検索対象）
  description: "この回のメモ。",       // 概要。未定なら "" 。改行はそのまま出ます
},
```

- `youtubeId` … YouTube の視聴 URL `https://www.youtube.com/watch?v=**ここ**` または
  `https://youtu.be/**ここ**` の 11 文字。
- `people` / `tags` … 表記を統一すると絞り込みがきれいにまとまります。空 `[]` でも可。
- サムネイル・動画本編は YouTube から自動取得するので、画像を用意する必要はありません。

### 番組情報・配信予定の文言を変える

同じ `episodes.js` の上部 `SHOW` を編集します（タイトル、説明文、
`scheduleNote`（配信予定の一文）、各 URL など）。

**公式アカウントのリンク**（ページ下部に表示）は `SHOW.officialLinks` の配列で管理します。
`{ label: "表示名", url: "https://…" }` を足し引きするだけ。空配列にすると非表示になります。

**パーソナリティ**（`index.html` に表示）は `SHOW.hosts` の配列で管理します。
`{ name, image, role, age, bio, links: [{label,url}] }` の形。`image` は `assets/` 内の画像パス。

**コーナー紹介**（`index.html` に表示）は `SHOW.corners` の配列で管理します。
`{ title, image, desc, url }` の形。`url` を付けると画像クリックでそのページへ飛びます（無ければ画像は
リンクになりません）。

---

## ローカルで確認する

`index.html` をダブルクリックでも一覧は表示されますが、**Twitch の埋め込みプレイヤーだけは
簡易サーバー経由でないと表示されません**（YouTube は `file://` でも表示されます）。

```powershell
# このフォルダで（どちらか一方）
py -m http.server 8000
npx serve
```

→ ブラウザで `http://localhost:8000` を開く。

---

## GitHub Pages で公開する

1. このフォルダを GitHub リポジトリにして push
   ```powershell
   git init
   git add .
   git commit -m "俗物ラジオ2nd 公式サイト 初版"
   git branch -M main
   git remote add origin https://github.com/<ユーザー名>/<リポジトリ名>.git
   git push -u origin main
   ```
2. GitHub のリポジトリ → **Settings → Pages** →
   *Build and deployment* の *Source* を **Deploy from a branch**、
   Branch を **main / (root)** にして保存。
3. 数十秒後 `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開されます。

### Twitch 埋め込みについて（重要）

Twitch の埋め込みは「読み込み元ドメイン」の指定が必須です。公開中のドメインは
**自動で指定される**ので、`<ユーザー名>.github.io` で配信する場合は追加設定は不要です。
独自ドメインや別サイトからも読み込むときだけ、`episodes.js` の
`SHOW.embedParents` にそのドメインを足してください。

---

## ファイル構成

| ファイル        | 役割                                              |
| --------------- | ------------------------------------------------- |
| `index.html`    | プロフィール（トップ）ページ。基本触らない          |
| `archive.html`  | アーカイブ一覧ページ。基本触らない                 |
| `episodes.js`   | 番組情報（`SHOW`）と各回データ（`EPISODES`）。両ページ共通 |
| `assets/`       | 画像（下記）                                       |
| `README.md`     | この説明                                          |

### `assets/` の画像

差し替えるときは同じファイル名で置き換えれば OK（HTML の編集は不要）。

| ファイル            | 使いどころ                                  |
| ------------------- | ------------------------------------------- |
| `keyvisual.png`     | ヘッダーの背景（上に暗いグラデーションを重ねています）／ OGP 画像 |
| `taxi.png`          | 画面右下に薄く固定表示するウォーターマーク     |
| `logo-white.png`    | フッターのロゴ                               |
| `intro-logo.png`    | トップの「番組紹介」カードの見出しロゴ         |
| `characters.png`    | フッターのキャラクター画像                    |
| `logo-blue.png`     | ファビコン（ブラウザのタブアイコン）          |
| `host-oshio.png`    | プロフィールの押尾（`SHOW.hosts` から参照）    |
| `host-toroodon.png` | プロフィールのトロオドン（同上）              |
| `corner-poro.png` / `corner-kaiketsu.png` / `corner-letter.png` | コーナー紹介の画像（`SHOW.corners` から参照） |

## 補足

- 各回カードの「リンクをコピー」は `...#ep-3` のような URL を作ります。開くとその回が
  ハイライト表示されます。
- 絞り込み・並び替えの状態は URL に反映されるので、その URL を共有すると
  同じ絞り込み結果を見せられます。
- 初期データの `date` は「YouTube 公開日時」から入れています。Twitch の配信日と
  ずれている場合は修正してください。`people` と `description` は仮です。
