import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

const Clerk = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>Clerk | ICT Management</title>
                    <link rel="canonical" href="https://www.ictmanagement.com/" />
                </Helmet>
            </div>
            <div className='p-10'>
                <Outlet />
            </div>
        </div>
    );
};

export default Clerk;