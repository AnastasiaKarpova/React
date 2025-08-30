import './Footer.css';

function Footer(){
    const today = new Date();
    const year = today.getFullYear();
    return(
        <footer>
            <p>Copyright {'\u00A9'} - {year}</p>
        </footer>
    )
}

export default Footer;