import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/kiran-k-k')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])

    const data = useLoaderData()

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
            <div className="w-full max-w-3xl bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gray-700 px-8 py-6 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        GitHub Profile
                    </h1>
                    <p className="text-gray-300 mt-2 text-base">
                        User information fetched from GitHub
                    </p>
                </div>
                <div className="p-8">
                    <div className="flex flex-col items-center">
                        <img
                            src={data.avatar_url}
                            alt="Github Profile"
                            className="w-36 h-36 rounded-full border-4 border-gray-500 shadow-lg object-cover"
                        />
                        {/* Name */}
                        <h2 className="text-3xl font-bold text-white mt-5">
                            {data.name}
                        </h2>

                        {/* Location */}
                        <p className="text-gray-400 mt-2 text-lg">
                            {data.location}
                        </p>

                    </div>

                    {/* Information Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

                        {/* Followers */}
                        <div className="bg-gray-700 rounded-xl p-5 text-center">
                            <p className="text-gray-400 text-sm uppercase tracking-wide">
                                GitHub Followers
                            </p>

                            <p className="text-3xl font-bold text-white mt-2">
                                {data.followers}
                            </p>
                        </div>

                        {/* Location */}
                        <div className="bg-gray-700 rounded-xl p-5 text-center">
                            <p className="text-gray-400 text-sm uppercase tracking-wide">
                                Location
                            </p>

                            <p className="text-xl font-semibold text-white mt-2">
                                {data.location}
                            </p>
                        </div>

                    </div>

                    {/* Bio */}
                    <div className="bg-gray-700 rounded-xl p-6 mt-5">

                        <h3 className="text-lg font-semibold text-gray-300 mb-3">
                            Bio
                        </h3>

                        <p className="text-gray-100 text-base leading-7">
                            {data.bio}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Github

//fetch data usiing loder
export const githubInfoloader = async () => {
    const response = await fetch('https://api.github.com/users/kiran-k-k')
    return response.json()
}
