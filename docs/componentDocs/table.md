# Table 表格

### 示例

*垂直边框*
*吸附列*

<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    <vu-table :tableData="tableData" width="100%">
        <vu-table-column
        prop="date"
        label="日期"
        width="80px">
        </vu-table-column>
        <vu-table-column
        prop="name"
        label="姓名"
        width="180px">
        </vu-table-column>
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
        sticky="right"
        label="邮编"
        width="80px">
        </vu-table-column>
    </vu-table>
</div>


<br>
<br>

::: tip
配置列sticky可使该列在被左右边框隐藏时自动吸附边框,不被隐藏时则正常显示,左右最多各吸附一列，表格数据默认可多选，多选默认占据左吸附位置，可设置selection=false关闭
:::

<br>


### 代码
```html
<vu-table :tableData="tableData" width="100%">
    <vu-table-column
    prop="date"
    label="日期"
    width="80px">
    </vu-table-column>

    <vu-table-column
    prop="name"
    label="姓名"
    width="180px">
    </vu-table-column>

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
    sticky="right"
    label="邮编"
    width="80px">
    </vu-table-column>
</vu-table>

<script>
export default {
  data(){
    return {
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
  }
}
</script>
```

<br>
<br>
<br>

### 示例

*多级表头*
*自定义列模板*

<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    <vu-table
    :tableData="tableData"
    width="100%">
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
          <vu-button color="error">
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
    </vu-table>
</div>

<script>
export default {
  data(){
    return {
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
  }
}
</script>

<br>
<br>

::: tip
使用自定义模板时，可以通过v-slot获取row，index的数据，具体用法查看示例代码
:::


### 代码
```html
<vu-table :tableData="tableData" style="width:100%;">
    <vu-table
    :tableData="tableData"
    width="100%">
        <vu-table-column
        prop="date"
        label="日期"
        width="80px">
        </vu-table-column>

        <!-- 通过v-slot可以获取row，index的数据来作为自定义模板的参数 -->
        <vu-table-column label="配送信息">
            <vu-table-column
            prop="name"
            label="姓名"
            width="180px"
            v-slot="data">
                <vu-button color="error">>
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
    </vu-table>
</vu-table>

<script>
export default {
  data(){
    return {
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
  }
}
</script>
```

#### Table Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| tableData | 表格数据 | Array | 是 | -- | -- |
| border | 开启垂直边框 | Boolean | 否 | true | -- |
| striped | 斑马纹 | Boolean | 否 | true | -- |
| checkable | 行可选 | Boolean | 否 | true | -- |
| selection | 开启多选(开启后默认作为左吸附列) | Boolean | 否 | true | -- |
| lineHeight | 表格行高 | String | 否 | 25px | -- |
| width | 表格宽度 | String | 否 | auto | -- |
| height | 表格高度 | String | 否 | auto | -- |


#### Table-column Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| prop | 单元格属性名 | String | 否 | -- | -- |
| label | 表头展示文本 | String | 否 | -- | -- |
| width | 单元格宽度 | String | 否 | auto | -- |
| align | 单元格内容位置 | String | 否 | center | left,center,right |
| sticky | 单元格吸附边框(left与right各自只能存在一个) | String | 否 | -- | left,right |


#### Table Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| select | 多选值改变 | 改变后的值 |
| clearSelect | 清空多选 | -- |
| selectAll | 全选 | 全选后的值 |
| click | 点击行 | 行数据data，行索引index |


#### Table Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| getSelectData | 获取多选的行数据 | --  | -- |
| clearSelect | 清空多选 | -- | -- |
| selectAll | 全选 | -- | -- |
