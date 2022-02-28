<template>
    <section class="vu-tree_container">
        <vu-ul
        :option="option"
        :open="true"
        :parent="parentNode"></vu-ul>
    </section>
</template>

<script>
import vuUl from './ul.vue'
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