import React from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
import Item from "../Item";
import one from '../assets/Images/one.jpeg'
import two from '../assets/Images/two.jpeg'
import three from '../assets/Images/three.png'
import four from '../assets/Images/four.jpeg'
import five from '../assets/Images/five.jpeg'
import six from '../assets/Images/six.png'
import seven from '../assets/Images/seven.png'
import { Link } from 'react-router-dom'



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function ExpTeachers() {

  return (
    <>
      <div className="container mt-5">
        <h1 id="expteacher" style={{ textAlign: "center" }}>Our <span style={{ color: '#FDAC4F' }}> <u>Teachers</u> </span></h1>
        <div className="row">
          <div className="col mt-5 py-5">
            <Carousel breakPoints={breakPoints} >
              <Link to={'/englishteach'}>
                <img style={{ borderRadius: '10%' }} width={'200px'} src={one} alt="" />
              </Link>
              <Link to={'/mathteach'}>
                <img style={{ borderRadius: '10%' }} width={'250px'} src={two} alt="" />
              </Link>
              <Link>
                <img style={{ borderRadius: '10%' }} width={'250px'} src={three} alt="" />
              </Link>
              <Link>
                <img style={{ borderRadius: '10%' }} width={'200px'}src={four} alt="" />
              </Link>
              <Link>
                <img style={{ borderRadius: '10%' }} width={'180px'} src={five} alt="" />
              </Link>
              <Link>
                <img style={{ borderRadius: '10%' }} width={'180px'} src={six} alt="" />
              </Link>
              <Link>
                <img style={{ borderRadius: '10%' }} width={'200px'} src={seven} alt="" />
              </Link>

            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpTeachers;