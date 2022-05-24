import React from 'react';
import propTypes from 'prop-types';

const Header = ({text}) => {
   return (
      <header>
         <div className='container'>
            <h2>{text}</h2>
         </div>
      </header>
   );
};

// Default props
Header.defaultProps = {
   text: 'Feedback UI',
};

// Prop types
Header.propTypes = {
   text: propTypes.string.isRequired,
};

export default Header;
