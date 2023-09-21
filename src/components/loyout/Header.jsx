import { Link, NavLink } from "react-router-dom";
import { HeaderStyle } from "../../styles/loyout/HeaderStyle";



export default function Header() {
  return (
    <HeaderStyle>
             <div className="header">
                      <div className="container">
                        <div className="header_items">
                           <Link to={'/'} className="logo">	
                             Beens Love Beer
                           </Link>
                           <ul>
                      <li>
                        <NavLink to={'/'}>Home</NavLink>
                      </li>
                      <li>
                        <NavLink to={'/favourites'}>Favourites</NavLink>
                      </li>
                           </ul>
                        </div>
                  </div>
             </div>
      </HeaderStyle>
  )
}
