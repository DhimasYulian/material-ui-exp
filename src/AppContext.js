import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [data, setData] = useState([])
    const [dailyData, setDailyData] = useState([])
    const [allcountries, setCountries] = useState([])
    const [isLoading, setLoading] = useState(true);
    const endpoints = 'https://covid19.mathdro.id/api'
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(endpoints)
                setData(response.data)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        const fetchDailyData = async () => {
            try {
                const { data } = await axios.get(`${endpoints}/daily`)
                const chartData = data.map((item) => ({
                    confirmed: item.confirmed.total,
                    deaths: item.deaths.total,
                    date: item.reportDate
                }))
                setDailyData(chartData)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }

        fetchData();
        fetchDailyData();
    }, [])

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const { data: { countries } } = await axios.get(`${endpoints}/countries`)
                setCountries(countries.map((country) => country.name))
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        fetchCountries()

    }, [setCountries])

    const appData = {
        data,
        allcountries,
        dailyData,
        isLoading
    }
    return (
        <AppContext.Provider value={appData}>
            {props.children}
        </AppContext.Provider>
    )
}