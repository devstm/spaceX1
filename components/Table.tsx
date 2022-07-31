import React, { useState } from 'react';
import { Table } from 'antd';
import LaunchInfoModal from './LaunchInfoModal';
interface IColumn {
  title: string;
  dataIndex: string;
}

interface IProps {
  data: any;
  columns: any;
  hiddenColumns: string[];
}

function MyTable({ data, hiddenColumns, columns }: IProps) {
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  return (
    <>
      <Table
        columns={columns.filter(
          (column: IColumn) => hiddenColumns.indexOf(column.title) === -1
        )}
        dataSource={data}
        onRow={(record) => {
          return {
            onClick: () => {
              setSelectedRow(record);
              setShowModal(true);
            },
          };
        }}
      />
      {selectedRow && (
        <LaunchInfoModal
          showModal={showModal}
          setShowModal={setShowModal}
          data={selectedRow}
        />
      )}
    </>
  );
}

export default MyTable;
