import { Card, Input, Checkbox, Option, Button, Typography, Select, Textarea } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
const cookies = new Cookies();
export default function Profile() {
    const id = cookies.get("USER");
    const token = cookies.get("TOKEN");
    const [user, setUser] = useState({}); // Add an user object state
    //console.log(id)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://auth-server-sigma.vercel.app/users/profile/${id}`,
                {headers: { Authorization: `Bearer ${token}` }});
                setUser(response.data.user);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };
        fetchData();
    },
    [id, token]);
    console.log(user);
    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-xl px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
            <Card color="white" className="mx-auto" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Profile
                </Typography>
                <form className="mt-8 mb-2 w-96 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Name
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Your Name"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Your Email"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Gender
                        </Typography>
                        <Select label="Select Version" size="lg">
                            <Option> -- Pilih Jenis Kelamin --</Option>
                            <Option>Pria</Option>
                            <Option>Wanita</Option>
                        </Select>

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Place of Birth
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Place of Birth"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Birthday
                        </Typography>
                        <Input
                            type="date"
                            size="lg"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Address
                        </Typography>
                        <Textarea
                            size="lg"
                            placeholder="Address"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            City
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="City"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            ID Number
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="ID Number"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Education Level
                        </Typography>
                        <Select label="Select Version" size="lg">
                            <Option> -- Pilih Tingkat Pendidikan --</Option>
                            <Option>SMA</Option>
                            <Option>SMK</Option>
                            <Option>D3</Option>
                            <Option>S1</Option>
                            <Option>S2</Option>
                        </Select>
                    </div>
                    <Button className="mt-6" fullWidth>
                        Save
                    </Button>
                </form>
            </Card>
        </div>
        </div>
    );
}
