<template>
  <div id="app">

    <div style="padding: 50px 0;text-align:center;">
      <vu-button @click="test1">按钮</vu-button>
    </div>

    <!-- <vu-tooltip content="上方的tooltip" v-model="value">
      <vu-button>按钮</vu-button>
    </vu-tooltip> -->
    

    <!-- <vu-slide :imgs="['/1.JPG','/2.jpg','/3.jpg']" ref="slide"></vu-slide> -->

    <!-- <vu-select name="test" :required="true" :search="false" deleteBtn>
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

    <!-- <vu-radio-group v-model="value" name="tt" @change="test">
      <vu-radio :value="1">福建</vu-radio>
      <vu-radio :value="2" :disable="true">泉州</vu-radio>
      <vu-radio :value="3" :disable="true">福州</vu-radio>
      <vu-radio :value="4">厦门</vu-radio>
      <vu-radio :value="5">漳州</vu-radio>
    </vu-radio-group> -->

    <!-- <vu-progress :percentage="value" @click="test"></vu-progress> -->

    <!-- <vu-switch v-model="value" @change="test" :openValue="123" :closeValue="'close'"></vu-switch> -->

    <!-- <vu-input type="search" v-model="value" search="搜索"></vu-input> -->

    <!-- <vu-checkbox-group @change="test" :value="value">
      <vu-checkbox :all="true">全选</vu-checkbox>
      <vu-checkbox :value="1" :disable="true">福建</vu-checkbox>
      <vu-checkbox :value="2" :disable="true">厦门</vu-checkbox>
      <vu-checkbox :value="3">漳浦</vu-checkbox>
      <vu-checkbox :value="4">泉州</vu-checkbox>
    </vu-checkbox-group> -->

    <!-- <vu-color v-model="value" @change="test1"></vu-color> -->
    
    <!-- <vu-calculator></vu-calculator> -->

    <!-- <vu-tag size="mini" color="primary">标签</vu-tag>
    <vu-tag size="small" color="success" type="plain">标签</vu-tag>
    <vu-tag size="default" color="error" type="dark">标签</vu-tag>
    <vu-tag size="big" color="info">标签</vu-tag>
    <vu-tag>标签</vu-tag> -->

    <!-- <vu-sider :step="10" :stepPoint="true" v-model="value" @change="test"></vu-sider> -->

    <!-- <vu-upload :fileList="fileList" type="file" accept="png">
      上传文件
    </vu-upload> -->

    <!-- <vu-row rowGap="5px" colGap="25px">
      <vu-col :span="8">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </vu-col>
      <vu-col :span="8">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
      </vu-col>
      <vu-col :span="8">
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
      <vu-col :span="6">
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

    <!-- <vu-pagination
    :page="page"
    @currentChange="test"
    @sizeChange="test"
    @totalChange="test"></vu-pagination> -->

    <!-- <vu-cascader :option="option" v-model="value"></vu-cascader> -->

    <!-- <vu-badge isDot text="12">
      <vu-button>按钮</vu-button>
    </vu-badge> -->

    <!-- <vu-tree :option="option" @click="test"></vu-tree> -->

    <!-- <vu-table
    ref="test"
    width="800px"
    :tableData="tableData">
      <vu-table-column
        prop="date"
        label="日期"
        width="80px">
      </vu-table-column>
      <vu-table-column label="配送信息">
        <vu-table-column
        prop="name"
        label="姓名"
        width="180px"
        v-slot="data">
          <vu-button>
            {{data.row.name+'-'+data.index}}
          </vu-button>
        </vu-table-column>
        <vu-table-column label="地址">
          <vu-table-column
            prop="province"
            label="省份"
            width="180px">
          </vu-table-column>
          <vu-table-column
            prop="city"
            label="市区"
            width="180px">
          </vu-table-column>
          <vu-table-column
            prop="address"
            label="地址"
            width="280px">
          </vu-table-column>
          <vu-table-column
            prop="zip"
            label="邮编"
            width="80px">
          </vu-table-column>
        </vu-table-column>
      </vu-table-column>
    </vu-table> -->

    <vu-crud 
    ref="crud"
    :option="tableOption" 
    @pageRefresh="test"
    :tableData="tableData"></vu-crud>

  </div>
</template>

<script>
import tableOption from './powerOption.js'
import axios from 'axios'
export default {
  name: 'App',
  data(){
    return {
      value: true,
      tableOption,
      propDict: {},
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  methods: {
    test(e){
      console.log(e)
    },
    test1(e1,e2){
      this.value = !this.value
    }
  }
}
</script>

<style lang="scss">
</style>

