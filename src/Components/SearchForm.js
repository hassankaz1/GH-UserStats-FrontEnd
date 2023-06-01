import React, { useState } from 'react';


const baseURL = "https://gh-user-stats.herokuapp.com/github/user/"


const Form = ({ makeAPIRequest, setUserInfo, setShowInfo }) => {
    const [formData, setFormData] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        let endpoint = baseURL + formData
        console.log(endpoint)

        const request = await makeAPIRequest(endpoint)
        setUserInfo(request)
        // onSubmit(formData);

        setShowInfo(true)

    };



    const handleChange = (e) => {
        setFormData(e.target.value);
    };


    return (
        <>


            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrappr">
                                        <div className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <img className='logo' src='https://pngimg.com/d/github_PNG58.png' />
                                                    <h4 className="mb-4 pb-3">Search GitHub Username</h4>
                                                    <div className="form-group">
                                                        <input value={formData} onChange={handleChange} type="text" name="username" className="form-style" placeholder="Enter Username" id="username" autoComplete="off" />
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    <a href="#" onClick={handleSubmit} className="btn mt-4">Search</a>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>


        </>
    );
};


export default Form;