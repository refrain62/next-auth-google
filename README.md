# NextAuth.jsでGoogleログインを実装してみる の写経
https://zenn.dev/ohtasoji/articles/5f893b45672095

## プロジェクト作成
page routerで作成
```
$ npx create-next-app@latest --typescript
```

## NextAuth.jsをインストール
```
$ npm install next-auth
```

## Googleで認証情報の設定
https://developers.google.com/identity/protocols/oauth2
OAuth クライアントの設定を行う
（クライアントIDとクライアントシークレットを取得）
接続元：http://localhost:3000
リダイレクト先：http://localhost:3000/api/auth/callback/google


## .env.local に設定を記述
```
GOOGLE_CLIENT_ID=クライアントID
GOOGLE_CLIENT_SECRET=クライアントシークレット
```

## callbacksの処理追加
https://reffect.co.jp/react/next-auth
Google認証後の独自処理の実装が可能
sessionに追加情報を足したり、そもそもSignInのときに認可の剥奪も可能


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
