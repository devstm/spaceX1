import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MyCard } from '../../components/';
import { AppDispatch } from '../../redux/store';
import { getMissions } from './services/missionsServices';
import style from '../../styles/Missions.module.css';

function Mission() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, pending, error } = useSelector((store: any) => store.missions);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  if (pending) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    data && (
      <div className={style['card-container']}>
        {data.map((item: any, index: number) => (
          <div key={index} className={style['card']}>
            <MyCard data={item} />
          </div>
        ))}
      </div>
    )
  );
}

export default Mission;
