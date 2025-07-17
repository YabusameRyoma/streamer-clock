# 時計アプリ

シンプルなデジタル時計アプリです。

## 特徴

- フルスクリーン表示対応
- レスポンシブデザイン
- リアルタイム更新（1秒間隔）
- 時と分を大きく表示

## 技術スタック

- HTML5 Canvas
- CSS3
- Vanilla JavaScript
- lite-server（開発用）
- Docker & Docker Compose（本番環境）

## 開発環境での実行

### 必要な環境
- Node.js
- npm

### セットアップ

1. 依存関係をインストール
```bash
npm install
```

2. 開発サーバーを起動
```bash
npm start
```

3. ブラウザで `http://localhost:3000` にアクセス

## 本番環境でのデプロイ

### Docker を使用

```bash
# イメージをビルド
docker build -t clock-app .

# コンテナを実行
docker run -p 80:80 clock-app
```

### Docker Compose を使用

```bash
docker-compose up -d
```

## ファイル構成

```
.
├── public/
│   ├── index.html          # メインHTMLファイル
│   ├── clock.css          # スタイルシート
│   └── clock.js           # 時計のロジック
├── Dockerfile             # Docker設定
├── docker-compose.yml     # Docker Compose設定
├── package.json           # Node.js設定
└── README.md             # このファイル
```

## 機能詳細

- **フルスクリーン表示**: ブラウザの全画面に時計を表示
- **レスポンシブ**: 画面サイズに応じてフォントサイズが自動調整
- **リアルタイム更新**: 毎秒時刻を更新

## ライセンス

ISC