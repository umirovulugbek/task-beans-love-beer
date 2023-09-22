import { useEffect, useState } from "react";
import BeerCard from "../components/BeerCard";
import Loyout from "../components/loyout/Loyout";
import { HomeStyles } from "../styles/HomeStyle";

export default function Favourites() {
  const [basket, setBasket] = useState([]);

  useEffect(() => {}, [basket]);

  let sbaskets = localStorage.getItem("sbaskets");
  sbaskets = JSON.parse(sbaskets?.length ? sbaskets : "[]");

  const addFavourites = (items) => {
    let sbaskets = localStorage.getItem("sbaskets");
    sbaskets = JSON.parse(sbaskets?.length ? sbaskets : "[]");

    if (
      sbaskets
        ?.map(({ id }) => {
          return id;
        })
        .includes(items?.id)
    ) {
      const b = sbaskets;
      let l = [];
      b.forEach((obj) => {
        if (obj?.id !== items?.id) {
          l.push(obj);
        }
      });

      sbaskets = l;
      localStorage.setItem("sbaskets", JSON.stringify(sbaskets));
      setBasket(l);
    } else {
      sbaskets = [...sbaskets, items];
      localStorage.setItem("sbaskets", JSON.stringify(sbaskets));
      setBasket(sbaskets);
    }

    {
      console.log(sbaskets, "s");
    }
  };

  return (
    <div>
      <HomeStyles>
        <Loyout>
          <h1>Favoruties</h1>
          <div className={sbaskets?.length > 0 ? "beersC" : ""}>
            {sbaskets?.length > 0 ? (
              sbaskets?.map((items) => {
                return (
                  <>
                    <BeerCard
                      addFavourites={addFavourites}
                      // sbaskets={sbaskets}
                      items={items}
                    />
                  </>
                );
              })
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <img style={{ width: "300px" }} src="/5203299.jpg" alt="" />
              </div>
            )}
          </div>
        </Loyout>
      </HomeStyles>
    </div>
  );
}
