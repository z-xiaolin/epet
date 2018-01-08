import {requestHomePage,
  requestHomeDailyActive,
  requestClassify,
  requestGoodsList,
  requestBrandList,
} from '../api/index'

import {HOME_PAGE, DAILY_ACTIVE,
  CLASSIFY_CATEGORYS, GOODS_LIST, BRAND_LIST, } from "./mutation-types"

export default {
  async requestHomePage({commit}, cb){
    const home = await requestHomePage()
    if(home.code === "succeed") {
      let menus = home.menus
      let datas = home.datas
      // console.log(menus,datas)
      commit(HOME_PAGE, {menus, datas})

      cb && cb()
    }
  },

  async requestHomeDailyActive({commit}, cb){
    const dailyActive = await requestHomeDailyActive()
    if(dailyActive.code === "succeed") {
      let new_exclusive = dailyActive.data[2439].value
      let daily = dailyActive.data["27"]
      commit(DAILY_ACTIVE, {new_exclusive, daily})

      cb && cb()
    }
  },

  async requestClassify({commit}, cb){
    const Classify = await requestClassify()
    if(Classify.code === "succeed") {
      let Categorys = Classify.categorys  // []
      // console.log(Categorys)
      commit(CLASSIFY_CATEGORYS, {Categorys})

      cb && cb()
    }
  },

  async requestGoodsList({commit}, obj, cb){
    const GoodsList = await requestGoodsList(obj)
    console.log(GoodsList)
    if(GoodsList.code === "succeed") {
      // let GoodsList = GoodsList  // []
      // console.log(GoodsList)
      commit(GOODS_LIST, {GoodsList})

      cb && cb()
    }
  },

  async requestGoodsList({commit}, cb){
    const BrandList = await requestBrandList()
    // console.log(BrandList)
    if(BrandList.code === "succeed") {
      let BrandList = BrandList.brand  // []
      // console.log(GoodsList)
      commit(BRAND_LIST, {BrandList})

      cb && cb()
    }
  },
}
