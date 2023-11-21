import 'primeflex/primeflex.css';
import React from 'react';

const Footer = () => {
    return (
        <div className='absolute sticky bottom-0 w-12 h-3rem bg-cyan-800'>
            <div className='ml-4 flex flex-column'>
                <div>
                    <b>Fuentes</b>
                        <a href='www.wikidex.net'>Wikidex;</a>
                        <a href='pokeapi.co'>PokeApi</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;