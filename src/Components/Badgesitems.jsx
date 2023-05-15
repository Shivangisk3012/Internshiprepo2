import React from 'react'
import { allbadges } from '../Constants/badgesdata'
import arrow from "../assets/Badges/Arrow.png"



const Badgesitems = () => {
  return (
    <div className="border flex items-center bg-[#E7E9EC] px-8 py-7 rounded-2xl h-[8.3rem] relative">
      <aside className="w-[20rem] h-[4.5rem]">
        <h1 className='text-2xl font-semibold text-[#0478FF]'> Complete your profile</h1>
        <p className=' text-[12px] leading-[18px]'>Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
          m lorem ipsim fldkjfksdjflsdfj jdjflksjdf o sflsml8f flajfl</p>
      </aside>
      <aside className='flex flex-col justify-end gap-2 items-center absolute right-12 bottom-3 max-w-[103px] w-[103px] h-[163px] max-h-[163px]'>
        <img src={allbadges[2].img} alt="badge" className="object-fill" />
        <div className='flex gap-2 text-[14px] leading-[21px] font-[500] items-center'>
          <p>View more</p>
          <img src={arrow} alt="arrow" className='object-fill w-5 h-3' />
        </div>
      </aside>
    </div>
  )
}
export default Badgesitems