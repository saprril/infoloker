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

export function Liked() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = jobs.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="mx-auto max-w-screen-xl">
        

        <div>
          <CardList page={currentPosts} />
          <div className="mx-auto max-w-screen-xl px-80 my-8 flex justify-center">
            <Pagination
              totalPosts={jobs.length}
              postPerPage={postPerPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
