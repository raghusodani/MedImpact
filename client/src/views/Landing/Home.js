import React from 'react'
import './Home.css'
const Home = () => {

    return (
        <div className='home'>
            <div className='homeabove'>
                <div className='homeabovecontainer'>
                    <a className='homeabovecontaineritem' href="/search/donor">
                        <p className='containeritemtext' >Find a Blood Donor Online</p>
                    </a>
                    <a className='homeabovecontaineritem' href="/search/medicine">
                        <p className='containeritemtext'>Get medicines near you</p>
                    </a>
                </div>
            </div>
            <div className='homebelow'>
                <h1 className='homebelowh1'>About</h1>
                <div className='homebelowcontainer'>
                    <div className='homebelowcontaineritem'>
                        <p className='homebelowcontaineritemhead'>Managing medical stores</p>
                        <p className='homebelowcontaineritemtext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into electronic 
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className='homebelowcontaineritem1'>
                        <p className='homebelowcontaineritemhead1'>Blood donors at your fingertips</p>
                        <p className='homebelowcontaineritemtext1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into electronic 
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
