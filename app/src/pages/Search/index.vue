<script>
export default {
  //路由组件可以传递props
  //props:['keyword']
}


</script>

<template>
<div>
  <h1>params参数是：{{$route.params.keyword}}</h1>
  <h1>query参数是：{{$route.query.k}}</h1>
</div>
</template>

<style scoped lang="less">

</style>