<template>
    <div class="l-gropress_container" :style="heightStyle" @click="$emit('click',$event)">

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
    name: 'l-progress',
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