import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../constants/Data"; 

const Component = styled(Box)`
    display: flex;
    margin: 55px 130px 0px 130px;
    justify-content: space-between;
`;

const Container = styled(Box)`
    padding: 12px 8px;
`;

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;

function NavBar(){

    return(
        <Component>
            {
                navData.map((data) => {
                    return(
                        <Container>
                            <img src={data.url} alt="nav" style={{ width: 64 }}/>
                            <Text>{data.text}</Text>
                        </Container>
                    );
                })
            }
        </Component>
    );
}

export default NavBar;