<template>
    <section class="vu-pagination_container">
        <div class="pagination">
            <div v-for="(item,index) in elementList" :key="index" class="element">

                <div 
                class="icon" 
                style="font-size:14px" 
                @click="last" 
                v-if="item === 'last'">&lt;</div>

                <div v-else-if="item === 'current'" style="display:flex;">
                    <div
                    :class="`icon current ${page.current === i ? 'active' : ''}`" 
                    @click="currentClick(i)"
                    v-for="(i,index) in pageList" 
                    :key="index">
                        <span v-if="(i-pageList[index-1]>1 || pageList[index+1]-i>1) && index!==0 && index!==pageList.length-1">…</span>
                        <span v-else>{{i}}</span>
                    </div>
                </div>

                <div 
                class="icon" 
                style="font-size:14px" 
                @click="next"
                v-else-if="item === 'next'">&gt;</div>

                <div class="page-size" v-else-if="item === 'size'">
                    <input 
                    class="text" 
                    ref="pageSizeText" 
                    :value="page.size+'条/页'" 
                    @focus="sizeActive = true" readonly 
                    @blur="sizeActive = false">

                    <div :class="`arrow ${sizeActive ? 'active' : ''}`">&lt;</div>

                    <transition name="rotate-top">
                        <div class="size-list" v-show="sizeActive">
                            <div 
                            :class="`size-item ${item === page.size ? 'active' : ''}`"
                            v-for="(item,index) in sizeList || [10,20,50,100]"
                            @mousedown="setSize(parseInt(item))"
                            :key="index">{{item}}条/页</div>
                        </div>
                    </transition>
                </div>

                <div class="goto" v-else-if="item === 'goto'">
                    <input type="text" v-model="gotoText">
                    <button class="goto-btn" @click="goto(parseInt(gotoText))">跳转</button>
                </div>

                <div class="total" v-else-if="item === 'total'">
                    共
                    <span>{{page.total}}</span>
                    条
                </div>

                <div class="sizeText" v-else-if="item === 'sizeText'">
                    每页
                    <span>{{page.size}}</span>
                    条
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'vu-pagination',
    props: {
        page: {
            type: Object,
            required: true
        },
        sizeList: Array,
        elements: {
            type: String,
            default: 'last,current,next,size,total'
        }
    },
    data(){
        return {
            sizeActive: false,
            gotoText: '1',
            oldPage: {}
        }
    },
    watch: {
        page: {
            deep: true,
            handler(newVal){
                if(newVal.current !== this.oldPage.current){
                    this.$emit('currentChange',newVal.current)
                }
                if(newVal.size !== this.oldPage.size){
                    this.$emit('sizeChange',newVal.size)
                }
                if(newVal.total !== this.oldPage.total){
                    this.$emit('totalChange',newVal.total)
                }
                this.oldPage = {...newVal}
            }
        }
    },
    computed: {
        pageList(){
            let pages = []
            let page = this.page
            let pageCount = Math.ceil(page.total/page.size)
            if(page.current < 1){
                this.setCurrent(1)
            }
            if(page.current > pageCount){
                this.setCurrent(pageCount)
            }
            pages.push(1)
            pages.push(page.current)
            pages.push(pageCount)
            pages = [...new Set(pages)]
            let i = 1
            while(pages.length < 9){
                let len = pages.length
                if(page.current - i > 1){
                    pages.push(page.current - i)
                }
                if(page.current + i < pageCount){
                    pages.push(page.current + i)
                }
                if(pages.length === len){
                    break
                }
                i++
            }
            pages.sort(function(a, b){return a - b})
            return pages
        },
        elementList(){
            return this.elements.split(',').map(item => {
                return item.trim()
            })
        }
    },
    created(){
        this.oldPage = {...this.page}
    },
    methods: {
        setCurrent(current){
            let pageCount = Math.ceil(this.page.total/this.page.size) 
            current = current < 1 ? 1 : current
            current = current > pageCount ?pageCount : current
            current = current || 1
            this.page.current = current
        },
        setSize(size){
            this.page.size = size
        },
        setTotal(total){
            this.page.total = total
        },
        last(){
            this.$emit('last',this.page.current-1)
            this.setCurrent(this.page.current-1)
        },
        next(){
            this.$emit('next',this.page.current+1)
            this.setCurrent(this.page.current+1)
        },
        currentClick(current){
            this.$emit('currentClick',current)
            this.setCurrent(current)
        },
        goto(current){
            this.$emit('goto',current)
            this.setCurrent(current)
        },
        getPageInfo(){
            return {...this.page}
        }
    }
}
</script>

<style lang="scss" scoped>
.vu-pagination_container {
    display: inline-block;
    text-align: center;
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        .element {
            margin: 0 5px;
            .icon {
                justify-content: center;
                align-items: center;
                display: flex;
                color: #606266;
                background-color: #f4f7fa;
                width: 28px;
                height: 28px;
                font-family: fangsong;
                border-radius: 2px;
                box-shadow: 0 0 1px rgba($color: #000000, $alpha: 0.3);
                user-select: none;
                cursor: pointer;
                font-size: 13px;
                font-weight: 600;
            }
            .icon.active {
                background-color: #e44258;
                color: white;
            }
            .icon:hover {
                color: #e44258;
            }
            .icon.active:hover {
                color: white;
            }
            .icon.current {
                margin-left: 10px;
            }
            .icon.current:first-child {
                margin-left: 0;
            }

            .page-size {
                height: 28px;
                width: 100px;
                border-radius: 2px;
                border: 1px solid #e4e7ed;
                background-color: white;
                user-select: none;
                cursor: pointer;
                position: relative;
                .text {
                    border-radius: 2px;
                    padding-right: 20px;
                    color: #606266;
                    font-size: 13px;
                    text-align: center;
                    width: 100%;
                    height: 100%;
                    border: none;
                    user-select: none;
                    cursor: pointer;
                    outline: none;
                    box-sizing: border-box;
                }
                .arrow {
                    position: absolute;
                    color: #dcdfe6;
                    font-weight: 600;
                    font-family: fangsong;
                    font-size: 13px;
                    right: 0;
                    top: 0;
                    transform: rotateZ(270deg);
                    width: 20px;
                    height: 28px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: all ease 0.3s;
                    pointer-events: none;
                }
                .arrow.active {
                    transform: rotateZ(90deg);
                }
                .size-list {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    z-index: 99;
                    box-shadow: 0 0 1px rgba($color: #000000, $alpha: 0.4);
                    overflow: hidden;
                    border-radius: 2px;
                    .size-item {
                        color: #606266;
                        font-size: 13px;
                        text-align: center;
                        user-select: none;
                        background-color: white;
                        cursor: pointer;
                        height: 25px;
                        line-height: 25px;
                        transition: all ease 0.1s;
                        padding-right: 20px;
                    }
                    .size-item:hover {
                        background-color: #e44258;
                        color: white;
                    }
                    .size-item.active {
                        background-color: #e44258;
                        color: white;
                    }
                }
            }
            .goto {
                width: 80px;
                height: 30px;
                border-radius: 2px;
                background-color: white;
                overflow: hidden;
                display: flex;
                input {
                    flex: 1;
                    width: 100%;
                    border-top-left-radius: 2px;
                    border-bottom-left-radius: 2px;
                    height: 100%;
                    border: none;
                    outline: none;
                    box-sizing: border-box;
                    text-align: center;
                    color: #606266;
                    font-size: 13px;
                    border: 1px solid #e4e7ed;
                }
                .goto-btn {
                    color: white;
                    user-select: none;
                    cursor: pointer;
                    font-size: 13px;
                    padding: 0 5px;
                    height: 100%;
                    outline: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #e44258;
                    transition: all ease 0.1s;
                    border: none;
                }
                .goto-btn:hover{
                    background-color: rgba($color: #e44258, $alpha: 0.8);
                }
                .goto-btn:active{
                    background-color: #e44258;
                }
            }

            .total,.sizeText {
                font-size: 13px;
                color: #606266;
                span{
                    font-weight: 600;
                }
            }
        }
    }
}
</style>