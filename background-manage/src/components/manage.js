import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon} from 'antd';


const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class Management extends Component {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
  render() {
    return (
        <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="50">Tom</Menu.Item>
              <Menu.Item key="49">Bill</Menu.Item>
              <Menu.Item key="51">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: 'red', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              style = {{marginLeft:'24px'}}
            />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: 'pink', minHeight: 860,
          }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Management;
