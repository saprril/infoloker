import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
export function CardsDefault({ title, company, location, maxSalary, likes}) {
    return (
        <Card className="mt-6 w-96">
            <CardBody>
                <table class="table-auto">
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <b>Jabatan</b>
                            </td>
                            <td className="w-7"></td>
                            <td>{title}</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Perusahaan</b>
                            </td>
                            <td className="w-7"></td>
                            <td>{company}</td>
                        </tr>
                        <tr>
                            <td>
                                <b>
                                Lokasi
                                </b>
                            </td>
                            <td className="w-7"></td>
                            <td>{location}</td>
                        </tr>
                        <tr>
                            <td><b> Gaji Maks.</b></td>
                            <td className="w-7"></td>
                            <td>{maxSalary}</td>
                        </tr>
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between">
                <div>
                <IconButton>
                    <FontAwesomeIcon icon={faHeart} />
                </IconButton>
                <p className="text-sm text-gray-500 inline-block ml-3" >{likes} Suka</p>
                </div>
                <a href="#" className="inline-block">
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
