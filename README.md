# CompanyLunch [![Code Climate](https://codeclimate.com/github/gruberb/CompanyLunch/badges/gpa.svg)](https://codeclimate.com/github/gruberb/CompanyLunch)  
A web application to help you with your restaurant decisions.

Written using React, Webpack, ES6 syntax and the Flux architecutre in mind.

## Installation

1. `git clone git@github.com:gruberb/CompanyLunch.git`
2. `cd CompanyLunch`
3. `npm install webpack -g`
4. `npm install`

## Usage

1. `npm run dev`
2. Open a browser and navigate to `localhost:8080`

## Build

To build the app and prepare it for production, navigate to the project directory and run `npm run build`.
This creates a `bin/` folder with an `index.html` and a `bundle.min.js` file. Only those two files are needed to run it on any web server.

## Left to do

### A lot....

- Finding a better and cleaner component strucutre
- Writing tests with Jest (facebooks test framework for react)
- Show load bar after clicking save
- Reload whole site after clicking the logo so the list gets emptied
- The back button at the run page is using the browser history. So maybe not the strongest choice.
