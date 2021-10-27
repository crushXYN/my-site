<template>
  <div>
    <h1>App组件</h1>
    <Icon type="success" />
  </div>
</template>

<script>
import Icon from "./";
export default {
  name: "App", // 如果组件没有在注册的时候指定名字，则使用该名字
  components: {
    Icon,
  },
};
</script>

<style scoped>
.iconfont {
  color: greenyellow;
}
</style>