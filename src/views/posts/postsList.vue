<template>
  <div>
    <div>
      <h3>
        POSTS 목록 페이지
        <button @click="onClcikRefreshBtn">새로고침</button>
        &nbsp;&nbsp;
        <button @click="onClcikCreateBtn">새글작성</button>
      </h3>
    </div>

    <!-- 디자인 없이..
    <div>
      $store.state.post.isLoadingPostItems : {{$store.state.post.isLoadingPostItems}}
    </div>
    <div>
      $store.state.post.donePostItems : {{$store.state.post.donePostItems}}
    </div>
    <div>
      $store.state.post.errorPostItems : {{$store.state.post.errorPostItems}}
    </div>
    <div v-for="(item, index) in $store.state.post.items" :key="item.id + index">
      <span>
        <router-link :to="{ name: 'postsRead', params: { postId: item.id }}">title : {{ item.title }}</router-link>
      </span>
      <displayTime :tiem="item.createAt" type="normal"/>
    </div>
    <div>
      <button @click="onClickMoreBtn">더보기</button>
    </div>
    -->

    <!-- antd 반영-->
    <a-list
      class="demo-loadmore-list"
      :loading="$store.state.post.isLoadingPostItems"
      item-layout="horizontal"
      :data-source="$store.state.post.items" >
      <div
        v-if="$store.state.post.donePostItems"
        slot="loadMore"
        :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }" >
        <a-spin v-if="$store.state.post.isLoadingPostItems" />
        <a-button v-else @click="onClickMoreBtn">
          loading more
        </a-button>
      </div>
      <a-list-item slot="renderItem" slot-scope="item">
        <a slot="actions" @click="onClickEditBtn(item.id)">edit</a>
        <a slot="actions" @click="onClickReadBtn(item.id)">more</a>
        <a-list-item-meta :description="item.content">
          <span slot="title">
            <router-link :to="{ name: 'postsRead', params: { postId: item.id }}">
              {{ item.title }}
            </router-link>
          </span>
          <a-avatar slot="avatar" :size="64" :src="item.image" />
        </a-list-item-meta>
        <div>
          {{item.author}}
        </div>
      </a-list-item>
    </a-list>

  </div>
</template>

<script>
export default {
  name: 'postsList',

  created () {
    this.initialize()
  },

  /* request, prepare, on, cb, action */
  methods: {
    initialize () {
      if (this.$store.state.post.items.length === 0) {
        this.requestAPI()
      }
    },
    async requestAPI () {
      const returnCondition = await this.$store.dispatch('post/POST_ITEMS', { })
      console.log('requestAPI returnCondition: ', returnCondition)
    },
    async onClickMoreBtn () {
      this.requestAPI()
    },
    onClcikRefreshBtn () {
      this.$store.commit('post/reSetItems')
      this.requestAPI()
    },
    onClickEditBtn (postId) {
      this.$router.push(`/posts/update/${postId}`)
    },
    onClickReadBtn (postId) {
      this.$router.push(`/posts/read/${postId}`)
    },
    onClcikCreateBtn () {
      this.$router.push('/posts/create')
    }
  }

}
</script>

<style>

</style>
