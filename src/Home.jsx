import React from "react";
import "./css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_img"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Amazon Banner"
      />
      <div className="home_row">
        <Product
          id="472398479847"
          image="https://m.media-amazon.com/images/I/81AbJXWCxXL._AC_UL320_.jpg"
          name="Lenovo Flex 5 14\ 2-in-1 Laptop, 14.0\ FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey"
          rating={4}
          price={606.1}
        />
        <Product
          id="847284728429"
          image="https://m.media-amazon.com/images/I/61Un8Q6NsYL._AC_UL320_.jpg"
          name="RCA Tablet Quad-Core 2GB RAM 32GB Storage IPS HD Touchscreen WiFi Bluetooth with Detachable Keyboard Android 9 (Black)"
          rating={4}
          price={119.99}
        />
      </div>

      <div className="home_row">
        <Product
          id="12323424"
          image="https://m.media-amazon.com/images/I/51FfSYWBasL._AC_UL320_.jpg"
          name="EAZOR 64GB USB 2.0 Flash Drive, USB Stick Thumb Drive Rotated Design Memory Stick for PC/Laptop/External Storage Data Jump Drive Photo Stick Digital for Photos/Videos (64GB-3Colors)"
          rating={4}
          price={14.99}
        />
        <Product
          id="6457585653"
          image="https://m.media-amazon.com/images/I/711NKdZK-OL._AC_UL320_.jpg"
          name="TEAMGROUP C183 64GB 2 Pack USB 3.2 Gen 1 (USB 3.1/3.0) USB Flash Thumb Drive, External Data Storage Memory Stick Compatible with Computer/Laptop TC183364GB22 (Black) (64G 2-Pack)"
          rating={4}
          price={12.99}
        />
        <Product
          id="5628956289"
          image="https://m.media-amazon.com/images/I/61MCnLb9aNL._AC_UL320_.jpg"
          name="ZEPLIN ELECTRONICS USB Flash Drives 128GB Thumb Drive Data Storage Device - Black"
          rating={5}
          price={14.99}
        />
      </div>
      <div className="home_row">
        <Product
          id="4747409247"
          image="https://m.media-amazon.com/images/I/518dCHf9TyL._AC_UL320_.jpg"
          name="ViewSonic VA2759-SMH 27 Inch IPS 1080p Frameless LED Monitor with HDMI and VGA Inputs,Black"
          rating={4}
          price={219.99}
        />
      </div>
    </div>
  );
}

export default Home;
