<template>
  <div class="menu">
    <a href="" class="logo">
      <img src="../assets/images/logo.png" alt="">
    </a>
    <ul>
      <li v-for='(item, key) in data' :key="key">
        <a href="javascript:void(0);" :class="{ active: item.active }" :data='item.link' @click="goTo(item)">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['name'],
  data () {
    return {
      data: [
        {
          name: '百度',
          link: 'https://www.baidu.com/',
          active: true
        },
        {
          name: '新浪',
          link: 'https://www.sina.com.cn/',
          active: false
        },
        {
          name: '淘宝',
          link: 'https://www.taobao.com/',
          active: false
        },
        {
          name: 'QQ',
          link: 'https://im.qq.com/',
          active: false
        }
      ]
    }
  },
  // 刚能访问数据
  created () {
  },
  // 刚能访问节点
  mounted () {
    this.$on('a', function (searchName) {
      this.delData(searchName)
    })
    this.$emit('link', this.data[0].link)
  },
  watch: {
  },
  methods: {
    goTo (data) {
      this.data.forEach((item ,index) => {
        item.active = false
      })
      data.active = true
      this.$emit('link', data.link)
    },
    delData (name) {
      var count = 0
      this.data.some((item ,index) => {
        if (item.name === name && this.data.length !== 1) {
          this.data.splice(index,1)
          this.data[0].active = true
          this.$emit('link', this.data[0].link)
          count++
        } else if (item.name === name && this.data.length === 1) {
          count++
          this.$message.error('最后一个了不能删除哦！！')
        }
      })
      if (count === 0) {
        this.$message.error('没找到对应的菜单！！！')
      }
    }
  }
}
</script>

<style scoped lang="less">
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
</style>
