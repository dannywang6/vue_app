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

    注意2：项目使用的时less样式，浏览器不支持直接识别less样式，需要通过less，less-loader进行处理less
    把less样式变为css样式，浏览器才可以识别

    注意3：如果需要想让组件识别less样式，需要在less组件身上加上lang=less
  
    使用组件的步骤（非路由组件）
  ——创建或自定义
  ——引入
  ——注册
  ——使用
  

5：路由组件的搭建：
  vue-router
   路由组件有四个：home，search，login，register

 -components文件夹：一般放置的是非路由组件（全局共用的组件）
 -pages｜views文件夹：一般放置的是路由组件

5.1：路由组件具体的实现：
      1）创建router文件夹 创建index.js
      2）import导入vue router，
        使用router插件，
        引入路由组件，
        配置路由。
      3）在根main.js引入路由，注册
        在根app.vue中 放置路由组件的出口

** $route:获取路由信息「路径，query，params，等等」   类似 GPS 显示的当前位置
   $router：进行编程式导航 路由跳转「push｜replace」  类似 GPS 的导航系统


5.2：路由跳转方式：
  编程式导航｜声明式导航
    编程式>声明式
    编程式的出了路由跳转 还能做一些其他的业务逻辑 比如登录时 收集用户名密码

6：Footer组件的显示与隐藏：
    Footer在Home，Search中显示
    在Login，Register中隐藏

    需要使用v-show｜v-if  一般使用v-show
6.1可以根据组件身上的$route来获取当前路由信息，通过路由的路径来判断Footer的隐藏与显示。
6.2配置路由时 可以添加路由的元信息【meta】，路由需要配置对象key ，
    showFooter（单个组件）requiresAuth（登录前后访问权限）true or false


8.1路由跳转有几种方式？
比如：A->B
    声明式导航：router-link（务必要有to属性），可以实现路由的跳转；
    编程式导航:利用的是组件实例的$router.push｜replace方法，可以实现路由的跳转。
8.2：路由传参，参数有几种写法？
    params参数：属于路径单中的一部分，需要注意，在配置路由的时候，需要占位；
    query参数：不属于路径单中的一部分，类似于Ajax中的querystring /home？k=v&kv=,不需要占位
8.3具体实现：

    在路由中的path加入占位符 path:"/search/:keyword",
    如果使用对象的写法（常规方法）需在路由中加上name参数name:"search"
    然后再div input 中 v-model="keyword"
    最后this.$router.push({name:"search",params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}})

9：相关问题
    1）路由传参对象写法 path能不能结合params参数一起使用？
        不能，因为设计限制：Vue Router 要求：如果使用 path，则 params 会被忽略； params 必须与 name 配对使用
    2）如何指定params参数可传不可传？
        配置路由时，路由path中配置了占位符path:"/search/:keyword",  占位了params参数，如果不加入params参数的话 路径会出错
    如果不用params传参 最好去掉占位 使用query传参   
    当然 如果指定的话 可以在路由path后的占位符后加一个 ？  
    3）params参数库传递也可不传递，如果传递的是空串 怎么解决？
        如果params：{keyword:''}的话 可以加上||undefined 来解决  不然路径会出错  params:{keyword:''||undefined}
    4）路由组件能不能传递props数据？
        可以， 路由组件中加props：true 跳转后接收 props：['keyword']


        