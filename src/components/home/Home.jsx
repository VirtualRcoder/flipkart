import { useEffect } from "react";

import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";

import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

function Home() {
  const { products } = useSelector(state => state.getProducts);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  }, [dispatch])
  return (
    <>
      <NavBar />
      <Box>
        <Banner />
      </Box>
    </>
  );
}

export default Home;
