import { Input } from 'antd';
const { Search } = Input;

interface InputProps {
    onSearch: (value: string) => void;
}
function MyInput({ onSearch }: InputProps) { 
    return ( 
        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
     );
}

export default MyInput;