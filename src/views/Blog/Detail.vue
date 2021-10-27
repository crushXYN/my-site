<template>
  <Layout>
    <div class="mine-container" v-loading="isLoading">
      <BlogDetail />
    </div>
    <template #right>
      <BlogTOC />
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
export default {
  mixins: [fetchData(null)],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
  },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    },
  },
};
</script>

<style scoped lang = "less">
.mine-container {
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 20px;
  min-height: 100%;
  position: relative;
}
</style> 