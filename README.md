# Tacklebox

### Install Node / NPM
`brew install node`

### Clone the marketplace repo
```
cd <project>
git clone https://github.com/narrative-io/tackle-box.git
```

## Library

The Tacklebox library and Vuepress docs codebase

### Before you begin

```
cd library
npm install
```

### UI Library / App

The Tacklebox library codebase and App for local development. 

#### Develop locally

```
npm run serve
```


#### Deploy


##### Build the project

```
npm run docs:build
```

##### Publish to npm

Make asure you have an NPM account and have been added to the __Narrative.io__ orgg and the __developers__ team

```
npm login
npm publish -access public
```

### Vuepress Docs Site

#### Develop locally

```
npm run docs:dev
```

#### Deploy static site

Coming soon

## Playground

Local development stratchpad to test and debug issues in external environment

```
cd playground
npm run serve
```