import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { NativeSelect, FormControl } from '@material-ui/core'

import style from './CountryPicker.module.css'

const CountryPicker = () => {
    const { allcountries, isLoading } = useContext(AppContext)

    const handleCountry = (country) => {
        console.log(country)
    }

    return (
        isLoading ? null : (
            <FormControl className={style.formControl}>
                <NativeSelect defaultValue="" onChange={e => handleCountry(e.target.value)}>
                    <option value="">Global</option>
                    {allcountries.map((country, index) => <option key={index} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        )
    )
}

export default CountryPicker;