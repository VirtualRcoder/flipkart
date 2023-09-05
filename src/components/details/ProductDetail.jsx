import {
  Typography,
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

import { LocalOffer as Badge } from "@mui/icons-material";

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyleBadge = styled(Badge)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;

const ColumnText = styled(TableRow)`
  font-size: 14px;
  & > td: {
    font-size: 14px;
  }
`;

function ProductDetail({ product }) {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ margin: 5, color: "#878787", fontSize: 14 }}>
        8 Ratings & 1 Reviews
        <Box component="span">
          <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>
          {product.price.discount}
        </Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyleBadge />
          Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI
          Txns, Min Txn Value ₹10,000T&C
        </Typography>
        <Typography>
          <StyleBadge />
          Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI
          Txns, Min Txn Value ₹10,000T&C
        </Typography>
        <Typography>
          <StyleBadge />
          Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 9 months EMI
          Txns, Min Txn Value ₹10,000T&C
        </Typography>
        <Typography>
          <StyleBadge />
          Special PriceGet extra 24% off (price inclusive of cashback/coupon)T&C
        </Typography>
        <Typography>
          <StyleBadge />
          Partner OfferSign-up for Flipkart Pay Later & get free Times Prime
          Benefits worth ₹10,000* Know More
        </Typography>
        <Typography>
          <StyleBadge />
          Partner OfferPurchase now & get 1 surprise cashback coupon in
          FutureKnow More
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>No</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: "#2874f0" }}>
                SuperComNet
              </Box>
              <Typography>GST Invoice Available</Typography>
              <Typography>14 days return guarantee</Typography>
              <Typography>
                Veiw more sellers starting from ₹{product.price.cost}
              </Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell colspan={2}>
              <img src={adURL} style={{ width: 390 }} alt="flipkartpoints" />
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
}

export default ProductDetail;
