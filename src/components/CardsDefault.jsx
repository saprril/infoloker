// eslint-disable-next-line no-unused-vars
import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Button,
} from "@material-tailwind/react";
import { LikeButton } from "./LikeButton";

// eslint-disable-next-line react/prop-types
export function CardsDefault({ id, title, company, location, maxSalary, likes, minSalary, minEdu, minUsia, maxUsia }) {
    const formatRupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number).replace(",00", "");
    };

    const truncate = (str, maxLength) => {
        if (!str) return "";
        if (str.length <= maxLength) return str;
        return str.substring(0, maxLength) + "...";
    };

    return (
        <Card className="mt-6 w-96 sm:grid-flow-col">
            <CardBody>
                <table className="table-auto">
                    <tbody>
                        <tr>
                            <td><b>Jabatan</b></td>
                            <td className="w-7"></td>
                            <td>{truncate(title, 24)}</td>
                        </tr>
                        <tr>
                            <td><b>Perusahaan</b></td>
                            <td className="w-7"></td>
                            <td>{truncate(company, 24)}</td>
                        </tr>
                        <tr>
                            <td><b>Lokasi</b></td>
                            <td className="w-7"></td>
                            <td>{truncate(location, 24)}</td>
                        </tr>
                        <tr>
                            <td><b>Gaji</b></td>
                            <td className="w-7"></td>
                            <td>{truncate(`${formatRupiah(minSalary)} - ${formatRupiah(maxSalary)}`, 24)}</td>
                        </tr>
                        <tr>
                            <td><b>Usia</b></td>
                            <td className="w-7"></td>
                            <td>{truncate(`${minUsia} - ${maxUsia}`, 24)} tahun</td>
                        </tr>
                        <tr>
                            <td><b>Pendidikan</b></td>
                            <td className="w-7"></td>
                            <td>{truncate(minEdu, 24)}</td>
                        </tr>
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between">
                <div><LikeButton likes={likes}></LikeButton></div>
                <a href={`/detail/${id}`} className="inline-block">
                    <Button size="sm" variant="text" className="flex items-center gap-2">
                        Detil
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </a>
            </CardFooter>
        </Card>
    );
}
