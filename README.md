### termux-api-battery-discord.js-selfbot-v13-status
# termux apiを使ったバッテリーとメモリ情報の取得

このプロジェクトは、discord.js-selfbot-v13を使用してDiscordのユーザーステータスを自動的に更新するbotです。バッテリー残量、メモリ使用量、Spotify再生情報(カスタム可能)などを表示します。
またこのコードはTermuxのみで実行可能となります

## 機能

- バッテリー残量と充電状態の表示(androidのみ)
- メモリ使用量の表示(androidのみ)
- カスタムRichPresenceの設定
- SpotifyRPCの模倣

## 必要なモジュール

- discord.js-selfbot-v13
- util
- child_process
- os

## インストール方法

1. 必要なパッケージをインストールします:

```bash
npm install discord.js-selfbot-v13 termux-api
```

## 使用方法

1. `client.login('token')`の`'token'`を自分のDiscordアカウントのトークンに置き換えます。
2. 以下のコマンドでself botを起動します:

```bash
node プロジェクト名.js
```

## カスタマイズ

- RichPresenceの`setApplicationId`、`setURL`、`setAssetsLargeImage`などを適宜変更してください。
- SpotifyRPCの各種IDやテキストを好みに合わせて変更できます。
- カスタムステータスのテキストや絵文字を変更できます。

## エラー対処法

1. `termux-battery-status`コマンドが見つからない場合:
   - Termuxを使用していない環境では、このコマンドは機能しません。代替の方法でバッテリー情報を取得するか、この機能を無効にしてください。

2. tokenが無効の場合:
   - Discordアカウントのトークンが正しいことを確認してください。

3. モジュールが見つからないエラー:
   - ```
   npm install discord.js-selfbot-v13 termux-api
   ```
   を実行してください

## termux-apiをインストールするときの注意点
1. [f-droid](https://f-droid.org/ja/)をインストールしてください
2. f-droidからtermuxとtermux-apiをインストールしてください
3. そのあとtermuxを実行し```pkg install nodejs``` でnode.jsをインストールしてください
4. ```npm install termux-api```でapiをインストールできます
## 注意事項

このボットはユーザーアカウントで動作するため、Discordの利用規約に違反する可能性があります。使用する際はリスクを理解した上で行ってください。

## ライセンス

ライセンスは知らないですなんですかそれ
