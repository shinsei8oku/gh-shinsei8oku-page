sudo apt-get update              # 必要に応じてパッケージをアップデートする
sudo apt-get install nodejs      # Node.js をインストールする
sudo apt-get install npm         # npm をインストールする
sudo update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10  # update-alternatives を用いて nodejs を node に変更します
npm install -g vue-cli