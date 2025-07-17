# ベースイメージとしてnginxを使用
FROM nginx:alpine

# アプリケーションのファイルをコピー
COPY public /usr/share/nginx/html

# コンテナが起動する際にnginxがデフォルトで起動

