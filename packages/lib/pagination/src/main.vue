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

                    <transition :name="sizeDirection === 'bottom' ? 'rotate-top' : 'rotate-bottom'">
                        <div :class="`size-list ${sizeDirection}`" v-show="sizeActive">
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
        },
        sizeDirection: {
            type: String,
            default: 'top'
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
                if(newVal.current !== this.oldPage.current || 
                newVal.size !== this.oldPage.size ||
                newVal.total !== this.oldPage.total){
                    this.$emit('pageChange',newVal)
                }
                this.oldPage = {...newVal}
            }
        }
    },
    computed: {
        pageList(){
            let pages = []
            let page = this.page
            let pageCount = Math.ceil(page.total/page.size) || 1
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