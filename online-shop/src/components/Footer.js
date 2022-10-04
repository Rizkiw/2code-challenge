import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
    return (
        <div className='footer'>
        <Container>
            <div className='footer-wrapper'>
                <div className='footer-logo'>millious</div>
                <div className='footer-social'>
                    <InstagramIcon />
                </div>
            </div>
        </Container>
        </div>
    )
};