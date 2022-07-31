import { Badge, Modal, Progress } from 'antd';

interface IProps {
  data: {
    reuseable: boolean;
    mission_name: string;
    launch_site: string;
    launch_date_utc: string;
    upComing: boolean;
    launch_year: string;
    launch_success: boolean;
    rocket_country: string;
    cost_per_launch: string;
    success_rate: number;
    description: string;
    rocket_name: string;
    diameter: {
      meters: number;
      feet: number;
    };
    mass: {
      kg: number;
      lb: number;
    };
  };
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

function LaunchInfoModal({ data, showModal, setShowModal }: IProps) {
  return (
    <Modal visible={showModal} onCancel={() => setShowModal(false)} footer=''>
      <Badge.Ribbon
        text={data.reuseable ? 'active' : 'inactive'}
        color={data.reuseable ? 'green' : 'red'}
      >
        <h3>Mission Name: {data.mission_name} </h3>
        <h5>Launch Site: {data.launch_site} </h5>
        <h5>Launch Date: {data.launch_date_utc} </h5>
        <h5>Is Upcoming: {data.upComing ? 'true' : 'false'} </h5>
        <h5>Launch Year: {data.launch_year}</h5>
        <h5>Launch Success: {data.launch_success ? 'true' : 'false'} </h5>
        <h5>Rocket Country: {data.rocket_country} </h5>
        <h5>Cost: {data.cost_per_launch} </h5>
        <h5>Success Rate:</h5>
        <Progress type='circle' percent={data.success_rate} width={80} />
        <h5>Rocket Description: {data.description} </h5>
        <h5>Rocket Mass: {data.mass.kg} </h5>
        <h5>Rocket Diameter: {data.diameter.meters} </h5>
        <h5>Rocket Name: {data.rocket_name} </h5>
        <h5>Is Reusable: {data.reuseable ? 'true' : 'false'} </h5>
      </Badge.Ribbon>
    </Modal>
  );
}

export default LaunchInfoModal;
