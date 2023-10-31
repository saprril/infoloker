import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";

export function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [registerError, setRegisterError] = useState("");

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validateName = (name) => {
        return name.trim() !== "";
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateName(name)) {
            setNameError("Nama tidak boleh kosong");
            return;
        } else {
            setNameError("");
        }

        if (!validateEmail(email)) {
            setEmailError("Email tidak valid");
            return;
        } else {
            setEmailError("");
        }

        if (!validatePassword(password)) {
            setPasswordError("Password harus memiliki minimal 8 karakter");
            return;
        } else {
            setPasswordError("");
        }

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
            // eslint-disable-next-line no-unused-vars
            .then((res) => {
                setIsLoading(false);
                window.location.href = "/register/success";
            })
            .catch((err) => {
                setIsLoading(false);
                setRegisterError("Email sudah terdaftar");
                console.error("Terjadi kesalahan saat mendaftar:", err);
            });
    };

    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Register
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Selamat Datang! Silakan masukkan email dan password untuk mendaftar.
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
                                onChange={(e) => {
                                    setName(e.target.value);
                                    setNameError("");
                                }}
                            />
                            <div className="mt-[-20px]">
                                {nameError && <Typography color="red">{nameError}</Typography>}
                            </div>
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
                                onChange={async (e) => {
                                    setEmail(e.target.value);
                                    setEmailError("");
                                    setRegisterError("");
                    
                                }}
                            />
                            <div className="mt-[-20px]">
                                {emailError && <Typography color="red">{emailError}</Typography>}
                            </div>
                            <div className="mt-[-20px]">
                                {registerError && <Typography color="red">{registerError}</Typography>}
                            </div>
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
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setPasswordError("");
                                }}
                            />
                            <div className="mt-[-20px]">
                                {passwordError && <Typography color="red">{passwordError}</Typography>}
                            </div>

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
