import React, { useState } from 'react';
import { connect } from 'react-redux'
import { deleteCompany } from '../redux/actionCreator'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function PortfolioComponent(props) {
    const [show, setShow] = useState(false);
    const [companyId, setCompanyId] = useState({});

    const handleClose = () => setShow(false);
    const handleDelete = () => {
        props.deleteCompany(companyId);
        setShow(false);
    }
    const handleShow = (id) => {
        setShow(true);
        setCompanyId(id);
    }

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
                {props.companies.map((company) => {
                    return (
                        <tbody key={company["id"]} onClick={() => handleShow(company["id"])}>
                            <tr>
                                <td>{company["Name"]}</td>
                                <td>{company["Symbol"]}</td>
                                <td>{company["Industry"]}</td>
                                <td>{company["Country"]}</td>
                            </tr>
                        </tbody>
                    )
                })}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you would like to remove this company from your portfolio?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}> Close </Button>
                        <Button variant="outline-info" onClick={handleDelete} > Delete </Button>
                    </Modal.Footer>
                </Modal>
            </Table>
        </>
    )
}

export default connect(null, { deleteCompany })(PortfolioComponent)