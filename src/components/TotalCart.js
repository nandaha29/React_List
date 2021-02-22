import React, { Component } from "react";

export default class TotalCart extends Component {
  constructor() {
    super()
    this.state = {
        cart: [], // untuk menyimpan list cart
        total: 0, // untuk menyimpan data total belanja
    }
  } 

  initCart = () => {
    // memanggil data cart pada sessionStorage
    let tempCart = []
    if(sessionStorage.getItem("cart") !== null){
        tempCart = JSON.parse(sessionStorage.getItem("cart"))
    }

    // kalkulasi total harga
    let totalHarga = 0;
    tempCart.map(item => {
        totalHarga += (item.harga * item.jumlahBeli)
    })

    // memasukkan data cart, user, dan total harga pada state
    this.setState({
        cart: tempCart,
        total: totalHarga
    })
  }
  
    componentDidMount(){
      this.initCart()
    }


  render() {
    return (
        <>
        
        </>
    )
  }
} 
