import {AppBar, Toolbar, Box, Typography, styled} from '@mui/material';
import Search from "./Search";
import CustomButton from "./CustomButton";

const styledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
`;

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const CustomButtonWrapper = styled(Box)`

`;

function Header(){
    const logo = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const sub = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return(
        <AppBar>
            <Toolbar style={{minHeight: 55}}>
                <Component>
                    <img src={logo} alt = 'logo' style={{width: 75}}/>
                    <Box    style={{display: 'flex'}}>
                        <SubHeading>
                            Explore&nbsp;
                            <Box component="span" style={{color: '#ffe500'}}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={sub} alt="sub-logo"/>
                    </Box>
                </Component>         
                <Search/>      
                <Box style={{marginLeft: '5%'}}>
                    <CustomButton/>
                </Box> 
            </Toolbar>
        </AppBar>
    )
}

export default Header;