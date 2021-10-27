import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";
// 得到el中loading效果的img，为了防止得到el中其他的img可以给loading效果的img设置一个单独的属性
function getLoadingImage(el) {
  return el.querySelector("img[data-role = loading");
}
// 创建img元素
function createLoadingImg() {
  const img = document.createElement("img");
  img.dataset.role = "loading";
  img.src = loadingUrl;
  img.className = styles.loading;
  return img;
}
// 导出指令的配置对象
export default function(el, binding) {
  // 根据 binding.value 的值，决定创建或删除img元素,
  const curImg = getLoadingImage(el);
  if (binding.value) {
    //   直接创建会创建两次，bind和updata，为了避免重复创建，可以先判断是否有img
    if (!curImg) {
      const img = createLoadingImg();
      el.appendChild(img);
    }
  } else {
    if (curImg) {
      curImg.remove();
    }
  }
}
