import React, { useState } from 'react';
import { Segmented } from 'antd';
import Shirt from '../Shirt/Shirt';
import Accessories from '../Accessories/Accessories';
import Winter from '../Winter-collection/Winter';
import './BrowseMore.css'
const BrowseMore = () => {
  const [selectedOption, setSelectedOption] = useState('Shirt');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
    <div className="heading">
      <div className="sec1"><span>Exclusive Product</span></div>
      <div className="sec2"><span>Browse More</span> <hr className='hih' /></div>
    </div>
    <div className="main-Browse">
      <Segmented id='Browse'
        options={['Shirt', 'Accessories', 'Winter Collection']}
        value={selectedOption}
        onChange={handleOptionChange}
        block
      /></div>
      {selectedOption === 'Shirt' && <Shirt />}
      {selectedOption === 'Accessories' && <Accessories />}
      {selectedOption === 'Winter Collection' && <Winter />}
    </>
  );
};

export default BrowseMore;
