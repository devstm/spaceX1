import { Select } from 'antd';
import React from 'react';

const { Option } = Select;

interface MySelectProps {
  onChange(e: any): any;
  options: any[];
  filterAttr: string;
}
function MySelect({ onChange, options, filterAttr }: MySelectProps) {
  return (
    <Select onChange={onChange} defaultValue={'all'}>
      {options?.map((option: any, index: number) => (
        <Option key={index} value={`${option}-${filterAttr}`}>
          {option.toString()}
        </Option>
      ))}
    </Select>
  );
}

export default MySelect;
