import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
            name: 'Company A',
            Mobile: 4000,
            Laptop: 2400,
            amt: 2400,
        },
        {
            name: 'Company B',
            Mobile: 3000,
            Laptop: 1398,
            amt: 2210,
        },
        {
            name: 'Company C',
            Mobile: 2000,
            Laptop: 9800,
            amt: 2290,
        },
        {
            name: 'Company D',
            Mobile: 2780,
            Laptop: 3908,
            amt: 2000,
        },
        {
            name: 'Company E',
            Mobile: 1890,
            Laptop: 4800,
            amt: 2181,
        },
        {
            name: 'Company F',
            Mobile: 2390,
            Laptop: 3800,
            amt: 2500,
        },
        {
            name: 'Company G',
            Mobile: 3490,
            Laptop: 4300,
            amt: 2100,
        },
    ];
    return (
        <AreaChart
            width={800}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Area type="monotone" dataKey="Laptop" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Area type="monotone" dataKey="Mobile" stroke="#82ca9d" />
        </AreaChart>
    );
};

export default MyLineChart;