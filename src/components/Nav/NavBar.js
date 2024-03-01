//Css File
import './Nav.css'
//React Router Dom
import {Link} from 'react-router-dom'
//React Icons
import {FaSearch,FaShoppingCart} from 'react-icons/fa'
import {BsBookmarkHeartFill} from 'react-icons/bs'
import{BiSolidLogInCircle} from 'react-icons/bi'
import { Container } from 'react-bootstrap'


function NavBar() {
    return (
        // Start NavBar 
        <nav >
            <Container className='NavBar'>
            {/* logo section */}
            <Link to='/' className='logo'>
                <h1>shop<sub>AM</sub></h1>
            </Link>
            <div className='icons-nav'>
                <FaSearch className='icon search'></FaSearch>
                <BsBookmarkHeartFill className='icon wishlist'></BsBookmarkHeartFill>
                <FaShoppingCart className='icon cart'></FaShoppingCart>
                <BiSolidLogInCircle className='icon login'></BiSolidLogInCircle>
            </div>
            </Container>
        </nav>
    )
}

export default NavBar