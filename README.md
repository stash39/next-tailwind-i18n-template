This is a typesafe [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and configured to serve a mulit-language website.

It consists of:

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Next SEO](https://github.com/garmeeh/next-seo#readme)
- [Next Sitemap](https://github.com/iamvishnusankar/next-sitemap#readme)
- [Next i18next](https://github.com/i18next/next-i18next)

On the dev’s side of things it also benefits from:

- [Airbnb eslint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [Husky](https://github.com/typicode/husky)
- [Lint Staged](https://github.com/okonet/lint-staged)

NextJS are rolling out new Router and Layout update so you may want to read their RFC (link in the description) for the alternative ways for doing things. This setup is based on the current documentation and is not using new or experimental features.

[Layout RFC](https://nextjs.org/blog/layouts-rfc)

## Getting Started

Clone the project and install node modules:
```bash
npm install
```

Copy .env.sample file
```bash
cp .env.sample .env

```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
