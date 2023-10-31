// eslint-disable-next-line no-unused-vars
import React from "react";

import { CardsDefault } from "./CardsDefault";

// eslint-disable-next-line react/prop-types
export const CardList = ({ page }) => {
    return (
        <div className="mx-auto max-w-screen-xl grid grid-cols-3 gap-7">
            {/* eslint-disable-next-line react/prop-types */}
            {page.map((job, index) => {
                return (
                    <CardsDefault
                        key={index}
                        id={job._id}
                        title={job.title}
                        company={job.company}
                        location={job.location}
                        maxSalary={job.maxSalary}
                        likes={job.likes}
                        minSalary={job.minSalary}
                        minEdu={job.minEdu}
                        minUsia={job.minUsia}
                        maxUsia={job.maxUsia}
                    />
                );
            })}
        </div>
    );
};
