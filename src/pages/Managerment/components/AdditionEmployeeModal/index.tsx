import { FC } from 'react';
import { Modal } from 'antd';
import AdditionEmployeeForm from '../AdditionEmployeeForm';

interface IAdditionEmployeeModal {
  visible: boolean;
  onCloseModal: () => void;
  addEmployeeSuccess: () => void;
}

const AdditionEmployeeModal: FC<IAdditionEmployeeModal> = ({
  visible,
  onCloseModal,
  addEmployeeSuccess
}) => (
  <div>
    <Modal
      title="Add new employee"
      className="add-employee-modal"
      centered
      visible={visible}
      onCancel={onCloseModal}
    >
      <AdditionEmployeeForm onCloseModal={onCloseModal} onAddEmployeeSuccess={addEmployeeSuccess} />
    </Modal>
  </div>
);

export default AdditionEmployeeModal;
