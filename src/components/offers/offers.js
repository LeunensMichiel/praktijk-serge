import React from "react"
import { OfferWrapper } from "./offersStyles"
import Info from "../../assets/icons/info.svg"

const Offers = () => {
  return (
    <OfferWrapper>
      <div className="offer-item">
        <h4>Beweginsstelsel</h4>
        <button>
          <Info />
        </button>
      </div>
      <div className="offer-item">
        <h4>Sportletsels</h4>
        <Info />
      </div>
      <div className="offer-item">
        <h4>Manuele Therapie</h4>
        <Info />
      </div>
      <div className="offer-item">
        <h4>Rug- en nekrevalidatie</h4>
        <Info />
      </div>
      <div className="offer-item">
        <h4>Steunzolen</h4>
        <Info />
      </div>
      <div className="offer-item">
        <h4>EMG</h4>
        <Info />
      </div>
      <div className="offer-item">
        <h4>ESWT</h4>
        <Info />
      </div>
      <div className="offer-item">
        <h4>Infiltraties</h4>
        <Info />
      </div>
    </OfferWrapper>
  )
}

export default Offers
