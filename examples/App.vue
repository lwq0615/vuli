<template>
  <div id="app">

    <div style="padding: 50px 0;text-align:center;">
      <vu-button @click="test1">按钮</vu-button>
    </div>

    <!-- <vu-tooltip content="上方的tooltip" v-model="value">
      <vu-button>按钮</vu-button>
    </vu-tooltip> -->
    

    <!-- <vu-slide :imgs="['/1.JPG','/2.jpg','/3.jpg']" ref="slide"></vu-slide> -->

    <!-- <vu-select name="test" :required="true">
      <vu-select-option label="福建" :value="1"></vu-select-option>
      <vu-select-option label="漳州" :value="2"></vu-select-option>
      <vu-select-option label="漳浦" :value="3"></vu-select-option>
      <vu-select-option label="厦门" :value="4"></vu-select-option>
      <vu-select-option label="泉州" :value="5"></vu-select-option>
      <vu-select-option label="三明" :value="6"></vu-select-option>
      <vu-select-option label="龙岩" :value="7"></vu-select-option>
    </vu-select> -->
    

    <!-- <vu-tabs v-model="value" @change="test">
      <vu-tab-panel label="第一个" name="1">第一个的内容</vu-tab-panel>
      <vu-tab-panel label="第二个" name="2">第二个的内容</vu-tab-panel>
      <vu-tab-panel label="第三个" name="3">第三个的内容</vu-tab-panel>
    </vu-tabs> -->

    <!-- <vu-rotate-card ref="card" rotateTime="1s" rotateType="y">
      <div slot="front">front</div>
      <div slot="back">back</div>
    </vu-rotate-card> -->

    <!-- <vu-radio-group v-model="value">
      <vu-radio :value="1">福建</vu-radio>
      <vu-radio :value="2" :disable="true">泉州</vu-radio>
      <vu-radio :value="3" :disable="true">福州</vu-radio>
      <vu-radio :value="4">厦门</vu-radio>
      <vu-radio :value="5">漳州</vu-radio>
    </vu-radio-group> -->

    <!-- <vu-progress :percentage="value" @click="test"></vu-progress> -->

    <!-- <vu-switch v-model="value" @change="test" :openValue="123" :closeValue="'close'"></vu-switch> -->

    <!-- <vu-input type="text" v-model="value" @invalid="test" :required="true"></vu-input> -->

    <!-- <vu-checkbox-group @change="test" v-model="value">
      <vu-checkbox :all="true">全选</vu-checkbox>
      <vu-checkbox value="1" :disable="true">福建</vu-checkbox>
      <vu-checkbox value="2" :disable="true">厦门</vu-checkbox>
      <vu-checkbox value="3">漳浦</vu-checkbox>
      <vu-checkbox value="4">泉州</vu-checkbox>
    </vu-checkbox-group> -->

    <!-- <vu-color></vu-color> -->
    
    <!-- <vu-calculator></vu-calculator> -->

    <!-- <vu-tag size="mini" color="primary">标签</vu-tag>
    <vu-tag size="small" color="success" type="plain">标签</vu-tag>
    <vu-tag size="default" color="error" type="dark">标签</vu-tag>
    <vu-tag size="big" color="info">标签</vu-tag>
    <vu-tag>标签</vu-tag> -->

    <!-- <vu-sider :step="10" :stepPoint="true" @click="test"></vu-sider> -->

    <!-- <vu-upload ref="upload" action="http://localhost:8083/test" type="image">
      上传文件
    </vu-upload> -->

    <!-- <vu-row>
      <vu-col :span="8">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </vu-col>
      <vu-col :span="8">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </vu-col>
      <vu-col :span="8">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </vu-col>
    </vu-row>
    <vu-row gap="5px">
      <vu-col :span="6">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </vu-col>
      <vu-col :span="6">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </vu-col>
      <vu-col :span="6">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </vu-col>
      <vu-col :span="6">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </vu-col>
    </vu-row>
    <vu-row gap="5px">
      <vu-col :span="6" :offset="1">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </vu-col>
      <vu-col :span="4" :offset="2">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </vu-col>
      <vu-col :span="8" :offset="1">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </vu-col>
    </vu-row> -->

    <!-- <vu-image>
      <vu-image-item :src="index%3+1+'.JPG'" v-for="(item,index) in 20" :key="index" lazy></vu-image-item>
    </vu-image> -->

    <!-- <vu-scroll @scrollEnd="test1">
       <div v-for="i in value" :key="i">{{ i }}</div>
    </vu-scroll> -->

    <!-- <vu-dialog ref="tt">
      <div slot="content">222</div>
    </vu-dialog> -->

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      value: false
    }
  },
  methods: {
    test(e){
      console.log(e)
    },
    test1(e){
      this.$refs.tt.show()
    }
  }
}
</script>

<style lang="scss">
</style>

