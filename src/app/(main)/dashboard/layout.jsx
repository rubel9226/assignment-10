import Navbar from '@/Components/layout/Navbar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            <main className="px-4 md:px-0">
               {children}
            </main>
        </div>
    );
};

export default DashboardLayout;