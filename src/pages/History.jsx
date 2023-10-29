/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
    Button,
} from "@material-tailwind/react";
import { CardsDefault } from "../components/CardsDefault";
import { jobs } from '../jobData';
import { Pagination } from "../components/Pagination"; // Import Pagination component
import { CardList } from "../components/CardList";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const History = () => {
    if (!cookies.get("TOKEN")) {
        window.location.href = "/login";
    }
    
    const [showAdminSelection, setShowAdminSelection] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(9);

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = jobs.slice(firstPostIndex, lastPostIndex);

    const renderJobs = () => {
        return (
            <div className="mx-auto max-w-screen-xl">
                <CardList page={currentPosts} />
                <div className='mx-auto max-w-screen-xl px-80 my-8 flex justify-center'>
                        <Pagination 
                            totalPosts={jobs.length} 
                            postPerPage={postPerPage} 
                            setCurrentPage={setCurrentPage}    
                        />
                    </div>
            </div>
        )
    };
    
    const renderJobs2 = () => {
        return (
            <div className="mx-auto max-w-screen-xl">
                <div className="grid grid-cols-3 gap-7">
                    <CardsDefault
                        key={80}
                        title={"Pemain Emyu"}
                        company={"PT Puasa 10 Tahun"}
                        location={"Manchester"}
                        maxSalary={"Rp. 360.000"}
                        likes={200}
                        no={101}
                    />
                </div>
                {/* Tambahkan komponen Pagination di bawah daftar CardsDefault */}
                <div className='mx-auto max-w-screen-xl px-80 my-8 flex justify-center'>
                    <Pagination
                        totalPosts={1} // Jumlah data pada renderJobs2
                        postPerPage={postPerPage}
                        setCurrentPage={setCurrentPage}
                        />
                </div>
            </div>
        )
    };
    
    const renderJobs3 = () => {
        return (
            <div className="mx-auto max-w-screen-xl">
                <div className="grid grid-cols-3 gap-7">
                    <CardsDefault
                        key={100}
                        title={"Pemain Arsenal"}
                        company={"PT Puasa 20 Tahun"}
                        location={"London"}
                        maxSalary={"Rp. 350.000"}
                        likes={120}
                        no={100}
                    />
                </div>
                {/* Tambahkan komponen Pagination di bawah daftar CardsDefault */}
                <div className='mx-auto max-w-screen-xl px-80 my-8 flex justify-center'>
                <Pagination
                    totalPosts={1} // Jumlah data pada renderJobs3
                    postPerPage={postPerPage}
                    setCurrentPage={setCurrentPage}
                />
                </div>
            </div>
        )
    };

    return (
        <div>
            <div className="flex justify-center my-7">
                <Button
                    className="mx-12"
                    color={`${showAdminSelection===1 ? 'red' : ''}`}
                    onClick={() => setShowAdminSelection(1)}
                >
                    Menunggu Seleksi
                </Button>
                <Button
                    className="mx-12"
                    color={`${showAdminSelection===2 ? 'red' : ''}`}
                    onClick={() => setShowAdminSelection(2)}
                >
                    Seleksi Administrasi
                </Button>
                <Button
                    className="mx-12"
                    color={`${showAdminSelection===3 ? 'red' : ''}`}
                    onClick={() => setShowAdminSelection(3)}
                >
                    Seleksi Wawancara
                </Button>
            </div>
            <div className="history">
                {showAdminSelection === 1 ? renderJobs() : showAdminSelection === 2 ? renderJobs2() : renderJobs3()}
            </div>
        </div>
    );
};
