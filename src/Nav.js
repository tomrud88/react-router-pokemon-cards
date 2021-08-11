import { Link } from 'react-router-dom';

const Nav = () =>{
    return(
        <div>
            <nav>
                <ul>
                    <Link to='/shop'>
                    <li>Shop</li>
                    </Link>
                    <Link to='/about'>
                    <li>About</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;