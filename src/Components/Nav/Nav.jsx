import { Link } from 'react-router-dom';
import styles from './Nav.module.scss'
import ShoppingCard from '../ShoppingCard/ShoppingCard';

const Nav = ({onPlusProduct,total}) => {
    return (
    <div className={styles.main}>
      <nav className={styles.navigation}>
         <ul>
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/coffe">Coffe</Link></li>
            <li><Link to="/cake">Cake</Link></li>
           <li ><Link to="/carshop"><i className="fas fa-shopping-cart"><ShoppingCard onPlusProduct={onPlusProduct} total={total}/></i></Link></li>
        {/*    <li><a href="">Cake</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li> 
            <li className="user"><a href="#"><i class="fas fa-user"></i></a></li>
            <li className="user"><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
    <li className="user"><a href="#"><i class="fas fa-sign-out-alt"></i></a></li> */}
          </ul> 
      </nav>
   </div>
  )
}

export default Nav
