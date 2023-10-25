import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
  select,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { jobs } from "../jobData";
import { LikeButton } from "../components/LikeButton";

export function Detail() {
  // Get the job ID parameter from the URL
  const { id } = useParams();

  // Replace this with your data (you can fetch it from an API or use state)

  // Find the job with the matching ID
  const selectedJob = jobs.find((job) => job.no === parseInt(id));

  // Check if the job with the specified ID exists
  if (!selectedJob) {
    return <div>Job not found</div>;
  }
  
  const navigate = useNavigate();


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
        <p className="text-gray-500">{selectedJob.minSalary} - {selectedJob.maxSalary}</p>
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

        <LikeButton likes={selectedJob.likes}></LikeButton>
        <IconButton color="indigo" className="ml-6">
          <FontAwesomeIcon icon={faUsers}/>
        </IconButton>
        <p className="text-sm text-gray-500 inline-block ml-3" >{selectedJob.jumlahPelamar} Pelamar</p>
      </div>
      <div className="text-center mt-10">
        <Button className="px-20" color="red">Apply</Button>
      </div>
    </div>
  );
}