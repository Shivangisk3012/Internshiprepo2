import React, { useState } from 'react'
import Badgesitems from './Badgesitems'
import { allbadges } from '../Constants/badgesdata'
import { useOutletContext } from 'react-router-dom'

const Allbadges = () => {
  const {userbadgesids} = useOutletContext();
  // console.log(userbadgesids);
  // console.log(user);

  // for pagination
  const [noOfElements, setNoOfElements] = useState(6);
  const slice = allbadges.slice(0, noOfElements);

  return (
    <div className='flex flex-col items-center'>
      {
        slice.map((badge) => {
          const print = userbadgesids.has(badge.id);
          return <Badgesitems key={badge.id} badgeid={badge.id} earned={print} badgeimage={badge.img} />
        }
        )
      }
      {
        (noOfElements < allbadges.length) && <button onClick={() => setNoOfElements(noOfElements + 4)}
          className='py-2 px-16 my-2 bg-[#0478FF] text-white rounded-lg text-sm'
        >
          View more
        </button>
      }
    </div>
  )
}

export default Allbadges