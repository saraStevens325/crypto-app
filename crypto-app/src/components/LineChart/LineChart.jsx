import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'


const LineChart = ({historicalData}) => {

const [data, setData] = useState([["Date", "Prices"]]);

useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData.prices) {
        historicalData.prices.map((item)=> {
        dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]])
    })
    setData(dataCopy);
    }
    }, [historicalData]
)

// const options = {
//   backgroundColor: "#952cb2"
// }
const options = {
  backgroundColor: "#952cb2",
  chartArea: { backgroundColor: "#952cb2" },
  legend: { textStyle: { color: "#000", fontWeight: 900 } },
  hAxis: { textStyle: { color: "#000", fontWeight: 900 }, titleTextStyle: { color: "#000", fontWeight: 900 } },
  vAxis: { textStyle: { color: "#000", fontWeight: 900 }, titleTextStyle: { color: "#000", fontWeight: 900 }, gridlines: { color: "#fff", count: 5 } },
  series: {
    0: {
      color: "#00c8b8", // White line
      lineWidth: 4,  // Bold line
    }
  }
}
  return (
    <Chart
        chartType="LineChart"
        data={data}
        height="100%"
        legendToggle
        options={options}
    />
  )
}

export default LineChart