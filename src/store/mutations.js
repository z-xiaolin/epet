import {HOME_PAGE, DAILY_ACTIVE,
  CLASSIFY_CATEGORYS, GOODS_LIST, BRAND_LIST, } from "./mutation-types"

export default {
  [HOME_PAGE](state, {menus, datas}){
    state.menus = menus
    state.datas = datas
  },

  [DAILY_ACTIVE](state, {new_exclusive, daily}){
    state.new_exclusive = new_exclusive
    state.daily = daily
  },

  [CLASSIFY_CATEGORYS](state, {Categorys}){
    state.Categorys = Categorys
  },

  [GOODS_LIST](state, {GoodsList}){
    state.GoodsList = GoodsList
  },

  [BRAND_LIST](state, {BrandList}){
    state.BrandList = BrandList
  },
}
