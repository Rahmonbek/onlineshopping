import React, { Component } from "react";
import { Container } from "react-bootstrap";
import foto from '../../images/foto.jpeg'
import './Comp.css'
export default class Companent extends Component {
  state = {
    product: [
      {
        id: 1,
        name: "Samsung Galaxy A32 4/64GB",
        ichki_xotira: "4",
        tashqi_xotira: "64GB",
        narx: "3 002 000",
        kafolat: "12",
        version: "Android 11",
      },
      {
        id: 1,
        name: "Samsung Galaxy A32 4/64GB",
        ichki_xotira: "4",
        tashqi_xotira: "64GB",
        narx: "3 002 000",
        kafolat: "12",
        version: "Android 11",
      },
      {
        id: 1,
        name: "Samsung Galaxy A32 4/64GB",
        ichki_xotira: "4",
        tashqi_xotira: "64GB",
        narx: "3 002 000",
        kafolat: "12",
        version: "Android 11",
      },
      {
        id: 1,
        name: "Samsung Galaxy A32 4/64GB",
        ichki_xotira: "4",
        tashqi_xotira: "64GB",
        narx: "3 002 000",
        kafolat: "12",
        version: "Android 11",
      },
      {
        id: 1,
        name: "Samsung Galaxy A32 4/64GB",
        ichki_xotira: "4",
        tashqi_xotira: "64GB",
        narx: "3 002 000",
        kafolat: "12",
        version: "Android 11",
      },
    ],
  };

  render() {
      const {product}=this.state;
    return (
      <div>
         <div className='bigSheet'> 
         <div className='first'>
           Assalomu aleykum
         </div>
          <div className='second'>
          {
              product && Array.isArray(product) ? product.map(item=>{
                return (
                    <div className='cards'>
                        <img src={foto} className='foto' />
                       <h2>{item.name}</h2>
                    </div>

                )
              }):""
          }
        </div>
        </div>
      </div>
    );
  }
}
