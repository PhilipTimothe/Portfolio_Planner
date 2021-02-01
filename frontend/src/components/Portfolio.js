import React from 'react';
// import Card from 'react-bootstrap/Card';

export function Portfolio(props) {
    return ( 
        <>
            <tbody>
                <tr>
                <td>{props.name}</td>
                <td>{props.symbol}</td>
                <td>{props.industry}</td>
                <td>{props.region}</td>
                </tr>
            </tbody>     
        </>
    )
}