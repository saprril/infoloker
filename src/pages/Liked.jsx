/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CardsDefault } from "../components/CardsDefault";
import { jobs } from "../jobData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { CardList } from "../components/CardList";
import { Pagination } from "../components/Pagination";
import Cookies from "universal-cookie";
import { useEffect } from "react";
import {Spinner} from "@material-tailwind/react";
import axios from "axios";

const cookies = new Cookies();

export function Liked() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const [likedJobs, setLikedJobs] = useState([]);
  //const [likedCount, setLikedCount] = useState(0);

  const token = cookies.get("TOKEN");
  const id = cookies.get("USER");

  if (!token) {
    window.location.href = "/login";
  }
  useEffect(() => {
    // Send the query parameter
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://auth-server-sigma.vercel.app/users/liked/${id}`,
          { headers: { Authorization: `Bearer ${token}`, } ,
            params: {currentPage}});
        setLikedJobs(response.data.jobs);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchData();
  }, [currentPage]);
  //const lastPostIndex = currentPage * postPerPage;
  //const firstPostIndex = lastPostIndex - postPerPage;
  //const currentPosts = jobs.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="mx-auto max-w-screen-xl">
        

        <div>
          {isLoading ? (
            <div className="mx-auto flex items-center justify-center">
              <Spinner />
            </div> // Check loading state
          ) : (
            <>
              <CardList page={likedJobs} />
            </>
          )}
          <div className="mx-auto max-w-screen-xl px-80 my-8 flex justify-center">
            <Pagination
              totalPosts={likedJobs.length}
              postPerPage={9}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
