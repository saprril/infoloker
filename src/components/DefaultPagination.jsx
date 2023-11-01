import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

// eslint-disable-next-line react/prop-types
export function DefaultPagination({ pageCount}) {
    const [active, setActive] = React.useState(1);

    const getItemProps = (index) =>
    ({
        variant: active === index ? "filled" : "text",
        color: "gray",
        onClick: () => setActive(index),
    });

    const next = () => {
        if (active === pageCount) return;
        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
    };

    const generatePageButtons = () => {
        const pageButtons = [];
        const maxButtonsToShow = 4; // Number of page buttons to display

        if (pageCount <= maxButtonsToShow) {
            // Display all pages if there are fewer than maxButtonsToShow
            for (let i = 1; i <= pageCount; i++) {
                pageButtons.push(
                    <IconButton key={i} {...getItemProps(i)}>
                        {i}
                    </IconButton>
                );
            }
        } else {
            // Determine the range of pages to display with a triple-dot
            let startPage = Math.max(2, active - 2);
            let endPage = Math.min(pageCount-1, startPage + maxButtonsToShow - 1);

            if (endPage - startPage < maxButtonsToShow - 1) {
                startPage = endPage - maxButtonsToShow + 1;
            }

            // Display the first page
            pageButtons.push(
                <IconButton key={1} {...getItemProps(1)}>
                    1
                </IconButton>
            );

            // Display a triple-dot if necessary
            if (startPage > 2) {
                pageButtons.push(<span key="ellipsis1">...</span>);
            }

            // Display the page buttons
            for (let i = startPage; i <= endPage; i++) {
                pageButtons.push(
                    <IconButton key={i} {...getItemProps(i)}>
                        {i}
                    </IconButton>
                );
            }

            // Display a triple-dot if necessary
            if (endPage < pageCount - 1) {
                pageButtons.push(<span key="ellipsis2">...</span>);
            }

            // Display the last page
            pageButtons.push(
                <IconButton key={pageCount} {...getItemProps(pageCount)}>
                    {pageCount}
                </IconButton>
            );
        }

        return pageButtons;
    };

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
            <div className="flex items-center gap-2">
                {generatePageButtons()}
            </div>
            <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={next}
                disabled={active === pageCount}
            >
                Next
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    );
}
