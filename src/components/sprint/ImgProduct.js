import React, { Component } from 'react';
import Search from './Search';
import history from './history';
import { Link } from "react-router-dom";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/'
import { ImageList } from '@material-ui/core';
import product from './Product';

class ImgProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {


            //  advid:'' ,

            //  textMessage:'',

            product: [],
            searchProduct: ''

        };
    }




    componentDidMount() {
        axios
            .get("/user/seller/getAllAdv")
            .then(response => response.data)
            .then((data) => {
                this.setState({ product: data });
                // console.log(data);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    handleInput = (e) => {
        // this.setState({ searchProduct: e.target.value })
        this.state.filterProduct = this.state.product.filter((e) => {
            this.state.product.advertisetitle = e.target.product.advertisetitle.toLowerCase();
            // return product.advertisetitle.toLowerCase().include(this.state.searchProduct.toLowerCase());
        })
    }

    // handleSubmit = (event) => {
    //     filterProduct = this.state.product.filter((product) => {
    //         return product.advertisetitle.toLowerCase().include(this.state.searchProduct.toLowerCase());

    //     })
    //     event.preventDefault();
    //     // history.push("/ProductsLink");
    // }



    render() {


        return (
            <div>



                <h1>Search Advertise</h1>
                {/* <input className="search-box" onInput={filterCards} placeholder="Search..."/> */}
                <input className="search-box" placeholder="Search..." onChange={this.handleInput} />
                <Search handleInput={this.handleInput} />


                <div>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {this.state.product.map((item, index) => (



                            <div>

                                {/* <section className="py-4" container> */}
                                <ul>


                                    <div className="  col-11 col-md-6 col-lg-3 mx-0 mb-4 ">
                                        <div className="card p-0  overflow-hidden shadow" style={{ width: " 15rem " }} >
                                            <h5 className="card-header text-dark">{item.advertisetitle}</h5>
                                            <img className="card-img-top " src={item.imageUrl} alt="alt message" width="95px" height="130px" ></img>
                                            <div className="card-body bg-white mb-2" >
                                                <p className="card-text">
                                                    AdvID:{item.advid} <br />
                                                    Price:{item.price}₹  <br />
                                                    Description:{item.description} <br />
                                                    OwnerName:{item.advownername}

                                                </p>
                                                {/* <button className="btn btn-success " >Buy</button> */}
                                                {/* <button className="btn btn-success  " onClick={() => history.push ('/Message')}>Buy</button> */}
                                                <button className="btn btn-success "  > <Link className="text-white" to={'/Message'}>Buy</Link></button>
                                            </div>

                                        </div>

                                    </div>
                                </ul>

                            </div>

                        ))}

                    </Grid>
                </div>
            </div>

        );
    }
}

export default ImgProduct;


class ImgProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {


            //  advid:'' ,

            //  textMessage:'',

            product: [],
            searchProduct: ''

        };
    }




    componentDidMount() {
        axios
            .get("/user/seller/getAllAdv")
            .then(response => response.data)
            .then((data) => {
                this.setState({ product: data });
                // console.log(data);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    handleInput = (e) => {
        // this.setState({ searchProduct: e.target.value })
        this.state.filterProduct = this.state.product.filter((e) => {
            this.state.product.advertisetitle = e.target.product.advertisetitle.toLowerCase();
            // return product.advertisetitle.toLowerCase().include(this.state.searchProduct.toLowerCase());
        })
    }

    // handleSubmit = (event) => {
    //     filterProduct = this.state.product.filter((product) => {
    //         return product.advertisetitle.toLowerCase().include(this.state.searchProduct.toLowerCase());

    //     })
    //     event.preventDefault();
    //     // history.push("/ProductsLink");
    // }



    render() {


        return (
            <div>



                <h1>Search Advertise</h1>
                {/* <input className="search-box" onInput={filterCards} placeholder="Search..."/> */}
                <input className="search-box" placeholder="Search..." onChange={this.handleInput} />
                <Search handleInput={this.handleInput} />


                <div>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {this.state.product.map((item, index) => (



                            <div>

                                {/* <section className="py-4" container> */}
                                <ul>


                                    <div className="  col-11 col-md-6 col-lg-3 mx-0 mb-4 ">
                                        <div className="card p-0  overflow-hidden shadow" style={{ width: " 15rem " }} >
                                            <h5 className="card-header text-dark">{item.advertisetitle}</h5>
                                            <img className="card-img-top " src={item.imageUrl} alt="alt message" width="95px" height="130px" ></img>
                                            <div className="card-body bg-white mb-2" >
                                                <p className="card-text">
                                                    AdvID:{item.advid} <br />
                                                    Price:{item.price}₹  <br />
                                                    Description:{item.description} <br />
                                                    OwnerName:{item.advownername}

                                                </p>
                                                {/* <button className="btn btn-success " >Buy</button> */}
                                                {/* <button className="btn btn-success  " onClick={() => history.push ('/Message')}>Buy</button> */}
                                                <button className="btn btn-success "  > <Link className="text-white" to={'/Message'}>Buy</Link></button>
                                            </div>

                                        </div>

                                    </div>
                                </ul>

                            </div>

                        ))}

                    </Grid>
                </div>
            </div>

        );
    }
}

export default ImgProduct;
























import history from './history';
import { Link } from "react-router-dom";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/'
import { ImageList } from '@material-ui/core';
import product from './Product';

import axios from "axios";
import { useState, useEffect } from 'react';

let ImgProduct = (props) => {
    const [product, setProduct] = useState({
        // add fields here 
    });
    // const [product, setProduct] = useState({product}); // try this, if the above useState does not work 

    useEffect(
        () => {
            axios.get(`/urlForAllTheProducts/}`)
                .then(
                    (response) => {
                        setProduct(response.data);
                        console.log(product.productName);
                    }
                )
                .catch((error) => {
                    console.log(error.message);
                });
        }, []);

    const handleProduct = (event) => {
        console.log(product.productName); // for testing, remove afterwards 
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        });
    };

    const submitGetProductByName = (event) => {
        axios.get(`/urlForTheProduct/${product.productName}`)
            .then(
                (response) => {
                    setProduct(response.data);
                    console.log(product.productName);
                }
            )
            .catch((error) => {
                console.log(error.message);
            });
        event.preventDefault();
    }

    return (
        <div>
            <p>Product Component</p>
            <div>
                <p>Search Product here - </p>
                <form onSubmit={submitGetProductByName} className="form form-group">
                    <div>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            value={product.productName}
                            onChange={handleProduct}
                            className="form-control mb-2"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
                <div>
                    // put products cards code here
                </div>
            </div>
        </div>
    )
}
export default ImgProduct;




