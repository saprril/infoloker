import React, { useState } from 'react';
import { CardsDefault } from '../components/CardsDefault';
import { DefaultPagination } from '../components/DefaultPagination';
import { jobs } from '../jobData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

export function Home() {
    const [search, setSearch] = useState('');
    const [minUsia, setMinUsia] = useState(0);
    const [maxUsia, setMaxUsia] = useState(999);
    const [currentPage, setCurrentPage] = useState(1);
         
    return (
        <>
            <div className="mx-auto max-w-screen-xl">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Cari Nama Loker"
                        className="border border-gray-300 rounded-md w-full h-10 pl-10 pr-4 mt-7 inline-block"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="mt-3 flex items-center">
                    <input
                        type="number"
                        placeholder="Usia Minimum"
                        className="border border-gray-300 rounded-md h-10 pl-10 pr-4 ml-[-13px]"
                        onChange={(e) => setMinUsia(e.target.value)}
                    />
                </div>
                <div className="mt-2 flex items-center">
                    <input
                        type="number"
                        placeholder="Usia Maksimum"
                        className="border border-gray-300 rounded-md h-10 pl-10 pr-4 ml-[-13px]"
                        onChange={(e) => setMaxUsia(e.target.value)}
                    />
                </div>
                <div className="grid grid-cols-3 gap-7">
                    {jobs
                        .filter((job) => job.title.toLowerCase().includes(search.toLowerCase()))
                        .filter(
                            (job) => job.minUsia >= minUsia
                        )
                        .filter(
                            (job) => job.maxUsia <= maxUsia
                        )
                        .map((job, index) => (
                            <CardsDefault
                                key={index}
                                title={job.title}
                                company={job.company}
                                location={job.location}
                                maxSalary={job.maxSalary}
                                likes={job.likes}
                                no={job.no}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="mx-auto max-w-screen-xl px-80 mt-8">
                <DefaultPagination pageCount={10}/>
            </div>
        </>
    );
}
