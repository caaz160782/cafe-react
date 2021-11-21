import { Link } from 'react-router-dom';
import styles from './Nav.module.scss'
import ShoppingCard from '../ShoppingCard/ShoppingCard';

const Nav = ({onPlusProduct,onTotalProduct,onEmptyCar}) => {
    return (
    <div className={styles.main}>
      <nav className={styles.navigation}>
         <ul>
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/coffe">Coffe</Link></li>
            <li><Link to="/cake">Cake</Link></li>
            <li><Link to="/carshop"><i className="fas fa-shopping-cart">
                                        <ShoppingCard onPlusProduct={onPlusProduct}
                                                      onTotalProduct={onTotalProduct}
                                                    />
                                    </i>
                                    </Link></li>
            <li><Link to="#"><i className="fas fa-trash" onClick={onEmptyCar}> </i> </Link></li>
          </ul>
      </nav>
   </div>
  )
}

export default Nav
