<template>
    <div class="nav-category" v-for="nav in navsData">
        <h1 :id="nav.category">{{ nav.category }}
            <a :href="nav.category"></a>
        </h1>
        <div class="nav-sites">
            <NavCard v-for="site in nav.sites" :site="site" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavCard from '../nav-card/nav-card.vue'
import navs from './navs.json'

const navsData = ref(navs)
</script>


<style scoped lang="scss">
.nav-category {
    h1 {
        color: var(--vp-c-text-1);
        font-size: 24px;
        margin: 20px 10px;
    }

    .nav-sites {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 30px;
    }
}
</style>