<template>
  <div class="xxf_head">
    <div class="xxf_logo">
      <img src="http://photo.ssyer.com/lib/new_logo.png">
    </div>
    <div class="xxf_nav">
      <ul>
        <li><router-link to="/">图片</router-link></li>
        <li><router-link to="/ssyVideo">视频</router-link></li>
        <li><router-link to="/ssyCommunity">社区</router-link></li>
      </ul>
      <div class="more" @mouseenter="enter" @mouseleave="leave">
        <img src="http://photo.ssyer.com/lib/headMore.png">
        <transition name="babi">
          <div class="more_bg" v-if="show">
            <div class="sanjiao"></div>
            <ul>
              <li><router-link to="/ssyContest">三公里大赛</router-link></li>
              <li>分享</li>
            </ul>
          </div>
        </transition>
      </div>
      <div class="ssy_serch_bg">
        <input type="text" class="xxf_search" placeholder="你想找什么"/>
        <p><img src="http://photo.ssyer.com/lib/search.png"></p>
      </div>
    </div>
    <div class="ssy_head_right">
      <p class="ssy_upload">
        <img src="http://photo.ssyer.com/lib/icon_shangchuan.png">
      </p>
      <p class="ssy_land">登陆</p>
      <p class="ssy_register">注册</p>
    </div>
  </div>
</template>

<script src="../../static/js/xxf_head.js"></script>
<style scoped>  
  @import "../../static/css/head.css"
</style>