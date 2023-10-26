import React from 'react'
import './Prices.css'
import PriceTag from '../PriceTag/PriceTag'

import skinnyguy from '../../assets/images/skinny-guy.jpg'
import interguy from '../../assets/images/inter-guy.jpg'
import advancedguy from '../../assets/images/advanced-guy.jpg'

const Prices = () => {

    const beginnerItems = ["Free Hand", "Personal Coach", "Weight Loss"];
    const interItems = ["Free Hand", "Personal Coach", "Weight Loss", "All Classes"];
    const AdvancedItems = ["Free Hand", "Personal Coach", "Weight Loss", "All Classes", "Full Permit"];

  return (
    <div className='prices__container'>
        <h2>Exclusive Pricing Plan</h2>
        <div className="prices_container-content">
            <div className="prices__container-cards">
                <PriceTag img={skinnyguy} title={"Beginners"} price={"39"} content={beginnerItems} />
                <PriceTag img={interguy} title={"Intermediate"} price={"64"} content={interItems} />
                <PriceTag img={advancedguy} title={"Advanced"} price={"100"} content={AdvancedItems} />
            </div>
        </div>
    </div>
  )
}

export default Prices