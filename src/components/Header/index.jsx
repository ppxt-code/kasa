import React, { useState, useEffect } from 'react';
import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import logoKasaLarge from '../../assets/LOGO_large.png'
import logoKasaSmall from '../../assets/LOGO_small.png'

function MyLink({ to, children }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link to={to}
      style={{ textDecoration: match ? 'underline' : 'none',
               color: 'black',}} >
      {children}
    </Link>
  );
}

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
                <MyLink to="/">{isMobile ? 'ACCUEIL' : 'Accueil'}</MyLink>
                <MyLink to="/apropos">{isMobile ? 'A PROPOS' : 'A propos'}</MyLink>
            </div> 
        </div>
    )
}
export default Header