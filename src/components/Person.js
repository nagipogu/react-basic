import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Person({person}) {
    return (
        <div>
            <h2>
                I'm {person.name}, I'm {person.age} old, i know {person.skill}
            </h2>
        </div>
    )
}

export default Person