import { request } from "./request";

//分类
export function getCategory() {
  return request({
    url: "/category"
  });
}

//对应的分类内容
export function getSubCategory(maitKey) {
  return request({
    url: "./subcategory",
    params: {
      maitKey
    }
  });
}
//对应分类内容的扩展
export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: "/subcategory/detail",
    params: {
      miniWallkey,
      type
    }
  });
}
