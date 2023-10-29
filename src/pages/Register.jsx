import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";

export function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Add a loading state

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const configuration = {
            method: "post",
            url: "https://auth-server-sigma.vercel.app/register",
            data: {
                name: name,
                email: email,
                password: password,
            },
        };
        axios(configuration)
            .then((res) => {
                //console.log(res);
                setIsLoading(false);
                window.location.href = "/register/success";
            })
            .catch((err) => {
                setIsLoading(false);
                err = new Error();
            });
    }
    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Register
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Selamat Datang! Silakan masukkan email dan passsword untuk mendaftar.
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Nama
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Nama"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            onChange={(e) => setName(e.target.value)}
                        />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Email
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Password
                            </Typography>
                            <Input
                                type="password"
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Button className="mt-6" fullWidth onClick={handleSubmit} disabled={isLoading}>
                            {isLoading ? "Loading..." : "Daftar"}
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Sudah punya akun?{" "}
                            <a href="/login" className="font-medium text-gray-900">
                                Login
                            </a>
                        </Typography>
                    </form>
                </Card>
            </div>
        </div>
    );
}