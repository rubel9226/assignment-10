"use client";

import { FaCrown } from "react-icons/fa"; 

export default function UpgradeButton() { 

    return (
        <form action={'/api/subscription'} method='post'>
            <button type='submit' className="btn btn-primary btn-lg rounded-full w-full" >
                <FaCrown size={20} />
                Upgrade to Premium
            </button> 
        </form>
    );
}