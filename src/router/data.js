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
    component:() => import('@/views/Home.vue')
  },
  {
    path:'/About',
    component:() => import('@/views/About.vue')
  }
]
export default [
  {
    path:'/',
    component:()=> import('@/views/index.vue'),
    children:[...firstPage]
  },
  ...root
]
  