import Layout from '@/layout/index.vue'
export default {
  path: '/role',
  component: Layout,
  redirect: '/CompanyRole',
  name: 'role',
  meta: { title: '系统管理', icon: '系统管理' },
  children: [
    {
      path: '/AuthorityManagement',
      name: 'AuthorityManagement',
      component: () => import('@/views/AuthorityManagement/index.vue'),
      meta: { title: '权限管理' }
    },
    {
      path: '/CompanyRole',
      name: 'CompanyRole',
      component: () => import('@/views/CompanyRole/index.vue'),
      meta: { title: '角色管理' }
    },
    {
      path: '/UserManagement',
      name: 'UserManagement',
      component: () => import('@/views/UserManagement/index.vue'),
      meta: { title: '用户管理' }
    }
  ]
}
