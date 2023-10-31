// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Button,
  IconButton,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
//import { jobs } from "../jobData";
import { LikeButton } from "../components/LikeButton";
import axios from "axios";
import { useEffect } from "react";
import { Spinner } from "@material-tailwind/react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export function Detail() {
  // Get the job ID parameter from the URL
  const { _id } = useParams();
  const [selectedJob, setSelectedJob] = useState();
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  // Replace this with your data (you can fetch it from an API or use state)

  const token = cookies.get("TOKEN");

  // Fetch the job with the matching ID when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://auth-server-sigma.vercel.app/jobs/detail/${_id}`);
        setSelectedJob(response.data.job);
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    };

    fetchData();
    setIsLoading(false);
  }, [_id, isLoading, token]);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number).replace(",00", "");
  };

  // Check if the job with the specified ID exists
  console.log(isLoading);
  const navigate = useNavigate();
  if (!selectedJob) {
      return <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900"> <Spinner color="blue" size="large" /> </div>;
  }
  //console.log(selectedJob);
  // eslint-disable-next-line react-hooks/rules-of-hooks


  return (
    <div className="mx-auto max-w-screen-xl p-4">
      <a className="inline-block">
        <button className="flex items-center" onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4 mr-1 transform -rotate-180" // Tambahkan kelas CSS untuk membalik panah
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
          Back
        </button>
      </a>
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">{selectedJob.title}</h1>
          <h1 className="text-gray-500 text-1xl mr-5">{selectedJob.status}</h1>
        </div>
        <p className="text-gray-500">{selectedJob.company}</p>
        <p className="text-gray-500">{selectedJob.location}</p>
        <p className="text-gray-500">{selectedJob.type}</p>
        <p className="text-gray-500">{formatRupiah(selectedJob.minSalary)} - {formatRupiah(selectedJob.maxSalary)}</p>
        <p className="mt-4">{selectedJob.description}</p>

        <br></br>
        <div className="flex">
          <div className="w-1/2 p-2">
            <h2 className="font-semibold">Persyaratan</h2>
            <ul className="list-disc pl-4">
              {selectedJob.requirement.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
          <div className="w-1/2 p-2">
            <h2 className="font-semibold">Benefits</h2>
            <ul className="list-disc pl-4">
              {selectedJob.benefit.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2 p-2">
            <p>Pendidikan Minimal: {selectedJob.minEdu}</p>
            <p>Umur: {selectedJob.minUsia} - {selectedJob.maxUsia} tahun</p>
          </div>
          <div className="w-1/2 p-2">
            <p>Tanggal Unggah: {selectedJob.createdAt}</p>
            <p>Terakhir Update: {selectedJob.updatedAt}</p>
            <p>Batas Akhir: {selectedJob.closeAt}</p>
          </div>
        </div>
        <br></br>

        <LikeButton likes={selectedJob.likes} disabled={!token}></LikeButton>
        <IconButton color="indigo" className="ml-6">
          <FontAwesomeIcon icon={faUsers} />
        </IconButton>
        <p className="text-sm text-gray-500 inline-block ml-3" >{selectedJob.jumlahPelamar} Pelamar</p>
      </div>
      <div className="text-center mt-10">
        <Button className="px-20" color="red" disabled={!token}>Apply</Button>
      </div>
    </div>
  );
}