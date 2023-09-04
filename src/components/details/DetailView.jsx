import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { getProductDetails } from "../../redux/actions/productActions.js";
import ActionItem from "./ActionItem";

function DetailView() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, []);

  return (
    <Box>
      {product && Object.keys(product).length && (
        <Box>
          <Box>
            <ActionItem product={product} />
          </Box>
          <Box>
            <Typography>{product.title.longTitle}</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default DetailView;
