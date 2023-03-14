import "./Header.css"

function Footer(){
    return(
        <>
        <div class="container-fluid bg-dark text-white" style={{backgroundColor:"black", color:"white"}}>
            <div class="row">
            <div class="col">
                <h3>Main Menu</h3>
                <p>Home</p>
                <p>Our Service</p>
                <p>Our Products</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
            <div class="col">
                <h3>Knowlegde Base</h3>
                <p>Deliver</p>
                <p>Return</p>
                <p>Service</p>
                <p>Discount</p>
                <p>Special Offer</p>
            </div>
            <div class="col">
                <h3>Useful Link</h3>
                <p>Site Map </p>
                <p>Search</p>
                <p>Servive</p>
                <p>Discount</p>
                <p>Review</p>
            </div>
            <div class="col">
                <h3>CONTACT US</h3>
                <p>12,Osunbukola street, Dada estate, Osogbo.</p>
                <p><i class="fas fa-phone-alt"></i>08133433956</p>
                <p><i class="fas fa-envelope"></i>Adesinamariam7@gmail.com</p>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
            </div>
            </div>
        </div>
        
        </>
    )
}
export default Footer;