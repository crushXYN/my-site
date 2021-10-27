<template>
  <div class="test-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      @load="handleLoaded"
      :duration="3000"
    />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    handleLoaded() {
      console.log("触发load事件，图片组件加载完成");
    },
  },
};
</script>

<style lang = "less">
.test-container {
  width: 600px;
  height: 500px;
  border: 1px solid #000;
  margin: 0 auto;
}
</style>