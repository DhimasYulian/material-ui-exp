import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [data, setData] = useState([])
    const [dailyData, setDailyData] = useState([])
    const [allcountries, setCountries] = useState([])
    const [country, setCountry] = useState("")
    const [isLoading, setLoading] = useState(true);
    const endpoints = 'https://covid19.mathdro.id/api'

    useEffect(() => {
        let changeableUrl = endpoints;
        const fetchData = async (country) => {
            setLoading(true)
            if (country) {
                changeableUrl = `${endpoints}/countries/${country}`
            }
            try {
                const response = await axios.get(changeableUrl)
                setData(response.data)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        fetchData(country);
    }, [country])

    useEffect(() => {
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
    }, [])

    const appData = {
        data,
        allcountries,
        country,
        dailyData,
        isLoading,
        setCountry
    }
    return (
        <AppContext.Provider value={appData}>
            {props.children}
        </AppContext.Provider>
    )
}