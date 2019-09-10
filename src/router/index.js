import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Detail from '@/components/Detail'
import Overtime_form from '@/components/Overtime_form'
import Vacation_form from '@/components/Vacation_form'

Vue.use(Router)

var router = new Router({
mode:'history',//设置路由模式
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/overtime_form',
      name: 'overtime_form',
      component: Overtime_form
    },
    {
      path: '/vacation_form',
      name: 'vacation_form',
      component: Vacation_form
    },
    {
      path: '*',
      redirect: '/home'
    }

  ]
})

//beforeEach 全局导航守卫,在任何一个路由跳转时都会执行
router.beforeEach(( to , from , next) => {
  console.log(to,from);
  
  //拿到token,判断是否登陆
  var token = localStorage.getItem('token');
  if (token)//已登录
  {
    if (to.path == '/login')
    {
      next(from.path); //渲染当前页面  
    }
    else
    {
      next();//渲染页面
    }
  }
  else//未登录
  {
    if (to.path == '/login')
    {
      next();// 渲染login页面
    }
    else
    {
      next('/login'); //重定向到 /login
    }
  }

})

export default router;