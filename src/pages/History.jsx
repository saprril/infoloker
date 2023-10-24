import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { CardsDefault } from "../components/CardsDefault";

export const History = () => {
    const jobs = [
        {
            "no": 1,
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
        {
            "no": 2,
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
        },
        {
            "no": 10,
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
        {
            "no": 12,
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
            "no": 13,
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
            "no": 14,
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
            "no": 15,
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
            "no": 16,
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
            "no": 17,
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
            "no": 18,
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
            "no": 19,
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
        },
    ];

    const [showAdminSelection, setShowAdminSelection] = useState(1);

    const renderJobs = () => {
        return (
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
                        no={job.no}
                    />
                ))}
            </div>
         </div>
        )
    };
    
    const renderJobs2 = () => {
        return (
            <div className="mx-auto max-w-screen-xl">
                <div className="grid grid-cols-3 gap-7">
                    <CardsDefault
                        key={80}
                        title={"Pemain Emyu"}
                        company={"PT Puasa 10 Tahun"}
                        location={"Manchester"}
                        maxSalary={"Rp. 360.000"}
                        likes={200}
                        no={101}
                    />
                </div>
             </div>
            )
    };
    
    const renderJobs3 = () => {
        return (
            <div className="mx-auto max-w-screen-xl">
                <div className="grid grid-cols-3 gap-7">
                    <CardsDefault
                        key={100}
                        title={"Pemain Arsenal"}
                        company={"PT Puasa 20 Tahun"}
                        location={"London"}
                        maxSalary={"Rp. 350.000"}
                        likes={120}
                        no={100}
                    />
                </div>
             </div>
            )
    };

    return (
        <div>
            <div className="flex justify-center my-7">
                <Button
                    className="mx-12"
                    color={`${showAdminSelection===1 ? 'red' : ''}`}
                    onClick={() => setShowAdminSelection(1)}
                    >
                    Menunggu Seleksi
                </Button>
                <Button
                    className="mx-12"
                    color={`${showAdminSelection===2 ? 'red' : ''}`}
                    onClick={() => setShowAdminSelection(2)}
                    >
                    Seleksi Administrasi
                </Button>
                <Button
                    className="mx-12"
                    color={`${showAdminSelection===3 ? 'red' : ''}`}
                    onClick={() => setShowAdminSelection(3)}
                    >
                    Seleksi Wawancara
                </Button>
            </div>
            <div className="history">
                {showAdminSelection === 1 ? renderJobs() : showAdminSelection === 2 ? renderJobs2() : renderJobs3()}
            </div>
        </div>
    );
};
