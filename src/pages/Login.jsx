import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

export function Login() {
    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Login
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Selamat Datang! Silakan masukkan email dan passsword untuk masuk.
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Email
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
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
                            />
                        </div>
                        <Button className="mt-6" fullWidth>
                            Login
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Belum punya akun?{" "}
                            <a href="/register" className="font-medium text-gray-900">
                                Register
                            </a>
                        </Typography>
                    </form>
                </Card>
            </div>
        </div>
    );
}
