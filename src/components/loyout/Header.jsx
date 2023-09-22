import { Link, NavLink } from "react-router-dom";
import { HeaderStyle } from "../../styles/loyout/HeaderStyle";

export default function Header() {
  let sbaskets = localStorage.getItem("sbaskets");
  sbaskets = JSON.parse(sbaskets?.length ? sbaskets : "[]");

  return (
    <HeaderStyle>
      <div className="header">
        <div className="container">
          <div className="header_items">
            <Link to={"/"} className="logo">
              Beens Love Beer
            </Link>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/favourites"}>
                  Favourites{" "}
                  {sbaskets?.length > 0 ? (
                    <span className="favoritescount"> {sbaskets?.length}</span>
                  ) : null}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
}
