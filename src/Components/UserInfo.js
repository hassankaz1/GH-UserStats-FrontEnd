

import React from "react";
import { RxCountdownTimer } from "react-icons/rx";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { MdOutlineSdStorage } from "react-icons/md";


function UserInfo({ data, setShowInfo }) {

    console.log(data)

    const { repoCount, stargazers, forkCount, avgSize, languages, userLink, avatar, repoLink, owner } = data

    console.log(repoLink)

    const handleNew = (e) => {
        setShowInfo(false)
    }


    return (
        <>
            <div className="stat-container">
                <div className="stat">
                    <div className="left">
                        <img className="profile-img" src={avatar} alt="" />
                    </div>
                    <div className="right">
                        <h2 className="name">@{owner}</h2>
                        <a href={userLink} target="_blank">User Link &nbsp;</a>
                        <a href={repoLink} target="_blank">Repositories</a>
                        <p className="info">
                            <span classNameName="">
                                <RxCountdownTimer />
                            </span>

                            {repoCount}&nbsp; total count of repos</p>


                        <p className="info">
                            <span classNameName="">
                                <AiOutlineStar />
                            </span>
                            {stargazers}

                            stargrazers</p>
                        <p className="info">
                            <span classNameName="">
                                <BiGitRepoForked />
                            </span>
                            {forkCount}

                            total fork count of repos</p>


                        <p className="info">
                            <span classNameName="">
                                <MdOutlineSdStorage />
                            </span>
                            {avgSize} average size of repo </p>
                        <div className="lang">
                            <p className="lang_title">
                                Languages / Count </p>
                            {languages.map(l =>
                                <span className="lang_item">{l[0]} : {l[1]} </span>

                            )}
                        </div>

                        <button className="button" onClick={handleNew}>New Search</button>
                    </div>
                </div>
            </div>


        </>
    );


}


export default UserInfo;





