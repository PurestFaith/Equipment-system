

// import router, { asyncRouter, asyncRouter_other } from './router'
// // console.log(asyncRouter);
// // console.log(asyncRouter_other);


// import store from './store'

// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style

// const whiteList = ['/login', '/404']

// router.beforeEach(async (to, from, next) => {
//   NProgress.start()

//   if (store.state.user.user.token) {
//     window.parent.postMessage(
//       {
//         status: "ok",
//         params: {
//           ok: false, //关闭的值
//           token: JSON.stringify(store.state.user),
//         },
//       },
//       "*"
//     );

//     localStorage.setItem('from_path', to.path) //将上次路由记录储存到本地，用作下次登录直接跳转到当前路由

//     if (!store.state.user.userinfo.id) {
//       const user_permission = await store.dispatch('user/getInfo')
//       // console.log(user_permission)
//       if (store.state.user.userinfo.privilege !== '*') {
//         // console.log('用户自身权限', user_permission);
//         // 处理返回的权限数组
//         const result = asyncRouter.filter((item) => {
//           // console.log(item);
//           if (item.children) {
//             item.children = item.children.filter((child) => {
//               return user_permission.privilege.includes(child.name);
//             });
//             return item.children.length > 0;
//           }
//           return false;
//         });
//         console.log('筛选后权限', result);

//         store.commit('permission/setRoutes', result)

//         router.addRoutes([...result, { path: '*', redirect: '/404', hidden: true }])

//         next(to.path)
//       } else {
//         console.log(user_permission, '管理员');
//         /* 如果为*号并且id=1，则是超级管理员最高权限，拥有所有权限，能查看所有模快直接放行 */

//         if (user_permission.id === '1' || user_permission.id === '3') {
//           store.commit('permission/setRoutes', asyncRouter)
//           router.addRoutes([...asyncRouter, { path: '*', redirect: '/404', hidden: true }])
//           // window.open('http://localhost:777/skill/')
//         } else {

//           store.commit('permission/setRoutes', asyncRouter_other)
//           router.addRoutes([...asyncRouter_other, { path: '*', redirect: '/404', hidden: true }])
//         }


//         next(to.path)
//       }
//     }

//     to.path === '/login' ? next('/') : next()

//   } else {
//     if (whiteList.includes(to.path)) {
//       next()
//     } else {
//       next(`/login`)
//     }
//   }
//   NProgress.done()
// })

