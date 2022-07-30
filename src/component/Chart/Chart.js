import axios from 'axios';
import './Chart.css';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data;
                const phoneData = loadedData.map(phone => {
                    const parts = phone.slug.split('-');
                    const ph = {
                        name: parts[0],
                        value: parseInt(parts[1])
                    };
                    return ph;
                }
                );
                setPhones(phoneData);
                console.log(phoneData)
            });
    }, [])
    return (
        <div className='chart'>

            <BarChart width={830} height={350} data={phones}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Chart;