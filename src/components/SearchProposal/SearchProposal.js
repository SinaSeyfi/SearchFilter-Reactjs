import React, { useState } from 'react';
import "./SearchProposal.scss"

export default function SearchProposal(props) {

  //word mean
  const [mean, setMean] = useState(false);
  const handleMean = () => {
    setMean(!mean)
  }
  
  return (
    <div className={mean ? 'ProposalItemMean' : 'ProposalItem'}>
      <i className={mean ? 'fa-duotone fa-x' : 'fa-duotone fa-turn-down-left'} onClick={handleMean}></i>
      <div className='text'>
        <span>
          {props.EnglishWord}
        </span>
        {
          mean ?
            <div className='mean'>
              <span>
                {props.Meanings}
              </span>
            </div>
            : null
        }
      </div>




    </div>
  )
}
