import React, { Component } from 'react';
import PageHeader from "../components/PageHeader";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { TextField, Button } from '@material-ui/core';
import Table from 'react-bootstrap/Table';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';
import $ from 'jquery';

export default class Belanja extends Component {

    constructor(){
        super()
        this.state = {
            produk: [
                { nama: "Pizza", harga: 2000, jumlah: 1},
				{ nama: "Donat", harga: 12000, jumlah: 1},
				{ nama: "Bolu", harga: 3000, jumlah: 3},
				{ nama: "Makaron", harga: 5000, jumlah: 2},
				{ nama: "Kue Tart", harga: 30000, jumlah: 5},
            ],

            // MANAGE LIST
            action: "",
            nama: "",
            harga: 0,
            jumlah: 0,
            total: 0,
            selectedItem: null,

            // FITUR SEACRH
            keyword: "",
            filterProduk: [],
        }
        this.state.filterProduk = this.state.produk
    }

        Add = () => {
            $("#modal_produk").modal("show")
            // update state
            this.setState({
                nama:  "",
                harga: "",
                jumlah: "",
                //value add
                action: "insert"
            })
        }    

        Edit = (item) => {
            $("#modal_produk").modal("show")
            //update state
            this.setState({
                nama: item.nama,
                harga: item.harga,
                jumlah: item.jumlah,
                //value ad
                action: "update",
                selectedItem: item
            })
        }

        Save = (event) => {
            
            let tempProduk = this.state.produk
    
            if (this.state.action === "insert") {
                //tambah data
                tempProduk.push({
                    nama: this.state.nama,
                    harga: this.state.harga,
                    jumlah: this.state.jumlah
                })
            } else if (this.state.action === "update") {
                //simpan data
                let index = tempProduk.indexOf(this.state.selectedItem)
                tempProduk[index].nama = this.state.nama
                tempProduk[index].harga = this.state.harga
                tempProduk[index].jumlah = this.state.jumlah
            }
            //ubah dari index -> tempProduk
            this.setState({prod: tempProduk})
            //tutup komponen modal
            $("#modal_produk").modal("hide")

            //manggil fungsi total
            this.totalHarga()

            event.preventDefault();
        }

        Drop = (item) => {
            //konfirmasi
            if(window.confirm("Apakah anda yakin ingin menghapus data ini?")){
                //tampung data
                let tempProduk = this.state.produk
                //posisi index data akan hapus
                let index = tempProduk.indexOf(item)
                //hapus data
                tempProduk.splice(index, 1)
                this.setState({prod: tempProduk})
            }
            //manggil fungsi total
            this.totalHarga()
        }

        searching = event => {
            if(event.keyCode === 13){
                // 13 adalah kode untuk tombol enter
        
                let keyword = this.state.keyword.toLowerCase()
                let tempProduk = this.state.produk
                let result = tempProduk.filter(item => {
                    return item.nama.toLowerCase().includes(keyword) 
                })
        
                this.setState({filterProduk: result})
            }
        }

        totalHarga = () => {

            let tempProduk = this.state.produk
            let totalHarga = 0;
            tempProduk.map(item => {
                totalHarga += (item.harga * item.jumlah)
            })
    
            //masukkan ke dalam state
            this.setState({total: totalHarga})

        }

    render(){
        return(
            <>
            <PageHeader 
                title="List Belanja Kue"
                subTitle="Penilaian Keterampilan React JS List"
                icon={<ShoppingCartIcon fontSize="large"/>}
            />
            
            <div className="container" style={{ margin: 'auto auto 50 50' }} >
                    {/* SEARCHING */}
                    <div style={{ margin: '3% auto 3% auto' }}>
                        <TextField 
                            id="outlined-required" 
                            label="Cari yuk" 
                            variant="outlined"  
                            //action
                            value={this.state.keyword} 
                            onChange= {ev => this.setState({keyword: ev.target.value})}
                            onKeyUp={ev => this.searching(ev)}
                            style={{ width: '850px'}}
                        />

                        <Button 
                            variant="outlined" 
                            color="primary" 
                            onClick={() => this.Add()} 
                            style={{ margin: '10px 10px 0 20px' }}
                        >
                            + Tambah Data
                        </Button>
                        <Button 
                            variant="outlined" 
                            onClick={() => this.totalHarga()}
                            style={{ margin:'10px 10px 0 0', color:'green'}}
                        >
                            Total
                        </Button>
                    </div>
                   
                   {/* TABLE */}
                    <div className="row" > 
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Nama Barang</th>
                                    <th>Harga</th>
                                    <th>Jumlah</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { 
                                    this.state.filterProduk.map( (item,index) => (
                                        <tr key={index}>
                                            <td>{item.nama}</td>
                                            <td>{item.harga}</td>
                                            <td>{item.jumlah}</td>
                                            <td>{item.harga * item.jumlah}</td>
                                            <td>
                                            <Button variant="contained"  onClick={() => this.Edit(item)} style={{  backgroundColor:'#c6cbef', margin: ' auto 13px'}}><CreateIcon /></Button>
                                            <Button variant="contained" onClick={() => this.Drop(item)} style={{  backgroundColor:'#fc9d9d'}}><ClearIcon /></Button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </div>

                    {/* Total belanja */}
                    <div className="row" >
                        <h4 style={{margin:'auto 13px'}}>Total Belanja: Rp </h4>
                        <input 
                        type="number" 
                        className="form-control mb-3" 
                        value={this.state.total}
                        // onChange={() => this.totalHarga()}
                        readOnly
                        style={{width: '200px', margin:'10px auto auto -5px'}}
                        />
                    </div>

                    {/* FORM */}
                    <div className="modal" id="modal_produk">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header" style={{textAlign: 'center', margin: '20px 20px 0 10px'}} >
                                    <h4>Form Belanja</h4>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={ ev => this.Save(ev)} style={{textAlign: 'center',}}>
                                        
                                        <TextField 
                                            id="outlined-required" 
                                            label="Barang" 
                                            variant="outlined"
                                            //value add
                                            value={ this.state.nama }
                                            onChange={ ev => this.setState({ nama: ev.target.value}) }
                                            required
                                            style={{marginBottom: '20px'}}
                                        /><br />
                                        <TextField 
                                            id="outlined-required" 
                                            label="Harga" 
                                            variant="outlined"
                                            //value add
                                            value={ this.state.harga }
                                            onChange={ ev => this.setState({ harga: ev.target.value}) }
                                            required
                                            style={{marginBottom: '20px'}}
                                        /><br />
                                        <TextField 
                                            id="outlined-required" 
                                            label="Jumlah" 
                                            variant="outlined"
                                            //value add
                                            value={ this.state.jumlah }
                                            onChange={ ev => this.setState({ jumlah: ev.target.value}) }
                                            required
                                        />
                                        <div style={{margin: '25px auto'}}>
                                            <Button variant="contained" color="primary" type="submit">
                                                Submit
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </>
        )
    }
}