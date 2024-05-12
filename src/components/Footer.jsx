import { useEffect, useState } from "react";

function Footer() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.github.com/repos/MidanAhmed/midanahmed.github.io');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            // Extract the date and format it
            const updatedAt = new Date(jsonData.updated_at);
            const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(updatedAt);
            setData(formattedDate);
        } catch (error) {
            console.error('Error fetching repository data:', error);
        }
    };

    return (
        <div className='max-w-3xl text-sm mx-auto bg-slate-950 p-4 border-t border-slate-800 text-right'>
            <span className='text-slate-500'>Last updated on {data}</span>
        </div>
    )
}

export default Footer