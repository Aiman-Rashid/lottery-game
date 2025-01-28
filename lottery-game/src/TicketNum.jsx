import React from 'react';
import PropTypes from 'prop-types';

export default function TicketNum({ num }) {
    return (
        <span className="badge bg-primary me-2">{num}</span>
    );
}

TicketNum.propTypes = {
    num: PropTypes.number.isRequired,
};


