1:vue-cli脚手架初始化项目。
  node  +  webpack  +  淘宝镜像

  node_modules文件夹放置的是：项目依赖文件夹

  public 文件夹》一般放置一些静态资源（图片），需要注意，放在public文件夹中的静态资源，webpack进行打包的时候，
  会原封不动打包到dist文件夹中。

  src文件夹（程序员源代码文件夹）
  assets文件夹:一般是放置静态资源（一般放置多个组件共用的静态资源），需要注意，放置在assets文件夹里面的静态资源
  ，在webpack打包的时候，webpack会把静态资源当作一个模块，打包在js文件里面。
  components文件夹：一般放置的是非路由组件（全局组件）

  App.vue ：唯一的根组件，Vue当中的组件（.vue）
  main.js:程序的入口文件，也是整个程序中最当执行的文件

  babel.config.js：配置文件（Babel相关）
  package.json :认为是项目的身份证，项目叫做什么，有哪些依赖，怎么运行。
  package-lock.json：缓存性文件
  README.md:说明性文件
  
2:项目的其他配置：
  2.1项目运行时 自动打开浏览器：
  ---package.json
    "scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
    },

2.2 eslint校验工具关闭：
  ---在根目录下，创建一个vue.config.js文件
        module.exports = {
        //关闭eslint
        lintOnSave :false
        }

比如声明一个变量 但是没有用 正常可能无法运行 但是关闭eslint之后 就可以正常运行了

2.3 src文件夹简写方法，配置别名：

            {
      "compilerOptions": {
      "target": "es5",
      "module": "esnext",
      "baseUrl": "./",
      "moduleResolution": "node",
      "paths": {
      "@/*": [
      "src/*"
      ]
      },
      "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
      ]
      }
      }
  @为根目录


3：项目路由的分析：
  vue-router
  前端所谓的路由：KV键值对。
  key: URL (地址栏中对应的路径)
  value：相应的路由组件
  注意：上中下结构

  路由组件：
  Home首页路由组件，Search路由组件，Login路由组件；
  非路由组件：
  Header(首页，搜索页面)
  Footer(在登录页没有)

4：完成非路由组件Header与Footer业务
  在项目中，不再以HTML+css为主，主要业务，逻辑为.vue
  在开发项目时：
    1：书写静态页面（HTML+CSS）
    2：拆分组件
    3：获取服务器的数据动态展示
    4：完成相对应的动态业务逻辑
  
    注意1：创建组件的时候，组件结构+组件的样式+图片资源
  