import { Modal } from 'antd';
import DragAndDrop from './DragAndDrop';
import MyTransfer from './Transfer';

interface IProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  hiddenColumns: string[];
  setHiddenColumns: any;
  cols: any;
  setColumns: any;
}

function MyModal({
  showModal,
  setShowModal,
  hiddenColumns,
  setHiddenColumns,
  cols,
  setColumns,
}: IProps) {
  return (
    <Modal footer='' visible={showModal} onCancel={() => setShowModal(false)}>
      <MyTransfer
        hiddenColumns={hiddenColumns}
        setHiddenColumns={setHiddenColumns}
      />
      <DragAndDrop
        columns={cols.filter(
          (column: any) => hiddenColumns.indexOf(column.id) === -1
        )}
        setColumns={setColumns}
      />
    </Modal>
  );
}

export default MyModal;
