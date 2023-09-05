import {AppBar, Toolbar, Box, Typography, styled, IconButton, Drawer, List, ListItem} from '@mui/material';
import {Menu} from '@mui/icons-material';

import Search from "./Search";
import CustomButton from "./CustomButton";

import { Link } from 'react-router-dom';
import { useState } from 'react';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    text-decoration: none;
    color: inherit;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
`;

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const CustomButtonWrapper = styled(Box)(({ theme })=>({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]:{
        display: 'none'
    }
}));

const MenuButton = styled(IconButton)(({ theme })=>({
    display: 'none',
    [theme.breakpoints.down('md')]:{
        display: 'block'
    }
}));

function Header(){
    const logo = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const sub = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleOpen = ()=>{
        setOpen(true)
    }

    const handleClose = ()=>{
        setOpen(false)
    }

    const lists = ()=>{
        return (
            <Box style={{ width: 200 }} onClick={handleClose}>
                <List>
                    <ListItem button>
                        <CustomButton />
                    </ListItem>
                </List>
            </Box>
        )
    }
    return(
        <StyledHeader>
            <Toolbar style={{minHeight: 55}}>
                <MenuButton color="inherit" onClick={handleOpen}>
                    <Menu/>
                </MenuButton>

                <Drawer open={open} onClose={handleClose}> 
                    {lists()}
                </Drawer>

                <Component to="/">
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
                <CustomButtonWrapper style={{marginLeft: '5%'}}>
                    <CustomButton/>
                </CustomButtonWrapper> 
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;