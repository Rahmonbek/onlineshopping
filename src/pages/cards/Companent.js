import React, { Component } from "react";
import { Container } from "react-bootstrap";
// import foto from '../images/foto.jpeg'
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
    ],
  };

  render() {
      const {product}=this.state;
    return (
      <div>
         <Container> 
          <div className='cards'>
          {
              product && Array.isArray(product) ? product.map(item=>{
                return (
                    <div>
                        {/* <img src={foto} /> */}
                       <h2>{item.name}</h2>
                    </div>

                )
              }):""
          }
        </div>
        </Container>
      </div>
    );
  }
}
