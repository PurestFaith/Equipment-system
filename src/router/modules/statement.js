import Layout from '@/layout/index.vue'
export default {
  path: '/statement',
  component: Layout,
  redirect: '/CheckinReports',
  name: 'statement',
  meta: { title: '报表', icon: '24gl-chartBarUpward' },
  children: [


    {
      path: '/CheckinReports',
      name: 'CheckinReports',
      component: () => import('@/views/CheckinReports/index.vue'),
      meta: { title: '房间入住情况报表' }
    },
    {
      path: '/BillingReports',
      name: 'BillingReports',
      component: () => import('@/views/BillingReports/index.vue'),
      meta: { title: '收费情况报表' }
    }

  ]
}
