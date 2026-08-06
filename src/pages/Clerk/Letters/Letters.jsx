import { useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import { LuEye, LuPencilLine, LuPlus, LuTrash2 } from 'react-icons/lu';
import { TbMail, TbMailDown, TbMailPause, TbMailUp, TbSearch } from "react-icons/tb";
import Swal from 'sweetalert2';
import LetterCreationForm from '../../../components/LetterCreationForm/LetterCreationForm';

const Letters = () => {

    const [searchLetter, setSearchLetter] = useState("");
    const [selectedLetter, setSelectedLetter] = useState(null);

    const handleView = (row) => {
        setSelectedLetter(row);
        document.getElementById("view_letter_modal").showModal();
    };

    const handleEdit = (row) => {
        setSelectedLetter(row);
        document.getElementById("edit_letter_modal").showModal();
    };

    const handleDeleteLetter = (row) => {
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
                text: `Delete "${row.title}"?`,
                icon: "success"
            });
        });
    };

    const columns = useMemo(() =>  [
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
            name: "Action",
            cell: (row) => (
                <div className="join join-vertical lg:join-horizontal">

                    <button
                        className="btn btn-xs btn-outline join-item btn-info"
                        onClick={() => handleView(row)}
                    >
                        <LuEye className="text-sm" />
                        View
                    </button>

                    <button
                        className="btn btn-xs btn-outline join-item btn-warning"
                        onClick={() => handleEdit(row)}
                    >
                        <LuPencilLine className="text-sm" />
                        Edit
                    </button>

                    <button
                        className="btn btn-xs btn-outline btn-error join-item"
                        onClick={() => handleDeleteLetter(row)}
                    >
                        <LuTrash2 className="text-sm" />
                        Delete
                    </button>

                </div>
            ),
            width: "230px"
        }
    ], [handleView, handleEdit, handleDeleteLetter]);

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
        { id: 12, serial: 12, date: "09-dec-2026", title: 'Marcus Webb', topic: 'Inventory', remarks: "", createdBy: "LWTR Harun", status: "Approved", type: "Pending" },
        { id: 13, serial: 13, date: "07-dec-2022", title: 'Marcus Webb', topic: 'Inventory', remarks: "", createdBy: "Snk Arif", status: "Rejected", type: "Incoming" },
    ];

    const filteredLetters = searchLetter ? letters.filter(letter => letter.title.toLowerCase().includes(searchLetter.toLowerCase()) || letter.createdBy.toLowerCase().includes(searchLetter.toLowerCase()) || letter.topic.toLowerCase().includes(searchLetter.toLowerCase()) || letter.status.toLowerCase().includes(searchLetter.toLowerCase()) || letter.remarks.toLowerCase().includes(searchLetter.toLowerCase()) || letter.date.toLowerCase().includes(searchLetter.toLowerCase()) || letter.type.toLowerCase().includes(searchLetter.toLowerCase())) : letters || [];

    const incomingLetters = filteredLetters.filter(letter => letter.type === "Incoming") || [];
    const outgoingLetters = filteredLetters.filter(letter => letter.type === "Outgoing") || [];
    const pendingLetters = filteredLetters.filter(letter => letter.type === "Pending") || [];

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
                                        <LetterCreationForm />
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
                        <h3 className='ml-2 text-xl font-semibold'>All</h3>
                    </label>
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className='mb-4'>
                            {
                                (searchLetter) ? (
                                    <div className='flex flex-col lg:flex-row justify-center items-center mb-4 font-semibold'>
                                        <p className='text-sm text-[#7C884C] p-2 rounded-sm flex items-center gap-2'><TbSearch className='text-lg' /> Search results for "{searchLetter}"</p>
                                    </div>
                                ) :
                                    <div className='flex flex-col lg:flex-row justify-evenly items-center font-semibold'>
                                        <div>
                                            <p className='text-sm text-[#7C884C] p-2 rounded-sm flex items-center gap-2'><TbMail className='text-lg' /> Total: {letters?.length}</p>
                                        </div>
                                        <div>
                                            <p className='text-sm text-[#7C884C] p-2 rounded-sm flex items-center gap-2'><TbMailDown className='text-lg' /> Incoming: {incomingLetters?.length}</p>
                                        </div>
                                        <div>
                                            <p className='text-sm text-[#7C884C] p-2 rounded-sm flex items-center gap-2'><TbMailUp className='text-lg' /> Outgoing: {outgoingLetters?.length}</p>
                                        </div>
                                        <div>
                                            <p className='text-sm text-[#7C884C] p-2 rounded-sm flex items-center gap-2'><TbMailPause className='text-lg' /> Pending: {pendingLetters?.length}</p>
                                        </div>
                                    </div>
                            }
                        </div>
                        <div className='border-2 border-base-300 rounded-sm'>
                            <DataTable columns={columns} data={filteredLetters} animateRows pagination striped />
                        </div>
                    </div>
                    <label className="tab">
                        <input type="radio" name="clerk_letter_tabs" />
                        <TbMailDown className='h-6 w-6' />
                        <h3 className='ml-2 text-xl font-semibold'>Incoming</h3>
                    </label>
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className='flex flex-col lg:flex-row justify-center items-center mb-4 font-semibold'>
                            <div>
                                <p className='text-sm text-[#7C884C] p-2 rounded-sm'> {searchLetter ? `Search results for "${searchLetter}"` : <p className='flex items-center gap-2'><TbMailDown className='text-lg' /> Incoming Letters: {incomingLetters?.length}</p>}</p>
                            </div>
                        </div>
                        <div>
                            <DataTable columns={columns} data={incomingLetters} animateRows pagination striped />
                        </div>
                    </div>

                    <label className="tab">
                        <input type="radio" name="clerk_letter_tabs" />
                        <TbMailUp className='h-6 w-6' />
                        <h3 className='ml-2 text-xl font-semibold'>Outgoing</h3>
                    </label>
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className='flex flex-col lg:flex-row justify-center items-center mb-4 font-semibold'>
                            <div>
                                <p className='text-sm text-[#7C884C] p-2 rounded-sm'>{searchLetter ? `Search results for "${searchLetter}"` : <p className='flex items-center gap-2'><TbMailUp className='text-lg' /> Outgoing Letters: {outgoingLetters?.length}</p>}</p>
                            </div>
                        </div>
                        <div>
                            <DataTable columns={columns} data={outgoingLetters} animateRows pagination striped />
                        </div>
                    </div>

                    <label className="tab">
                        <input type="radio" name="clerk_letter_tabs" />
                        <TbMailPause className='h-6 w-6' />
                        <h3 className='ml-2 text-xl font-semibold'>Pending</h3>
                    </label>
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className='flex flex-col lg:flex-row justify-center items-center mb-4 font-semibold'>
                            <div>
                                <p className='text-sm text-[#7C884C] p-2 rounded-sm'>{searchLetter ? `Search results for "${searchLetter}"` : <p className='flex items-center gap-2'><TbMailPause className='text-lg' /> Pending Letters: {pendingLetters?.length}</p>}</p>
                            </div>
                        </div>
                        <div>
                            <DataTable columns={columns} data={pendingLetters} animateRows pagination striped />
                        </div>
                    </div>
                </div>
            </div>
            {/* Letter View Modal */}
            <dialog id="view_letter_modal" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-error absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg text-center">
                        View Letter
                    </h3>
                    <div className="divider"></div>
                    {selectedLetter && (
                        <div className="py-4">
                            {/* form will be here */}
                        </div>
                    )}
                </div>
            </dialog>
            {/* Letter Edit Modal */}
            <dialog id="edit_letter_modal" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-error absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg text-center">
                        Edit Letter
                    </h3>
                    <div className="divider"></div>
                    {selectedLetter && (
                        <LetterCreationForm letter={selectedLetter} />
                    )}
                </div>
            </dialog>
        </div>
    );
};

export default Letters;