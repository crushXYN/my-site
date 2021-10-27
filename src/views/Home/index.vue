<template>
  <div
    v-loading="isLoading"
    class="home-container"
    ref="container"
    @wheel="handleWheel"
  >
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <div v-show="index >= 1" class="icon icon-up" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < data.length - 1"
      class="icon icon-down"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicatro">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{
          active: i === index,
        }"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import { getBanners } from "@/api/banner";
import CarouselItem from "./Carouselitem.vue";
import Icon from "@/components/Icon";
import fetchData from "@/mixins/fetchData.js";
export default {
  mixins: [fetchData([])],
  components: {
    CarouselItem,
    Icon,
  },
  data() {
    return {
      index: 0, //当前显示第几张
      containerHeight: 0, //整个容器的高度
      swicthing: false,
    };
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    async fetchData() {
      return await getBanners();
    },
    //切换轮播图
    switchTo(i) {
      this.index = i;
    },
    //鼠标滚动切换轮播图
    handleWheel(e) {
      if (this.swicthing) {
        return;
      }
      if (e.deltaY < -10 && this.index > 0) {
        // 往上滚动
        this.swicthing = true;
        this.index--;
      } else if (e.deltaY > 10 && this.index < this.data.length - 1) {
        // 往下滚动
        this.swicthing = true;
        this.index++;
      }
    },
    handleTransitionEnd() {
      this.swicthing = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>

<style lang = "less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 1s;
  li {
    width: 100%;
    height: 100%;
  }
}
.icon {
  .self-conter();
  @gap: 25px;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);
  .iconfont {
    font-size: 30px;
  }
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.indicatro {
  .self-conter();
  transform: translateY(-50%);
  left: auto;
  right: 20px;
  li {
    width: 7px;
    height: 7px;
    border: 1px solid #fff;
    background: @words;
    border-radius: 50%;
    margin-bottom: 5px;
    &.active {
      background: #fff;
    }
  }
}
</style>