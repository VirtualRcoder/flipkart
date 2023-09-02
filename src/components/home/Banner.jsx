import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import {styled} from "@mui/material";

import { bannerData } from "../../constants/Data";

const Image = styled('img')(({theme})=> ({
    width: '100%',
    heught: 280,
    [theme.breakpoints.down('sm')]:{
      objectFit: 'cover',
      height: 180
    }
}))

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function Banner(){

    return(
        <Carousel 
            responsive = {responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            swipeable={false}
            draggable={false}
            keyBoardControl={true}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px">
            {
                bannerData.map(data=>{
                   return( <Image src={data.url} alt="banner"/>);
                })
            }
        </Carousel>

    );
}

export default Banner;