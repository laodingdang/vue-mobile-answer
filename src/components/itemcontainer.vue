<template>
  <div>
    <header class="top_tips">
      <span class="num_tip" v-if="fatherComponent == 'home'">{{ level }}</span>
      <span class="num_tip" v-if="fatherComponent == 'item'"
        >题目{{ itemNum }}</span
      >
    </header>
    <div v-if="fatherComponent == 'home'">
      <div class="home_log item_container_style"></div>
      <router-link to="/item" class="start button_style"></router-link>
    </div>
    <div v-if="fatherComponent == 'item'">
      <div class="item_back item_container_style">
        <div class="item_list_container" v-if="itemLen > 0">
          <header class="item_title">
            {{ itemDetail[itemNum - 1].topic_name }}
          </header>
          <ul>
            <li
              v-for="(item, index) in itemDetail[itemNum - 1].topic_answer"
              @click="choosed(index, item.topic_answer_id)"
              class="item_list"
              :key="index"
            >
              <span
                class="option_style"
                :class="{ has_choosed: choosedNum == index }"
                >{{ chooseType(index) }}</span
              >
              <span class="option_detail">{{ item.answer_name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <span
        class="next_item button_style"
        @click="nextItem"
        v-if="itemNum < itemLen"
      ></span>
      <span
        class="submit_item button_style"
        @click="submitAnswer"
        v-else
      ></span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "itemcontainer",
  data() {
    return {
      itemId: null, // 题目id
      choosedNum: null, // 选中答案索引
      choosedId: null, // 选中答案id
      itemDetail: null, //请求到数据
      itemLen: null //http请求返回的数据的lenght
    };
  },
  props: {
    fatherComponent: {
      type: String,
      require: true
    }
  },
  computed: mapState([
    "itemNum", // 第几题
    "level", // 第几周
    "timer" // 计时器
  ]),
  methods: {
    ...mapActions(["addNum", "initializeData"]),
    getTopic() {
      this.getHttp("/mock/getTopic").then(res => {
        this.itemDetail = res.data;
        this.itemLen = res.data.length;
      });
    },
    nextItem() {
      if (this.choosedNum !== null) {
        this.choosedNum = null;
        // 保存答案 题目索引+1 跳到下一题
        this.addNum({ id: this.choosedId, len: this.itemLen });
      } else {
        alert("请选择一个选项后再点击下一题按钮！");
      }
    },
    // 索引0-3 对应答案A-D
    chooseType(type) {
      switch (type) {
        case 0:
          return "A";
        case 1:
          return "B";
        case 2:
          return "C";
        case 3:
          return "D";
      }
    },
    // 选中答案信息
    choosed(type, id) {
      this.choosedNum = type;
      this.choosedId = id;
    },
    // 最后一题，交卷，清空定时器，跳转分数页面
    submitAnswer() {
      if (this.choosedNum !== null) {
        this.addNum(this.choosedId);
        clearInterval(this.timer);
        this.$router.push("score");
      } else {
        alert("请选择一个选项后再点击提交按钮！");
      }
    }
  },
  created() {
    this.getTopic();
    // 初始化信息
    if (this.fatherComponent == "home") {
      this.initializeData();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.top_tips {
  position: absolute;
  width: 3.25rem;
  height: 7.35rem;
  top: -1.3rem;
  right: 1.6rem;
  background: url("../assets/WechatIMG2.png") no-repeat;
  background-size: 100% 100%;
  z-index: 10;
  .num_tip {
    position: absolute;
    left: 0.48rem;
    bottom: 1.1rem;
    width: 2.5rem;
    height: 0.7rem;
    font-size: 0.6rem;
    font-family: "黑体";
    font-weight: 600;
    color: #a57c50;
    text-align: center;
  }
}

.item_container_style {
  width: 13.15rem;
  height: 11.625rem;
  background-repeat: no-repeat;
  position: absolute;
  top: 4.1rem;
  left: 1rem;
}

.home_log {
  background-image: url("../assets/1-2.png");
  background-size: 13.142rem 100%;
  background-position: right center;
}

.item_back {
  background: url("../assets/2-1.png");
  background-size: 100% 100%;
}

.button_style {
  display: block;
  width: 4.35rem;
  height: 2.1rem;
  background-size: 100% 100%;
  position: absolute;
  top: 16.5rem;
  left: 50%;
  margin-left: -2.4rem;
  background-repeat: no-repeat;
}

.start {
  background-image: url("../assets/1-4.png");
}

.next_item {
  background-image: url("../assets/2-2.png");
}

.submit_item {
  background-image: url("../assets/3-1.png");
}

.item_list_container {
  position: absolute;
  width: 8rem;
  height: 7rem;
  top: 2.4rem;
  left: 3rem;
  -webkit-font-smoothing: antialiased;
}

.item_title {
  font-size: 0.65rem;
  color: #fff;
  line-height: 0.7rem;
}

.item_list {
  font-size: 0;
  margin-top: 0.4rem;
  width: 10rem;
  span {
    display: inline-block;
    font-size: 0.6rem;
    color: #fff;
    vertical-align: middle;
  }
  .option_style {
    width: 0.725rem;
    height: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    font-size: 0.5rem;
    font-family: "Arial";
    margin-right: 0.3rem;
  }
  .has_choosed {
    background: #ffd400;
    color: #fff;
    border-color: #ffd400;
  }
  .option_detail {
    width: 7.5rem;
  }
}
</style>
