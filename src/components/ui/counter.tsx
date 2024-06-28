"use client"

import React from 'react';
import CountUp from 'react-countup';

interface CounterProps {
    end: number;
    label: string;
    symbol?: string;
}

export default function Counter({ end, label, symbol }: CounterProps) {
    return (
        <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="text-6xl font-extrabold text-blue-500 mb-2">
                    <CountUp end={end} duration={4} />
                    {
                        symbol && symbol
                    }
                </div>
                <div className="text-lg font-medium text-gray-600">{label}</div>
            </div>
        </div>
    );
};
