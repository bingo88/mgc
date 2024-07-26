<template>
  <div class="more-box">
    <div class="btns">
      <div class="btn">
        <el-button
          type="warning"
          circle
          icon="icon iconfont icon-lianjie"
        ></el-button>
        <div class="info">复制链接</div>
      </div>
      <div class="btn">
        <el-button
          type="success"
          circle
          icon="icon iconfont icon-zimu"
        ></el-button>
        <div class="info">显示字幕</div>
      </div>
      <div class="btn">
        <el-button
          type="primary"
          circle
          icon="icon iconfont icon-qiehuanyuyan"
        ></el-button>
        <div class="info">切换语言</div>
      </div>
    </div>
    <el-button type="primary" @click="close">取消</el-button>
  </div>
</template>

<script>
export default {
  name: "More",
  props: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    close(){
        this.$emit('close')
    }
  },
};
</script>

<style scoped lang="scss">
.more-box {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 24vh;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px 20px 0 0;
  background-color: #fff;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .btns {
    display: flex;
    justify-content: space-around;
    ::v-deep .iconfont {
      font-size: 34px;
    }
    .info{
        margin-top: 10px;
    }
  }
}
</style>
