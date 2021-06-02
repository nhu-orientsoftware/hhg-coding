import { notification } from 'antd';


const openNotification = (type: string, message: string) => {
  notification.open({
    message:
      `${message}!`,
    duration: 2,
    className: `notification-${type}`,
    placement: 'topRight'
  });
};

export default openNotification;