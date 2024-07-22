<template>
  <div class="box">
    <!-- 头部 -->
    <div class="header">
      <div class="header-left">
        <div class="avatar">
          <el-avatar :src="require('@/imgs/midea.jpg')" :size="48"></el-avatar>
        </div>
        <div class="name">
          <div>
            <div class="title">Midea</div>
            <div class="fans">150万关注</div>
          </div>
        </div>
        <div class="follow-btn">
          <el-button
            type="primary"
            round
            size="small"
            v-if="!isfocus"
            @click="isfocus = !isfocus"
            >关注</el-button
          >
          <el-button type="primary" round size="small" v-else disabled
            >已关注</el-button
          >
        </div>
      </div>
      <div class="header-right">
        <div class="eyes"><i class="el-icon-view"></i> 120k</div>
        <div class="live">直播</div>
      </div>
    </div>
    <!-- 直播区 -->
    <div class="main">
      <!-- <vue-core-video-player :src="url" :controls="false" :autoplay="true" :muted="true"/> -->
    </div>
    <!-- 商品信息 -->
    <div v-if="!isShowAllProduce">
      <div v-if="!isExpand" class="noExpandProduct">
        <!-- 未展开 -->
        <div class="proImg"></div>
        <div class="proDesc">
          【赤炎稻香】IH智能电饭煲 4L 立体双热源 全域零涂层 MB-HS453S 雅士金
        </div>
        <div class="proBtns">
          <el-button
            type="primary"
            icon="icon iconfont icon-zan"
            size="small"
          ></el-button>
          <el-button
            type="primary"
            icon="el-icon-s-goods"
            size="small"
          ></el-button>
        </div>
      </div>
      <div v-else class="expandProduct-box">
        <!-- 展开 -->
        <div class="expandProduct">
          <div class="pro-left">
            <div class="proImg"></div>
            <div class="proBtns">
              <el-button
                type="primary"
                icon="icon iconfont icon-zan"
                size="small"
              ></el-button>
              <el-button
                type="primary"
                icon="el-icon-s-goods"
                size="small"
              ></el-button>
            </div>
          </div>
          <div class="proDesc">
            【赤炎稻香】IH智能电饭煲 4L 立体双热源 全域零涂层 MB-HS453S 雅士金
          </div>
        </div>
      </div>
    </div>

    <div v-if="!isShowAllProduce" class="footer">
      <!-- 弹幕区 -->
      <div class="comment-box">
        <div class="pointMe">
          <el-button type="primary" size="mini">@我的</el-button>
        </div>
        <div class="up" v-if="!isExpand">
          <el-button type="primary" @click="isExpand = !isExpand"
            ><i class="el-icon-arrow-up"></i
          ></el-button>
        </div>
        <div class="down" v-else>
          <el-button type="primary" @click="isExpand = !isExpand"
            ><i class="el-icon-arrow-down"></i
          ></el-button>
        </div>
        <div
          class="comments"
          ref="comments"
          :class="isExpand ? 'expand' : 'noExpand'"
        >
          <div
            class="comment"
            v-for="(comment, index) in allComments"
            :key="index"
          >
            <div class="comment-left">
              <el-avatar
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                :size="30"
              ></el-avatar>
            </div>
            <div class="comment-right">
              <div class="comment-username">{{ comment.username }}</div>
              <div class="comment-info">{{ comment.content }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部输入区 -->
      <div class="actions">
        <div class="input">
          <el-input
            v-model="input"
            placeholder="请输入内容..."
            @change="onChange"
          >
          </el-input>
        </div>
        <el-button
          type="primary"
          icon="el-icon-shopping-cart-2"
          circle
        ></el-button>
        <el-button
          type="primary"
          icon="el-icon-s-goods"
          circle
          @click="showAllProducts"
        ></el-button>
        <el-button type="primary" icon="el-icon-more" circle></el-button>
      </div>
    </div>
    <!-- 商品详情 -->
    <div v-else ref="productsList">
      <products-list></products-list>
    </div>
  </div>
</template>

<script>
import ProductsList from "../components/productsList.vue";
import {getAnswer} from "@/utils/api.js";
export default {
  name: "Index",
  components: { ProductsList },
  data() {
    return {
      url: require("../imgs/v1.mp4"),
      input: "",
      isfocus: false,
      allComments: [
        {
          username: "AA",
          content: "Good!",
        },
        {
          username: "BB",
          content: "Gooooooooooooooooooooooooooooooooooooooood!",
        },
        {
          username: "CC",
          content: "Gooooooooooooooood!",
        },
      ],
      // 是否展开弹幕区
      isExpand: false,
      // 是否查看全部商品
      isShowAllProduce: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    // 在组件销毁时移除全局点击事件监听器
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    // 提交弹幕输入
    async onChange() {
      if (this.input) {
        this.allComments.push({
          username: "Me",
          content: this.input,
        });
        this.input = "";
        await getAnswer({
          inputs: {},
          query: "你好啊",
          response_mode: "blocking",
          conversation_id: "",
          user: "Soul",
        });
        this.$nextTick(() => {
          const comments = this.$refs.comments;
          comments.scrollTop = comments.scrollHeight;
        });
      }
    },
    showAllProducts(event) {
      event.stopPropagation(); //阻止事件冒泡.不然会出现【点击div1后，div2显示出来，但紧接着全局点击事件监听器又检测到点击事件，从而立即隐藏了div2。】
      this.isShowAllProduce = true;
    },
    // 点击除商品列表外的区域，取消列表展示
    handleClickOutside(event) {
      if (
        this.isShowAllProduce &&
        !this.$refs.productsList.contains(event.target)
      ) {
        this.isShowAllProduce = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.box {
  position: relative;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 80px;
    width: 100%;
    z-index: 2;
    .header-left {
      display: flex;
      align-items: center;
      width: 60%;
      .avatar {
        width: 70px;
        display: flex;
        justify-content: center;
      }
      .name {
        flex: 1;
        .title {
          font-size: 18px;
        }
        .fans {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
        }
      }
      .follow-btn {
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      height: 40px;
      width: 35%;
      background-color: rgba(155, 165, 175, 0.7);
      border-radius: 20px;
      .eyes {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .live {
        width: 40%;
        height: 26px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 13px;
        background-color: red;
      }
    }
  }
  .main {
    width: 100%;
    height: 100vh;
    background-image: url("~@/imgs/2.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .expandProduct-box {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
  .expandProduct {
    display: flex;
    background-color: rgba(95, 97, 99, 0.6);
    border-radius: 14px;
    padding: 10px;

    .pro-left {
      margin-right: 10px;
      .proImg {
        width: 260px;
        height: 140px;
        background-image: url("~@/imgs/4.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .proBtns {
        display: flex;
        margin-top: 10px;
        .el-button {
          flex: 1;
        }
      }
    }
    .proDesc {
      flex: 1;
      // color: black;
      // background-color: #fff;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 7; /* 显示的行数 */
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }
  }
  .noExpandProduct {
    position: absolute;
    top: 100px;
    left: 0;
    width: 120px;
    .proImg {
      width: 120px;
      height: 120px;
      background-image: url("~@/imgs/4.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .proDesc {
      height: 40px;
      font-size: 14px;
      color: black;
      background-color: #fff;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* 显示的行数 */
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }
    .proBtns {
      display: flex;
      justify-content: space-around;
      .el-button {
        flex: 1;
        margin: 0;
        border-radius: 0;
      }
      ::v-deep .iconfont {
        font-size: 20px;
      }
      ::v-deep .el-icon-s-goods {
        font-size: 20px;
      }
    }
  }
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;

    .comment-box {
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      margin-bottom: 10px;
      .pointMe {
        position: absolute;
        top: 18px;
        right: 20px;
      }
      .up,
      .down {
        .el-button {
          background-color: transparent;
          width: 100%;
          padding: 0;
          border: 0;
        }
      }
      .noExpand {
        height: 220px;
      }
      .expand {
        height: 500px;
      }
      .comments {
        overflow-y: auto; /* 垂直方向自动滚动 */
        overflow-x: hidden; /* 水平方向隐藏滚动条 */

        .comment {
          display: flex;
          width: fit-content;
          max-width: 100%;
          word-break: break-all;
          margin-bottom: 10px;
          padding: 4px 6px;
          // background-color: rgba(111, 114, 117, 0.6);
          border-radius: 14px;
          .comment-left {
            margin-right: 8px;
          }
          .comment-right {
            .comment-info {
              color: rgba(255, 255, 255, 0.9);
              font-size: 14px;
            }
          }
        }
      }
    }

    .actions {
      display: flex;
      align-items: center;
      justify-content: space-around;
      .input {
        margin-right: 10px;
      }
      ::v-deep .el-input__inner {
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 0.5);

        border: 0;
        color: #fff;
      }
      ::v-deep .el-input__inner::placeholder {
        color: #fff;
      }
      ::v-deep .el-button--primary {
        background-color: rgba(0, 0, 0, 0.5);

        border: 0;
      }
    }
  }
}
</style>
