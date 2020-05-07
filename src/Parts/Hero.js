import React from 'react'

import banner from 'assets/images/banner.png'
import IconBag from 'assets/images/icons/bag.svg'
import IconCamera from 'assets/images/icons/camera.svg'
import IconGps from 'assets/images/icons/gps.svg'

import Button from 'element/Button'
import FormatNumber from 'utility/FormatNumber'

export default function Hero(props) {

  function showMostPick () {
    window.scrollTo( {
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth"
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 522 }}>
          <h1 className="h2 font-weight-bold line-height-1 mb-3">
            Forget Busy Work <br />
            Start Next Vacation
          </h1>
          <p className="mb-3 font-weight-light text-gray-500 w-75">
              we provide what you need to enjoy your holiday with family. time to
              make another menorable moments.
          </p>
            <Button
             className="btn px-5"
             hasShadow
             isPrimary
             onClick={showMostPick}
             >
              Show me now
            </Button>

            <div className="row" style={{marginTop: 80}}>
              <div className="col-auto" style={{marginRight: 30}}>
                <img
                 width="40"
                 height="40"
                 src={IconBag} 
                 alt={`${props.data.travelers} bag`} />  
                <h6 className="mt-1">
                  {FormatNumber(props.data.travelers)} {""}
                   <span className="text-gray-500 font-weight-light">travelers</span>
                </h6>
              </div>  
              <div className="col-auto" style={{marginRight: 30}}>
                <img
                 width="40"
                 height="40"
                 src={IconCamera} 
                 alt={`${props.data.treasures} camera`} />  
                <h6 className="mt-1">
                  {FormatNumber(props.data.treasures)} {""} <span className="text-gray-500 font-weight-light">treasures</span>
                </h6>
              </div>
              <div className="col-auto" >
                <img
                 width="40"
                 height="40"
                 src={IconGps} 
                 alt={`${props.data.cities} gps`} />  
                <h6 className="mt-1">
                  {FormatNumber(props.data.cities)} {""} <span className="text-gray-500 font-weight-light">cities</span>
                </h6>
              </div>  
            </div>  
        </div>  

        {/* /banner/background */}

        <div className="col-6 pl-5">
          <div style={{width: 520, height: 410 }} >
          <img src={banner} alt="hero" className="img-fluid position-absolute" style={{margin: " -30px, 0 0 0 -30px", zIndex:1}} />
          </div>
      </div>
      </div>
    </section>
  
  );
}







