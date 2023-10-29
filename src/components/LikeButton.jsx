import React, { useState } from "react";
import { IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export function LikeButton({likes, isLiked}) {
    const [llikes, setLikes] = useState(likes); // State untuk melacak apakah tombol hati ditekan
    const [liked, setLiked] = useState(isLiked); // State untuk melacak jumlah "Likes"

    // Fungsi untuk menangani ketika tombol hati ditekan
    const handleLikeClick = () => {
        setLikes(llikes + 1); // Tambahkan 1 ke jumlah "Likes"
        setLiked(true); // Tombol hati sudah ditekan
    };

    const handleUnlikeClick = () => {
        setLikes(llikes - 1); // Tambahkan 1 ke jumlah "Likes"
        setLiked(false); // Tombol hati sudah ditekan
    };
    
    return (
        <>
            <IconButton color={liked ? `red`:`indigo`} onClick={() => liked?handleUnlikeClick() : handleLikeClick()}>
                <FontAwesomeIcon icon={faHeart}/>
            </IconButton>
            <p className="text-sm text-gray-500 inline-block ml-3" >{llikes} Suka</p>
        </>
    );
}