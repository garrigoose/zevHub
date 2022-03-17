import React from 'react';
import Image from 'react-bootstrap/Image';
import HomePageCards from './HomePageCards';
import CategoryAccordian from './CategoryAccordian';

const HomePage = () => {
  return (
    <div>
      <Image
        fluid
        src='https://media-exp1.licdn.com/dms/image/C561BAQEiUDTmePo9Eg/company-background_10000/0/1622346071419?e=1647565200&v=beta&t=LnHDstR6LNEWMYFTVMgKrtn4FyW5B_4pzrT9K7hPnec'
      ></Image>
      <HomePageCards />
      <CategoryAccordian />
    </div>
  );
};

export default HomePage;
