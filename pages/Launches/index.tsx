import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import {
  SettingOutlined,
  RedditOutlined,
  LinkOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { AppDispatch } from '../../redux/store';
import {
  filterLaunches,
  filterState,
  generateArrayOfYears,
  getLaunches,
  getNeededDataFromObject,
} from './services/launchesServices';
import { MyTable, MyButton, MyModal, FilterSection } from '../../components';
import style from '../../styles/launches.module.css';
const columnsT = [
  {
    id: '1',
    title: 'Launch Site',
    dataIndex: 'launch_site',
  },
  {
    id: '2',
    title: 'Rocket',
    dataIndex: 'rocket_name',
  },
  {
    id: '3',
    title: 'Rocket Country',
    dataIndex: 'rocket_country',
  },
  {
    id: '4',
    title: 'Launch date',
    dataIndex: 'launch_date_utc',
    render: (date: string) => date.split('T')[0],
  },
  {
    id: '5',
    title: 'Mission name',
    dataIndex: 'mission_name',
  },
  {
    id: '6',
    title: 'Is upcoming',
    dataIndex: 'upComing',
    render: (value: boolean) => (value ? 'Yes' : 'No'),
  },
  {
    id: '7',
    title: 'Media',
    render: () => (
      <>
        <RedditOutlined />
        <LinkOutlined style={{ margin: '0px 10px' }} />
        <YoutubeOutlined />
      </>
    ),
  },
];

function Launches() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, pending, error } = useSelector((store: any) => store.launches);
  const [showModal, setShowModal] = useState(false);
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const [filter, setFilter] = useState(filterState);
  const [columns, setColumns] = useState(columnsT);
  const filteredData = useMemo(
    () =>
      data
        .map((el: any, index: number) => getNeededDataFromObject(el, index))
        .filter((el: any) => filterLaunches(el, filter)),
    [filter, data]
  );

  useEffect(() => {
    dispatch(getLaunches());
  }, [dispatch]);

  if (pending) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div className={style['container']}>
      <FilterSection
        generateArrayOfYears={generateArrayOfYears}
        setFilter={setFilter}
        filter={filter}
      />

      <div className={style['table']}>
        <MyTable
          columns={columns}
          hiddenColumns={hiddenColumns}
          data={filteredData}
        />

        <MyButton
          text={'Setting'}
          icon={<SettingOutlined />}
          onClick={() => {
            setShowModal(true);
          }}
        />
      </div>

      {columns.length && (
        <MyModal
          setHiddenColumns={setHiddenColumns}
          showModal={showModal}
          hiddenColumns={hiddenColumns}
          setShowModal={setShowModal}
          cols={columns}
          setColumns={setColumns}
        />
      )}
    </div>
  );
}

export default Launches;
