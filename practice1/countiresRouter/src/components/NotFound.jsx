import React, {useContext, memo} from 'react';
import '../assets/scss/notFound.scss'
import { ThemeContext } from '../contexts/ThemeContext';

const NotFound = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={`notFound ${theme} text-color`}>
            <h2>Page not found! <br></br>Error 404</h2>
        </div>
    );
}

export default memo(NotFound);
