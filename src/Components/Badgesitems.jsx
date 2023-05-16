import React from 'react'
import arrow from "../assets/Badges/Arrow.png"
import "../Styles/BadgeItems.css"


const Badgesitems = ({badgeid,badgeimage,earned}) => {
  // console.log("in badgeitems component",earned,badgeid);
  return (
    <div className="profile-card">
      <aside>
        <h1>
          {earned ? `Earned this badge ${badgeid}`:`Complete your profile ${badgeid}`}
        </h1>
        <p>
          Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum m lorem ipsim fldkjfksdjflsdfj jdjflksjdf o sflsml8f flajfl
        </p>
      </aside>
      <aside>
        <img src={badgeimage} alt="badge" />
        <div>
          <button>View more</button>
          <img src={arrow} alt="arrow" />
        </div>
      </aside>
    </div>
  )
}
export default Badgesitems