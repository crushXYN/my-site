<template>
  <div>
    <h1>App组件</h1>
    <Avatar
      url="https://img2.baidu.com/it/u=1822128875,2988950390&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500"
    />
  </div>
</template>

<script>
import Avatar from "./";
export default {
  name: "App", // 如果组件没有在注册的时候指定名字，则使用该名字
  components: {
    Avatar,
  },
};
</script>

<style scoped>
</style>