import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import logoKasaLarge from '../../assets/LOGO_large.png'
import logoKasaSmall from '../../assets/LOGO_small.png'

function Header() {
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 767px)').matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)');
        const handler = e => setIsMobile(e.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    return (
        <div class="headerWrapper">
            <picture>
                <source media="(max-width: 768px)" srcSet={logoKasaSmall} />
                <img src={logoKasaLarge} alt="logo kasa"/>  
            </picture>
            <div class="linksWrapper">
                <Link to="/">{isMobile ? 'ACCUEIL' : 'Accueil'}</Link>
                <a href="/apropos">{isMobile ? 'A PROPOS' : 'A propos'}</a>
            </div> 
        </div>
    )
}
export default Header