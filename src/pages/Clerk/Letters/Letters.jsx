import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { LuBanknote, LuEye, LuPencilLine, LuPlus, LuTrash2 } from 'react-icons/lu';
import { TbMail, TbMailDown, TbMailPause, TbMailUp } from "react-icons/tb";
import Swal from 'sweetalert2';

const Letters = () => {

    const [searchLetter, setSearchLetter] = useState();

    const columns = [
        { name: 'S/N', selector: row => row.serial, sortable: true, width: "70px" },
        { name: 'Date', selector: row => row.date, sortable: true },
        { name: 'Title', selector: row => row.title },
        {
            name: 'Status', cell: (row) =>
                <div>
                    <button className={`badge badge-sm badge-soft badge-outline ${row.status === 'Approved' ? 'badge-success' : row.status === 'Rejected' ? 'badge-error' : 'badge-warning'}`}>
                        {row.status}
                    </button>
                </div>,
        },
        { name: 'Topic', selector: row => row.topic, left: true },
        { name: 'Type', selector: row => row.type, left: true },
        { name: 'Remarks', selector: row => row.remarks, left: true },
        { name: 'Created By', selector: row => row.createdBy, left: true },
        {
            name: 'Action', cell: (row) =>
                <div className="join join-vertical lg:join-horizontal">
                    <button className="btn btn-xs btn-outline join-item btn-info" onClick={() => document.getElementById('view_incoming_letter_modal').showModal()}><LuEye className='text-sm' /> View</button>
                    <dialog id="view_incoming_letter_modal" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-error btn-outline absolute right-2 top-2 tooltip tooltip-left" data-tip={"Close"}>✕</button>
                            </form>
                            <h3 className="font-bold text-lg text-center">View Letter</h3>
                            <div className='divider'></div>
                            <div className="py-4">
                                {/* view form */}
                            </div>
                        </div>
                    </dialog>
                    <button className="btn btn-outline btn-xs join-item btn-warning" onClick={() => document.getElementById('edit_incoming_letter_modal').showModal()}><LuPencilLine className='text-sm' /> Edit</button>
                    <dialog id="edit_incoming_letter_modal" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-error btn-outline absolute right-2 top-2 tooltip tooltip-left" data-tip={"Close"}>✕</button>
                            </form>
                            <h3 className="font-bold text-lg text-center">Edit Letter</h3>
                            <div className='divider'></div>
                            <div className="py-4">
                                {/* edit form */}
                            </div>
                        </div>
                    </dialog>
                    <button className="btn btn-outline btn-xs btn-error join-item" onClick={handleDeleteBill}><LuTrash2 className='text-sm' /> Delete</button>
                </div>,
            left: true, width: "230px"
        },
    ];

    const letters = [
        { id: 1, serial: 1, date: "15-dec-2026", title: 'M', topic: 'ERP', remarks: "", createdBy: "Cpl Majed", status: "Pending", type: "Incoming" },
        { id: 2, serial: 2, date: "14-dec-2026", title: 'Marcus Webb', topic: 'Inventory', remarks: "", createdBy: "LWTR Harun", status: "Approved", type: "Outgoing" },
        { id: 3, serial: 3, date: "15-dec-2025", title: 'Marcus Webb', topic: 'Inventory', remarks: "", createdBy: "Snk Arif", status: "Rejected", type: "Incoming" },
        { id: 4, serial: 4, date: "16-dec-2026", title: 'M', topic: 'ERP', remarks: "", createdBy: "Cpl Majed", status: "Pending", type: "Outgoing" },
        { id: 5, serial: 5, date: "13-dec-2026", title: 'Marcus Webb', topic: 'Inventory', remarks: "", createdBy: "LWTR Harun", status: "Approved", type: "Pending" },
        { id: 6, serial: 6, date: "15-dec-2023", title: 'Marcus Webb', topic: 'Inventory', remarks: "", createdBy: "Snk Arif", status: "Rejected", type: "Incoming" },
        { id: 7, serial: 7, date: "18-nov-2026", title: 'M', topic: 'ERP', remarks: "", createdBy: "Cpl Majed", status: "Pending", type: "Outgoing" },
        { id: 8, serial: 8, date: "19-dec-2026", title: 'Marcus Webb', topic: 'Inventory', remarks: "", createdBy: "LWTR Harun", status: "Approved", type: "Pending" },
        { id: 9, serial: 9, date: "23-dec-2026", title: 'Marcus Webb', topic: 'Inventory', remarks: "", createdBy: "Snk Arif", status: "Rejected", type: "Incoming" },
        { id: 11, serial: 11, date: "01-dec-2020", title: 'M', topic: 'ERP', remarks: "", createdBy: "Cpl Majed", status: "Pending", type: "Outgoing" },
        { id: 12, serial: 12, date: "09-dec-2026", title: 'Marcus Webb', topic: 'Inventory', remarks: "", createdBy: "LWTR Harun", status: "Approved" },
        { id: 13, serial: 13, date: "07-dec-2022", title: 'Marcus Webb', topic: 'Inventory', remarks: "", createdBy: "Snk Arif", status: "Rejected" },
    ];

    const filteredLetters = searchLetter ? letters.filter(letter => letter.title.toLowerCase().includes(searchLetter.toLowerCase()) || letter.createdBy.toLowerCase().includes(searchLetter.toLowerCase()) || letter.topic.toLowerCase().includes(searchLetter.toLowerCase()) || letter.status.toLowerCase().includes(searchLetter.toLowerCase()) || letter.remarks.toLowerCase().includes(searchLetter.toLowerCase()) || letter.date.toLowerCase().includes(searchLetter.toLowerCase())) : letters || [];

    const incomingLetters = filteredLetters.filter(letter => letter.type === "Incoming") || [];
    const outgoingLetters = filteredLetters.filter(letter => letter.type === "Outgoing") || [];
    const pendingLetters = filteredLetters.filter(letter => letter.type === "Pending") || [];

    const handleDeleteBill = () => {
        Swal.fire({
            title: `Are you sure?`,
            text: `This action cannot be undone.`,
            icon: "warning",
            showCancelButton: true,
            customClass: {
                confirmButton: 'btn btn-error btn-outline mr-3',
                cancelButton: 'btn btn-success btn-outline'
            },
            buttonsStyling: false,
            confirmButtonText: "Yes, delete!"
        }).then((result) => {
            if (result.isConfirmed) Swal.fire({
                title: "Deleted!",
                text: `The letter has been deleted.`,
                icon: "success"
            });
        });
    };

    return (
        <div>
            {/* Section 1 */}
            <div className='border-[#7C884C] border-2 glass bg-[#7C884C] p-3 rounded-2xl'>
                <div className='flex flex-col lg:flex-row justify-between items-center'>
                    <h2 className='text-2xl font-semibold'>Letters</h2>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-4'>
                        <div>
                            <button className='btn' onClick={() => document.getElementById('add_letter_modal').showModal()}><LuPlus className='text-xl' /><span className='ml-2'>Add Letter</span></button>
                            <dialog id="add_letter_modal" className="modal">
                                <div className="modal-box w-11/12 max-w-5xl">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-error btn-outline absolute right-2 top-2 tooltip tooltip-left" data-tip={"Close"}>✕</button>
                                    </form>
                                    <h3 className="font-bold text-center">Add Letter</h3>
                                    <div className='divider'></div>
                                    <div className="py-4">
                                        {/* add form */}
                                    </div>
                                </div>
                            </dialog>
                        </div>
                        <div>
                            <label className="input">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input type="search" required placeholder="Search Letters" className="" onChange={(e) => setSearchLetter(e.target.value)} />
                            </label>
                        </div>
                    </div>
                </div>

                <br />
                <div className="tabs tabs-lift">
                    <label className="tab">
                        <input type="radio" name="clerk_letter_tabs" defaultChecked />
                        <TbMail className='h-6 w-6' />
                        <h3 className='ml-2 text-xl font-semibold'>All Letters</h3>
                    </label>
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className='flex flex-col lg:flex-row justify-center items-center mb-4'>
                            <div>
                                <p className='text-sm text-[#7C884C] p-2 rounded-sm'>{searchLetter ? `Search results for "${searchLetter}"` : `Total Letters: ${letters?.length}`}</p>
                            </div>
                        </div>
                        <div>
                            <DataTable columns={columns} data={filteredLetters} animateRows pagination striped />
                        </div>
                    </div>
                    <label className="tab">
                        <input type="radio" name="clerk_letter_tabs" />
                        <TbMailDown className='h-6 w-6' />
                        <h3 className='ml-2 text-xl font-semibold'>Incoming Letters</h3>
                    </label>
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className='flex flex-col lg:flex-row justify-center items-center mb-4'>
                            <div>
                                <p className='text-sm text-[#7C884C] p-2 rounded-sm'>{searchLetter ? `Search results for "${searchLetter}"` : `Total Letters: ${incomingLetters?.length}`}</p>
                            </div>
                        </div>
                        <div>
                            <DataTable columns={columns} data={incomingLetters} animateRows pagination striped />
                        </div>
                    </div>

                    <label className="tab">
                        <input type="radio" name="clerk_letter_tabs" />
                        <TbMailUp className='h-6 w-6' />
                        <h3 className='ml-2 text-xl font-semibold'>Outgoing Letters</h3>
                    </label>
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className='flex flex-col lg:flex-row justify-center items-center mb-4'>
                            <div>
                                <p className='text-sm text-[#7C884C] p-2 rounded-sm'>{searchLetter ? `Search results for "${searchLetter}"` : `Total Letters: ${outgoingLetters?.length}`}</p>
                            </div>
                        </div>
                        <div>
                            <DataTable columns={columns} data={outgoingLetters} animateRows pagination striped />
                        </div>
                    </div>

                    <label className="tab">
                        <input type="radio" name="clerk_letter_tabs" />
                        <TbMailPause className='h-6 w-6' />
                        <h3 className='ml-2 text-xl font-semibold'>Pending Letters</h3>
                    </label>
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className='flex flex-col lg:flex-row justify-center items-center mb-4'>
                            <div>
                                <p className='text-sm text-[#7C884C] p-2 rounded-sm'>{searchLetter ? `Search results for "${searchLetter}"` : `Total Letters: ${pendingLetters?.length}`}</p>
                            </div>
                        </div>
                        <div>
                            <DataTable columns={columns} data={pendingLetters} animateRows pagination striped />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Letters;