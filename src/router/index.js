import React from 'react'
import { Redirect } from 'react-router-dom'

import MookHome from "@/pages/home";
import MookArticle from "@/pages/article";
import MookCollection from "@/pages/collection";
import MookDiscover from "@/pages/discover";
import MookFollow from "@/pages/follow";
import MookLogin from "@/pages/login";
import MookMessage from "@/pages/message";
import MookRegister from "@/pages/register";
import MookSearch from "@/pages/search";
import MookSetting from "@/pages/setting";
import MookUser from "@/pages/user";
import MookWrite from "@/pages/write";

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
    path: "/article",
    component: MookArticle
  },
  {
    path: "/collection",
    component: MookCollection
  },
  {
    path: "/discover",
    component: MookDiscover
  },
  {
    path: "/follow",
    component: MookFollow
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
    path: "/user",
    component: MookUser
  },
  {
    path: "/write",
    component: MookWrite
  },

]

export default routes;