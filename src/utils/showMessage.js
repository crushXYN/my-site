import getComponentRootDom from "@/utils/getComponentRootDom.js";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";
/**
 * @param {String} content 消息内容
 * @param {String} type 图标类型
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器
 */
export default function(opacity = {}) {
  const content = opacity.content || "";
  const type = opacity.type || "info";
  const duration = opacity.duration || 2000;
  const container = opacity.container || document.body;
  //   创建一个消息元素
  const div = document.createElement("div");
  const iconDom = getComponentRootDom(Icon, {
    type,
  });
  div.innerHTML = `<span class ="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
  // 设置类型样式名
  const typeClassName = styles[`message-${type}`];
  // 设置样式
  div.className = `${styles.message} ${typeClassName}`;
  if (opacity.container) {
    // 容器的position是否改动过
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
  }
  container.appendChild(div);

  // 浏览器强行渲染
  div.clientHeight;
  // 回归到正常位置
  div.style.opacity = 1;
  div.style.transform = `translate(-50%, -50%)`;

  // 等一段时间消失
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%, -50%) translateY(-15px)`;
    div.addEventListener(
      "transitionend",
      function() {
        div.remove();
        // 运行回调函数
        opacity.callback && opacity.callback();
      },
      { once: true }
    );
  }, duration);
}
