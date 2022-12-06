# Memory Leak reporter

This project based on [Memlab package](https://facebook.github.io/memlab/docs/intro) developed by Facebook. It's a refactored project to make memory leak reporting through a defined entry-point and seperated modules for action/back phases. 

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) (**recommended** version 18.10.0 )
- npm (**recommended** version 8.19.2)
- Typescript (**recommended** version 4.9.3)


# Getting started
- Clone the repository:
```
git clone  https://github.com/sohaieb/memory-leak-reporter.git memory-leak-reporter
```
- Install dependencies:
```
cd memory-leak-reporter
npm install
```
- Change these files extentions `.ts.exemple` to (`.tss`), and put your codes/configurations according to your needs using [Puppeteer](https://pptr.dev/) contracts:

| Unmodified files           | Converted files    |
|----------------------------|--------------------|
| src/config.ts.exemple      | **config.ts**      |
| src/app/actions.ts.exemple | **src/app/actions.ts** |
| src/app/back.ts.exemple    | **src/app/back.ts**    |
| src/app/pre.ts.exemple         | **src/app/pre.ts**     |

- Run by npm or by Memlab ([see Memlab doc](https://facebook.github.io/memlab/docs/intro)):
```
// with npm
npm start                   (to run simple Memlab test)
npm run start:browser       (to run on-browser simulated Memlab test)

// manually with Memlab
npm i -g memlab
memlab run --scenario app_leaks_reporter.js
```

# Important for Developers!
- To be able to perform advanced analysis or reporting, do never hesitate to check the [Memlab Docs](https://facebook.github.io/memlab/docs)
- To develop: `Actions.js`, `Back.js` and `Pre.js` needs sometimes to have a pre-required **Puppeteer Testing Library** knowledge (see [Puppeteer](https://pptr.dev/))


## Enjoy your test!