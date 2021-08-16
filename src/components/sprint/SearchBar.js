import axios from "axios";
import { useState, useEffect } from 'react';

let AdvData = (props) => {
    const [adv, setAdv] = useState({
        advid: 0,
        advertisetitle: '',
        price: 0,
        advownername: '',
        description: ''
    });

    useEffect(
        () => {
            setAdv({
                advid: 0,
                advertisetitle: '',
                price: 0,
                advownername: '',
                description: ''
            }
            );

        }, []);

    const handleAdvertiseSearch = (event) => {
        console.log(adv.advid);
        setAdv({
            ...adv,
            [event.target.name]: event.target.value
        });
    };

    const searchProduct = (event) => {
        // console.log(event.target.advid.name);

        axios.get(`/buyer/sendMessage`, msg)
            .then((response) => {
                console.log(response.data.name);
            }).catch((error) => {
                console.log(error.message)
            });


        event.preventDefault();
    }

    return (


        <div>
            <form className="input-group" >

                <input class="form-control rounded "
                    type="text"
                    id="advertisetitle"
                    placeholder="Mobile,Laptop,Car,Bike"
                    name="advertisetitle"
                />
                <button type="submit" class="btn btn-outline-white  bg-warning">Search</button>
            </form>
        </div>


    );

}

export default SearchBar;