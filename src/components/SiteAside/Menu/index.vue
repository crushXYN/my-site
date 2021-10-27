<template>
  <div class="menu-container">
    <RouterLink
      :exact="item.exact"
      v-for="item in items"
      :key="item.link"
      :to="{ name: item.name }"
      active-class="selected"
    >
      <Icon :type="item.icon" />
      <span>{{ item.title }}</span>
    </RouterLink>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          // startWith: true, // 只要当前路径以link开头，当前菜单就是选中的
          exact: false, //激活状态是否精确匹配
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
  // methods: {
  //   isSelected(item) {
  //     var link = item.link.toLowerCase();
  //     var curPathname = location.pathname.toLowerCase();
  //     if (item.startWith) {
  //       return curPathname.startsWith(link);
  //     } else {
  //       return curPathname === link;
  //     }
  //   },
  // },
};
</script>

<style lang = "less" scoped>
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 20px 0;
  a {
    &.selected {
      background: darken(@words, 3%);
    }
    color: @gray;
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;
    .icon-container {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>