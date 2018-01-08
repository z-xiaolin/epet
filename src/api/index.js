import ajax from "./ajax"

export const requestHomePage = () => ajax("/home/homeNav")
export const requestHomeDailyActive = () => ajax("/daily/homeDailyActive")

export const requestClassify = () => ajax("/classify/goodsType")
export const requestGoodsList = (obj) => ajax("/cateList", obj) // 带参数时 地址 "/cateList" 不写 "/cateList/xxx"
export const requestBrandList = () => ajax("/brand")
