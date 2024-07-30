<template>
    <a class="nav-card" :href="link" target="_blank" rel="noopener noreferrer">
        <article>
            <div class="header">
                <img v-if="!imgLoadError" :src="iconUrl" @error="handleError"></img>
                <h2 :title="name">{{ name }}</h2>
            </div>
            <p :title="description">{{ description }}</p>
        </article>
    </a>
</template>
<script setup lang="ts">
import { onMounted, ref, toRefs } from 'vue';
import { NavSite } from '../../types'
import { withBase } from 'vitepress';

const props = defineProps<{ site: NavSite }>()

const { icon, name, description, link } = toRefs(props.site)

const imgLoadError = ref(false)

const iconUrl = ref('')
if (icon?.value) {
    iconUrl.value = withBase(icon.value)
}


const handleError = () => {
    imgLoadError.value = true
}

onMounted(() => {
    if (iconUrl.value === '') {
        iconUrl.value = link.value.replace(/^(https?:\/\/[^\/]+)\/.*/, `$1/favicon.ico?t=${Date.now()}`)
    }
})

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
    height: 140px;

    &:hover {
        cursor: pointer;
        border: 1px solid var(--vp-c-red-1);
        background: var(--vp-c-bg-soft);
    }

    article {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .header {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        img {
            margin-right: 10px;
            height: auto;
            width: 24px;
            flex-grow: 0;
        }

        h2 {
            margin: 0;
            padding: 0;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            font-size: 20px;
        }
    }

    p {
        margin: 0;
        font-size: 14px;
        color: var(--vp-c-text-2);
        overflow: hidden;
        flex-grow: 0;
        display: -webkit-box;
        /* 将容器设置为弹性盒模型 */
        -webkit-box-orient: vertical;
        /* 垂直排列子元素 */
        -webkit-line-clamp: 2;
        /* 设置显示的行数 */
        overflow: hidden;
        /* 隐藏溢出部分 */
        width: 100%;
        /* 设置容器宽度 */
    }

}
</style>