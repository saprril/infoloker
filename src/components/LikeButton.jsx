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
    const likedlist = cookies.get("LIKED");
    useEffect(() => {
        //cookies.set("LIKED", liked ? [...cookies.get("LIKED"), jobId] : cookies.get("LIKED"), { path: "/" });
        if (liked) {
            //postLikeToDatabase();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [liked]);

    const patchLike = async () => {
        disabled = true;
        //console.log(cookies.get("USER"), "USER");
        //console.log(jobId, "JOBID");
        //console.log(likedlist, "LIKEDLIST");
        //console.log(cookies.get("TOKEN"), "TOKEN");
        //likedlist.push(jobId);
        cookies.set("LIKED", [...cookies.get("LIKED"), jobId], { path: "/" });
        console.log(cookies.get("LIKED"), 'LIKED');
        try {
            await axios.patch(
                `http://auth-server-sigma.vercel.app/jobs/detail/${jobId}/like`,
                { "id": cookies.get("USER") },
                {
                    headers: {
                        Authorization: `Bearer ${cookies.get("TOKEN")}`,
                    }
                }
            ).then((result) => {
                console.log(result);
            }). catch((error) => {
                console.log(error);
            });
        } catch(error) {
            console.error("Gagal menyukai lowongan", error);
    }
    disabled = false;
};

    const patchUnLike = async () => {
        disabled = true;
        //console.log(cookies.get("USER"), "USER");
        //console.log(jobId, "JOBID");
        //console.log(likedlist, "LIKEDLIST");

        likedlist.splice(likedlist.indexOf(jobId), 1);
        cookies.set("LIKED", likedlist, { path: "/" });
        try {
            await axios.patch(
                `http://auth-server-sigma.vercel.app/jobs/detail/${jobId}/unlike`,
                { "id": cookies.get("USER") },
                {
                    headers: {
                        Authorization: `Bearer ${cookies.get("TOKEN")}`,
                    }
                }
            );
        } catch (error) {
            console.error("Gagal menyukai lowongan", error);
        }
        console.log();
        disabled = false;
    };
const handleLikeClick = () => {
    if (!disabled) {
        if (liked) {
            patchUnLike();
            setLikes(llikes - 1);
        } else {
            patchLike();
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
