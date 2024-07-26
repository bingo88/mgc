<template>
  <div class="flashsale-box">
    <div class="top">
      <div class="flashsale">限时秒杀</div>
      <div class="countDown">
        距结束还剩 <span class="time">{{ getTime }}</span> 秒
      </div>
    </div>
    <div class="product">
      <div class="image"></div>
      <div class="product-info">
        <div class="product-name">
          IH智能电饭煲 4L 立体双热源 全域零涂层 MB-HS453S 雅士金
        </div>
        <div>
          <span class="price">￥199 </span>
          <span class="original-price">￥399</span>
        </div>

        <el-button v-if="!isTimeUp" type="danger">马上抢</el-button>
        <el-button v-else type="info" disabled>已结束</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlashSale",
  props: {},
  data() {
    return {
      getTime: 10,
      timer: "",
      isTimeUp: false,
    };
  },
  computed: {},
  mounted() {
    this.countDown();
  },
  methods: {
    countDown() {
      let timer = setInterval(() => {
        this.getTime -= 1;
        console.log(this.getTime);
        if (this.getTime <= 0) {
          this.isTimeUp = true;
          clearInterval(timer);
          //   this.getTime = 10;
        }
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
.flashsale-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 320px;
  height: 188px;
  background-color: rgb(253, 252, 248);
  z-index: 100;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 14px;
  justify-content: space-between;
  padding-top: 0;
  .top {
    flex: 1;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    .flashsale {
      font-size: 28px;
      font-weight: 700;
      color: rgb(238, 56, 86);
    }
    .countDown {
      color: #666;
      .time {
        font-size: 36px;
        font-weight: 700;
        color: rgb(241, 60, 60);
      }
    }
  }
  .product {
    display: flex;
    justify-content: space-around;
    .image {
      width: 120px;
      height: 130px;
      background-image: url("~@/imgs/3.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .product-info {
      width: 170px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .product-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .price {
        font-size: 32px;
        font-weight: 700;
        color: rgb(241, 60, 60);
      }
      .original-price {
        color: #666;
        text-decoration: line-through;
      }
    }
  }
}
</style>
