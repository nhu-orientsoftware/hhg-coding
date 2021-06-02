import {
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

interface ISidebarLinks {
    key: string;
    icon: any;
    path: string;
    text: string;
}
const siderbarLinks: ISidebarLinks[] = [
  {
    key: '1',
    icon: UserOutlined,
    path: '/',
    text: 'Dashboard'
  },
  {
    key: '2',
    icon: VideoCameraOutlined,
    path: '/managerment',
    text: 'Managerment'
  }
];

export default siderbarLinks;