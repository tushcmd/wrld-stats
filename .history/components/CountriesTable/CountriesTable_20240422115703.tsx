import React, { FC, useState } from 'react'
import { ChevronDownCircle, ChevronUpCircle } from 'lucide-react'
import Link from 'next/link'

const orderBy = (countries, value, direction) => {
    if (direction === "asc") {
        return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
    }

    if (direction === "desc") {
        return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
    }

    return countries;
};

const SortArrow = ({ direction }) => {
    if (!direction) {
        return <></>;
    }

    if (direction === "desc") {
        return (
            <div className='flex justify-center items-center ml-[2px]'>
                <ChevronDownCircle color="inherit" />
            </div>
        );
    } else {
        return (
            <div className='flex justify-center items-center ml-[2px]'>
                <ChevronUpCircle color="inherit" />
            </div>
        );
    }
};




const CountriesTable: FC = () => {
    const [direction, setDirection] = useState();
    const [value, setValue] = useState();

    const orderedCountries = orderBy(countries, value, direction);

    const switchDirection = () => {
        if (!direction) {
            setDirection("desc");
        } else if (direction === "desc") {
            setDirection("asc");
        } else {
            setDirection(null);
        }
    };

    const setValueAndDirection = (value) => {
        switchDirection();
        setValue(value);
    };
    return (
        <div>
            <div className='flex p-5'>
                <div className='flex-1 mr-4'>

                </div>
                <button
                    className='flex-[4] text-muted-foreground font-medium flex justify-center items-center'
                    onClick={() => setValueAndDirection('')}
                >
                    <div>Name</div>
                    {value === 'name' && <SortArrow direction={direction} />}
                </button>
            </div>
        </div>
    )
}

export default CountriesTable;