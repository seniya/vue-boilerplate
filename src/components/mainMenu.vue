<template>
  <div>

    <!-- 디자인 없이..
    <div id="nav">
      <router-link to="/">홈</router-link> |
      <router-link to="/sign/in">로그인</router-link> |
      <router-link to="/sign/out">로그아웃</router-link> |
      <router-link to="/posts">게시판 with Vuex Full</router-link> |
      <router-link to="/articles">게시판 with Vuex Some</router-link> |
      <router-link to="/users">게시판 without Vuex</router-link> |
      <router-link to="/pages/page-1">페이지1</router-link> |
      <router-link to="/pages/page-2">페이지2</router-link>
    </div>
    -->

    <!-- antd 반영 -->
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="home">
        <router-link to="/">홈</router-link>
      </a-menu-item>
      <a-menu-item key="sign">
        <router-link to="/sign/in">로그인</router-link>
      </a-menu-item>
      <a-menu-item key="posts">
        <router-link to="/posts">게시판 with Vuex Full</router-link>
      </a-menu-item>
      <a-menu-item key="articles">
        <router-link to="/articles">게시판 with Vuex Some</router-link>
      </a-menu-item>
      <a-menu-item key="users">
        <router-link to="/users">게시판 without Vuex</router-link>
      </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">페이지 모음</span>
        <a-menu-item-group>
          <a-menu-item key="page:1">
            <router-link to="/pages/page-1">페이지1</router-link>
          </a-menu-item>
          <a-menu-item key="page:2">
           <router-link to="/pages/page-2">페이지2</router-link>
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
    </a-menu>

  </div>
</template>

<script>
export default {
  name: 'mainMenu',
  data () {
    return {
      current: ['home']
    }
  }
}
</script>

<style>
</style>
