import React, { Component } from 'react';

class CounterComponent extends Component {

        state = {
            number: 0,
        }
    

    handleClick = () => {
        // this.setState({ 
        //     number: this.state.number + 1,
        // })
        console.log('a')

        fetch(`http://localhost:3000/companiesfjdkljfldsfd`)
            .then(resp => {
                if(resp.status !== 200) {
                    throw new Error(resp.statusText);
                }
                console.log('b', resp)
                return resp.json();
            })
            .then(data => console.log('c', data))
            .catch(errors => console.log('d', errors))
        
        console.log('e')

        // a, e, d
    }

    // can dispatch to redux at this point when a condition is introduced as mentioned above
    // get confident explaining the hardest things

    componentDidMount() {

    }

    render() {
        return (
            <div>
                {this.state.number} 
                <br/>
                <button onClick={this.handleClick}>Click Here Please </button>
            </div>
        );
    }
}

export default CounterComponent;