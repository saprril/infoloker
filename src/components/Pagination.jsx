import React, { useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { jobs } from "../jobData";

export const Pagination = ({ totalPosts, postPerPage, setCurrentPage }) => {
  const [active, setActive] = React.useState(1);
  const pageCount = Math.ceil(totalPosts / postPerPage);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => {
      setActive(index);
      setCurrentPage(index);
    },
  });

  const next = () => {
    if (active === pageCount) return;
    const newActive = active + 1;
    setActive(newActive); // Update local state
    setCurrentPage(newActive); // Update parent component state;
  };

  const prev = () => {
    const newActive = active - 1;
    setActive(newActive); // Update local state
    setCurrentPage(newActive); // Update parent component state
  };

  const generatePageButtons = () => {
    const pageButtons = [];
    const maxButtonsToShow = 4;

    if (pageCount <= maxButtonsToShow) {
      for (let i = 1; i <= pageCount; i++) {
        pageButtons.push(
          <IconButton key={i} {...getItemProps(i)}>
            {i}
          </IconButton>
        );
      }
    } else {
      let startPage = Math.max(2, active - 2);
      let endPage = Math.min(pageCount - 1, startPage + maxButtonsToShow - 1);

      if (endPage - startPage < maxButtonsToShow - 1) {
        startPage = endPage - maxButtonsToShow + 1;
      }

      pageButtons.push(
        <IconButton key={1} {...getItemProps(1)}>
          1
        </IconButton>
      );

      if (startPage > 2) {
        pageButtons.push(<span key="ellipsis1">...</span>);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageButtons.push(
          <IconButton key={i} {...getItemProps(i)}>
            {i}
          </IconButton>
        );
      }

      if (endPage < pageCount - 1) {
        pageButtons.push(<span key="ellipsis2">...</span>);
      }

      pageButtons.push(
        <IconButton key={pageCount} {...getItemProps(pageCount)}>
          {pageCount}
        </IconButton>
      );
    }

    return pageButtons;
  };

  const lastPostIndex = active * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  jobs.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">{generatePageButtons()}</div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === pageCount}
      >
        Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
};
