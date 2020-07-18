import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'
import style from './Card.module.css'

const MyCard = () => {
    const { data, isLoading } = useContext(AppContext)
    const { confirmed, recovered, deaths, lastUpdate } = data;
    return (
        <>
            {isLoading ? <h2>Loading...</h2> : (
                <div className={style.container}>
                    <Grid container spacing={3} justifiy="center">
                        <Grid item component={Card} xs={12} md={3} className={cx(style.card, style.infected)}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>Infected</Typography>
                                <Typography variant="h5">
                                    <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                                </Typography>
                                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                                <Typography variant="body2">Number of Infected Cases of COVID-19</Typography>
                            </CardContent>
                        </Grid>
                        <Grid item component={Card} xs={12} md={3} className={cx(style.card, style.recovered)}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                                <Typography variant="h5">
                                    <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                                </Typography>
                                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                                <Typography variant="body2">Number of Recoveries from COVID-19</Typography>
                            </CardContent>
                        </Grid>
                        <Grid item component={Card} xs={12} md={3} className={cx(style.card, style.deaths)}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                                <Typography variant="h5">
                                    <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                                </Typography>
                                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                                <Typography variant="body2">Number of Death Caused by COVID-19</Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </div>
            )}

        </>
    )
}

export default MyCard;