import React,{Fragment} from 'react'
import style from 'styled-components';
import PropTypes from 'prop-types';
export const FormInput = ({
    name,
    type,
    placeholder,
    onChange,
    value,
    error,
    children,
    label,
    ...rest}) => {

    return (
        <Fragment>
            <Input
                name={name}
                label={label}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                {...rest}
            />
            {error && <p>{error}</p>}
        </Fragment>
    )
}

const Input = style.input`
    outline: none;
	border-top-style: hidden;
	border-right-style: hidden;
    border-left-style: hidden;
    width: 100%
`;


Input.defaultProps = {
    type: "text",
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'email']),
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired
}
