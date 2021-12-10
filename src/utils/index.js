import {Select} from 'antd';
import ReactCountryFlag from 'react-country-flag';

const { Option } = Select;


export function renderSelectOptions(options = []) {
    return options.map(function(ele, i) {
      return (
        <option key={i} value={ele.code}>
          {/* <ReactCountryFlag countryCode={ele?.flag} /> */}
          {`${ele.country} ${ele.code}`}
        </option>
      );
    });
  }