import Layout from '@/layout/index.vue'
export default {
  path: '/setting',
  component: Layout,
  redirect: '/setting',
  name: 'setting',
  meta: { title: '设置', icon: '31shezhi' },
  children: [
    {
      path: '/HydropowerTranslation',
      name: 'HydropowerTranslation',
      component: () => import('@/views/HydropowerTranslation/index.vue'),
      meta: { title: '水电单价' }
    },
    {
      path: '/SettlementLog',
      name: 'SettlementLog',
      component: () => import('@/views/SettlementLog/index.vue'),
      meta: { title: '智能水电结算日志' }
    },
    {
      path: '/modify',
      name: 'Modify',
      component: () => import('@/layout/components/Tops/components/PersonalModify/index.vue'),
      meta: { title: '修改密码' },
      hidden: true
    }
  ]
}
