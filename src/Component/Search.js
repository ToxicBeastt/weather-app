import React, { useState } from 'react';
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_HEADER, GEO_API_URL } from "../Api/Api";
import axios from "axios";

const Search = (( {onSearchChange} ) => {
    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return axios.get(GEO_API_URL, { headers: GEO_API_HEADER, params: { namePrefix: inputValue } })
            .then(function (response) {
                return {
                    options: response.data.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.country}`,
                        }
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };
    return (
        <AsyncPaginate
            placeholder="Cari Kota"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
});

export default Search;