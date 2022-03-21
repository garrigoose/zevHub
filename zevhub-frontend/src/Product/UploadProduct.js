import { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import FileUpload from '../Components/utilities/FileUpload';
import Axios from 'axios';

const Categories = [
  { key: 1, value: 'Cars' },
  { key: 2, value: 'Bikes' },
  { key: 3, value: 'Scooters' },
  { key: 4, value: 'Skateboards' },
  { key: 5, value: 'Accessories' },
];

function UploadProductPage(props) {
  const [TitleValue, setTitleValue] = useState('');
  const [DescriptionValue, setDescriptionValue] = useState('');
  const [PriceValue, setPriceValue] = useState(0);
  const [CategoryValue, setCategoryValue] = useState(1);

  const [Images, setImages] = useState([]);

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };

  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value);
  };

  const onCategoriesSelectChange = (event) => {
    setCategoryValue(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    if (
      !TitleValue ||
      !DescriptionValue ||
      !PriceValue ||
      !CategoryValue ||
      !Images
    ) {
      return alert('fill all the fields first!');
    }

    const variables = {
      writer: props.user.userData._id,
      title: TitleValue,
      description: DescriptionValue,
      price: PriceValue,
      images: Images,
      continents: CategoryValue,
    };

    Axios.post('/api/product/uploadProduct', variables).then((response) => {
      if (response.data.success) {
        alert('Product Successfully Uploaded');
        props.history.push('/');
      } else {
        alert('Failed to upload Product');
      }
    });
  };

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 level={2}> Upload Product</h2>
      </div>

      <Form onSubmit={onSubmit}>
        {/* DropZone */}
        <FileUpload refreshFunction={updateImages} />

        <br />
        <FormControl
          onChange={onTitleChange}
          value={TitleValue}
          placeholder='Title'
          aria-label='Title'
          className='submit-form'
        />
        <br />
        <textarea
          rows={7}
          cols={80}
          label='Description'
          placeholder='Description'
          onChange={onDescriptionChange}
          value={DescriptionValue}
          className='submit-form'
        ></textarea>
        <br />
        <label>Price($)</label>
        <FormControl
          onChange={onPriceChange}
          value={PriceValue}
          type='number'
          className='submit-form'
        />
        <br />
        <label>Category</label>

        <select onChange={onCategoriesSelectChange} value={CategoryValue}>
          {Categories.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}{' '}
            </option>
          ))}
        </select>
        <br />
        <br />

        <Button variant='outline-success' onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
