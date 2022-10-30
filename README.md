![This is header image](/src/assets/logo.png)

# ToDo app

### Table of Contents
* [Prerequisites](#Prerequisites)
* [Tech Stack](#Tech-Stack)
* [Getting Started](#Getting-Started)
* [Project Structure](#Project-Structure)
* [Testing](#Testing)
* [Deployment](#Deployment)
* [Resources](#Resources)

#
### Prerequisites

* <img src="readme/nodejs.png" width="25" style="top: 8px" /> *Node JS @16.X and up*
* <img src="readme/npm.png" width="25" style="top: 8px" /> *npm @8 and up*

#
### Tech Stack

* <img src="readme/vue.png" width="25" style="top: 8px" /> *Vue @3.2.13 - front-end framework*
* <img src="readme/cypress.png" width="25" style="top: 8px" /> *Cypress @10.11.0 - end to end testing Framework*
* <img src="readme/vuex.png" width="25" style="top: 8px" /> *Vuex @10.11.0 - state management library for Vue*

#
### Getting Started
1. First of all you need to clone app repository from github:
```
git clone https://github.com/nikanoza/todo-app-vue.git
```
2. Next step requires install all the dependencies.

```
npm install
```
#
### Project Structure

```
|--- src
|   |--- assets # project images
|   |--- components # reusable components
|   |--- pages # all page components
|   |--- store # vuex store folder
|   |---|--- index.js # exports from store
- .eslintrc.json  # eslint config file
- .prettierrc.json  # prettier config file
- package.json     # dependency manager configurations
```
#
### Testing

For testing we are using Cypress. You can see all testing files on Cypres e2e subfolder.
```
cypress/e2e
```
If you want to see test in action, you need install cypress first

```
npm install cypress --save-dev
```
after open Cypress
```
npx cypress open
``` 
[More information about Cypress](https://www.cypress.io)

#
### Deployment
Before every deployment you need to create build file.
```
npm run build
```
after this you can use this file to deploy project on server.

#
### Resources
* [figma](https://www.figma.com/file/4oLHA5cl4VWGxgg4Ev0aP1/todo-app?node-id=0%3A1).
* [challenge](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW)
