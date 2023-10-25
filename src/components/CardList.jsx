import React from "react";
import PropTypes from "prop-types"; // import PropTypes

import { CardsDefault } from "./CardsDefault";

export const CardList = ({ page }) => {
    return (
        <div className="mx-auto max-w-screen-xl grid grid-cols-3 gap-7">
            {page.map((job, index) => {
                return (
                    <CardsDefault
                        key={index}
                        title={job.title}
                        company={job.company}
                        location={job.location}
                        maxSalary={job.maxSalary}
                        likes={job.likes}
                        minSalary={job.minSalary}
                        minEdu={job.minEdu}
                        minUsia={job.minUsia}
                        maxUsia={job.maxUsia}
                        no={job.no}
                    />
                );
            })}
        </div>
    );
};

CardList.propTypes = {
    jobsData: PropTypes.array.isRequired,
    page: PropTypes.array.isRequired
};
