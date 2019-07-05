import React , { Component} from 'react';
import {Link} from 'react-router-dom'

class App extends Component {
  render(){
    return(
      <div>
        {/* <Link to='/login'>去登陆页面</Link>
        <br/>
        <Link to='/admin'>去管理页面</Link> */}
    
        {this.props.children}
      </div>
    )
  }
}

export default App;