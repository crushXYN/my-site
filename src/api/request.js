// axios用于简化ajax，实现ajax的异步通信
import axios from "axios";
import showMessage from "../utils/showMessage";

const ins = axios.create(); // 创建一个axios的实例
// 拦截网络请求，执行function后面的代码
ins.interceptors.response.use(function(resp) {
  if (resp.data.code !== 0) {
    showMessage({
      content: resp.data.msg,
      type: "error",
      duration: 1500,
    });
    return null;
  }
  return resp.data.data;
});

export default ins;
