import React from 'react';
import DataTable from 'react-data-table-component';
import { TbMail, TbMailDown, TbMailPause, TbMailUp } from "react-icons/tb";

const Agreements = () => {

     const columns = [
        { name: 'S/N', selector: row => row.serial, sortable: true },
        { name: 'Date', selector: row => row.date, sortable: true },
        { name: 'Name', selector: row => row.name },
        { name: 'Topic', selector: row => row.topic, left: true },
        { name: 'Remarks', selector: row => row.remarks, left: true },
        { name: 'Created By', selector: row => row.createdBy, left: true },
        { name: 'Action', selector: row => row.createdBy, left: true },
    ];

    const data = [
        { id: 1, serial: 1, date: "15-dec-2026", name: 'M', topic: 'ERP', remarks: "", createdBy: "Cpl Majed" },
        { id: 2, serial: 2, date: "14-dec-2026", name: 'Marcus Webb', topic: 'Inventory', remarks: "", createdBy: "LWTR Harun" },
        { id: 3, serial: 3, date: "15-dec-2026", name: 'Marcus Webb', topic: 'Inventory', remarks: "", createdBy: "Snk Arif" },
        { id: 4, serial: 4, date: "16-dec-2026", name: 'M', topic: 'ERP', remarks: "", createdBy: "Cpl Majed" },
        { id: 5, serial: 5, date: "13-dec-2026", name: 'Marcus Webb', topic: 'Inventory', remarks: "", createdBy: "LWTR Harun" },
        { id: 6, serial: 6, date: "15-dec-2026", name: 'Marcus Webb', topic: 'Inventory', remarks: "", createdBy: "Snk Arif" },
        { id: 7, serial: 7, date: "18-dec-2026", name: 'M', topic: 'ERP', remarks: "", createdBy: "Cpl Majed" },
        { id: 8, serial: 8, date: "19-dec-2026", name: 'Marcus Webb', topic: 'Inventory', remarks: "", createdBy: "LWTR Harun" },
        { id: 9, serial: 9, date: "23-dec-2026", name: 'Marcus Webb', topic: 'Inventory', remarks: "", createdBy: "Snk Arif" },
        { id: 10, serial: 10, date: "29-dec-2026", name: 'Marcus Webb', topic: 'Inventory', remarks: "", createdBy: "Snk Arif" },
        { id: 11, serial: 11, date: "01-dec-2026", name: 'M', topic: 'ERP', remarks: "", createdBy: "Cpl Majed" },
        { id: 12, serial: 12, date: "09-dec-2026", name: 'Marcus Webb', topic: 'Inventory', remarks: "", createdBy: "LWTR Harun" },
        { id: 13, serial: 13, date: "07-dec-2026", name: 'Marcus Webb', topic: 'Inventory', remarks: "", createdBy: "Snk Arif" },
    ];

    return (
        <div>
            {/* Section 3 */}
            <div className='border-[#7C884C] border-2 bg-[#7C884C] p-3 rounded-2xl'>
                <div>
                    <h2 className='text-2xl font-semibold'>Others</h2>
                </div>
                <br />
                <div className="tabs tabs-lift">
                    <label className="tab">
                        <input type="radio" name="clerk_other_tabs" />
                        <TbMailDown className='h-6 w-6' />
                        <h3 className='ml-2 text-xl font-semibold'>Staff Notes</h3>
                    </label>
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        Staff Notes ....
                        <div>
                            <DataTable columns={columns} data={data} animateRows pagination striped />
                        </div>
                    </div>

                    <label className="tab">
                        <input type="radio" name="clerk_other_tabs" />
                        <TbMailUp className='h-6 w-6' />
                        <h3 className='ml-2 text-xl font-semibold'>Work Orders</h3>
                    </label>
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        Work Orders ....
                    </div>

                    <label className="tab">
                        <input type="radio" name="clerk_other_tabs" />
                        <TbMailPause className='h-6 w-6' />
                        <h3 className='ml-2 text-xl font-semibold'>Agreements</h3>
                    </label>
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        Agreementss ...
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agreements;