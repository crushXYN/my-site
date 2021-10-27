<template>
  <!-- 只有在总页数大于1的时候才显示页数 -->
  <div class="pager-container" v-if="pagerNumber">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }"
      >|&lt;&lt;</a
    >
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      @click="handleClick(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: n === current }"
      >{{ n }}</a
    >
    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current === pagerNumber }"
      >&gt;&gt;</a
    >
    <a
      @click="handleClick(pagerNumber)"
      :class="{ disabled: current === pagerNumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    // 当前页码
    current: {
      type: Number,
      default: 1,
    },
    // 总数据量
    total: {
      type: Number,
      default: 0,
    },
    // 页容量
    limit: {
      type: Number,
      default: 10,
    },
    // 可见页面数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 总页数
    pagerNumber() {
      return Math.ceil(this.total / this.limit);
    },
    // 显示的最小数字
    visiblemin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min <= 1) {
        min = 1;
      }
      return min;
    },
    // 显示的最大数字
    visiblemax() {
      let max = this.visiblemin + this.visibleNumber - 1;
      if (max > this.pagerNumber) {
        max = this.pagerNumber;
      }
      return max;
    },
    numbers() {
      let nums = [];
      for (let i = this.visiblemin; i <= this.visiblemax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    handleClick(newPage) {
      this.$emit("pageChange", newPage);
    },
  },
};
</script>
<style lang = "less" scoped>
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    cursor: pointer;
    color: @primary;
    margin: 0 6px;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
    }
  }
}
</style>