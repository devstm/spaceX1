import React, { useEffect } from 'react';
import {
  TwitterOutlined,
  EllipsisOutlined,
  DribbbleOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import { Button, Card } from 'antd';
import MissionModal from './MissionModal';
const { Meta } = Card;

interface IProps {
  data: {
    id: number;
    twitter: string;
    wikipedia: string;
    website: string;
    name: string;
    description: string;
    payloads: {
      id: number;
      name: string;
      description: string;
      image: string;
      payload: string;
    }[];
    manufacturers: string[];
  };
}

function MyCard({ data }: IProps) {

  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Card
        style={{ width: 300 }}
        actions={[
          <a href={data.twitter} key='twitter'>
            <TwitterOutlined />
          </a>,
          <a href={data.wikipedia} key='wiki'>
            <DribbbleOutlined />
          </a>,
          <a href={data.website} key='wiki'>
            <LinkOutlined />{' '}
          </a>,
          <Button key='more' onClick={() => setShowModal(true)}>
            <EllipsisOutlined key='ellipsis' />
          </Button>,
        ]}
      >
        <Meta title={data.name} description={data.description} />
        <p>Payloads ID : {data.payloads[0].id}</p>
        <p>Manufacturers: {data.manufacturers[0]}</p>
      </Card>
      <MissionModal
        showModal={showModal}
        setShowModal={setShowModal}
        data={data}
      />
    </>
  );
}

export default MyCard;
