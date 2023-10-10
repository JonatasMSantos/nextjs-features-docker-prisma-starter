
## Start Kit to test new Next.js featues

This is a [Next.js](https://nextjs.org/) project with Prisma (sqlite) and Docker.

## Getting Started

First, run the development server:

```bash
docker compose up
```

```bash
docker compose exec app bash
```

```bash
npm install
```


```bash
npm run json-server
```

```bash
npm run dev
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

  > src/app folder  

    ## Subscribe Page

      > Experimental serverActions 

    ## Stocks Page

      > Comunication with API folder 
      > SSR
      > Stale while revalidate  
      > next: { revalidade: XX } (cache)
