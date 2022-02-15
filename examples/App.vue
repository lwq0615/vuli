<template>
  <div id="app">

    <div style="padding: 50px 0;text-align:center;">
      <l-button @click="test1">按钮</l-button>
    </div>

    <!-- <l-tooltip content="上方的tooltip" v-model="value">
      <l-button>按钮</l-button>
    </l-tooltip> -->
    

    <!-- <l-slide :imgs="['/1.JPG','/2.jpg','/3.jpg']" ref="slide"></l-slide> -->

    <!-- <l-select name="test" :required="true">
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

    <!-- <l-rotate-card ref="card" rotateTime="1s" rotateType="y">
      <div slot="front">front</div>
      <div slot="back">back</div>
    </l-rotate-card> -->

    <!-- <l-radio-group v-model="value">
      <l-radio :value="1">福建</l-radio>
      <l-radio :value="2" :disable="true">泉州</l-radio>
      <l-radio :value="3" :disable="true">福州</l-radio>
      <l-radio :value="4">厦门</l-radio>
      <l-radio :value="5">漳州</l-radio>
    </l-radio-group> -->

    <!-- <l-progress :percentage="value" @click="test"></l-progress> -->

    <!-- <l-switch v-model="value" @change="test" :openValue="123" :closeValue="'close'"></l-switch> -->

    <!-- <l-input type="text" v-model="value" @invalid="test" :required="true"></l-input> -->

    <!-- <l-checkbox-group @change="test" v-model="value">
      <l-checkbox :all="true">全选</l-checkbox>
      <l-checkbox value="1" :disable="true">福建</l-checkbox>
      <l-checkbox value="2" :disable="true">厦门</l-checkbox>
      <l-checkbox value="3">漳浦</l-checkbox>
      <l-checkbox value="4">泉州</l-checkbox>
    </l-checkbox-group> -->

    <!-- <l-color></l-color> -->
    
    <!-- <l-calculator></l-calculator> -->

    <!-- <l-tag size="mini" color="primary">标签</l-tag>
    <l-tag size="small" color="success" type="plain">标签</l-tag>
    <l-tag size="default" color="error" type="dark">标签</l-tag>
    <l-tag size="big" color="info">标签</l-tag>
    <l-tag>标签</l-tag> -->

    <!-- <l-sider :step="10" :stepPoint="true" @click="test"></l-sider> -->

    <!-- <l-upload ref="upload" action="http://localhost:8083/test">
      上传文件
    </l-upload> -->

    <!-- <l-row>
      <l-col :span="8">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </l-col>
      <l-col :span="8">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </l-col>
      <l-col :span="8">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </l-col>
    </l-row>
    <l-row gap="5px">
      <l-col :span="6">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </l-col>
      <l-col :span="6">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </l-col>
      <l-col :span="6">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </l-col>
      <l-col :span="6">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </l-col>
    </l-row>
    <l-row gap="5px">
      <l-col :span="6" :offset="1">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </l-col>
      <l-col :span="4" :offset="2">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </l-col>
      <l-col :span="8" :offset="1">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </l-col>
    </l-row> -->

  </div>
</template>

<script>
import option from './tableOption.js'
export default {
  name: 'App',
  data(){
    return {
      option,
      value: true
    }
  },
  methods: {
    test(e){
      console.log(e)
    },
    test1(e){
      this.value = !this.value
    }
  }
}
</script>

<style lang="scss">
</style>

