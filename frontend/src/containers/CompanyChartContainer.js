import React, { Component } from "react";
import { Line } from 'react-chartjs-2';
import {connect} from 'react-redux'

const apiKey = process.env.API_KEY;

class CompanyChartContainer extends Component {
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

            fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.props.currentCompanySymbol}&apikey=${apiKey}`)
            .then((res) => res.json())
            .then((data) => {
                const objectKeys = (Object.keys(data["Time Series (Daily)"])).slice(0,30).sort((a,b)=> (a > b ? 1 : -1))
                const objectData = (Object.values(data["Time Series (Daily)"]))
                const mappedData = objectData.map((closeData) => closeData["4. close"]).slice(0,30).reverse()
                // console.log(mappedData)

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
                <Line data={this.state.chartData} options={this.state.chartOptions} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    currentCompanySymbol: state.currentCompanySymbol,
})

export default connect(mapStateToProps) (CompanyChartContainer)

// When loading the page from scratch the chart data does not load properly.