import NavbarAdmin from '@/Components/layout/NavbarAdmin';
import React from 'react';

const AdminLayout = ({children}) => {
    return (
        <div>
            <NavbarAdmin />
            <main className="px-4 md:px-0">
               {children}
            </main>
        </div>
    );
};

export default AdminLayout;