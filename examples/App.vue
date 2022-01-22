<template>
  <div id="app">

    <l-button @click="test1" color="error" style="float: left;">按钮</l-button>

    <!-- <l-slide :imgs="['/1.JPG','/2.jpg','/3.jpg']" ref="slide"></l-slide> -->

    <!-- <l-select
      :options="[{label:'李伟强',value:1},{label:'李伟强2',value:2}]"
      v-model="value"
      @change="test"
      :openSearch="false"
    ></l-select> -->

    <!-- <l-tabs v-model="value" @change="test">
      <l-tab-panel label="第一个" name="1">第一个的内容</l-tab-panel>
      <l-tab-panel label="第二个" name="2">第二个的内容</l-tab-panel>
      <l-tab-panel label="第三个" name="3">第三个的内容</l-tab-panel>
    </l-tabs> -->

    <!-- <l-rotate-card ref="card" rotateTime="1s" rotateType="y" extClass="test" width="200px">
      <div slot="front">front</div>
      <div slot="back">back</div>
    </l-rotate-card> -->

    <!-- <l-radio-group @change="test" v-model="value">
      <l-radio :value="1">福建</l-radio>
      <l-radio :value="2" :disable="true">泉州</l-radio>
      <l-radio :value="3" :disable="true">福州</l-radio>
      <l-radio :value="4">厦门</l-radio>
      <l-radio :value="5">漳州</l-radio>
    </l-radio-group> -->

    <!-- <l-progress :percentage="value" @change="test" @full="test"></l-progress> -->

    <!-- <l-switch v-model="value" @change="test" :openValue="123" :closeValue="'close'"></l-switch> -->

  </div>
</template>

<script>
import option from './tableOption.js'
export default {
  name: 'App',
  data(){
    return {
      option,
      value: 1,
      radios: [{label:'第一个',value: 1},{label:'第二个',value: 2}]
    }
  },
  methods: {
    test(e){
      console.log(e)
    },
    test1(){
      this.$message.info({
        content:"失败了,这是一条失败的消息",
        close: true,
        onClose(e){
          console.log(e)
        }
      })
      this.$message("这是一条success的消息")
      // this.$message.error("这是一条error的消息")
      // this.$message.warning("这是一条warning的消息")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
