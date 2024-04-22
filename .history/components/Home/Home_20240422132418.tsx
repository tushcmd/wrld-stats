import { useState } from "react";
import CountriesTable from "../CountriesTable/CountriesTable";
import SearchInput from "../SearchInput/SearchInput";


export default function Home() {
    const [keyword, setKeyword] = useState("");

    const filteredCountries = countries.filter(
        (country) =>
            country.name.toLowerCase().includes(keyword) ||
            country.region.toLowerCase().includes(keyword) ||
            country.subregion.toLowerCase().includes(keyword)
    );

    const onInputChange = (e) => {
        e.preventDefault();

        setKeyword(e.target.value.toLowerCase());
    };

    return (
        //No of countries + InputContainer
        <div className="">
            {/* No of countries*/}
            <div className="">
                {countries.length} countries
            </div>
            <SearchInput onChange={onInputChange} />
        </div>
        <CountriesTable countries={filteredCountries} />
    )
}

export const getStaticProps = async () => {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await res.json();

    return {
        props: {
            countries,
        },
    };
};