<template>
    <section class="vu-tree_container">
        <vu-ul
        :option="option"
        :open="true"
        :parent="parentNode"></vu-ul>
    </section>
</template>

<script>
import vuUl from './vu-ul.vue'
export default {
    name: 'vu-tree',
    components: {
        vuUl
    },
    props: {
        option: Array,
        lineHeight: {
            type: String,
            default: '25px'
        }
    },
    data(){
        return {
            parentNode: this,
            activeNode: null
        }
    }
}
</script>

<style lang="scss">
.vu-tree_container{
    width: 200px;
    .vu-ul_container{
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        ul,li{
            list-style: none;
            margin: 0;
            padding: 0;
            color: #606266;
            cursor: pointer;
            overflow: hidden;
            box-sizing: border-box;
            transition: all ease 0.2s;
        }
        ul{
            padding-left: 20px;
        }
        li{
            padding-left: 10px;
            display: flex;
            align-items: center;
            border-radius: 2px;
            .arrow{
                display: inline-block;
                height: auto;
                width: auto;
                font-family: fangsong;
                font-weight: 600;
                font-size: 12px;
                margin-right: 3px;
                transition: all ease 0.1s;
                transform: rotateZ(0deg);
                margin-right: 5px;
            }
        }
        li.open .arrow{
            transform: rotateZ(90deg);
        }
        li.active{
            background-color: #E44258 !important;
            color: white !important;
        }
        li:hover{
            background-color: #F5F7FA;
        }
    }
}
.vu-tree_container>.vu-ul_container>ul{
    padding-left: 0;
}
</style>