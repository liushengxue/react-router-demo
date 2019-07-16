import React , { Component} from 'react';
import './index.less';
import { NavLink,withRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Admin extends Component {
  constructor ( props ) {
    super(props)
    this.state = { collapsed: false,}
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  goToLogin=()=>{
    console.log(111111);
    console.log(this.props)
    // this.props.history.push({
    //   pathname: '/login'
    // });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
            
                <Menu.Item key="3">
                  <NavLink to='/admin/page1' >page1</NavLink>
                </Menu.Item>
            
                <Menu.Item key="4">
                  <NavLink to='/admin/page2' >page2</NavLink>
                </Menu.Item>
                <Menu.Item key="5">
                  <NavLink to='/admin/page3' >page3</NavLink>
                </Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
            <NavLink to='/login' >去登陆</NavLink>
              {/* <span onClick={this.goToLogin}>去登录</span> */}
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{this.props.children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;