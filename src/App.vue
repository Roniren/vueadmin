<!--1组件模板 要有一个根元素-->
<template>
    <div class="temp">

      <!--路由占位符 -->
      <router-view></router-view>
    </div>
</template>
<!--2定义组件相关对象-->
<script>
   export default{
     data(){
       return {
         msg:"你好！"
       }
     },
     methods:{

     }
   }
</script>
<!--3写style样式-->
<style>
    /* .temp{
      color:red;
    } */
</style>