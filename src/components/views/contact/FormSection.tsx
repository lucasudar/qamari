"use client"

import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';

type Inputs = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

export default function FormSection() {
    const { handleSubmit, register, reset } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
        const response = await fetch('/api/telegram', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            reset();
            toast("Message sent successfully")
        } else {
            toast("Failed to send message");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="flex-1">
                    <h1 className="antialiased font-sans font-medium text-3xl text-gray-900 leading-8 mb-2">
                        Hi there 👋
                    </h1>
                    <p className="antialiased font-sans font-normal text-sm text-gray-900 leading-6 mb-0">
                        We’re here to help. Ask us anything!
                    </p>
                </div>
                <div className="flex-col md:items-center md:flex mt-4">
                    <div className="w-full pb-2">
                        <label className="block mb-2 text-sm text-gray-600">Your Name</label>
                        <input type="text"
                            className="input px-3 bg-white border border-gray-200 rounded-md w-full focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" {...register('name', { required: true, maxLength: 30 })} />
                    </div>
                </div>
                <div className="flex-col md:items-center md:flex mt-4">
                    <div className="w-full pb-2">
                        <label className="block mb-2 text-sm text-gray-600">Your Email</label>
                        <input type="text"
                            className="input px-3 bg-white border border-gray-200 rounded-md w-full focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" {...register('email', { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                    </div>
                </div>
                <div className="flex-col md:items-center md:flex mt-4">
                    <div className="w-full pb-2">
                        <label className="block mb-2 text-sm text-gray-600">Your Phone</label>
                        <input type="text"
                            className="input px-3 bg-white border border-gray-200 rounded-md w-full focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            {...register('phone', { required: true, pattern: /^\+?[1-9]\d{1,14}$/ })}
                        />
                    </div>
                </div>
                <div className="w-full mt-4">
                    <label className="block mb-2 text-sm text-gray-600">What can we help you with? Describe Your Inquiry</label>
                    <textarea
                        id="details"
                        {...register('message', { required: true, pattern: /^[A-Za-z0-9\s$%#@,.;:(){}'"\\/+!?-]+$/i })}
                        className="block w-full h-32 px-3 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    ></textarea>
                </div>
            </div>
            <div className="px-4 py-3 sm:flex sm:px-6">
                <button type="submit"
                    className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 md:w-auto">
                    Send message
                </button>
            </div>
        </form >
    );
}