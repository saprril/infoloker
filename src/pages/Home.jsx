import React from 'react';
import { CardsDefault } from '../components/CardsDefault';
import { DefaultPagination } from '../components/DefaultPagination';
export function Home() {
    // dummy data
    const jobs = [
        {"no": 1,
        "title": "Frontend Developer",
        "company": "PT. Global Tiket Network",
        "location": "Jakarta",
        "maxSalary": "Rp. 10.000.000",
        "minSalary": "Rp. 5.000.000",
        "type": "Full Time",
        "description": "Membuat aplikasi web menggunakan ReactJS",
        "requirement": ["Menguasai ReactJS", "Menguasai HTML", "Menguasai CSS", "Menguasai Javascript"],
        "benefit": ["Gaji ke-13", "THR", "Bonus"],
        "maxUsia": 30,
        "minUsia": 20,
        "minEdu": "S1",
        "status": "Open",
        "createdAt": "2021-08-20T04:00:00.000Z",
        "updatedAt": "2021-08-20T04:00:00.000Z",
        "closeAt": "2021-08-30T04:00:00.000Z",
        "likes": 100
    },
    {"no": 2,
        "title": "Backend Developer",
        "company": "PT. Global Tiket Network",
        "location": "Jakarta",
        "maxSalary": "Rp. 10.000.000",
        "minSalary": "Rp. 5.000.000",
        "type": "Part Time",
        "description": "Membuat aplikasi web menggunakan NodeJS",
        "requirement": ["Menguasai NodeJS", "Menguasai PHP", "Mengendalikan Air"],
        "benefit": ["Gaji ke-13", "THR", "Bonus"],
        "maxUsia": 30,
        "minUsia": 20,
        "minEdu": "S1",
        "status": "Open",
        "createdAt": "2021-08-20T04:00:00.000Z",
        "updatedAt": "2021-08-20T04:00:00.000Z",
        "closeAt": "2021-08-30T04:00:00.000Z",
        "likes": 100
    },
        {
            "no": 3,
            "title": "Backend Developer",
            "company": "PT. Global Tiket Network",
            "location": "Jakarta",
            "maxSalary": "Rp. 10.000.000",
            "minSalary": "Rp. 5.000.000",
            "type": "Part Time",
            "description": "Membuat aplikasi web menggunakan NodeJS",
            "requirement": ["Menguasai NodeJS", "Menguasai PHP", "Mengendalikan Air"],
            "benefit": ["Gaji ke-13", "THR", "Bonus"],
            "maxUsia": 30,
            "minUsia": 20,
            "minEdu": "S1",
            "status": "Open",
            "createdAt": "2021-08-20T04:00:00.000Z",
            "updatedAt": "2021-08-20T04:00:00.000Z",
            "closeAt": "2021-08-30T04:00:00.000Z",
            "likes": 100
        },
        {
            "no": 4,
            "title": "Backend Developer",
            "company": "PT. Global Tiket Network",
            "location": "Jakarta",
            "maxSalary": "Rp. 10.000.000",
            "minSalary": "Rp. 5.000.000",
            "type": "Part Time",
            "description": "Membuat aplikasi web menggunakan NodeJS",
            "requirement": ["Menguasai NodeJS", "Menguasai PHP", "Mengendalikan Air"],
            "benefit": ["Gaji ke-13", "THR", "Bonus"],
            "maxUsia": 30,
            "minUsia": 20,
            "minEdu": "S1",
            "status": "Open",
            "createdAt": "2021-08-20T04:00:00.000Z",
            "updatedAt": "2021-08-20T04:00:00.000Z",
            "closeAt": "2021-08-30T04:00:00.000Z",
            "likes": 100090
        },
        {
            "no": 5,
            "title": "Backend Developer",
            "company": "PT. Global Tiket Network",
            "location": "Jakarta",
            "maxSalary": "Rp. 10.000.000",
            "minSalary": "Rp. 5.000.000",
            "type": "Part Time",
            "description": "Membuat aplikasi web menggunakan NodeJS",
            "requirement": ["Menguasai NodeJS", "Menguasai PHP", "Mengendalikan Air"],
            "benefit": ["Gaji ke-13", "THR", "Bonus"],
            "maxUsia": 30,
            "minUsia": 20,
            "minEdu": "S1",
            "status": "Open",
            "createdAt": "2021-08-20T04:00:00.000Z",
            "updatedAt": "2021-08-20T04:00:00.000Z",
            "closeAt": "2021-08-30T04:00:00.000Z",
            "likes": 103
        },
        {
            "no": 6,
            "title": "Backend Developer",
            "company": "PT. Global Tiket Network",
            "location": "Jakarta",
            "maxSalary": "Rp. 10.000.000",
            "minSalary": "Rp. 5.000.000",
            "type": "Part Time",
            "description": "Membuat aplikasi web menggunakan NodeJS",
            "requirement": ["Menguasai NodeJS", "Menguasai PHP", "Mengendalikan Air"],
            "benefit": ["Gaji ke-13", "THR", "Bonus"],
            "maxUsia": 30,
            "minUsia": 20,
            "minEdu": "S1",
            "status": "Open",
            "createdAt": "2021-08-20T04:00:00.000Z",
            "updatedAt": "2021-08-20T04:00:00.000Z",
            "closeAt": "2021-08-30T04:00:00.000Z",
            "likes": 110
        },
        {
            "no": 7,
            "title": "Backend Developer",
            "company": "PT. Global Tiket Network",
            "location": "Jakarta",
            "maxSalary": "Rp. 10.000.000",
            "minSalary": "Rp. 5.000.000",
            "type": "Part Time",
            "description": "Membuat aplikasi web menggunakan NodeJS",
            "requirement": ["Menguasai NodeJS", "Menguasai PHP", "Mengendalikan Air"],
            "benefit": ["Gaji ke-13", "THR", "Bonus"],
            "maxUsia": 30,
            "minUsia": 20,
            "minEdu": "S1",
            "status": "Open",
            "createdAt": "2021-08-20T04:00:00.000Z",
            "updatedAt": "2021-08-20T04:00:00.000Z",
            "closeAt": "2021-08-30T04:00:00.000Z",
            "likes": 123
        },
        {
            "no": 8,
            "title": "Backend Developer",
            "company": "PT. Global Tiket Network",
            "location": "Jakarta",
            "maxSalary": "Rp. 10.000.000",
            "minSalary": "Rp. 5.000.000",
            "type": "Part Time",
            "description": "Membuat aplikasi web menggunakan NodeJS",
            "requirement": ["Menguasai NodeJS", "Menguasai PHP", "Mengendalikan Air"],
            "benefit": ["Gaji ke-13", "THR", "Bonus"],
            "maxUsia": 30,
            "minUsia": 20,
            "minEdu": "S1",
            "status": "Open",
            "createdAt": "2021-08-20T04:00:00.000Z",
            "updatedAt": "2021-08-20T04:00:00.000Z",
            "closeAt": "2021-08-30T04:00:00.000Z",
            "likes": 100
        },
        {
            "no": 9,
            "title": "Tukang Fotokopi",
            "company": "PT. Global Tiket Network",
            "location": "Jakarta",
            "maxSalary": "Rp. 10.000.000",
            "minSalary": "Rp. 5.000.000",
            "type": "Part Time",
            "description": "Membuat aplikasi web menggunakan NodeJS",
            "requirement": ["Menguasai NodeJS", "Menguasai PHP", "Mengendalikan Air"],
            "benefit": ["Gaji ke-13", "THR", "Bonus"],
            "maxUsia": 30,
            "minUsia": 20,
            "minEdu": "S1",
            "status": "Open",
            "createdAt": "2021-08-20T04:00:00.000Z",
            "updatedAt": "2021-08-20T04:00:00.000Z",
            "closeAt": "2021-08-30T04:00:00.000Z",
            "likes": 100
            
        }
    ];

    return (
        <>
        <div className="mx-auto max-w-screen-xl">
            <div className="grid grid-cols-3 gap-7">
                    {jobs.map((job, index) => (
                        <CardsDefault
                            key={index}
                            title={job.title}
                            company={job.company}
                            location={job.location}
                            maxSalary={job.maxSalary}
                            likes={job.likes}
                        />
                    ))}
            </div>
        </div>
        <div className="mx-auto max-w-screen-xl px-80 mt-8">
        <DefaultPagination />
        </div>
        </>
    );
}

