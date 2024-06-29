"use client"

import { coreFeaturesConfig } from "@/config/features";
import { CldImage } from "next-cloudinary";

export default function CoreFeatures() {
    return (
        <div className='overflow-hidden'>
            <div className='relative isolate mx-auto mt-10 w-full pt-10'>
                <svg
                    className='absolute opacity-50 inset-0 hidden h-full w-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] dark:stroke-white/10 sm:block'
                    aria-hidden='true'
                >
                    <defs>
                        <pattern id='rect-pattern-2' width={200} height={200} x='50%' y={0} patternUnits='userSpaceOnUse'>
                            <path d='M.5 200V.5H200' fill='none' />
                        </pattern>
                    </defs>
                    <svg x='50%' y={0} className='overflow-visible fill-gray-50 dark:fill-slate-800/30'>
                        <path
                            d='M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z'
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width='100%' height='100%' strokeWidth={0} fill='url(#rect-pattern-2)' />
                </svg>
                <section className='bg-white pb-14 pt-14 dark:bg-background'>
                    <div className='mx-auto w-fit sm:text-5xl'>
                        <h2 className='text-center text-lg uppercase tracking-widest mb-8 opacity-80'>Core Features</h2>
                    </div>
                    <div className='mx-auto mt-[60px] flex w-full max-w-7xl flex-wrap items-center justify-center xl:justify-between'>
                        {coreFeaturesConfig.coreFeatures.map((item: any, index: number) => (
                            <div key={item.name} className='flex h-auto w-[416px] flex-col items-center px-7 py-11 text-center'>
                                <span className='text-3xl font-semibold text-indigo-500'>{1 + index}</span>
                                <div className='mt-2'>
                                    <h2 className='mx-auto mb-3 max-w-[300px] whitespace-pre-line text-xl font-semibold text-slate-900 dark:text-white'>
                                        {item.name}
                                    </h2>
                                    <p className='mx-auto max-w-xs text-gray-600 dark:text-gray-400'>{item.desc}</p>
                                </div>
                                <CldImage
                                    src={item.url}
                                    width={300}
                                    height={300}
                                    alt={item.desc}
                                    className="mt-4 mb-2 w-full max-w-[280px] h-auto object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}