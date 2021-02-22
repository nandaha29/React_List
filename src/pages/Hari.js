import React, { Component } from 'react';
import PageHeader from "../components/PageHeader";
import { TextField, Button } from '@material-ui/core';
import Table from 'react-bootstrap/Table';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';
import EventIcon from '@material-ui/icons/Event';
import $ from 'jquery';

export default class Hari extends Component {
    
    constructor(){ 
        super() 
        this.state = {
            hb: [
                { nama: "Hari Peringatan Laut dan Samudera nasional", tgl: "15 januari" },
                { nama: "Hari Lahan Basah Sedunia",tgl: "2 Februari" },
                { nama: "Hari Peduli Sampah Nasional", tgl: "15 januari" },
                { nama: "Hari Hutan Sedunia", tgl: "21 Maret" },
                { nama: "Hari Bumi", tgl: "22 April" },
            ],

            // MANAGE LIST
            action: "",
            nama: "",
            tgl: "",
            selectedItem: null,

            // FITUR SEACRH
            keyword: "",
            filterHb: [],
        }
        this.state.filterHb = this.state.hb
    }

    Add = () => {
        $("#modal_hb").modal("show")
        // update state
        this.setState({
            nama:  "",
            tgl: "",
            //value add
            action: "insert"
        })
    }

    Edit = (item) => {
        $("#modal_hb").modal("show")
        //update state
        this.setState({
            nama: item.nama,
            tgl: item.tgl,
            //value ad
            action: "update",
            selectedItem: item
        })
    }

    Save = (event) => {
        event.preventDefault();

        let tempHb = this.state.hb

        if (this.state.action === "insert") {
            //tambah data
            tempHb.push({
                nama: this.state.nama,
                tgl: this.state.tgl
            })
        } else if (this.state.action === "update") {
            //simpan data
            let index = tempHb.indexOf(this.state.selectedItem)
            tempHb[index].nama = this.state.nama
            tempHb[index].tgl = this.state.tgl
        }
        //ubah dari index -> tempHb
        this.setState({hari: tempHb})
        //tutup komponen modal
        $("#modal_hb").modal("hide")
    }

    Drop = (item) => {
        //konfirmasi
        if(window.confirm("Apakah anda yakin ingin menghapus data ini?")){
            //tampung data
            let tempHb = this.state.hb
            //posisi index data akan hapus
            let index = tempHb.indexOf(item)
            //hapus data
            tempHb.splice(index, 1)
            this.setState({hari: tempHb})
        }
    }

    searching = event => {
        if(event.keyCode === 13){
            // 13 adalah kode untuk tombol enter
    
            let keyword = this.state.keyword.toLowerCase()
            let tempHb = this.state.hb
            let result = tempHb.filter(item => {
                return item.nama.toLowerCase().includes(keyword) 
            })
    
            this.setState({filterHb: result})
        }
    }

    render() { 
        return (  
            <>
                <PageHeader 
                    title="List Hari Besar Lingkungan"
                    subTitle="Penilaian Keterampilan React JS List"
                    icon={<EventIcon fontSize="large"/>}
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
                            style={{ width: '850px', margin: '0 0 auto auto'}}
                        />

                        <Button 
                            variant="outlined" 
                            color="primary" 
                            onClick={() => this.Add()} 
                            style={{ margin: '10px 10px 0 60px' }}
                        >
                            + Tambah Data
                        </Button>
                    </div>
                   
                   {/* TABLE */}
                    <div className="row" > 
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Hari Besar Lingkungan</th>
                                    <th>Tanggal Masehi</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { 
                                    this.state.filterHb.map( (item,index) => (
                                        <tr key={index}>
                                            <td>{item.nama}</td>
                                            <td>{item.tgl}</td>
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

                    {/* FORM */}
                    <div className="modal" id="modal_hb">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header" style={{textAlign: 'center', margin: '20px 20px 0 10px'}} >
                                    <h4>Form Hari Besar</h4>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={ ev => this.Save(ev)} style={{textAlign: 'center',margin: '25px auto'}}>
                                        
                                        <TextField 
                                            id="outlined-required" 
                                            label="Hari besar" 
                                            variant="outlined"
                                            //value add
                                            value={ this.state.nama }
                                            onChange={ ev => this.setState({ nama: ev.target.value}) }
                                            required
                                        />
                                        <TextField
                                            id="date"
                                            label="Birthday"
                                            type="date"
                                            defaultValue="2017-05-24"
                                            InputLabelProps={{
                                            shrink: true,
                                            }}
                                            //value add
                                            value={ this.state.tgl }
                                            onChange={ ev => this.setState({ tgl: ev.target.value}) }
                                            required
                                            style={{ margin: 'auto 13px'}}
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
        );
    }
}