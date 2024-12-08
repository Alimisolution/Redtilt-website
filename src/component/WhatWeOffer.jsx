import React from 'react'
import { Cpu } from 'lucide-react';
import { CircleCheck } from 'lucide-react';
import { Globe } from 'lucide-react';
import { CloudUpload } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
const WhatWeOffer = () => {
  return (
    <>
    <div className="text-center flex justify-center items-center flex-col " id="service">
		<h1 className="mb-5 text-center text-2xl sm:text-3xl font-semibold">What we offer</h1>
		<p className="capitalize rounded-full text-sm md:text-base py-2 px-3 border-2 border-red-900">our experts will help you in following fields </p>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center items-center place-items-center px-4 py-16 gap-8 '>
    {/* Development */}
    <div className='bg-red-800 flex flex-col w-72  pt-3 rounded-md h-[400px]' data-aos="fade-up" data-aos-duration="5000">
        <div className='flex py-5 pl-5 justify-start items-center'>
            <Cpu className='pl-3 pr-2 w-14 h-14'/>
            <p className='text-xl pr-3'>Development</p>
        </div>
        <div className='pl-12'>
            <ul className='flex flex-col justify-end pl-3 pt-3 pb-20 bg-[darkred] rounded-ss-md rounded-ee-md text-sm '>
                <li className='flex items-center pb-2'>
                    <CircleCheck className='pr-2 w-8 h-8'/>
                    <p>UIUX</p>
                </li>
                <li className='flex items-center pb-2'>
                    <CircleCheck className='pr-2 w-8 h-8'/>
                    <p>DevOps</p>
                </li>
                <li className='flex items-center pb-2'>
                    <CircleCheck className='pr-2 w-8 h-8'/>
                    <p>Web design</p>
                </li>
                <li className='flex items-center pb-2'>
                    <CircleCheck className='pr-2 w-8 h-8'/>
                    <p>Frontend Dev</p>
                </li>
                <li className='flex items-center pb-2'>
                    <CircleCheck className='pr-2 w-8 h-8'/>
                    <p>Backend Dev</p>
                </li>
            </ul>
        </div>
    </div>

    {/* MSP */}
    <div className='bg-red-800 flex flex-col w-72  pt-3 rounded-md h-[400px]' data-aos="fade-up" data-aos-duration="5000">
        <div className='flex py-5 pl-5 justify-start items-center'>
            <Globe className='pl-3 pr-2 w-14 h-14'/>
            <p className='text-xl pr-3'>MSP</p>
        </div>
        <div className='pl-12'>
            <ul className='flex flex-col justify-end pl-3 pt-3 pb-[6.45rem] bg-[darkred] rounded-ss-md rounded-ee-md text-sm  h-full'>
                <li className='flex items-center pb-2'>
                    <CircleCheck className='pr-2 w-8 h-8'/>
                    <p>Infrastructure manager</p>
                </li>
                <li className='flex items-center pb-2'>
                    <CircleCheck className='pr-2 w-8 h-8'/>
                    <p>Managed Monitoring</p>
                </li>
                <li className='flex items-center pb-2'>
                    <CircleCheck className='pr-2 w-8 h-8'/>
                    <p>Business Continuity</p>
                </li>
                <li className='flex items-center pb-2'>
                    <CircleCheck className='pr-2 w-8 h-8'/>
                    <p>Managed Cyber</p>
                </li>
            </ul>
        </div>
    </div>

    {/* Cloud */}
    <div className='bg-red-800 flex flex-col w-72  pt-3 rounded-md h-[400px]' data-aos="fade-up" data-aos-duration="5000">
        <div className='flex py-5 pl-5 justify-start items-center'>
            <CloudUpload className='pl-3 pr-2 w-14 h-14'/>
            <p className='text-xl pr-3'>Cloud</p>
        </div>
        <div className='pl-12'>
            <ul className='flex flex-col justify-end pl-3 pt-3 bg-[darkred] rounded-ss-md rounded-ee-md text-sm '>
                <li className='flex items-center pb-2'>
                    <CircleCheck className='pr-2 w-8 h-8'/>
                    <p>AWS</p>
                </li>
                <li className='flex items-center pb-2'>
                    <CircleCheck className='pr-2 w-8 h-8'/>
                    <p>AZURE</p>
                </li>
                <li className='flex items-center pb-2'>
                    <CircleCheck className='pr-2 w-8 h-8'/>
                    <p>Multi-Cloud</p>
                </li>
                <li className='flex items-center pb-2'>
                    <CircleCheck className='pr-2 w-8 h-8'/>
                    <p>SRE Strategy</p>
                </li>
                <li className='flex items-center pb-2'>
                    <CircleCheck className='pr-2 w-8 h-8'/>
                    <p>Server less</p>
                </li>
                <li className='flex items-center pb-2'>
                    <CircleCheck className='pr-2 w-8 h-8'/>
                    <p>Hybrid Strategy</p>
                </li>
                <li className='flex items-center pb-2'>
                    <CircleCheck className='pr-2 w-8 h-8'/>
                    <p>Containerisation</p>
                </li>
            </ul>
        </div>
    </div>

    {/* Cyber */}
    <div className='bg-red-800 flex flex-col w-72  pt-3 rounded-md h-[400px]' data-aos="fade-up" data-aos-duration="5000">
        <div className='flex py-5 pl-5 justify-start items-center'>
            <ShieldCheck className='pl-3 pr-2 w-14 h-14'/>
            <p className='text-xl pr-3'>Cyber</p>
        </div>
        <div className='pl-12'>
            <ul className='flex flex-col justify-end pl-3 pt-3 pb-[7.5rem] bg-[darkred] rounded-ss-md rounded-ee-md text-sm '>
                <li className='flex items-center pb-2'>
                    <CircleCheck className='pr-2 w-8 h-8'/>
                    <p>Cyber Audit</p>
                </li>
                <li className='flex items-center pb-2'>
                    <CircleCheck className='pr-2 w-8 h-8'/>
                    <p>Cyber governance</p>
                </li>
                <li className='flex items-center pb-2'>
                    <CircleCheck className='pr-2 w-8 h-8'/>
                    <p>Security as a service</p>
                </li>
                <li className='flex items-center pb-2'>
                    <CircleCheck className='pr-2 w-8 h-8'/>
                    <p>Penetration Testing</p>
                </li>
            </ul>
        </div>
    </div>

</div>

    </>
  )
}

export default WhatWeOffer