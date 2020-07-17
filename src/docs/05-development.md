---
order: 5
title: Development
status: draft
---
## Running the project

To use the project locally you will need install [Node.js](https://nodejs.org).

Dependencies are managed and installed using `npm install`.

You will need to create a `.env` file based on the `.env.example` file.

Finally to run the development build use `npm start`.

## Configuration

Assets are compiled using [Laravel Mix](https://laravel-mix.com) and the configuration file is `webpack.mix.js`.

The [Webpack](https://webpack.js.org) configuration applies plugins and can be found at `webpack.config.js`.

## Compiling

Assets can be compiled for development or production. They can be *watched* for hot reloading
while developing. Below are the commands you should use;

```
npm run dev
npm run production
npm run watch
```
