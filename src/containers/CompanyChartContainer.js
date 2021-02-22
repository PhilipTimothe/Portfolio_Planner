import React, { Component } from "react";
import { Line } from 'react-chartjs-2';

const apiKey = process.env.API_KEY;

export default class CompanyChartContainer extends Component {
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
        const { id } = this.props;

        if (!id) {
        return;
        }

            fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${id}&apikey=${apiKey}`)
            .then((res) => res.json())
            .then((data) => {
                const objectKeys = (Object.keys(data["Time Series (Daily)"])).slice(0,30).sort((a,b)=> (a > b ? 1 : -1))
                const objectData = (Object.values(data["Time Series (Daily)"]))
                const mappedData = objectData.map((closeData) => closeData["4. close"]).slice(0,30).reverse()

                this.setState({ 
                    chartData: {
                        labels: objectKeys,
                        datasets: [
                            {
                                label: '30 Day Historical Data',
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
                {<Line data={this.state.chartData} options={this.state.chartOptions} />}
            </>
        )
    }
}