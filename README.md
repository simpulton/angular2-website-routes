# Building an Angular 2 Website Using Routes
This is a simple Angular 2 website using the brand new router. It demonstrates how to build components, configure routes, inject services, and use the `@Input` decorator to bind properties to components.

## Dependencies
- You must have `node` and `npm` installed (via `brew install node` or [NodeJS.org](https://nodejs.org/en/));
- You must also have `typings` installed globally via `npm i -g typings`
- Be sure that you have `typings` version `1.x`

## Getting Started


```bash
git clone https://github.com/simpulton/angular2-website-routes.git
cd angular2-website-routes
npm i
typings install
npm start
```

Then navigate your browser to [http://localhost:3001](http://localhost:3001) and use the app.

## Testing
The test setup includes `webpack.test.config.js`, `spec-bundle.js`, and `karma.conf.js`. To run unit tests, execute `npm test` in your terminal.
