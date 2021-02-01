import React, { Component } from "react";
import { Line } from 'react-chartjs-2';
import { store } from '../store';

const apiKey = process.env.API_KEY;

export default class CompanyChart extends Component {
        state = {
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: '100 Day, Daily Historical Data',
                        data: [],
                        fill: false,
                        backgroundColor: 'rgb(54, 162, 235)',
                        borderColor: 'rgba(54, 162, 235, 0.2)',
                    },
                ],
            },
            chartOptions: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: false,
                            },
                        },
                    ],
                },
            }
    }

    componentDidMount() {
            fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${store.currentCompanySymbol}&apikey=${apiKey}`)
            .then((res) => res.json())
            .then((data) => {
                const objectKeys = (Object.keys(data["Time Series (Daily)"]))
                const objectData = (Object.values(data["Time Series (Daily)"]))
                const mappedData = objectData.map((closeData) => closeData["4. close"])
                console.log(objectKeys)
                
                this.setState({ 
                    chartData: {
                        labels: objectKeys,
                        datasets: [
                            {
                                label: '100 Day, Daily Historical Data',
                                data: mappedData,
                                fill: false,
                                backgroundColor: 'rgb(54, 162, 235)',
                                borderColor: 'rgba(54, 162, 235, 0.2)',
                            },
                        ]
                    }
                })
            })
    }

    render() {
        return (
            <>
                <Line data={this.state.chartData} options={this.state.chartOptions} />
            </>
        )
    }
}

// Object.keys(data["Time Series (Daily)"])