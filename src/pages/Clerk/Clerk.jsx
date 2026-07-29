import React from 'react';
import HelmetAsync from './../../components/HelmetAsync/HelmetAsync';
import { TbMailDown, TbMailPause, TbMailUp } from "react-icons/tb";

const Clerk = () => {
    return (
        <div>
            <div>
                <HelmetAsync title={"Clerk"} />
            </div>
            <div className='p-10'>
                {/* name of each tab group should be unique */}
                <div className='border p-3 rounded-2xl'>
                    <div>
                        <h2 className='text-2xl font-semibold'>Mails</h2>
                    </div>
                    <br />
                    <div className="tabs tabs-lift">
                        <label className="tab">
                            <input type="radio" name="clerk_tabs" />
                            <TbMailDown className='h-6 w-6' />
                            <h3 className='ml-2 text-xl font-semibold'>Incoming</h3>
                        </label>
                        <div className="tab-content bg-base-100 border-base-300 p-6">
                            Incoming mails ....
                        </div>

                        <label className="tab">
                            <input type="radio" name="clerk_tabs" />
                            <TbMailUp className='h-6 w-6' />
                            <h3 className='ml-2 text-xl font-semibold'>Outgoing</h3>
                        </label>
                        <div className="tab-content bg-base-100 border-base-300 p-6">
                            Outgoing mails ....
                        </div>

                        <label className="tab">
                            <input type="radio" name="clerk_tabs" defaultChecked />
                            <TbMailPause className='h-6 w-6' />
                            <h3 className='ml-2 text-xl font-semibold'>Pending</h3>
                        </label>
                        <div className="tab-content bg-base-100 border-base-300 p-6">
                            Pending mails ...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clerk;