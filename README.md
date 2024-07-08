# basic-webdev-template

Basic template for Javascript/HTML/CSS-bassed web design pre-loaded with Webpack, HTML-Webpack Plugin, ESLint, and a variety of Webpack modules.


### Introduction:

The following template for Javascript/HTML/CSS-based web design is pre-loaded with Webpack and configured with HTML-Webpack Plugin and a variety of loaders(style loader, css loader, CSV loader, TSV loader, XML loader). Additionally, the template is configured to incorporate images and fonts using built-in asset modules and to parse toml, yaml, and json5 files through a custom parser. Other features include eslint (configured for prettier) and babel transpiler.


### Getting Started

After creating a new repository with this template and cloning it to your local machine, navigate to your project's folder and use `npm install` to download all required dependencies. After this, you can use `npm run build` to compile a new bundle or use `npm run watch` to compile a new bundle when files change.

### Version Info

- Version 1.1.0 adds Babel transpiler.

### Included Dependencies:

- @eslint/js
- css-loader
- csv-loader
- eslint
- eslint-config-prettier
- html-webpack-plugin
- babel-loader w/ preset-env
- json5
- style-loader
- toml
- webpack
- webpack-cli
- xml-loader
- yamljs


### Resources:

This template was created using resources found on Webpack.js.org. See the links below for more information on Webpack and how this template was developed.
- [Webpack](https://webpack.js.org)
- [Webpack - Getting Started](https://webpack.js.org/guides/getting-started/)
- [Webpack - Asset Managment](https://webpack.js.org/guides/asset-management/)
- [Webpack - Output Managment](https://webpack.js.org/guides/output-management/)


### Lisence:

    MIT License

    Copyright (c) 2024 Eric Waterbury

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

### Next Steps/Known Issues:

- This template will be updated periodically.
- There is a known vulnerability with the xml loader. See [here](https://github.com/advisories/GHSA-776f-qx25-q3cc) for more details.