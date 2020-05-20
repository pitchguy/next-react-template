# pc-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install || yarn

# serve with hot reload at localhost:8080
npm run dev || yarn dev

# build for production with minification
npm run build || yarn build

# export statics html for project
npm run export || yarn export
```
## 技术概览
```
# 使用UI库
[antd](https://ant.design/index-cn)
````
```
# 主要技术
react,next,webpack4,react-dom,babel,less

```

#### 项目结构

```text
├── .next //打包后文件存放文件夹
├── components //组件目录
├── node_modules //项目依赖
├── out //静态文件输出目录
├── pages //路由页面
├── static //静态文件目录
│     ├── css //css目录
│     ├── images //图片目录
├── utils //工具类目录
├── .babelrc //babel相关配置
├── .gitignore //git忽略相关配置
├── next.config.js //next相关配置
├── package.json //node相关环境的配置文件
├── README.md //README文件
├── server.js //next输出配置
└── yarn.lock //yarn相关依赖
```