import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
export function RegisterSuccess() {
    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                <Card color="transparent" shadow={false}>
                    <div className="ml-5 mr-5">
                    <svg width="325" height="289" viewBox="0 0 325 289" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="91" width="81" height="189" rx="17" fill="#616161" />
                        <path d="M165.278 16.8904C169.778 7.89009 174.278 -2.11026 197.278 0.389707C220.278 2.88967 219.778 11.39 222.278 21.8897C224.778 32.3894 212.278 91.39 202.278 90.8897C192.278 90.3894 303.778 89.3905 303.778 89.3905C303.778 89.3905 324.778 98.3894 324.278 121.889C323.778 145.389 306.778 148.39 306.778 148.39C306.778 148.39 321.778 154.388 317.778 178.889C313.778 203.39 294.778 203.39 294.778 203.39C294.778 203.39 300.278 216.889 297.278 228.889C294.278 240.889 277.778 249.39 277.778 249.39C277.778 249.39 281.278 259.889 274.778 271.889C268.278 283.889 258.278 286.39 258.278 286.39C258.278 286.39 201.278 291.89 172.778 286.39C144.278 280.89 105.778 241.39 101.778 219.39C97.7778 197.39 101.778 125.39 101.778 117.39C101.778 109.39 131.778 86.8894 140.5 76.5C149.222 66.1106 160.778 25.8908 165.278 16.8904Z" fill="#616161" />
                    </svg>
                    </div>

                    <Typography color="gray" className="mt-20 text-center font-normal">
                        Akun berhasil dibuat!{" "}
                        <a href="/login" className="font-medium text-gray-900">
                            Login
                        </a>
                    </Typography>
                </Card>
            </div>
        </div>
    );
}