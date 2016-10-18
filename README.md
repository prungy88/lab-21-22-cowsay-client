![cf](https://i.imgur.com/7v5ASc8.png) lab 21-22 cowsay client
======

# To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

# Build Tool Instructions
* include an .eslintrc and .eslintignore
* include a .gitignore
 * **ignore the build directory**
* include a package.json
 * create a `watch` npm script for running `webpack-dev-server --inline --hot`
 * create a `lint` npm script to lint your javscript code using eslint
* include a webpack.config.js
 * must output budndle.js and index.html into a **build** dir
 * must have a sass loader config

# Requirements
* Create these directories to organize your code:
 * app/html
 * app/scss
* create a **app/scss/base.scss** file
 * write some styles that use the color variables
* create a**app/index.html**
  * make sure to have the `ng-app` atribute pointing to your default angular module
* create a **app/entry.js**
 * require your **app/scss/base.scss**
 * setup angular and create a controller that uses `$log` and `$scope` for adding cowsay logic

# Client Functionality
* in your index.html include an input and a pre tag
 * the pre tag should be a preview, showing the result of `cowsay.say` with two way data-binding to the input
 * feel free to add any features or styling you want

# Bonus
* **1pt** add a button that uses the ng-click directive to populate a second pretag with the current pretag state
* **1pt** add a third button that uses the `ng-click` directive
 * whenever this button is clicked it should reset the second pretag with the content it last showed
* **1pt** add a select menu that uses the `ng-repeat` directive (read the docs)
 * use the `ng-repeat` to populate the select menu with the names of all cowsay files
 * *hint:* `cowsay.list(list => {})`
 * when a cowsay filename is selected from the menu, have the first pre tag use that cowfile
