import React , { Component} from 'react';
import './index.less'

class Admin extends Component {
  render(){
    return(
      <div>
        <div className='color'>Admin</div>
        <br/>
        {this.props.children}
      </div>
    )
  }
}

export default Admin;