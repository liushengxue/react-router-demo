import React ,{Component} from 'react'
import { BrowserRouter,Route ,Redirect,Switch} from 'react-router-dom'
import Page1 from './pages/admin/page1'
import Page2 from './pages/admin/page2'
import Page3 from './pages/admin/page3'
import Admin from './pages/admin/index'
import Login from './pages/login/login'
import Not from './pages/404'

// 组件
import App from './App'

class Router extends Component {
  render(){
    return(
      <BrowserRouter>
        <App>
         <Switch>
         <Route path='/login' component={Admin} />
          <Route path='/admin' render={()=>
            <Admin>
              <Route path='/admin/page1' component={Page1} />
              <Route path='/admin/page2' component={Page2} />
              <Route path='/admin/page3' component={Page3} />
            </Admin>
          } />

           {/* <Redirect to="/admin" /> */}

          <Route component={Not} />
         </Switch>
        </App>
      </BrowserRouter>
    )
  }
}

export default Router;