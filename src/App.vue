<template>
  <div class="container">
    <!-- 顶部全局组件 -->
    <HosptialTop/>
    <!-- 展示路由组件区域 -->
     <div class="content">
        <!-- 展示路由组件的区域 -->
         <router-view></router-view>
     </div>
     <!-- 底部全局组件 -->
     <HosptialBottom/>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
 .container{
  display: flex;
  flex-direction: column;
  align-items: center;
  .content{
    margin-top: 70px;
    width: 1200px;
    min-height: 700px;
   
  }

 }
</style>
