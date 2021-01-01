<template>
  <div id="nav">
    <router-link to="/">홈</router-link> |
    <router-link to="/sign/in">로그인</router-link> |
    <router-link to="/sign/out">로그아웃</router-link> |
    <router-link to="/posts">게시판</router-link> |
    <router-link to="/pages/page-1">페이지1</router-link> |
    <router-link to="/pages/page-2">페이지2</router-link>
  </div>
</template>

<script>
export default {
  name: 'mainMenu'
}
</script>

<style>
</style>
