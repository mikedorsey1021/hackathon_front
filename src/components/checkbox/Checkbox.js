import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Checkbox = ({ label, type = 'checkbox', name, checked = false, onChange }) => {
    return (
        <CheckboxContainer>
            <Label htmlFor={name}>{label}</Label>
            <input
                type={type}
                name={name}
                checked={checked}
                onChange={onChange}
            />
        </CheckboxContainer>
    )
}

Checkbox.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
}

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin: 3px;
`

const Label = styled.label`
    margin-right: 3px;
`