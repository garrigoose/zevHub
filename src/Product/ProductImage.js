import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { Image } from 'react-bootstrap';

function ProductImage(props) {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    if (props.detail.images && props.detail.images.length > 0) {
      let images = [];

      props.detail.images &&
        props.detail.images.map((item) => {
          images.push({
            original: `http://localhost:5000/${item}`,
            thumbnail: `http://localhost:5000/${item}`,
          });
        });
      setImages(images);
    }
  }, [props.detail]);

  return (
    <div>
      {/* <ImageGallery items={Images} />
       */}
      <Image
        className='img-fluid'
        src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80'
      />
    </div>
  );
}

export default ProductImage;
