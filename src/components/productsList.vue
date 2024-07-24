<template>
  <div class="productsList-box">
    <el-input
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      v-model="input"
    >
    </el-input>
    <div class="list">
      <div
        v-for="(product, index) in productsList"
        :key="index"
        class="product"
      >
        <div class="row1">
          <div
            class="pro-img"
            :style="`background-image: url(${product.img});`"
          ></div>
          <div class="row1-right">
            <div>{{ product.title }}</div>
            <div>价格：{{ product.price }}</div>
            <div>
              <el-button type="primary">加入购物车</el-button>
            </div>
          </div>
        </div>
        <el-collapse>
          <el-collapse-item title="直播总结">
            <div>
              {{ product.liveSummary }}
            </div>
          </el-collapse-item>
          <el-collapse-item title="卖点">
            <div>
              {{ product.sellingPoint }}
            </div>
          </el-collapse-item>
          <el-collapse-item title="问题">
            <div>{{ product.questions }}</div>
          </el-collapse-item>
        </el-collapse>
        <!-- <div class="row2">
          <div>直播总结： {{ product.liveSummary }}</div>
          <div>卖点： {{ product.sellingPoint }}</div>
          <div>问题： {{ product.questions }}</div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsList",
  props: {},
  data() {
    return {
      input: "",
      // activeNames: ['1'],
      productsList: [
        {
          title: "华凌（家用空调）KFR-72LW/N8HA1",
          price: 2999,
          img: require(`@/imgs/3.jpg`),
          liveSummary: "很棒",
          sellingPoint:
            "华凌 KFR-72LW-N8HA1 空调，您的理想之选！大 3 匹，适用面积 32 - 48㎡（制冷）、36 - 49㎡（制热）。1 级新能效，全直流变频，节能又环保。制冷功率 1970(300 - 3050)W，制热功率 2950(260 - 3950)+2300（电辅热）W，强劲冷暖。具备 eco 节能模式、智控温功能，还有干燥、舒睡、自清洁等实用功能。遥控器和控制面板操作便捷，可通过美的美居 APP 实现智能控制。使用环境温度范围广，-32℃ - 60℃ 均可正常运行。极地白外观，简约时尚，落地式安装，为您的家增添魅力！",
          questions: "耗电吗？",
        },
        {
          title: "空调002",
          price: 2999,
          img: require(`@/imgs/3.jpg`),

          liveSummary: "很棒",
          sellingPoint: "性价比高",
          questions: "耗电吗？",
        },
        {
          title: "空调003",
          price: 2999,
          img: require(`@/imgs/3.jpg`),

          liveSummary: "很棒",
          sellingPoint: "性价比高",
          questions: "耗电吗？",
        },
        {
          title: "空调003",
          price: 2999,
          img: require(`@/imgs/3.jpg`),

          liveSummary: "很棒",
          sellingPoint: "性价比高",
          questions: "耗电吗？",
        },
      ],
    };
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.productsList-box {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px 20px 0 0;
  background-color: #f3f6f8;
  z-index: 99;
  ::v-deep .el-input__icon {
    color: #c0c4cc;
  }
  .list {
    height: 600px;
    margin-top: 10px;
    overflow-y: auto; /* 垂直方向自动滚动 */
    overflow-x: hidden; /* 水平方向隐藏滚动条 */
    .product {
      background-color: #fff;
      width: 100%;
      margin-bottom: 12px;
      border-radius: 10px;
      padding: 10px;
      box-sizing: border-box;
      .row1 {
        display: flex;
        justify-content: space-between;
        .pro-img {
          width: 220px;
          height: 120px;
          border-radius: 10px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .row1-right {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin-left: 12px;
        }
      }
      div {
        color: black;
      }
    }
  }
}
</style>
