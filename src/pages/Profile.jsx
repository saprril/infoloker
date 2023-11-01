import { Card, Input, Option, Button, Typography, Select, Textarea } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const cookies = new Cookies();
export default function Profile() {
    if (!cookies.get("TOKEN")) {
        window.location.href = "/login";
    }
    const id = cookies.get("USER");
    const token = cookies.get("TOKEN");
    const [form, setForm] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    //console.log(id)
    //console.log(token);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://auth-server-sigma.vercel.app/users/profile/${id}`,
                {headers: { Authorization: `Bearer ${token}` }});
                setForm(response.data.user);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };
        fetchData();
    },
    [id, token]);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        setIsSubmitted(true);
        console.log('   form==', form);
        e.preventDefault();
        try {
            await axios.patch(
                `http://auth-server-sigma.vercel.app/users/profile/${id}`,
                form,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            // Handle success, e.g., show a success message or navigate back
            setIsSubmitted(false);
            navigate(0); // Navigate back to the previous page
        } catch (error) {
            console.error("Error updating user:", error);
            // Handle the error, e.g., display an error message
        }

    }
    const handleNameChange = (e) => {
        // eslint-disable-next-line no-unused-vars
        const { name, value } = e.target;
        //console.log([name]);
        setForm({
            ...form,
            name: value,
        });
    };

    const handleBirthplaceChange = (e) => {
        const { value } = e.target;
        //console.log([name]);
        setForm({
            ...form,
            birthplace: value,
        });
    };
    const handleGenderChange = (e) => {
        //const { value } = e.target;
        //console.log(e);
        setForm({
            ...form,
            gender: e,
        });
    };
    const handleBirthdayChange = (e) => {
        //const { value } = e.target;
        //console.log("e adalah", e.target);
        const { value } = e.target;
        setForm({
            ...form,
            birthday: value,
        });
    };
    const handleAddressChange = (e) => {
        const { value } = e.target;
        setForm({
            ...form,
            address: value,
        });
    };
    const handleCityChange = (e) => {
        const { value } = e.target;
        setForm({
            ...form,
            city: value,
        });
    };
    const handleIdNumberChange = (e) => {   
        const { value } = e.target;

        setForm({
            ...form,
            idNumber: value,
        });
    };
    const handleEducationChange = (e) => {
        setForm({
            ...form,
            education: e,
        });
    };

    //console.log(form);
    //console.log("Form==", form);
    return (
        <div className="flex flex-col items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <a className="mb-5">
            <button className="flex items-center" onClick={() => navigate(-1)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4 mr-1 transform -rotate-180" // Tambahkan kelas CSS untuk membalik panah
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
            </svg>
            Back
            </button>
        </a>
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
                            name="name"
                            onChange={handleNameChange}    
                            value={form.name}               
                        />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Email
                        </Typography>
                        <Input
                            disabled
                            size="lg"
                            placeholder="Your Email"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            value={form.email}
                            //onChange={handleInputChange}
                        />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Gender
                        </Typography>
                        <Select label="Select Version" size="lg" name="gender" value={form.gender} onChange={handleGenderChange}>
                            <Option value=""> -- Pilih Jenis Kelamin --</Option>
                            <Option value="Pria">Pria</Option>
                            <Option value="Wanita">Wanita</Option>
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
                            onChange={handleBirthplaceChange}
                            name="birthplace"
                            value={form.birthplace}
                        />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Birthday
                        </Typography>
                        <Input
                            type="date"
                            size="lg"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            name="birthday"
                            value={form.birthday}
                            onChange={handleBirthdayChange}
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
                            name="address"
                            onChange={handleAddressChange}
                            value={form.address}
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
                            name="city"
                            onChange={handleCityChange}
                            value={form.city}
                        />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            ID Number
                        </Typography>
                        <Input
                            type="text"
                            size="lg"
                            placeholder="ID Number"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            onChange={handleIdNumberChange}
                            value={form.idNumber}
                        />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Education Level
                        </Typography>
                        <Select label="Select Version" size="lg" name="education" value={form.education} onChange={handleEducationChange}>
                            <Option value=""> -- Pilih Tingkat Pendidikan --</Option>
                            <Option value="SMA">SMA</Option>
                            <Option value="SMK">SMK</Option>
                            <Option value="D3">D3</Option>
                            <Option value="S1">S1</Option>
                            <Option value="S2">S2</Option>
                        </Select>
                    </div>
                    <Button className="mt-6" fullWidth onClick={handleSubmit} disabled={isSubmitted}>
                        Save
                    </Button>
                </form>
            </Card>
        </div>
        </div>
    );
}
