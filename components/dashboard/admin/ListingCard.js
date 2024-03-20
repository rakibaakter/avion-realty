'use client'

import Image from "next/image";
import bed from '@/public/images/dashboard/listing/bed.svg';
import bathroomSvg from '@/public/images/dashboard/listing/bathroom.svg';
import sqft from '@/public/images/dashboard/listing/sqft.svg';
import locationSvg from '@/public/images/dashboard/listing/location.svg';
import live from '@/public/images/dashboard/listing/live.svg';
import edit from '@/public/images/dashboard/listing/edit.svg';
import { MdDelete } from "react-icons/md";

const ListingCard = ({ list }) => {
    const { title, bedroom, bathroom, areaSqFt, location, images, agent, status, leads, } = list;

    async function handleDeleteList(_id) {
      
    };

    return (
        <div>
            <div className="">
                <div className="flex items-center">
                    <div className="w-[40%] p-5">
                        <div className="flex items-center gap-3">
                            <Image width={96} height={96} src={images[0]} alt="Listing image" className="w-16 h-16 rounded-md" />
                            <div className="">
                                <h3 className="text-[20px] font-bold mb-2">{title}</h3>
                                <div className="flex gap-5">

                                    {/* bed */}
                                    <div className="flex items-center gap-2">
                                        <Image src={bed} alt="Bedroom svg" />
                                        <span>{bedroom}</span>
                                    </div>

                                    {/* bathroom */}
                                    <div className="flex items-center gap-2">
                                        <Image src={bathroomSvg} alt="bathroom svg" />
                                        <span>{bathroom}</span>
                                    </div>

                                    {/* sqft */}
                                    <div className="flex items-center gap-2">
                                        <Image src={sqft} alt="scale svg" />
                                        <span>{areaSqFt} sq. ft.</span>
                                    </div>
                                </div>

                                {/* location */}
                                <div className="flex items-center gap-2">
                                    <Image src={locationSvg} alt="Apartment Location svg" />
                                    <span className="mt-2">{location}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Agent */}
                    <div className="w-[15%] text-center ">
                        <span className="font-semibold"> {agent} </span>
                    </div>

                    {/* Status */}
                    <div className="w-[15%] text-center ">
                        <span className="font-semibold"> {status} </span>
                    </div>

                    {/* Leads */}
                    <div className="w-[15%] text-center ">
                        <span className="font-semibold">{leads} Leads </span>
                    </div>

                    {/* Leads */}
                    <div className="w-[15%] text-center gap-3 flex items-center justify-center">
                        <Image src={live} alt="Live svg" className="w-4 cursor-pointer hover:scale-125 transition-all" />
                        <Image src={edit} alt="Live svg" className="w-4 cursor-pointer hover:scale-125 transition-all" />
                        <MdDelete size={20} className="text-red-500 hover:text-red-600 cursor-pointer hover:scale-125 transition-all" onClick={() => handleDeleteList(list._id)} />
                    </div>
                </div>
                <div className="mx-3">
                    <hr className="opacity-20" />
                </div>
            </div>
        </div>
    );
};

export default ListingCard;