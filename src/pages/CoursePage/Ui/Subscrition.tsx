import tick from '../../../assets/icons/tick-circle.svg'
import refer from '../../../assets/images/refer.svg'
import refersm from '../../../assets/images/refersm.svg'
import React from 'react';


interface PackageProps {
    title: string;
    description: string;
    oldPrice: string;
    price: string;
    features: string[];
    buttonLabel: string;
}

interface PaymentProps {
    package1: PackageProps;
    package2: PackageProps;
}

const Payment: React.FC<PaymentProps> = ({ package1, package2 }) => {
    return (
        <div className='m-2'>
            <div className='flex gap-12 justify-center max-sm:flex-col max-lg:gap-2 py-10 max-lg:hidden'>
                <div className='flex justify-center'>
                    <div className='flex flex-col gap-6 bg-[#121721] p-10 w-[600px] max-sm:w-[340px] rounded-xl max-xl:w-[470px]'>
                        <div className='bg-[#246BFD1A] w-[100px] px-2 py-1 rounded-xl'>
                            <span className='text-[#246BFD]'>{package1.title}</span>
                        </div>
                        <span className='text-white text-[24px] font-Lato font-400 line-through'>{package1.oldPrice}</span>
                        <span className='text-white text-[48px] font-Lato font-600'>{package1.price}</span>
                        <p className='text-white pr-16'>{package1.description}</p>
                        <hr className='bg-white' />
                        {package1.features.map((feature, index) => (
                            <div key={index} className='flex gap-4'>
                                <img src={tick} alt="" />
                                <p className='text-[20px] text-white'>{feature}</p>
                            </div>
                        ))}
                        <button className={`bg-[#246BFD]  font-semibold text-white px-10 py-4 rounded-xl`}>{package1.buttonLabel}</button>
                    </div>
                </div>
                <div className='flex flex-col gap-6 bg-[#121721] p-10 w-[600px] max-sm:w-[410px] rounded-xl border border-[#FF9300]'>
                    <div className='bg-[#FF93001A] w-[140px] px-2 py-1 rounded-xl'>
                        <span className='text-[#FF9300]'>{package2.title}</span>
                    </div>
                    <span className='text-white text-[24px] font-Lato font-400 line-through'>{package2.oldPrice}</span>
                    <span className='text-white text-[48px] font-Lato font-600'>{package2.price}</span>
                    <p className='text-white pr-16'>{package2.description}</p>
                    <hr className='bg-white' />
                    {package2.features.map((feature, index) => (
                        <div key={index} className='flex gap-4'>
                            <img src={tick} alt="" />
                            <p className='text-[20px] text-white'>{feature}</p>
                        </div>
                    ))}
                    <button className={`bg-[#FF9300] font-semibold text-white px-6 py-4 rounded-xl`}>{package2.buttonLabel}</button>
                </div>
            </div>
            <div className='py-16 pb-[100px] max-lg:px-6 flex justify-center max-sm:hidden'>
                <img src={refer} alt="" />
            </div>
            <div className='py-2 flex justify-center sm:hidden'>
                <img src={refersm} alt="" />
            </div>
        </div>
    );
}

export default Payment;
