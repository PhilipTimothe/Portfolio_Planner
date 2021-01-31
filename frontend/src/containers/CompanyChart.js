import React, { Component } from "react";
import { Line } from "react-chartjs.2";
import { store } from '../store';

const apiKey = process.env.API_KEY;

export default class CompanyChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            symbol = store.currentCompanySymbol,
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        fill: false,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgba(255, 99, 132, 0.2)',
                        yAxisID: 'y-axis-1',
                    },
                    {
                        label: '# of No Votes',
                        data: [1, 2, 1, 1, 2, 2],
                        fill: false,
                        backgroundColor: 'rgb(54, 162, 235)',
                        borderColor: 'rgba(54, 162, 235, 0.2)',
                        yAxisID: 'y-axis-2',
                    },
                ],
            },
            chartOptions: {
                scales: {
                    yAxes: [
                      {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                      },
                      {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        id: 'y-axis-2',
                        gridLines: {
                          drawOnArea: false,
                        },
                      },
                    ],
                  },
            }
        }
    }

    componentDidMount() {
        if (this.state.symbol === true) {
            fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.state.symbol}&apikey=${apiKey}`)
            .then((res) => res.json())
            .then((data) => console.log(data))
            // .then(data => {
            //     const companies = Object(data);
            //     this.setState({ 
            //         searchResultsList: companies,
            //         validated: true
            //     })
            // })
        }
    }

    render() {
        return (
            <Line data={data} options={options} />
        )
    }
}