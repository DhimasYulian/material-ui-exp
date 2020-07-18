import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { Line, Bar } from 'react-chartjs-2'

import style from './Chart.module.css'

const Chart = () => {
    const { dailyData, isLoading } = useContext(AppContext)
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
    return (
        <div className={style.container}>
            {lineChart}
        </div>
    )
}

export default Chart;