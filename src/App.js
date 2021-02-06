import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import routes from './router';
import store from './store';


import { HashRouter } from 'react-router-dom'
import MookHeader from "@/components/app-header"

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <MookHeader/>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  )
})
