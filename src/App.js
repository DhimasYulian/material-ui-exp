import React from 'react';
import { AppProvider } from './AppContext'
import { MyCard, Chart, CountryPicker } from './components'
import style from './App.module.css'

function App() {
  return (
    <AppProvider>
      <div className={style.container}>
        <MyCard />
        <CountryPicker />
        <Chart />
      </div>
    </AppProvider>
  )
}

export default App;
