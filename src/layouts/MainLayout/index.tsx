import { FC } from 'react';
import { Layout, Menu } from 'antd';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import siderbarLinks from './siderbarLinks';

const { Header, Sider, Content } = Layout;
const MainLayout: FC = ({ children }) => (
  <Layout className="main-layout__wrapper">
    <Header className="main-layout__header">
      <div className="logo main-layout__header__logo">
        Employee managerment
      </div>
    </Header>
    <Layout className="main-layout__site-layout">
      <Sider className="main-layout__sider" trigger={null}>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          {siderbarLinks.map((siderbarLink) => (
            <Menu.Item key={siderbarLink.key} icon={<siderbarLink.icon />}>
              <NavLink to={siderbarLink.path}>{siderbarLink.text}</NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Content
        className="main-layout__site-layout__content"
      >
        {children}
      </Content>
    </Layout>
  </Layout>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainLayout;
