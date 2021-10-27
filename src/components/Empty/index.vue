<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  props: {
    text: {
      tyep: String,
      default: "无数据",
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang = "less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container {
  .self-centrer();
  text-align: center;
  color: @gray;
  .icon-container {
    font-size: 100px;
  }
}
</style>