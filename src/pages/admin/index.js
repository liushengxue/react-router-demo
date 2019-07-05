import React , { Component} from 'react';

class Admin extends Component {
  render(){
    return(
      <div>
        <div>Admin</div>
        <br/>
        {this.props.children}
      </div>
    )
  }
}

export default Admin;