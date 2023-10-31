/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
export function LikeButton({ likes, isLiked, disabled }) {
    const [llikes, setLikes] = useState(likes); // State untuk melacak jumlah "Likes"
    const [liked, setLiked] = useState(isLiked); // State untuk melacak apakah tombol hati ditekan

    // Fungsi untuk menangani ketika tombol hati ditekan
    const handleLikeClick = () => {
        if (!disabled) {
            setLikes(llikes + 1); // Tambahkan 1 ke jumlah "Likes"
            setLiked(true); // Tombol hati sudah ditekan
        }
    };

    const handleUnlikeClick = () => {
        if (!disabled) {
            setLikes(llikes - 1); // Kurangi 1 dari jumlah "Likes"
            setLiked(false); // Tombol hati sudah tidak ditekan
        }
    };
    
    return (
        <>
            <IconButton color={liked ? 'red' : 'indigo'} onClick={() => liked ? handleUnlikeClick() : handleLikeClick()} disabled={disabled}>
                <FontAwesomeIcon icon={faHeart}/>
            </IconButton>
            <p className="text-sm text-gray-500 inline-block ml-3">{llikes} Suka</p>
        </>
    );
}
