export default {
  addNum({ commit, state }, obj) {
    // 点击下一题 记录答案ID 判断是否为最后一题 如果不是则跳转下一题
    commit("REMBER_ANSWER", obj.id);
    if (state.itemNum < obj.len) {
      commit("ADD_ITEMNUM", 1);
    }
  },
  // 初始化信息
  initializeData({ commit }) {
    commit("INITIALIZE_DATA");
  }
};
