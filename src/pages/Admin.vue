<template>
  <el-container>
      
    <el-aside width="auto">
      <Menu :isShow='isShow'/>
    </el-aside>

    <el-container>
      <el-header>
        <Header @click="handleChangeShow"/>
      </el-header>

      <el-main>
        <Mianbao/>
        Main
      </el-main>
    </el-container>

  </el-container>
</template>

<script>

  import Menu from '../components/Menu.vue'
  import Header from '../components/Header.vue'
  import Mianbao from '../components/Mianbao.vue'


export default {
  data(){
    return {
      isShow:true,
    }
  },
  components:{
    Menu,
    Header,
    Mianbao
  },
  methods:{
    handleChangeShow(){
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > div > .el-container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
