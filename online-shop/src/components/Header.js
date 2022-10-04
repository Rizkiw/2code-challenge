import './Header.css';

import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

export const Header = () => {
    return (
        <>
        <Container maxWidth="lg">
            <div  className='header-wrapper'>
            <div className='header-logo'>millious</div>
            <div className='header-menu'>
                <div>Home</div>
                <div>Booking</div>
                <div>Shop</div>
                <div>Blog</div>
                <div>Features</div>
            </div>
            <div className='header-symbol'>
                <div><SearchIcon /></div>
                <div><AccountBalanceWalletOutlinedIcon /></div>
                <div><ShoppingCartOutlinedIcon /></div>
            </div>
            </div>
        </Container>
        </>
    )
}