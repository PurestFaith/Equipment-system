import Layout from '@/layout/index.vue'
export default {
  path: '/management',
  component: Layout,
  redirect: '/AccommodationManagement',
  name: 'management',
  meta: { title: '', icon: 'guanli' },
  children: [
    {
      path: '/AccommodationManagement',
      name: 'AccommodationManagement',
      component: () => import('@/views/AccommodationManagement/index.vue'),
      meta: { title: '住宿管理' }
    }
  ]
}
