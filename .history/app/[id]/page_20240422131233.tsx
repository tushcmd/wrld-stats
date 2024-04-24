import React, { FC } from 'react'

const getCountry = async (id) => {
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);

    const country = await res.json();

    return country;
};

const Country: FC = () => {
    return (
        <div>page</div>
    )
}

export default Country;