import { Transfer } from 'antd';
import React, { useState } from 'react';

interface RecordType {
  key: string;
  title: string;
  description: string;
}
const titles = [
  'Launch Site',
  'Rocket',
  'Rocket Country',
  'Launch date',
  'Mission name',
  'Is upcoming',
];
const mockData: RecordType[] = titles.map((el, i) => ({
  key: el,
  title: el,
  description: `description of content${i + 1}`,
}));

const initialTargetKeys = mockData
  .filter((item) => Number(item.key) > 6)
  .map((item) => item.key);

function MyTransfer({ setHiddenColumns, hiddenColumns }: any) {
  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(hiddenColumns);

  const onChange = (
    nextTargetKeys: string[],
  ) => {
    setTargetKeys(nextTargetKeys);
    setHiddenColumns(nextTargetKeys);
  };

  const onSelectChange = (
    sourceSelectedKeys: string[],
    targetSelectedKeys: string[]
  ) => {
    setHiddenColumns([...sourceSelectedKeys, ...targetSelectedKeys]);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  return (
    <Transfer
      dataSource={mockData}
      titles={['Source', 'Target']}
      targetKeys={targetKeys}
      selectedKeys={selectedKeys}
      onChange={onChange}
      onSelectChange={onSelectChange}
      render={(item) => item.title}
    />
  );
}

export default MyTransfer;
