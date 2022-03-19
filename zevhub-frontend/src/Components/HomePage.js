import React from 'react';
import Image from 'react-bootstrap/Image';
import HomePageCards from './HomePageCards';
import CategoryAccordian from './CategoryAccordian';
import headerImage from '../Images/94797-tesla-roadster-tesla-electric-cars-4k-hd.jpeg';
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>
      <div id='header-image-div'>
        <Image src={headerImage} id='header-image'></Image>
      </div>
      <HomePageCards />
      <CategoryAccordian />
    </div>
  );
};

export default HomePage;
