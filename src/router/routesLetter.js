import ContainerLayout from '@/views/letters/container.vue'

/*
| `Letters 그룹`          | /letters
| `Letters 목록 페이지`   | /letters/list
| `Letters 읽기 페이지'   | /letters/read
| `Letters 작성 페이지`   | /letters/create
| `Letters 수정 페이지`   | /letters/update
*/

export default {
  path: '/letters',
  component: ContainerLayout,
  redirect: '/letters/list',
  children: [
    {
      name: 'lettersList',
      component: () => import('@/views/letters/lettersList.vue'),
      path: '/letters/list'
    },
    {
      name: 'lettersCreate',
      component: () => import('@/views/letters/lettersCreate.vue'),
      path: '/letters/create'
    },
    {
      name: 'lettersRead',
      component: () => import('@/views/letters/lettersRead.vue'),
      path: '/letters/read/:letterId'
    },
    {
      name: 'lettersUpdate',
      component: () => import('@/views/letters/lettersUpdate.vue'),
      path: '/letters/update/:letterId'
    }
  ]
}
