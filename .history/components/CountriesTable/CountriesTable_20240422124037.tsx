import React, { FC, useState } from 'react'
import { ChevronDownCircle, ChevronUpCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image';

interface Country {
    name: string;
    population: number;
    area: number;
    gini: number;
    flag: string;
    alpha3Code: string;
}

const orderBy = (countries: Country[], value: keyof Country, direction: 'asc' | 'desc' | null) => {
    if (direction === "asc") {
        return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
    }
    if (direction === "desc") {
        return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
    }
    return countries;
};

interface SortArrowProps {
    direction: 'asc' | 'desc' | null;
}

const SortArrow: FC<SortArrowProps> = ({ direction }) => {
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

interface CountriesTableProps {
    countries: Country[];
}

const CountriesTable: FC<CountriesTableProps> = ({ countries }) => {
    const [direction, setDirection] = useState<'asc' | 'desc' | null>(null);
    const [value, setValue] = useState<keyof Country | null>(null);

    const orderedCountries = orderBy(countries, value || 'name', direction);

    const switchDirection = () => {
        if (!direction) {
            setDirection("desc");
        } else if (direction === "desc") {
            setDirection("asc");
        } else {
            setDirection(null);
        }
    };

    const setValueAndDirection = (value: keyof Country) => {
        switchDirection();
        setValue(value);
    };

    return (
        <div>
            {/*Heading*/}
            <div className='flex p-5'>
                {/*Heading flag*/}
                <div className='flex-1 mr-4'>
                </div>
                {/*Heading name*/}
                <button
                    className='flex-[4] text-muted-foreground font-medium flex justify-center items-center'
                    onClick={() => setValueAndDirection('name')}
                >
                    <div>Name</div>
                    {value === 'name' && <SortArrow direction={direction} />}
                </button>
                {/*Heading population*/}
                <button
                    className='flex-[4] text-muted-foreground font-medium flex justify-center items-center'
                    onClick={() => setValueAndDirection('population')}
                >
                    <div>Population</div>
                    {value === 'population' && <SortArrow direction={direction} />}
                </button>
                {/*Heading area*/}
                <button
                    className='flex-[4] text-muted-foreground font-medium flex justify-center items-center'
                    onClick={() => setValueAndDirection('area')}
                >
                    <div>
                        Area (km<sup style={{ fontSize: "0.5rem" }}>2</sup>)
                    </div>
                    {value === 'area' && <SortArrow direction={direction} />}
                </button>
                {/*Heading gini*/}
                <button
                    className='flex-[4] text-muted-foreground font-medium flex justify-center items-center'
                    onClick={() => setValueAndDirection('gini')}
                >
                    <div>Gini</div>
                    {value === 'gini' && <SortArrow direction={direction} />}
                </button>
            </div>
            {/* Table rows */}
            {orderedCountries.map((country) => (
                <Link href={`/country/${country.alpha3Code}`} key={country.name}>
                    <div className='flex p-5 items-center bg-card rounded-[8px] mb-4'>
                        {/* Countryflag */}
                        <div className='flex-[1] mr-4'>
                            <Image
                                src={country.flag}
                                alt={country.name}
                                fill
                                className="object-contain rounded-[2px]"
                            />
                        </div>
                        {/*name*/}
                        <div className='flex-[4] items-start'>{country.name}</div>
                        {/*population*/}
                        <div className='flex-[4]'>{country.population}</div>
                        {/*area*/}
                        <div className='flex-[4]'>{country.area || 0}</div>
                        {/*gini*/}
                        <div className='flex-[4]'>{country.gini || 0}</div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CountriesTable;