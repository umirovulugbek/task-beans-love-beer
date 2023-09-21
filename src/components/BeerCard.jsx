/* eslint-disable react/prop-types */

import { BeerCardStyles } from "../styles/BeerCardStyle"
import { AiOutlineStar } from 'react-icons/ai';

export default function BeerCard(props) {
     const {items} = props 
   return (
    <BeerCardStyles >
        <div className="favoruties">
                <AiOutlineStar size={25} color="#11dcb4"/>
        </div>
       <div className="beer-card-items">
          <div className="beer-card-items__img">
                <img src={items?.image_url} alt="" />
          </div>
          <div className="beer-card-items-texts">
                <b >{items?.name}</b>
                <p style={{marginTop:'5px'}}>{items?.description?.length > 200 ? items?.description.slice(0 , 200)+'...' : items?.description}</p>
          </div>
       </div>
    </BeerCardStyles>
  )
}
