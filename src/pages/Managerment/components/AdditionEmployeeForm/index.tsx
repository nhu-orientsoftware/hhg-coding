import { FC, useCallback, useEffect } from 'react';
import {
  Form, Input, Button
} from 'antd';
import { REQUEST_STATUS, TYPE_ALERT } from '../../../../constants';
import { openNotification } from '../../../../utils';
import { addEmployee } from '../../../../api';
import usePostData from '../../../../hooks/usePostData';

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 16,
  },
};
interface IAdditionEmployeeForm {
  onCloseModal: () => void;
  onAddEmployeeSuccess: () => void;
}

const AdditionEmployeeForm: FC<IAdditionEmployeeForm> = ({ onCloseModal, onAddEmployeeSuccess }) => {
  const [form] = Form.useForm();
  const { status, isLoading, postData } = usePostData();

  const onFinish = useCallback((values: any) => {
    postData(addEmployee(values));
  }, [postData]);

  useEffect(() => {
    if (status === REQUEST_STATUS.SUCCESS) {
      openNotification(TYPE_ALERT.SUCCESS, 'Add employee success!');
      onCloseModal();
      onAddEmployeeSuccess();
      form.resetFields();
    } else if (status === REQUEST_STATUS.ERROR) {
      openNotification(TYPE_ALERT.ERROR, 'Add employee fail!');
    }
  }, [status, onAddEmployeeSuccess, onCloseModal, form]);

  return (
    <Form
      {...layout}
      form={form}
      name="add-form"
      onFinish={onFinish}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            type: 'email',
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Position"
        name="position"
        rules={[
          {
            required: true,
            message: 'Please input your position!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AdditionEmployeeForm;