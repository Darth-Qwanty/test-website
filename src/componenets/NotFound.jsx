import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function NotFound() {

    const navigate = useNavigate()


    return (
        <div>
            <h1>Error 404| Page was not found, (╥﹏╥)</h1>
            <br/>
            <div className='ButtonContainer'>
                <button className='button' onClick={()=> navigate('/')}>Go to the Home page</button>
            </div>
        </div>
    );
}

export default NotFound;