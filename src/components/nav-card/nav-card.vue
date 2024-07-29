<template>
    <a class="nav-card" :href="link" target="_blank" rel="noopener noreferrer">
        <article>
            <div class="header">
                <img :src="getIcon" @error="handleError"></img>
                <h2>{{ name }}</h2>
            </div>
            <p>{{ description }}</p>
        </article>
    </a>
</template>
<script setup lang="ts">
import { computed, handleError, toRefs } from 'vue';
import { NavSite } from '../../types'
import { withBase } from 'vitepress';
const props = defineProps<{ site: NavSite }>()

const { icon, name, description, link } = toRefs(props.site)

const getIcon = computed(() => {
    if (icon?.value) return withBase(icon.value)
    const pathReg = /\/[^/]*$/
    if (link.value.match(pathReg)) {
        return link.value.replace(pathReg, '/favicon.ico')
    } else {
        return link.value + '/favicon.ico'
    }
}
)

const handleError = (event: Event) => {
    const img = event.target as HTMLImageElement
    img.src = ''
}

</script>
<style scoped lang="scss">
.nav-card {
    display: block;
    padding: 20px;
    text-decoration: none !important;
    transition: all 0.2s ease-in-out;
    background: var(--vp-c-bg);
    border-radius: 15px;
    color: var(--vp-c-text-1);

    &:hover {
        cursor: pointer;
        border: 1px solid var(--vp-c-red-1);
        background: var(--vp-c-bg-soft);
    }

    .header {
        display: flex;
        align-items: center;


        img {
            margin-right: 10px;
            height: auto;
            width: 24px;
        }

        h2 {
            margin: 0;
            padding: 0;
        }
    }

    p {
        color: var(--vp-c-text-2);
    }

}
</style>