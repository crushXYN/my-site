<template>
  <div class="site-aside-container">
    <Avatar
      url="https://img2.baidu.com/it/u=1822128875,2988950390&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500"
      :size="120"
    />
    <h1 class="title">App组件开发</h1>
    <Menu />
    <Contact />
    <p class="footer">黑ICP备17001719号</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style lang = "less">
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  overflow: hidden;
  box-sizing: border-box;
  overflow-x: hidden;
  /* overflow-y: auto; */
}
.avatar-container {
  margin: 0 auto;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
.footer {
  text-align: center;
  font-size: 12px;
  margin: 0;
}
</style>