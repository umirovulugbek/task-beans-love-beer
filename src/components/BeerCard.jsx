/* eslint-disable react/prop-types */

// import { useSelector } from "react-redux";
// import { useState } from "react";
import { BeerCardStyles } from "../styles/BeerCardStyle";
import { AiOutlineStar } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";

export default function BeerCard(props) {
  const { items, addFavourites = () => {} } = props;

  let sbaskets = localStorage.getItem("sbaskets");
  sbaskets = JSON.parse(sbaskets?.length ? sbaskets : "[]");

  return (
    <BeerCardStyles key={items?.id}>
      <div className="favoruties" onClick={() => addFavourites(items)}>
        {sbaskets
          .map(({ id }) => {
            return id;
          })
          .includes(items?.id) ? (
          <AiTwotoneStar size={25} color="#11dcb4" />
        ) : (
          <AiOutlineStar size={25} color="#11dcb4" />
        )}
      </div>

      <div className="beer-card-items">
        <div className="beer-card-items__img">
          <img
            src={items?.image_url}
            alt=""
            onError={(e) => {
              e.target.src =
                "https://www.svgindianmarket.com/images/thumbs/default-image_510.png";
              // some replacement image
            }}
          />
        </div>
        <div className="beer-card-items-texts">
          <b>{items?.name}</b>
          <p style={{ marginTop: "5px" }}>
            {items?.description?.length > 200
              ? items?.description.slice(0, 200) + "..."
              : items?.description}
          </p>
        </div>
      </div>
    </BeerCardStyles>
  );
}
