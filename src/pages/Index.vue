<template>
  <div class="box">
    <!--  秒杀 -->
    <FlashSale v-if="false"></FlashSale>
    <!-- 进入弹窗显示 -->
    <div class="dialog" v-if="isShowDialog">
      <div class="dialog-info">欢迎 用户{{ this.username }} 进入直播间！</div>
      <el-button type="primary" @click="play">确定</el-button>
    </div>
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
      <vue-core-video-player
        class="video-player"
        ref="videoPlayer"
        :src="url"
        :loop="true"
        :controls="false"
        :autoplay="true"
        :fluid="true"
      />
    </div>
    <!-- 商品信息 -->
    <div v-if="!isShowAllProduce">
      <div v-if="!isExpand" class="noExpandProduct">
        <!-- 未展开 -->
        <div class="proImg"></div>
        <div class="proDesc">美的（家用空调）KFR-26GW-N8KS1-1</div>
        <div class="proBtns">
          <el-button
            type="primary"
            :icon="
              islike ? 'icon iconfont icon-zan1' : 'icon iconfont icon-zan'
            "
            @click="islike = !islike"
            size="small"
          ></el-button>
          <el-button
            type="primary"
            icon="el-icon-goods"
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
                :icon="
                  islike ? 'icon iconfont icon-zan1' : 'icon iconfont icon-zan'
                "
                @click="islike = !islike"
                size="small"
              ></el-button>
              <el-button
                type="primary"
                icon="el-icon-goods"
                size="small"
              ></el-button>
            </div>
          </div>
          <div class="proDesc">
            KFR-26GW-N8KS1-1空调，大1匹壁挂式，具有多项出色功能。省电新升级，全天候节能运行，还可查询电量。拥有第四代智清洁、忘关机提醒等贴心功能。支持APP智能控制，操作便捷。制冷适用面积11
            - 17㎡，制热适用面积13 -
            17㎡。1级能效，全直流变频，节能环保。配有遥控器，按键功能丰富，包括酷省电、防直吹、智清洁等模式。
          </div>
        </div>
      </div>
    </div>

    <div v-if="!isShowAllProduce && !isShowMore" class="footer">
      <!-- 弹幕区 -->
      <div class="comment-box">
        <div class="pointMe">
          <el-button type="primary" size="mini" @click="scrollToMyInfo"
            >@我的</el-button
          >
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
            v-for="(comment, index) in allComments"
            :key="index"
            class="item"
            :id="`item-${comment.id}`"
          >
            <div
              :class="
                comment.username === 'Midea' ? 'midea-comment' : 'comment'
              "
            >
              <div class="comment-left">
                <el-avatar :src="comment.img" :size="30"></el-avatar>
              </div>
              <div class="comment-right">
                <div class="comment-title">
                  <div class="comment-username">{{ comment.username }}</div>
                  <el-tag v-if="comment.username === 'Midea'" size="mini"
                    >官方</el-tag
                  >
                  <el-tag
                    v-if="comment.username === username"
                    type="success"
                    size="mini"
                    >我</el-tag
                  >
                </div>

                <div class="comment-info">{{ comment.content }}</div>
              </div>
            </div>
            <div class="comment-buttom" v-if="comment.username === 'Midea'">
              <div>对此回答是否满意：</div>
              <el-button
                type="primary"
                :icon="
                  comment.likeTag === '1'
                    ? 'icon iconfont icon-zan1'
                    : 'icon iconfont icon-zan'
                "
                @click="comment.likeTag = '1'"
                size="mini"
              ></el-button>
              <el-button
                type="primary"
                :icon="
                  comment.likeTag === '2'
                    ? 'icon iconfont icon-cai1'
                    : 'icon iconfont icon-cai'
                "
                @click="comment.likeTag = '2'"
                size="mini"
              ></el-button>
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
          icon="el-icon-goods"
          circle
          @click="showAllProducts"
        ></el-button>
        <el-button
          type="primary"
          icon="el-icon-more"
          @click="isShowMore = true"
          circle
        ></el-button>
      </div>
    </div>
    <!-- 更多 -->
    <div v-else-if="isShowMore">
      <More @close="closeMore"></More>
    </div>
    <!-- 商品详情 -->
    <div v-else ref="productsList">
      <products-list></products-list>
    </div>
  </div>
</template>

<script>
import ProductsList from "../components/productsList.vue";
import More from "../components/more.vue";
import FlashSale from "../components/flashSale.vue";
import {
  getAnswer,
  getConversation,
  getToMeLatestAnswer,
  addCommentAsync,
} from "@/utils/api.js";
import { uuid } from "@/utils/uuid.js";
export default {
  name: "Index",
  components: { ProductsList, More, FlashSale },
  data() {
    return {
      url: require("../imgs/6.mp4"),
      input: "",
      isfocus: false,
      islike: false,
      isShowDialog: true,
      allComments: [],
      // 是否展开弹幕区
      isExpand: false,
      // 是否查看全部商品
      isShowAllProduce: false,
      // 是否打开更多
      isShowMore: false,
      username: "",
    };
  },
  async mounted() {
    this.username = uuid(4);
    document.addEventListener("click", this.handleClickOutside);

    const script1 = document.createElement("script");
    script1.innerHTML = `
      window.difyChatbotConfig = {
        token: 'hOOKvyKOIlVSAL4T',
        baseUrl: 'http://dify.soul0521.buzz'
      };
    `;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "http://dify.soul0521.buzz/embed.min.js";
    script2.id = "hOOKvyKOIlVSAL4T";
    script2.defer = true;
    document.head.appendChild(script2);

    // 组件挂载后开始定期获取弹幕数据
    this.getAllComment(); // 立即获取一次数据
    this.intervalId = setInterval(this.getAllComment, 5000); // 每5秒获取一次数据
  },
  beforeDestroy() {
    // 在组件销毁时移除全局点击事件监听器
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    // 获取弹幕
    async getAllComment() {
      const oldLength = this.allComments.length;
      const data = await getConversation();
      let comments = data.data.data.map((item) => {
        return [
          {
            username: item.username,
            content: item.comment,
            id: item.id,
            img:
              item.username === this.username
                ? require("@/imgs/5.png")
                : "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          },
          {
            username: "Midea",
            content: item.commentAnswer,
            likeTag: "0",
            img: require("@/imgs/midea.jpg"),
          },
        ];
      });
      comments = comments.flat();
      if (
        comments.length > oldLength &&
        comments[comments.length - 1].content
      ) {
        this.allComments = comments;
        this.$nextTick(() => {
          const comments = this.$refs.comments;
          comments.scrollTop = comments.scrollHeight;
        });
      }
    },
    // 关闭更多页面
    closeMore() {
      this.isShowMore = false;
    },
    // 播放视频
    play() {
      const videoPlayer = this.$refs.videoPlayer;
      if (videoPlayer && videoPlayer.$el) {
        const videoElement = videoPlayer.$el.querySelector("video");
        if (videoElement) {
          videoElement.play().catch((error) => {
            console.error("111:", error);
          });
        }
        this.isShowDialog = false;
      }
    },
    // 提交弹幕输入
    async onChange() {
      if (this.input) {
        this.allComments.push({
          username: this.username,
          content: this.input,
          img: require("@/imgs/5.png"),
        });
        const query = this.input;
        this.input = "";
        this.$nextTick(() => {
          const comments = this.$refs.comments;
          comments.scrollTop = comments.scrollHeight;
        });
        const data = await addCommentAsync({
          username: this.username,
          comment: query,
        });
        // if (data.data.data) {
        //   let response = {
        //     username: "Midea",
        //     content: data.data.data,
        //     img: require("@/imgs/midea.jpg"),
        //     likeTag: "0",
        //   };
        //   this.allComments.push(response);
        //   this.$nextTick(() => {
        //     const comments = this.$refs.comments;
        //     comments.scrollTop = comments.scrollHeight;
        //   });
        // }
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
    // @我的
    async scrollToMyInfo() {
      const data = await getToMeLatestAnswer(this.username);
      // const data = await getToMeLatestAnswer("dapO");
      const id = data.data.data.id;
      const element = document.getElementById(`item-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.box {
  position: relative;
  .dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 310px;
    height: 130px;
    background-color: rgb(253, 252, 248);
    z-index: 100;
    border-radius: 12px;
    .dialog-info {
      font-size: 18px;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 80px;
    width: 100%;
    z-index: 99;
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
        color: #fff;
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
        color: #fff;
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
        color: #fff;
      }
    }
  }
  .main {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    ::v-deep .play-pause-layer {
      display: none;
      background-color: transparent;
    }
    ::v-deep .vcp-container video {
      width: auto;
    }
    .video-player {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .expandProduct-box {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    z-index: 99;
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
        height: 18vh;
        background-image: url("~@/imgs/b.jpg");
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
      color: #fff;
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
    z-index: 99;
    .proImg {
      width: 120px;
      height: 120px;
      background-image: url("~@/imgs/b.jpg");
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
      ::v-deep .el-icon-goods {
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
    z-index: 99;
    color: #fff;

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
        height: 50vh;
      }
      .comments {
        overflow-y: auto; /* 垂直方向自动滚动 */
        overflow-x: hidden; /* 水平方向隐藏滚动条 */
        .item {
          margin-bottom: 10px;
          padding: 4px 6px;
        }
        .comment,
        .midea-comment {
          display: flex;
          width: fit-content;
          max-width: 100%;
          word-break: break-all;
          // background-color: rgba(111, 114, 117, 0.6);
          .comment-left {
            margin-right: 8px;
          }
          .comment-right {
            .comment-title {
              display: flex;
              .comment-username {
                margin-right: 6px;
              }
            }
            .comment-info {
              font-size: 14px;
            }
          }
        }
        .comment-buttom {
          display: flex;
          align-items: center;
          margin-top: 4px;
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
