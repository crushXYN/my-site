import { parse } from "querystring";
import request from "./request";
// 获取列表数据
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
  // console.log(page, limit, categoryid);
  return await request.get("/api/blog", {
    // axios中可以通过如下方式配置参数
    params: {
      page,
      limit,
      categoryid,
    },
  });
}
// 获取博客分类
export async function getBlogTypes() {
  return await request.get("/api/blogtype");
}

// 获取单个博客
export async function getBlog(id) {
  return await request.get(`/api/blog/${id}`);
}
// 提交评论
export async function postComment(commentInfo) {
  return await request.post(`/api/comment`, commentInfo);
}
// 分页获取评论
export async function getComments(blogid, page = 1, limit = 10) {
  return await request.get("/api/comment", {
    params: {
      blogid,
      page,
      limit,
    },
  });
}
