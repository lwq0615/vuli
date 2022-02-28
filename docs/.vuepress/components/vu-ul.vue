<template>
    <section class="vu-ul_container">
        <ul>
            <vu-li 
            v-for="(item,index) in option" 
            :key="index"
            :item="item"
            :parent="parent">
            </vu-li>
        </ul>
    </section>
</template>

<script>
import vuLi from './vu-li.vue'
export default {
    components: {
        vuLi
    },
    props: {
        option: Array,
        open: Boolean,
        parent: Object
    }
}
</script>