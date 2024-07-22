<template>
  <div class="box">
    <el-menu
      :default-active="$route.path"
      router
      background-color="#fff"
      text-color="rgb(125 133 146);"
    >
      <div class="logo">
        <i class="icon iconfont icon-pingjiati"></i>
        <span class="title">T.E.S.</span>
      </div>
      <div v-for="item in navList" :key="item.id">
        <el-menu-item v-if="!item.item.length" :index="item.path">
          <i :class="item.class"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
        <el-submenu v-else :index="item.path">
          <template slot="title">
            <i :class="item.class"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item v-for="i in item.item" :key="i.id" :index="i.path">
            <i :class="i.class"></i>
            <span slot="title">{{ i.title }}</span>
          </el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>
  
  <script>
export default {
  name: "RAmenu",
  data() {
    return {
      navList: [
        {
          path: "/RA/dashboard",
          title: "Dashboard",
          id: "1",
          class: "el-icon-s-home",
          item: [],
        },
        {
          path: "2",
          title: "Teaching Evaluation",
          id: "2",
          class: "el-icon-notebook-2",
          item: [
            {
              path: "/RA/addQuestionnaire",
              title: "Add a Evaluation",
              class: "el-icon-circle-plus-outline",
              id: "2-1",
            },
            {
              path: "/RA/questionnaireList",
              title: "Evaluation List",
              class: "el-icon-partly-cloudy",
              id: "2-2",
            },
          ],
        },
        {
          path: "/RA/evaluatorList",
          title: "Evaluator",
          class: "el-icon-s-custom",
          id: "3",
          item: [],
          // item: [
          //   {
          //     path: "/RA/addEvaluator",
          //     title: "Add a Evaluator",
          //     class:"el-icon-circle-plus-outline",
          //     id: "3-1",
          //   },
          //   {
          //     path: "/RA/evaluatorList",
          //     title: "Evaluator List",
          //     class:"el-icon-partly-cloudy",
          //     id: "3-2",
          //   },
          // ],
        },
        {
          path: "/RA/verifySign",
          title: "Verify",
          class: "el-icon-search",
          id: "4",
          item: [],
        },
        {
          path: "/RA/evaluationResults",
          title: "Evaluation Results",
          class: "el-icon-pie-chart",
          id: "5",
          item: [],
        },
        {
          path: "/RA/transaction",
          title: "Blockchain Transaction",
          class: "my-icon iconfont icon-qukuailian",
          id: "6",
          item: [],
        },
        {
          path: "/",
          title: "Sign out",
          class: "el-icon-back",
          id: "7",
          item: [],
        },
      ],
    };
  },
  methods: {},
};
</script>
  
  <style scoped lang="scss">
.box {
  height: 100%;
}
::v-deep .el-menu-item:focus,
::v-deep .el-menu-item:hover {
  background-color: rgb(239, 238, 238) !important;
  border-radius: 22px;
}
::v-deep .el-submenu__title:hover {
  background-color: rgb(239, 238, 238) !important;
  border-radius: 22px;
}
.el-menu {
  height: 100%;
  border-radius: 0 20px 20px 0;
  font-weight: 700;
  border: none;
}
.logo {
  display: flex;
  align-items: center;
  padding: 10px;
  .icon {
    font-size: 40px;
    color: #185fa7;
  }
  .title {
    color: #185fa7;
    font-size: 25px;
    text-align: center;
    font-weight: 700;
    margin-left: 5px;
  }
}
.my-icon {
  margin-right: 5px;
  width: 24px;
  font-weight: normal;
  font-size: 24px;
}
</style>
  