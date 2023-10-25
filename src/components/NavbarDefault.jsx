import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import Cookies from "universal-cookie";
import { redirect } from "react-router-dom";
const cookies = new Cookies();


export function NavbarDefault() {
    const [openNav, setOpenNav] = React.useState(false);
    const [isLogged, setIsLogged] = React.useState(false);

    console.log(isLogged);
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
        const token = cookies.get("TOKEN");
        if (token) {
            setIsLogged(true);
        }
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <Link to={"/"}>
                    <a className="flex items-center">
                        Lowongan
                    </a>
                </Link>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <Badge pill bg="primary" text="light" content="5">
                    <a href="#" className="flex items-center">
                        Disukai
                    </a>
                </Badge>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <a href={`/history`} className="flex items-center">
                    Dilamar
                </a>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <div className="hidden lg:block">{navList}</div>
                {/* Add the logo and make it link to the home URL */}
                <Link to="/">
                    <svg width="246" height="56" viewBox="0 0 246 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="17" width="32" height="22" rx="3" fill="#494953" />
                        <path d="M35.64 41V11.2H41.84V35.6H54.44V41H35.64ZM67.915 41.48C65.755 41.48 63.7817 40.9867 61.995 40C60.235 39.0133 58.8217 37.6667 57.755 35.96C56.715 34.2267 56.195 32.2667 56.195 30.08C56.195 27.8667 56.715 25.9067 57.755 24.2C58.8217 22.4933 60.235 21.1467 61.995 20.16C63.7817 19.1733 65.755 18.68 67.915 18.68C70.075 18.68 72.035 19.1733 73.795 20.16C75.555 21.1467 76.955 22.4933 77.995 24.2C79.0617 25.9067 79.595 27.8667 79.595 30.08C79.595 32.2667 79.0617 34.2267 77.995 35.96C76.955 37.6667 75.555 39.0133 73.795 40C72.035 40.9867 70.075 41.48 67.915 41.48ZM67.915 36.08C69.0083 36.08 69.955 35.8267 70.755 35.32C71.5817 34.8133 72.2217 34.1067 72.675 33.2C73.155 32.2933 73.395 31.2533 73.395 30.08C73.395 28.9067 73.155 27.88 72.675 27C72.2217 26.0933 71.5817 25.3867 70.755 24.88C69.955 24.3467 69.0083 24.08 67.915 24.08C66.8217 24.08 65.8617 24.3467 65.035 24.88C64.2083 25.3867 63.555 26.0933 63.075 27C62.6217 27.88 62.395 28.9067 62.395 30.08C62.395 31.2533 62.6217 32.2933 63.075 33.2C63.555 34.1067 64.2083 34.8133 65.035 35.32C65.8617 35.8267 66.8217 36.08 67.915 36.08ZM83.1297 41V10.72H89.1297V30.12L86.8897 29.4L96.5297 19.16H103.93L96.0097 27.96L103.89 41H97.0897L90.4897 29.92L93.9697 29.04L87.2897 36.32L89.1297 32.84V41H83.1297ZM116.697 41.48C114.377 41.48 112.363 40.9733 110.657 39.96C108.95 38.92 107.63 37.5333 106.697 35.8C105.763 34.0667 105.297 32.1467 105.297 30.04C105.297 27.8533 105.777 25.9067 106.737 24.2C107.723 22.4933 109.043 21.1467 110.697 20.16C112.35 19.1733 114.217 18.68 116.297 18.68C118.03 18.68 119.563 18.96 120.897 19.52C122.23 20.0533 123.35 20.8133 124.257 21.8C125.19 22.7867 125.897 23.9333 126.377 25.24C126.857 26.52 127.097 27.92 127.097 29.44C127.097 29.8667 127.07 30.2933 127.017 30.72C126.99 31.12 126.923 31.4667 126.817 31.76H110.457V27.36H123.417L120.577 29.44C120.843 28.2933 120.83 27.28 120.537 26.4C120.243 25.4933 119.723 24.7867 118.977 24.28C118.257 23.7467 117.363 23.48 116.297 23.48C115.257 23.48 114.363 23.7333 113.617 24.24C112.87 24.7467 112.31 25.4933 111.937 26.48C111.563 27.4667 111.417 28.6667 111.497 30.08C111.39 31.3067 111.537 32.3867 111.937 33.32C112.337 34.2533 112.95 34.9867 113.777 35.52C114.603 36.0267 115.603 36.28 116.777 36.28C117.843 36.28 118.75 36.0667 119.497 35.64C120.27 35.2133 120.87 34.6267 121.297 33.88L126.097 36.16C125.67 37.2267 124.99 38.16 124.057 38.96C123.15 39.76 122.07 40.3867 120.817 40.84C119.563 41.2667 118.19 41.48 116.697 41.48ZM130.63 41V19.16H136.23V24.4L135.83 23.64C136.31 21.8 137.096 20.56 138.19 19.92C139.31 19.2533 140.63 18.92 142.15 18.92H143.43V24.12H141.55C140.083 24.12 138.896 24.5733 137.99 25.48C137.083 26.36 136.63 27.6133 136.63 29.24V41H130.63ZM152.819 41.48C151.246 41.48 149.886 41.2267 148.739 40.72C147.593 40.2133 146.713 39.4933 146.099 38.56C145.486 37.6 145.179 36.4667 145.179 35.16C145.179 33.9333 145.459 32.8533 146.019 31.92C146.579 30.96 147.433 30.16 148.579 29.52C149.753 28.88 151.206 28.4267 152.939 28.16L159.619 27.08V31.48L154.019 32.48C153.166 32.64 152.513 32.92 152.059 33.32C151.606 33.6933 151.379 34.24 151.379 34.96C151.379 35.6267 151.633 36.1467 152.139 36.52C152.646 36.8933 153.273 37.08 154.019 37.08C155.006 37.08 155.873 36.8667 156.619 36.44C157.366 36.0133 157.939 35.44 158.339 34.72C158.766 33.9733 158.979 33.16 158.979 32.28V26.6C158.979 25.7733 158.646 25.08 157.979 24.52C157.339 23.96 156.459 23.68 155.339 23.68C154.273 23.68 153.326 23.9733 152.499 24.56C151.699 25.1467 151.113 25.92 150.739 26.88L145.939 24.6C146.366 23.3733 147.046 22.32 147.979 21.44C148.913 20.56 150.033 19.88 151.339 19.4C152.646 18.92 154.073 18.68 155.619 18.68C157.459 18.68 159.086 19.0133 160.499 19.68C161.913 20.3467 163.006 21.28 163.779 22.48C164.579 23.6533 164.979 25.0267 164.979 26.6V41H159.379V37.48L160.739 37.24C160.099 38.2 159.393 39 158.619 39.64C157.846 40.2533 156.979 40.7067 156.019 41C155.059 41.32 153.993 41.48 152.819 41.48ZM169.38 41V19.16H174.98V24.48L174.38 23.6C174.7 21.92 175.473 20.68 176.7 19.88C177.926 19.08 179.393 18.68 181.1 18.68C182.913 18.68 184.5 19.1467 185.86 20.08C187.246 20.9867 188.113 22.2133 188.46 23.76L186.74 23.92C187.46 22.1333 188.486 20.8133 189.82 19.96C191.153 19.1067 192.713 18.68 194.5 18.68C196.073 18.68 197.46 19.0267 198.66 19.72C199.886 20.4133 200.846 21.3867 201.54 22.64C202.233 23.8667 202.58 25.3067 202.58 26.96V41H196.58V28.24C196.58 27.3867 196.42 26.6533 196.1 26.04C195.806 25.4267 195.38 24.9467 194.82 24.6C194.26 24.2533 193.58 24.08 192.78 24.08C192.006 24.08 191.326 24.2533 190.74 24.6C190.18 24.9467 189.74 25.4267 189.42 26.04C189.126 26.6533 188.98 27.3867 188.98 28.24V41H182.98V28.24C182.98 27.3867 182.82 26.6533 182.5 26.04C182.206 25.4267 181.78 24.9467 181.22 24.6C180.66 24.2533 179.98 24.08 179.18 24.08C178.406 24.08 177.726 24.2533 177.14 24.6C176.58 24.9467 176.14 25.4267 175.82 26.04C175.526 26.6533 175.38 27.3867 175.38 28.24V41H169.38ZM213.288 41.48C211.715 41.48 210.355 41.2267 209.208 40.72C208.061 40.2133 207.181 39.4933 206.568 38.56C205.955 37.6 205.648 36.4667 205.648 35.16C205.648 33.9333 205.928 32.8533 206.488 31.92C207.048 30.96 207.901 30.16 209.048 29.52C210.221 28.88 211.675 28.4267 213.408 28.16L220.088 27.08V31.48L214.488 32.48C213.635 32.64 212.981 32.92 212.528 33.32C212.075 33.6933 211.848 34.24 211.848 34.96C211.848 35.6267 212.101 36.1467 212.608 36.52C213.115 36.8933 213.741 37.08 214.488 37.08C215.475 37.08 216.341 36.8667 217.088 36.44C217.835 36.0133 218.408 35.44 218.808 34.72C219.235 33.9733 219.448 33.16 219.448 32.28V26.6C219.448 25.7733 219.115 25.08 218.448 24.52C217.808 23.96 216.928 23.68 215.808 23.68C214.741 23.68 213.795 23.9733 212.968 24.56C212.168 25.1467 211.581 25.92 211.208 26.88L206.408 24.6C206.835 23.3733 207.515 22.32 208.448 21.44C209.381 20.56 210.501 19.88 211.808 19.4C213.115 18.92 214.541 18.68 216.088 18.68C217.928 18.68 219.555 19.0133 220.968 19.68C222.381 20.3467 223.475 21.28 224.248 22.48C225.048 23.6533 225.448 25.0267 225.448 26.6V41H219.848V37.48L221.208 37.24C220.568 38.2 219.861 39 219.088 39.64C218.315 40.2533 217.448 40.7067 216.488 41C215.528 41.32 214.461 41.48 213.288 41.48Z" fill="#494953" />
                        <path d="M3 28C14.8702 33.2421 21.4441 33.4238 33 28" stroke="#F5F5F5" />
                        <rect y="17" width="4" height="22" rx="2" fill="#DEDDDD" />
                        <rect x="16" y="29" width="4" height="7" rx="2" fill="#F5F5F5" />
                    </svg>

                </Link>
                <div className="flex items-center gap-x-1">
                    {isLogged ? ( // Conditionally render Profile and Logout buttons
                        <Link to="/profile" className="hidden lg:inline-block">
                            <Button variant="text" size="sm">
                                <span>Profile</span>
                            </Button>
                        </Link>
                    ) : (
                        <>
                            <Link to="/register" className="hidden lg:inline-block">
                                <Button variant="gradient" size="sm">
                                    <span>Register</span>
                                </Button>
                            </Link>
                            <Link to="/login" className="hidden lg:inline-block">
                                <Button variant="gradient" size="sm" className="fill-gray-700">
                                    <span>Login</span>
                                </Button>
                            </Link>
                        </>
                    )}
                    {isLogged && ( // Conditionally render Logout button
                        <Button
                            variant="text"
                            size="sm"
                            onClick={() => {
                                // Remove the TOKEN cookie and log the user out
                                cookies.remove("TOKEN");
                                setIsLogged(false);
                                redirect("/");
                            }}
                        >
                            <span>Logout</span>
                        </Button>
                    )}
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <div className="flex items-center gap-x-1">
                        {isLogged ? ( // Conditionally render Profile and Logout buttons
                            <Link to="/profile" className="hidden lg:inline-block">
                                <Button variant="text" size="sm">
                                    <span>Profile</span>
                                </Button>
                            </Link>
                        ) : (
                            <>
                                <Link to="/register" className="hidden lg:inline-block">
                                    <Button variant="gradient" size="sm" className="fill-gray-700">
                                        <span>Register</span>
                                    </Button>
                                </Link>
                                <Link to="/login" className="hidden lg:inline-block">
                                    <Button variant="gradient" size="sm" className="fill-gray-700">
                                        <span>Login</span>
                                    </Button>
                                </Link>
                            </>
                        )}
                        {isLogged && ( // Conditionally render Logout button
                            <Button
                                variant="text"
                                size="sm"
                                onClick={() => {
                                    // Remove the TOKEN cookie and log the user out
                                    cookies.remove("TOKEN");
                                    setIsLogged(false);
                                    redirect("/");
                                    console.log("logout")
                                }}
                            >
                                <span>Logout</span>
                            </Button>
                        )}
                    </div>
                </div>
            </MobileNav>
        </Navbar>
    );
}