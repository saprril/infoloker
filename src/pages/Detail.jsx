// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Button,
  IconButton,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { LikeButton } from "../components/LikeButton";
import axios from "axios";
import { Spinner } from "@material-tailwind/react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export function Detail() {
  const { _id } = useParams();
  const [selectedJob, setSelectedJob] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const token = cookies.get("TOKEN");
  // eslint-disable-next-line no-unused-vars
  const [userEducation, setUserEducation] = useState("");
  
  // eslint-disable-next-line no-unused-vars
  const [liked, setLiked] = useState(cookies.get("LIKED") || []);
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://auth-server-sigma.vercel.app/jobs/detail/${_id}`);
        setSelectedJob(response.data.job);
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    };

    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(
          `https://auth-server-sigma.vercel.app/users/profile/${cookies.get("USER")}`,
          {
            headers: {
              Authorization: `Bearer ${cookies.get("TOKEN")}`,
            },
          }
        );

        setUserEducation(userResponse.data.user.education);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (token) {
      fetchUserData();
    }

    fetchData();
    setIsLoading(false);
  }, [_id, isLoading, token]);


  
  const handleApply = async () => {
    if (token && userEducation) {
      try {
        const userResponse = await axios.get(
          `https://auth-server-sigma.vercel.app/users/profile/${cookies.get("USER")}`,
          {
            headers: {
              Authorization: `Bearer ${cookies.get("TOKEN")}`,
            },
          }
        );
  
        setUserEducation(userResponse.data.user.education);
  
        if (userEducation === "SMA" && selectedJob.minEdu !== "SMA") {
          return console.log("Pendidikan Anda tidak sesuai");
        } else if (userEducation === "SMK" && selectedJob.minEdu !== "SMK") {
          return console.log("Pendidikan Anda tidak sesuai");
        } else if (userEducation === "D3" && selectedJob.minEdu !== "SMA" && selectedJob.minEdu !== "SMK" && selectedJob.minEdu !== "D3") {
          return console.log("Pendidikan Anda tidak sesuai");
        } else if (userEducation === "S1" && selectedJob.minEdu !== "S1" && selectedJob.minEdu !== "SMA" && selectedJob.minEdu !== "SMK" && selectedJob.minEdu !== "D3") {
          return console.log("Pendidikan Anda tidak sesuai");
        }        
  
        await axios.patch(
          `https://auth-server-sigma.vercel.app/jobs/detail/${_id}/apply`,
          { id: cookies.get("USER") },
          {
            headers: {
              Authorization: `Bearer ${cookies.get("TOKEN")}`,
            },
          }
        );
        setSuccessMessage(true);

      } catch (error) {
        console.error("Gagal melamar lowongan", error);

      }
    } else if (token && !userEducation) {
      console.log("Silakan set pendidikan Anda terlebih dahulu sebelum melamar pekerjaan.");

    } else {
      console.log("Pengguna belum login");

    }
  };

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number).replace(",00", "");
  };

  const navigate = useNavigate();
  if (!selectedJob) {
      return <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900"> <Spinner color="blue" size="large" /> </div>;
  }


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

        <LikeButton jobId={_id} likes={selectedJob.likes} isLiked={liked.includes(_id)} disabled={!token}></LikeButton>
        <IconButton color="indigo" className="ml-6">
          <FontAwesomeIcon icon={faUsers} />
        </IconButton>
        <p className="text-sm text-gray-500 inline-block ml-3" >{selectedJob.jumlahPelamar} Pelamar</p>
      </div>
      <div className="text-center mt-10">
    <Button
      className="px-20"
      color="red"
      disabled={!token || !userEducation || 
        (userEducation === "SMA" && selectedJob.minEdu !== "SMA") ||
        (userEducation === "SMK" && selectedJob.minEdu !== "SMK") ||
        (userEducation === "D3" && selectedJob.minEdu !== "SMA" && selectedJob.minEdu !== "SMK" && selectedJob.minEdu !== "D3") ||
        (userEducation === "S1" && selectedJob.minEdu !== "S1" && selectedJob.minEdu !== "SMA" && selectedJob.minEdu !== "SMK" && selectedJob.minEdu !== "D3")
      }
      onClick={handleApply}
    >
      Apply
    </Button>
    <div className="mt-5">
          {isLoading && <p className="text-gray-500">Loading...</p>}
          {!userEducation && token && <p className="text-red-500 text-sm">Silakan atur pendidikan Anda terlebih dahulu sebelum melamar pekerjaan.</p>}
          {(userEducation === "SMA" && selectedJob.minEdu !== "SMA") && (
            <p className="text-red-500">Pendidikan Anda tidak sesuai untuk melamar pekerjaan ini.</p>
          )}
          {(userEducation === "SMK" && selectedJob.minEdu !== "SMK") && (
            <p className="text-red-500">Pendidikan Anda tidak sesuai untuk melamar pekerjaan ini.</p>
          )}
          {(userEducation === "D3" && selectedJob.minEdu !== "SMA" && selectedJob.minEdu !== "SMK" && selectedJob.minEdu !== "D3") && (
            <p className="text-red-500">Pendidikan Anda tidak sesuai untuk melamar pekerjaan ini.</p>
          )}
          {(userEducation === "S1" && selectedJob.minEdu !== "S1" && selectedJob.minEdu !== "SMA" && selectedJob.minEdu !== "SMK" && selectedJob.minEdu !== "D3") && (
            <p className="text-red-500">Pendidikan Anda tidak sesuai untuk melamar pekerjaan ini.</p>
          )}
          {successMessage && <p className="text-green-500">Anda telah berhasil melamar pekerjaan ini.</p>}
        </div>
      </div>
    </div>
  );
}