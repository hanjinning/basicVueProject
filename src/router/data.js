let firstPage = [
  {
    path:'/meme',
    name:'Home',
    component:() => import('@/views/Home.vue'),
  }
]
let root = [
  {
    path:'/index',
    component:() => import('@/views/Home.vue'),
    // meta: {
    //   keepAlive: false
    //  }
  },
  {
    path:'/About',
    component:() => import('@/views/About.vue'),
    // meta: {
    //   keepAlive: true
    //  }
  }
]
export default [
  {
    path:'/',
    component:()=> import('@/views/index.vue'),
    // children:[...root]
  },
  ...root
]
  