import React, { useState } from 'react';

function Home() {
    const [user, setUser] = useState("");
    return (
        <div className='Container'>
            <h1>This is Home page.</h1>
        </div>
    );
}

export default Home;