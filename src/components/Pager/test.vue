<template>
  <Pager
    :total="300"
    :current="current"
    :visibleNumber="10"
    @pageChange="handlePageChange($event)"
  />
</template>

<script>
import Pager from "./";
export default {
  name: "App",
  components: {
    Pager,
  },
  data() {
    return {
      current: 10,
    };
  },
  methods: {
    handlePageChange(newpage) {
      this.current = newpage;
    },
  },
};
</script>

<style>
</style>