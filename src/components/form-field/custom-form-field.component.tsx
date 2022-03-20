import React from "react";
import {CustomFormFieldProps} from "../../@types/CustomFormField";

import "./custom-form-field.styles.scss";



export const CustomFormField = ({handleChange, label}: CustomFormFieldProps, {...otherProps}) => (
    <div className='group'>
        <input onChange={handleChange} className='form-input' {...otherProps}/>
        {
            label ?
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>)
                : null
        }
    </div>
)

export default CustomFormField;
