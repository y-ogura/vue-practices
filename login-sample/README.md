# login-sample

> My superior Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Question
### ja
ログインボタンをクリックすると`http://localhost:3000/api/accounts/:email`からアカウント情報を取得
取得したデータをローカルストレージ、stateに保存後、`/articles`に画面遷移する機能を
/pages/index.vue
/store/index.js
に実装してください。

### en
You should implement the functions in `pages/index.vue` and `store/index.js`.

These functions save data on the local storage and the store after getting account data from `http://localhost:3000/api/accounts/:email` when click login button.
At last, the view transits to `/articles`.

## Answer
### ja
login-sample-answerのブランチに解答があります

### en
You can know answer looking the branch 'login-sample-answer'

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
