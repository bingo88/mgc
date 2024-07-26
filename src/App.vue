<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App"
};
</script>

<style>
.el-message-box {
  width: 80% !important; 
}
body {
  padding: 0;
  margin: 0;
  background-color: #f4f9fd;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  min-height: 100vh; /* 保证整个视窗高度都被占据 */
}
*{
  font-size: 16px;
  /* color: #fff; */
}
#dify-chatbot-bubble-button {
  background-color: #1c64f2 !important;
  /* z-index: 999 !important; */
  position: fixed !important;
  bottom: unset !important;
  top: 50% !important;
}
#dify-chatbot-bubble-window {
  height: 100% !important;
  width: 100% !important;
  bottom: unset !important;
  right: unset !important;
  background-color: blue;
  z-index: 110 !important;
}
#app{
  width: 100%;
}
/* .my-btn{
  background-color: rgb(58 203 233) !important;
  color: #fff !important;
  border: none !important;
}
.my-btn.is-disabled{
  background-color: rgb(138, 224, 241) !important;
} */
</style>
