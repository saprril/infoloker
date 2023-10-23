// SearchBar.js
import React, { useState } from 'react';

export function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border p-2"
            />
            <button onClick={handleSearch} className="mt-2 p-2 bg-blue-500 text-white rounded">
                Search
            </button>
        </div>
    );
}
