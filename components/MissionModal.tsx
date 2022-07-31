import { Modal } from 'antd';

interface MissionModalProps {
  data: any;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}
function MissionModal({ showModal, setShowModal, data }: MissionModalProps) {
  return (
    <Modal footer='' visible={showModal} onCancel={() => setShowModal(false)}>
        <h1>{data.description}</h1>
    </Modal>
  );
}

export default MissionModal;
