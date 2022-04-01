import React from 'react';

const CarData = (data) => {
  return (
    <div className='container'>
      {data.map((item) => (
        <>
          <div className='row' key={item._id}>
            <div className='col-sm'>Make</div>
            <div className='col-sm'>{item.make}</div>
          </div>
          <div className='row'>
            <div className='col-sm'>Model</div>
            <div className='col-sm'>{item.model}</div>
          </div>
          <div className='row'>
            <div className='col-sm'>Year</div>
            <div className='col-sm'>{item.year}</div>
          </div>
          <div className='row'>
            <div className='col-sm'>MPG</div>
            <div className='col-sm'>{item.mpg}</div>
          </div>
        </>
      ))}
    </div>
  );
};

export default CarData;
