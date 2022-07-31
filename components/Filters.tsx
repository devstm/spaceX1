import React from 'react';
import MyInput from './Input';
import MySelect from './Select';
import style from '../styles/Launches.module.css';

interface FilterProps {
  filter: any;
  setFilter: (value: any) => void;
  generateArrayOfYears: () => string[];
}

function FilterSection({
  generateArrayOfYears,
  setFilter,
  filter,
}: FilterProps) {
  const onChange = (value: string) => {
    setFilter({ ...filter, [value.split('-')[1]]: value.split('-')[0] });
  };
  const onSearch = (value: string) => {
    setFilter({ ...filter, rocket_name: value });
  };
  return (
    <div className={style['filter-container']}>
      <h2 className={style['filter-main-text']}>filter-heading</h2>
      <div className={style['filter-options']}>
        <span className={style['filter-input-text']}>
          search-by-main-service
        </span>
        <MySelect
          onChange={onChange}
          options={generateArrayOfYears()}
          filterAttr={'launch_year'}
        />
        <MySelect
          onChange={onChange}
          options={['all', true, false]}
          filterAttr={'reuseable'}
        />
        <MySelect
          onChange={onChange}
          options={['all', true, false]}
          filterAttr={'fairings'}
        />
        <MySelect
          onChange={onChange}
          options={['all', true, false]}
          filterAttr={'launch_success'}
        />
        <MyInput onSearch={onSearch} />
      </div>
    </div>
  );
}

export default FilterSection;
