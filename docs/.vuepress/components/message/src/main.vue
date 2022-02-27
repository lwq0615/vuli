<template>
    <div class="vu-message_container">
        <vu-message 
        v-for="(item,index) in msgList" 
        :key="index"
        :option="item"
        ></vu-message>
    </div>
</template>
<script>
import vuMessage from './message.vue'
export default {
    components: {
        vuMessage
    },
    data() {
        return {
            msgList: [],
            msgLen: 0
        }
    },
    methods: {
        addMsg(option){
            this.msgLen++
            option.opacity = 0
            option.top = this.msgLen-1
            this.msgList.push(option)
        },
        removeMsg(option){
            this.msgLen--
            const index = this.msgList.indexOf(option)
            if(index === -1){
                return
            }
            this.msgList[index].opacity = 0
            this.msgList[index].top = -1
            this.changeMsgStyle() 
            setTimeout(() => {
                if(this.msgLen === 0){
                    this.msgList.splice(0,this.msgList.length)
                    return
                }
            },300)
        },
        changeMsgStyle(){
            let top = 0
            for(let i=0;i<this.msgList.length;i++){
                if(this.msgList[i].top !== -1){
                    this.msgList[i].top = ++top
                    this.msgList[i].opacity = 1
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.vu-message_container {
    position: absolute;
    background-color: transparent;
}
</style>