import { useState } from 'react';

import { Dialog, Box, TextField, Typography, Button, styled } from "@mui/material";

const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
`;

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height: 83%;
    width: 28%;
    padding: 45px 35px;
    & > p, & >h5{
        color: #fff;
        font-weight: 600;
    }
`;

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div, & > button, & > p{
        margin-top: 20px
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #fb641b;
    color: #fff;
    height: 48px;
    border-radius: 2px;`

const OtpButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
    font-size: 14px;
    color: #878787;
`;

const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    cursor: pointer;
    font-weight: 600;
`;

const accountInitialValues = {
    login:{
        view: 'login',
        heading: 'Login',
        subheading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
        view: 'signup',
        heading: "Looks like you're new here!",
        subheading: 'Sign up with your mobile number to get started'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

function LoginDialog({open, setOpen}){
    const handleClose = ()=>{
        setOpen(false)
        toggleAccount(accountInitialValues.login)
    }
    
    const [account, toggleAccount] = useState(accountInitialValues.login)
    const [signup, setSignup] = useState(signupInitialValues)

    const toggleSignup = () =>{
        toggleAccount(accountInitialValues.signup)
    }

    const handleInput = (e) =>{
        setSignup({...signup, [e.target.name]: e.target.value})
    }

    const
    return(
        <Dialog open={open} onClose={() => handleClose()} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{margin: 20}}>{account.subheading}</Typography>
                    </Image>

                    { account.view == 'login' ?
                        <Wrapper>
                            <TextField variant="standard" label="Enter Email/Mobile Number"/>
                            <TextField variant="standard" label="Enter Password"/>
                            <Text> By continuing, you agree to flipkart terms and services </Text>
                            <LoginButton>Login</LoginButton>
                            <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <OtpButton>Request Otp</OtpButton>
                            <CreateAccount onClick={() => toggleSignup()}>New to flipkart? Create Account</CreateAccount>
                        </Wrapper>
                        :
                         <Wrapper>
                            <TextField variant="standard" label="Enter Firstname" name="firstname" onChange={(e)=> handleInput(e)}/>
                            <TextField variant="standard" label="Enter Lastname" name="lastname" onChange={(e)=> handleInput(e)}/>
                            <TextField variant="standard" label="Enter Username" name="username" onChange={(e)=> handleInput(e)}/>
                            <TextField variant="standard" label="Enter Email" name="email" onChange={(e)=> handleInput(e)}/>
                            <TextField variant="standard" label="Enter Password" name="password" onChange={(e)=> handleInput(e)}/>
                            <TextField variant="standard" label="Enter Phone" name="phone" onChange={(e)=> handleInput(e)}/>
                            <LoginButton>Continue</LoginButton>
                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    );
}

export default LoginDialog;