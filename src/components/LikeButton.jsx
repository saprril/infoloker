// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();

// eslint-disable-next-line react/prop-types
export function LikeButton({ jobId, likes, isLiked, disabled }) {
    const [llikes, setLikes] = useState(likes); // State untuk melacak jumlah "Likes"
    const [liked, setLiked] = useState(isLiked); // State untuk melacak apakah tombol hati ditekan

    useEffect(() => {
        cookies.set("LIKED", liked ? [...cookies.get("LIKED"), jobId] : cookies.get("LIKED"), { path: "/" });
        if (liked) {
            //postLikeToDatabase();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [liked]);

    const postLikeToDatabase = async () => {
        try {
            const token = cookies.get("TOKEN");
            const userId = cookies.get("USER");
            const response = await axios.post(
                `http://auth-server-sigma.vercel.app/users/liked/${jobId}`,
                {
                    userId: userId,
                    jobId: jobId
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log(response.data); // handle response as needed
        } catch (error) {
            console.error("Error posting like to database:", error);
        }
    };

    const handleLikeClick = () => {
        if (!disabled) {
            if (liked) {
                setLikes(llikes - 1);
            } else {
                setLikes(llikes + 1);
            }
            setLiked(!liked);
        }
    };

    return (
        <>
            <IconButton color={liked ? 'red' : 'indigo'} onClick={handleLikeClick} disabled={disabled}>
                <FontAwesomeIcon icon={faHeart} />
            </IconButton>
            <p className="text-sm text-gray-500 inline-block ml-3">{llikes} Suka</p>
        </>
    );
}
