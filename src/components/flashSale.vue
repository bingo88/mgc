<template>
  <div class="flashsale-box">
    <div class="top">
      <div>限时秒杀</div>
      <div class="Countdown">
        <u-count-down
          :time="30 * 60 * 60 * 1000"
          format="HH:mm:ss:SSS"
          autoStart
          millisecond
        ></u-count-down>
      </div>
    </div>
    <div class="product"></div>
  </div>
</template>

<script>
export default {
  name: "FlashSale",
  props: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.flashsale-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 310px;
  height: 130px;
  background-color: rgb(253, 252, 248);
  z-index: 100;
  border-radius: 12px;
}
</style>
