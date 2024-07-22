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
        <div class="row2">
          <div>直播总结： {{ product.liveSummary }}</div>
          <div>卖点： {{ product.sellingPoint }}</div>
          <div>问题： {{ product.questions }}</div>
        </div>
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
      productsList: [
        {
          title: "空调001",
          price: 2999,
          img: require(`@/imgs/3.jpg`),
          liveSummary: "很棒",
          sellingPoint: "性价比高",
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
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  background-color: #f3f6f8;
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
      height: 200px;
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
        }
      }
      div {
        color: black;
      }
    }
  }
}
</style>
