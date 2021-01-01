import ContainerLayout from '@/views/articles/container.vue'

/*
| `Articles 그룹`          | /articles
| `Articles 목록 페이지`   | /articles/list
| `Articles 읽기 페이지'   | /articles/read
| `Articles 작성 페이지`   | /articles/create
| `Articles 수정 페이지`   | /articles/update
*/

export default {
  path: '/articles',
  component: ContainerLayout,
  redirect: '/articles/list',
  children: [
    {
      name: 'articlesList',
      component: () => import('@/views/articles/articlesList.vue'),
      path: '/articles/list'
    },
    {
      name: 'articlesCreate',
      component: () => import('@/views/articles/articlesCreate.vue'),
      path: '/articles/create'
    },
    {
      name: 'articlesRead',
      component: () => import('@/views/articles/articlesRead.vue'),
      path: '/articles/read/:postId'
    },
    {
      name: 'articlesUpdate',
      component: () => import('@/views/articles/articlesUpdate.vue'),
      path: '/articles/update/:postId'
    }
  ]
}
