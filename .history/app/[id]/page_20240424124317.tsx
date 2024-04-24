import React, { FC } from 'react'

const getCountry = async (id) => {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);

    const country = await res.json();

    return country;
};

const Country: FC = () => {
    return (
        <div>page</div>
    )
}

export default Country;