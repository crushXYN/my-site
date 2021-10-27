// 公共的远程获取数据方法，具体的组件中，需要提供一个获取远程数据的方法fetchData
export default function(defaultDataValue = null) {
  return {
    data() {
      return {
        isLoading: true,
        data: defaultDataValue,
      };
    },
    async created() {
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  };
}
