# Tacklebox

### Documentation
Documentation can be found at [docs.narrative.dev](https://docs.narrative.dev/)

### Install Node / NPM
`brew install node`

### Clone the tackle-box repo
```
cd <project>
git clone https://github.com/narrative-io/tackle-box.git
```

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
npm run build
```

##### Publish to npm

Make asure you have an NPM account and have been added to the __Narrative.io__ orgg and the __developers__ team


###### Publish a -beta version (make sure the version contains xxx-beta)
```
npm login
npm run release:dev
```

###### Publish a prod version

```
npm login
npm run release:prod
```
