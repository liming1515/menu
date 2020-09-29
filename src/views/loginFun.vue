<template>
  <div class="loginFun">
    <v-menu @link='link' ref="a"></v-menu>
    <div class="loginFun_content">
      <input type="text" v-model="searchName">
      <button @click="del">删除</button>
      <iframe :src="iframe_src" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
import menu from '../components/menu'
export default {
  components: {
    'v-menu': menu
  },
  data () {
    return {
      searchName: '',
      iframe_src: '',
    }
  },
  // 刚能访问数据
  created () {
  },
  // 刚能访问节点
  mounted () {
  },
  methods: {
    link (link) {
      this.iframe_src = link
    },
    del () {
      this.$refs.a.$emit('a', this.searchName)
      this.searchName = ''
    },
  }
}
</script>

<style scoped lang="less">
.loginFun{
  margin: 0 auto;
  height: 100%;
  width: 1280px;
  display: flex;
  justify-content: flex-start;
  .menu{
    width: 191px;
    height: 100%;
    background-color: #30298e;
    .logo{
      position: relative;
      display: block;
      height: 40px;
      width: 120px;
      margin: 0 auto;
      padding-top: 20px;
      margin-bottom: 35px;
      img{
        width: 100%;
      }
      &::after{
        content: "";
        position: absolute;
        width: 120px;
        height: 2px;
        background-color: #fff;
        bottom: -13px;
      }
    }
    ul{
      li{
        a{
          display: block;
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          line-height: 60px;
          color: #fff;
          font-size: 20px;
          padding-left:26px;
        }
        .active{
          background-color: #1c1969;
          color: #0099ff;
        }
      }
    }
  }
  .loginFun_content{
    width: abs(100%-191px);
    iframe{
      width: 100%;
      height: 100%;
    }
    input{
      margin: 15px;
      width: 200px;
      height: 30px;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
      text-indent: 10px;
    }
    button{
      box-sizing: border-box;
      padding: 0px 15px;
      height: 30px;
      border-radius: 4px;
      border: 0px;
      background-color: #30298e;
      color: #ffffff;
      outline: none;
      &:active{
        background-color: #5b5885;
      }
    }
  }
}
</style>
