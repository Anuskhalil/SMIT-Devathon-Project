import React, { useState } from 'react'
import data from '../TemplateData.json'

function AppVideo() {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <>
            {/* Search Filter */}

            <div className='templateContainer'>
                <div className='searchInput_Container d-flex justify-content-center my-5'>
                    <input style={{width:'50%', padding:'10px', borderRadius:'5px', borderTop:'none', borderLeft:'none', borderRight:'none'}} type="text" placeholder='Search here...' onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }} />
                </div>
                <div className='template_Container  my-5'>
                    {
                        data
                            .filter((val) => {
                                if (searchTerm === '') {
                                    return val;
                                }
                                else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            })
                            .map((val) => {
                                return (
                                    <div className='container'>
                                        <div className="row">
                                            <div className="col">
                                                <div className='template' key={val.id}>
                                                    <video style={{borderRadius:'10px'}} width={'100%'} src={val.video} autoPlay muted loop ></video>
                                                    <h3>{val.title}</h3>
                                                    <p className='price'>{val.price}</p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                )
                            })
                    }

                </div>

            </div>
        </>
    )
}

export default AppVideo
