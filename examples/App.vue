<template>
  <div id="app">

    <l-button @click="test1" style="float: left;">按钮</l-button>

    <!-- <l-slide :imgs="['/1.JPG','/2.jpg','/3.jpg']" ref="slide"></l-slide> -->

    <!-- <l-select v-model="value">
      <l-select-option label="福建" :value="1"></l-select-option>
      <l-select-option label="漳州" :value="2"></l-select-option>
      <l-select-option label="漳浦" :value="3"></l-select-option>
      <l-select-option label="厦门" :value="4"></l-select-option>
      <l-select-option label="泉州" :value="5"></l-select-option>
      <l-select-option label="三明" :value="6"></l-select-option>
      <l-select-option label="龙岩" :value="7"></l-select-option>
    </l-select> -->
    

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

    <!-- <l-input type="datetime-local" v-model="value" @search="test"></l-input> -->

    <!-- <l-checkbox-group v-model="value" name="absa">
      <l-checkbox value="1" :disable="true">福建</l-checkbox>
      <l-checkbox value="2" :disable="true">厦门</l-checkbox>
      <l-checkbox value="3">漳浦</l-checkbox>
      <l-checkbox value="4">泉州</l-checkbox>
    </l-checkbox-group> -->

    <!-- <l-color v-model="value" ref="test"></l-color> -->
    
    <!-- <l-calculator @compute="test"></l-calculator> -->

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
