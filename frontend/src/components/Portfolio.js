import React, { useState }from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export function Portfolio(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return ( 
        <>
            <Table style={{ width: '50rem', margin: '1rem auto' }} striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Company Name</th>
                    <th>Company Symbol</th>
                    <th>Company Industry</th>
                    <th>Company Region</th>
                    </tr>
                </thead>
                    {props.companies.map((company, index) => {
                        return (
                            <tbody key={index} onClick={handleShow}>
                                <tr>
                                <td>{company["Name"]}</td>
                                <td>{company["Symbol"]}</td>
                                <td>{company["Industry"]}</td>
                                <td>{company["Country"]}</td>
                                </tr>
                            </tbody>  
                        )
                    })}
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-info" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}