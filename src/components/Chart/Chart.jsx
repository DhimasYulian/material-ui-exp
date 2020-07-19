import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { Line, Bar } from 'react-chartjs-2'

import style from './Chart.module.css'

const Chart = () => {
    const { dailyData, data, country, isLoading } = useContext(AppContext)
    const { confirmed, recovered, deaths } = data

    const lineChart = (
        isLoading ? null : <Line data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [{
                data: dailyData.map(({ confirmed }) => confirmed),
                label: "Infected",
                borderColor: "#3333ff",
                fill: true
            }, {
                data: dailyData.map(({ deaths }) => deaths),
                label: "Deaths",
                borderColor: "red",
                backgroundColor: "rgba(255, 0, 0, 0.6)",
                fill: true
            }]
        }} />
    )

    const barChart = (
        isLoading ? null : <Bar data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
                label: 'People',
                backgroundColor: ['rgba(0, 0, 255, 0.6)', 'rgba(0, 255, 0, 0.6)', 'rgba(255, 0, 0, 0.6)'],
                data: [confirmed.value, recovered.value, deaths.value]
            }]
        }} options={{
            legend: { display: false },
            title: { display: true, text: `Current status in ${country}` }
        }} />
    )
    return (
        <div className={style.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;