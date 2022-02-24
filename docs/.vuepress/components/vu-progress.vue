<template>
    <div class="vu-gropress_container" :style="heightStyle" @click="$emit('click',$event)">

        <div class="line-progress" v-show="!inside">
            <div class="flex">
                <div class="over" :style="widthStyle+colorStyle"></div>
            </div>
            <div class="text" :style="textColorStyle" v-show="showText">{{format(percentage)}}</div>
        </div>

        <div class="inside-progress" v-show="inside">
            <div class="over" :style="widthStyle+colorStyle">
                <div class="text" :style="textColorStyle" v-show="showText">{{format(percentage)}}</div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'vu-progress',
    props: {
        percentage: {
            type: Number,
            default: 50
        },
        color: {
            type: String,
            default: '#e44258'
        },
        format: {
            type: Function,
            default: (percentage) => {
                return percentage+'%'
            }
        },
        textColor: String,
        inside: {
            type: Boolean,
            default: false
        },
        showText: {
            type: Boolean,
            default: true
        }
    },
    watch: {
        percentage: {
            handler(newVal,oldVal){
                if(newVal !== oldVal){
                    this.$emit('change',newVal)
                }
                if(newVal === 100){
                    this.$emit('full')
                }
            }
        }
    },
    computed: {
        widthStyle(){
            return `width:${this.percentage}%;`
        },
        colorStyle(){
            return `background-color: ${this.color};`
        },
        textColorStyle(){
            if(this.inside){
                return `color: ${this.textColor || 'white'}`
            }else{
                return `color: ${this.textColor || '#606266'}`
            }
        },
        heightStyle(){
            return `height:${this.inside ? '22px' : '10px'};`
        }
    }
}
</script>

<style lang="scss" scoped>
.vu-gropress_container {
    display: inline-block;
    width: 200px;
    .line-progress {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .flex {
            display: flex;
            flex: 1;
            background-color: #ebeef5;
            border-radius: 100px;
            overflow: hidden;
            width: 100%;
            height: 100%;
            .over {
                height: 100%;
                border-radius: 100px;
                transition: all ease 0.3s;
            }
        }
        .text {
            margin-left: 3px;
            font-size: 10px;
        }
    }
    .inside-progress{
        width: 100%;
        height: 100%;
        background-color: #ebeef5;
        border-radius: 100px;
        overflow: hidden;
        .over{
            height: 100%;
            border-radius: 100px;
            transition: all ease 0.3s;
            position: relative;
            .text{
                position: absolute;
                right: 3px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 12px;
            }
        }
    }
}
</style>>