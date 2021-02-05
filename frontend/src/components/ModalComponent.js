// import React, { useState }from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// export function Portfolio(props) {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => {
//         setShow(true);
//     }
    
//     return ( 
//         <>
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Delete</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>Are you sure you would like to remove this company from your portfolio?</Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="outline-info" onClick={handleClose} onSubmit={() => props.delete(props.company)}>
//                         Delete
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     )
// }