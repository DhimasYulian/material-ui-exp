import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { NativeSelect, FormControl } from '@material-ui/core'

import style from './CountryPicker.module.css'

const CountryPicker = () => {
    const { allcountries, setCountry } = useContext(AppContext)

    return (
        !allcountries ? null : (
            <FormControl className={style.formControl}>
                <NativeSelect defaultValue="" onChange={e => setCountry(e.target.value)}>
                    <option value="" >Global</option>
                    {allcountries.map((eachCountry, index) => <option key={index} value={eachCountry}>{eachCountry}</option>)}
                </NativeSelect>
            </FormControl>
        )
    )
}

export default CountryPicker;