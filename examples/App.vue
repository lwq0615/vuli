<template>
  <div id="app">
    <l-slide :imgs="['/1.JPG','/2.jpg','/3.jpg']" ref="slide"></l-slide>
    <l-select
      :options="[{label:'李伟强',value:1},{label:'李伟强2',value:2}]"
      :value="value"
      @change="test"
      :openSearch="false"
    ></l-select>
    <l-button @click="test1" color="error">按钮</l-button>
    <l-tabs default="1">
      <l-tab-panel label="第一个" name="1">第一个的内容</l-tab-panel>
      <l-tab-panel label="第二个" name="2">第二个的内容</l-tab-panel>
      <l-tab-panel label="第三个" name="3">第三个的内容</l-tab-panel>
    </l-tabs>
  </div>
</template>

<script>
import tableOption from './tableOption.js'
export default {
  name: 'App',
  data(){
    return {
      tableOption,
      value: 1,
      tabs: [{label:'第一个',name: '1'},{label:'第二个',name: '2'}]
    }
  },
  methods: {
    test(e){
      console.log(e)
    },
    test1(){
      this.value = '2'
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
