import { useCallback, useState } from 'react';
import {
  Button, Pagination, Table
} from 'antd';
import columns from './renderColumns';
import useFetchData from '../../hooks/useFetchData';
import { getEmployees } from '../../api';
import AdditionEmployeeModal from './components/AdditionEmployeeModal';

type TEmployee = {
  id?: number;
  createdAt?: number;
  name?: string;
  email?: string;
  position?: string;
};

interface IData {
  data: Array<TEmployee>;
  total: number;
}

type TParams = {
  limit: number,
  page: number
}

function Managerment() {
  const {
    data, isLoading, paging, onPaging, goToFirstPage
  } = useFetchData<IData, TParams>((params: TParams) => (getEmployees(params)));
  const [isVisibleEmployeeModal, setIsVisibleEmployeeModal] = useState<boolean>(false);

  const handleAddEmployee = useCallback(() => {
    setIsVisibleEmployeeModal(true);
  }, []);

  const handleCloseModal = useCallback(() => setIsVisibleEmployeeModal(false), []);
  const handleAddNewSuccess = useCallback(() => {
    goToFirstPage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Button type="primary" className="managerment-button" onClick={handleAddEmployee}>+ Add new</Button>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data?.data}
        pagination={false}
        loading={isLoading}
      />
      <Pagination
        className="managerment-pagination"
        defaultCurrent={1}
        current={paging.page}
        pageSize={paging.limit}
        total={data ? +data.total : 0}
        onChange={onPaging}
      />
      <AdditionEmployeeModal
        visible={isVisibleEmployeeModal}
        onCloseModal={handleCloseModal}
        addEmployeeSuccess={handleAddNewSuccess}
      />
    </div>
  );
}

export default Managerment;
