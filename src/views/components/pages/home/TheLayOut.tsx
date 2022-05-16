import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

const TheLayOut = () => {
    return (
        <div>
            <div><Header /></div>
            <div>
                <Main/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default TheLayOut;