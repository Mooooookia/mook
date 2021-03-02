import React from 'react'
import { Redirect } from 'react-router-dom'

import MookHome from "@/pages/home";
import MookArticle from "@/pages/article";
import MookDiscover from "@/pages/discover";
import MookLogin from "@/pages/login";
import MookMessage from "@/pages/message";
import MookRegister from "@/pages/register";
import MookSearch from "@/pages/search";
import MookSetting from "@/pages/setting";
import MookUser from "@/pages/user";
import MookWrite from "@/pages/write";
import MookArticleList from '@/pages/user/components/article'
import MookCollected from '@/pages/user/components/collected'
import MookFollower from '@/pages/user/components/follower'
import MookFollowing from '@/pages/user/components/following'
import MookLiked from '@/pages/user/components/liked'

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/home"/>
    )
  },
  {
    path: "/home",
    component: MookHome
  },
  {
    path: "/article/:id",
    component: MookArticle
  },
  {
    path: "/discover",
    component: MookDiscover
  },
  {
    path: "/login",
    component: MookLogin
  },
  {
    path: "/message",
    component: MookMessage
  },
  {
    path: "/register",
    component: MookRegister
  },
  {
    path: "/search",
    component: MookSearch
  },
  {
    path: "/setting",
    component: MookSetting
  },
  {
    path: "/user/:id",
    component: MookUser,
    routes: [
      {
        path: "/user/:id/",
        exact: true,
        component: MookArticleList
      },
      {
        path: "/user/:id/collected",
        component: MookCollected
      },
      {
        path: "/user/:id/follower",
        component: MookFollower
      },
      {
        path: "/user/:id/following",
        component: MookFollowing
      },
      {
        path: "/user/:id/liked",
        component: MookLiked
      },
    ]
  },
  {
    path: "/write",
    component: MookWrite
  },

]

export default routes;