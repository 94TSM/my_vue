<template>
    <div class="main">
        <div class="img_nav">
            <ul>
                <li class="img_nav_li" @click="toSelected" v-bind:class="{active:isActive}">精选</li>
                <li class="img_nav_li" @click="toNew" v-bind:class="{active:isActive1}">最新</li>
                <li class="img_nav_li" @click="toAuthor" v-bind:class="{active:isActive2}">作者</li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script src="../../static/js/xxfImage.js"></script>

<style scoped>
@import "../../static/css/xxfImage.css"
</style>