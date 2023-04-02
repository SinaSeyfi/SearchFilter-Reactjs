import React, { useState } from 'react';
import SearchProposal from '../SearchProposal/SearchProposal';
import "./Search.scss";
import data from "../../data/data";

export default function Search() {

    //handle inpet
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    //input on click
    const [proposal, setProposal] = useState(false);
    const handleProposal = () => {
        setProposal(true)
    }

    //handle close search proposal
    const handleCloseProposal = () => {
        setProposal(false)
        setSearch("")
    }

    //data
    const mapData = data.Words;

    return (
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-5'>
                    <div className={proposal ? 'searchBoxProposal' : 'searchBox'}>
                        <div className='searchInput'>
                            {
                                proposal ? <i className='fa-duotone fa-x' onClick={handleCloseProposal}></i>
                                    : <i className='fa-duotone fa-language' onClick={handleCloseProposal}></i>
                            }
                            <input type="text" onClick={handleProposal} placeholder="Enter text" value={search} onChange={handleSearch} />
                            <i className='fa-duotone fa-magnifying-glass'></i>
                        </div>

                        {
                            proposal ?
                                <div className='searchProposal'>
                                    {mapData.filter((val) => {
                                        //search filter
                                        if (search == "") {
                                            return val;
                                        } else if (val.EnglishWord.toLowerCase().includes(search.toLowerCase())) {
                                            return val;
                                        }
                                    }).map((val, index) => {
                                        return <SearchProposal
                                            EnglishWord={val.EnglishWord}
                                            Meanings={val.Meanings}
                                            key={index}
                                        />
                                    })}
                                </div>
                                : null
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
