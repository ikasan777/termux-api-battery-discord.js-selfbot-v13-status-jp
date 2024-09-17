# バッテリーとメモリ情報取得ツール for Termux
このプロジェクトは、discord.js-selfbot-v13を使ってDiscordのユーザーステータスを自動的に更新するbotだにゃ。バッテリー残量、メモリ使用量、Spotify再生情報(カスタム可能)などを表示するにゃ。

このコードはTermuxでしか動かないから注意するにゃ！

## 機能

- バッテリー残量と充電状態の表示(androidのみにゃ)
- メモリ使用量の表示(androidのみにゃ)
- カスタムRichPresenceの設定にゃ
- Spotifyステータスをいじいじするにゃ

## 必要なモジュールはこれにゃ！

- discord.js-selfbot-v13
- util
- child_process
- os
- termux-api

## インストール方法にゃ

1. 必要なパッケージをインストールするにゃ:

```bash
npm install discord.js-selfbot-v13 termux-api
```

## 使い方にゃ

1. `client.login('token')`の`'token'`を自分のDiscordアカウントのトークンに置き換えるにゃ。
2. 以下のコマンドでself botを起動するにゃ:

```bash
node プロジェクト名.js
```

## カスタマイズにゃ

- RichPresenceの`setApplicationId`、`setURL`、`setAssetsLargeImage`などを好きなように変更するにゃ。
- SpotifyRPCの各種IDやテキストも好みに合わせて変更できるにゃ。
- カスタムステータスのテキストや絵文字も変更できるにゃ。

## エラー対処法にゃ

1. `termux-battery-status`コマンドが見つからない場合:
   - Termuxを使用していない環境では、このコマンドは機能しないにゃ。代わりの方法でバッテリー情報を取得するか、この機能を無効にするにゃ。

2. tokenが無効な場合:
   - Discordアカウントのトークンが正しいか確認するにゃ。

3. モジュールが見つからないエラー:
   - ```npm install discord.js-selfbot-v13 termux-api```
   を実行するにゃ。

## termux-apiをインストールするときの注意点にゃ
1. [f-droid](https://f-droid.org/ja/)をインストールするにゃ。
2. f-droidからtermuxとtermux-apiをインストールするにゃ。
3. そのあとtermuxを実行し```pkg install nodejs``` でnode.jsをインストールするにゃ。
4. ```npm install termux-api```でapiをインストールできるにゃ。

## 注意事項にゃ

このボットはユーザーアカウントで動作するから、Discordの利用規約に違反する可能性があるにゃ。使用する際はリスクを理解した上で行うにゃ。

## ライセンスにゃ

ライセンスは知らないにゃ。なんですかそれにゃ？
