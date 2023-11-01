import React, { useState, useEffect } from "react";
import { CardList } from "../components/CardList";
import { Pagination } from "../components/Pagination";
import Cookies from "universal-cookie";
import { Spinner, Button } from "@material-tailwind/react";
import axios from "axios";

const cookies = new Cookies();

export function History() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [count, setCount] = useState(0); // State untuk jumlah pekerjaan yang ditemukan
    const [selectedClassification, setSelectedClassification] = useState(1); // State untuk klasifikasi terpilih

    const token = cookies.get("TOKEN");
    const id = cookies.get("USER");

    if (!token) {
        window.location.href = "/login";
    }

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                let classification; // Variabel untuk menentukan klasifikasi yang akan diambil dari API
                if (selectedClassification === 1) {
                  classification = "Open";
                } else if (selectedClassification === 2) {
                  classification = "Administrasi";
                } else if (selectedClassification === 3) {
                  classification = "Interview";
                }
        
                // Ganti endpoint API sesuai dengan klasifikasi yang dipilih
                const response = await axios.get(
                  `http://auth-server-sigma.vercel.app/users/history/${id}`,
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                    params: {
                      page: currentPage,
                      status: classification, // Tambahkan klasifikasi ke parameter
                    },
                  }
                );
        
                setAppliedJobs(response.data.jobs);
                setCount(response.data.count);
                setIsLoading(false);
              } catch (error) {
                setIsLoading(false);
                console.error("Error fetching user history:", error);
              }
        };
        fetchData();
    }, [currentPage, selectedClassification]); // Tambahkan selectedClassification ke dependensi useEffect

    return (
        <>
        <div className="flex justify-center my-7">
            <Button
            className="mx-12"
            color={`${selectedClassification === 1 ? 'red' : ''}`}
            onClick={() => setSelectedClassification(1)}
            >
            Menunggu Seleksi
            </Button>
            <Button
            className="mx-12"
            color={`${selectedClassification === 2 ? 'red' : ''}`}
            onClick={() => setSelectedClassification(2)}
            >
            Seleksi Administrasi
            </Button>
            <Button
            className="mx-12"
            color={`${selectedClassification === 3 ? 'red' : ''}`}
            onClick={() => setSelectedClassification(3)}
            >
            Seleksi Wawancara
            </Button>
      </div>
        <div className="mx-auto max-w-screen-xl">
            <div>
            {isLoading ? (
                <div className="mx-auto flex items-center justify-center">
                <Spinner />
                </div>
            ) : appliedJobs.length === 0 ? (
                <p className="text-center">Tidak ada riwayat pekerjaan yang ditemukan.</p>
            ) : (
                <CardList page={appliedJobs} />
            )}
            <div className="mx-auto max-w-screen-xl px-80 my-8 flex justify-center">
                <Pagination
                totalPosts={count}
                postPerPage={9} // Sesuaikan dengan jumlah pekerjaan per halaman
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                />
            </div>
            </div>
        </div>
        </>
    );
}
