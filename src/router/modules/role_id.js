/* Layout */
import Layout from '@/layout'
export const asyncRouter_other = [
  {
    path: '/maintenance',
    component: Layout,
    redirect: '/FacilityMaintenance',
    name: "maintenance",
    meta: { title: '宿舍维护', icon: 'fangzizhuye' },
    children: [
      {
        path: '/FacilityMaintenance',
        name: 'FacilityMaintenance',
        component: () => import('@/views/FacilityMaintenance/index'),
        meta: { title: '设施' }
      },
      {
        path: 'PersonalModify',
        name: 'PersonalModify',
        component: () => import('@/layout/components/Tops/components/PersonalModify/index.vue'),
        meta: { title: '修改密码' },
        hidden: true
      },
      {
        path: 'RoomMaintenance',
        name: 'RoomMaintenance',
        component: () => import('@/views/RoomMaintenance/index'),
        meta: { title: '房间', }
      },
      {
        path: 'HouseType',
        name: 'HouseType',
        component: () => import('@/views/RoomMaintenance/view/HouseType.vue'),
        meta: { title: '房间类型管理' },
        hidden: true
      },
      {
        path: 'Buildings',
        name: 'Buildings',
        component: () => import('@/views/RoomMaintenance/view/Buildings.vue'),
        meta: { title: '楼栋管理' },
        hidden: true

      },
      {
        path: 'Floors',
        name: 'Floors',
        component: () => import('../views/RoomMaintenance/view/Floors.vue'),
        meta: { title: '楼层管理' },
        hidden: true
      },
    ]
  },
  {
    path: '/management',
    component: Layout,
    redirect: '/AccommodationManagement',
    name: 'management',
    meta: { title: '', icon: 'guanli' },
    children: [
      {
        path: 'AccommodationManagement',
        name: 'AccommodationManagement',
        component: () => import('@/views/AccommodationManagement/index.vue'),
        meta: { title: '住宿管理', icon: 'henggang' }
      }
    ]
  },
  {
    path: '/abnormal',
    component: Layout,
    redirect: '/AbnormalPresentation',
    name: 'abnormal',
    meta: { title: '', icon: 'guanli' },
    children: [{
      path: 'AbnormalPresentation',
      name: 'AbnormalPresentation',
      component: () => import('@/views/AbnormalPresentation/index.vue'),
      meta: { title: '异常管理', icon: 'doc' },
    }],
  },
  {
    path: '/violate',
    component: Layout,
    redirect: '/violateTheDiscipline',
    name: 'violate',
    meta: { title: '', icon: 'guanli' },
    children: [{
      path: 'violateTheDiscipline',
      name: 'violateTheDiscipline',
      component: () => import('@/views/violateTheDiscipline/index.vue'),
      meta: { title: '违纪管理', icon: 'doc' },
    }],
  },


  {
    path: '/setting',
    component: Layout,
    redirect: '/setting',
    name: 'setting',
    meta: { title: '设置', icon: '31shezhi' },
    children: [
      {
        path: 'HydropowerTranslation',
        name: 'HydropowerTranslation',
        component: () => import('@/views/HydropowerTranslation/index.vue'),
        meta: { title: '水电单价' }
      },
    ]
  },

]
