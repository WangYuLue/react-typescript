### 1、创建 package.json

```
yarn init -y
```

### 2、git 初始化

```
git init
```

### 3、添加 .gitignore 文件

```
node_modules
dist
```

### 4、安装 webpack 相关依赖

```
yarn add webpack webpack-cli webpack-dev-server -D
yarn add html-webpack-plugin -D 
```

### 5、安装 typescript 相关依赖

```
yarn add typescript ts-loader -D
```

### 6、安装 react 相关依赖

```
yarn add react react-dom
yarn add @types/react @types/react-dom -D
```

### 7、编写 tsconfig.json

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "allowSyntheticDefaultImports": true,
    "moduleResolution": "node",
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "baseUrl": "./",
    "paths": {
      "@container/*": [
        "src/container/*"
      ]
    }
  }
}
```

`tsconfig.json` 一些属性作用：

1、`allowSyntheticDefaultImports:true`: 

```js
// 这样不会报错
import React, { Component} from 'react';
// 要不然只能
import * as React from 'react';
```

2、`moduleResolution:"node"`:

```js
//可以直接引用文件夹
import Head from '@components/head';
// 而不需要
import Head from '@components/head/index';
```

### 8、添加入口文件

添加 `src/index.tsx`,

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from '@container/App/index';


ReactDOM.render(<App/>,document.getElementById('root'));
```

添加 `src/container/App/index.tsx`

```js
import React, { Component} from 'react';

class App extends Component {
  render() {
    return (
      <div>Hello React!</div>
    )
  }
}

export default App;
```

### 9、添加模版 html

添加 `index.html`,

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Webpack App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### 10、编写 webpack.config.js 文件

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test : /\.tsx?$/,
        use : 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      "@container": path.resolve(__dirname, 'src/container/')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template : './index.html'
    })
  ]
}
```

### 11、添加 package.json script 脚本

``` json

{
  "scripts": {
    "build": "webpack --config webpack.config.js",
    "start": "webpack-dev-server --config webpack.config.js"
  },
}

```

---

后续可选

### 12、添加scss

安装相关依赖：

```
yarn add css-loader node-sass sass-loader style-loader -D
```

在 `webpack.config.js` 中的 `module.rule` 里添加如下配置：

```js
{
  test: /\.scss$/,
  use: [
    {
      loader: "style-loader" // 将 JS 字符串生成为 style 节点
    },
    {
      loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
    },
    {
      loader: "sass-loader" // 将 Sass 编译成 CSS
    }
  ]
}
```
 
然后就可以在 `src/container/App/index.tsx` 中添加 `.scss文件`

### 13、添加tslint

> 在 `feat/support-tslint` 分支中可以看到如下修改

#### 安装相关依赖

```bash
yarn add tslint -D

# 全局安装
yarn global add tslint
```

#### 生成配置文件 tslint.json

```
tslint --init
```

如下：

```json
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {},
    "rulesDirectory": []
}
```

#### 安装vscode插件 TSLint

#### package.json 中添加脚本

```json
{
  "lint": "tslint -p tsconfig.json 'src/**/*.{ts,tsx}'",
  "lint:fix": "tslint -p tsconfig.json 'src/**/*.{ts,tsx}' --fix"
}

```

### 14、提交前代码检查

### 15、添加热更新

### 16、添加react路由