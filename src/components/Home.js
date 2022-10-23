import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        alt=""
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />
      <div className="home__row">
        <Product
          id="123456"
          title="this is a react demo book this is a react demo book this is a react demo book "
          price={12}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="123456"
          title="this is a react demo book this is a react demo book this is a react demo book "
          price={12}
          rating={5}
          image="https://m.media-amazon.com/images/I/41VcqwZ-O8L._AC_SY200_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123456"
          title="this is a react demo book this is a react demo book this is a react demo book "
          price={12}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
        />
        <Product
          id="123456"
          title="this is a react demo book this is a react demo book this is a react demo book "
          price={12}
          rating={5}
          image="https://m.media-amazon.com/images/I/41VcqwZ-O8L._AC_SY200_.jpg"
        />
        <Product
          id="123456"
          title="this is a react demo book this is a react demo book this is a react demo book "
          price={12}
          rating={5}
          image="https://m.media-amazon.com/images/I/41VcqwZ-O8L._AC_SY200_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123456"
          title="this is a react demo book this is a react demo book this is a react demo book "
          price={12}
          rating={5}
          image="https://m.media-amazon.com/images/I/91weq3mK2TL._AC_SY200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
