import React from 'react';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { IoNewspaperOutline } from 'react-icons/io5';
import { LuNotebookPen } from 'react-icons/lu';
import { RiFilePaper2Line, RiMailSendLine } from 'react-icons/ri';
import { SlEnvolopeLetter } from 'react-icons/sl';
import { TbMail } from "react-icons/tb";
import { Link } from 'react-router-dom';

const ClerkDash = () => {
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-5'>
                <Link to={"/clerk/staff-notes"} className='hover:text-white glass hover:bg-[#A9C86C] border-[#7C884C] border-2 bg-[#7C884C] rounded-2xl p-3 h-40 flex items-center justify-center'>
                    <LuNotebookPen className='h-14 w-14' />
                    <h2 className='ml-4 text-4xl font-semibold'>Staff Notes</h2>
                </Link>
                <Link to={"/clerk/note-sheets"} className='hover:text-white glass hover:bg-[#A9C86C] border-[#7C884C] border-2 bg-[#7C884C] rounded-2xl p-3 h-40 flex items-center justify-center'>
                    <IoNewspaperOutline className='h-14 w-14' />
                    <h2 className='ml-4 text-4xl font-semibold'>Note Sheets</h2>
                </Link>
                <Link to={"/clerk/work-orders"} className='hover:text-white glass hover:bg-[#A9C86C] border-[#7C884C] border-2 bg-[#7C884C] rounded-2xl p-3 h-40 flex items-center justify-center'>
                    <RiFilePaper2Line className='h-14 w-14' />
                    <h2 className='ml-4 text-4xl font-semibold'>Work Orders</h2>
                </Link>
                <Link to={"/clerk/agreements"} className='hover:text-white glass hover:bg-[#A9C86C] border-[#7C884C] border-2 bg-[#7C884C] rounded-2xl p-3 h-40 flex items-center justify-center'>
                    <IoNewspaperOutline className='h-14 w-14' />
                    <h2 className='ml-4 text-4xl font-semibold'>Agreements</h2>
                </Link>
                <Link to={"/clerk/boards"} className='hover:text-white glass hover:bg-[#A9C86C] border-[#7C884C] border-2 bg-[#7C884C] rounded-2xl p-3 h-40 flex items-center justify-center'>
                    <HiOutlineClipboardDocumentList className='h-14 w-14' />
                    <h2 className='ml-4 text-4xl font-semibold'>Boards</h2>
                </Link>
                <Link to={"/clerk/letters"} className='hover:text-white glass hover:bg-[#A9C86C] border-[#7C884C] border-2 bg-[#7C884C] rounded-2xl p-3 h-40 flex items-center justify-center'>
                    <SlEnvolopeLetter className='h-14 w-14' />
                    <h2 className='ml-4 text-4xl font-semibold'>Letters</h2>
                </Link>
                <Link to={"/clerk/letters"} className='hover:text-white glass hover:bg-[#A9C86C] border-[#7C884C] border-2 bg-[#7C884C] rounded-2xl p-3 h-40 flex items-center justify-center'>
                    <RiMailSendLine className='h-14 w-14' />
                    <h2 className='ml-4 text-4xl font-semibold'>LMs</h2>
                </Link>
            </div>
        </div>
    );
};

export default ClerkDash;