import './Header.css';

import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Box from '@mui/material/Box';

export const Header = () => {
    return (
        <div className='header'>
        <Container maxWidth="lg">
            <div  className='header-wrapper'>
            <div className='header-logo'>millious</div>
            <div className='header-menu'>
                <div>Home <KeyboardArrowDownOutlinedIcon /></div>
                <div>Booking <KeyboardArrowDownOutlinedIcon /></div>
                <div>Shop <KeyboardArrowDownOutlinedIcon /></div>
                <div>Blog <KeyboardArrowDownOutlinedIcon /></div>
                <div>Features <KeyboardArrowDownOutlinedIcon /></div>
            </div>
            <div className='header-symbol'>
                <div><SearchIcon /></div>
                <div><AccountBalanceWalletOutlinedIcon /></div>
                <div><ShoppingCartOutlinedIcon /></div>
            </div>
            </div>
        </Container>
            <div className='box'>
            <Box sx={{ bgcolor: '#f2f2f2', height: '15vh' }} />
            </div>
        </div>
    )
};