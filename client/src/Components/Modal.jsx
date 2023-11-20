// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { useNavigate } from 'react-router-dom';

// function Example() {
//     let navigate = useNavigate()

//     const [show, setShow] = useState(false);

//     const handleClose = () => {
//         let path = "/demovideo"
//         navigate(path)
//     }

//     const handleClosed = () => setShow(false)

//     const handleShow = () => setShow(true);

//     return (
//         <>
//             <Button style={{ backgroundColor: '#F5E3CB', color: '#FDAC4F', fontSize: '17px' }} className=' ' variant="" onClick={handleShow}>
//                 Know about me
//             </Button>

//             <Modal show={show} onHide={handleClosed} backdrop="static" centered>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Miss Shemayi (English Professional)</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>Are you looking for an English teacher for your English learning Journey? If Yes! then I am here to teach you with having 6 years of experienced in this field. So, let’s hit the start button and Join and learn from me. <a href="">Req and Skills</a> </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Watch Demo
//                     </Button>
//                     <Button style={{ backgroundColor: '#F5E3CB', color: '#FDAC4F', fontSize: '17px' }} variant="" onClick={handleClose}>
//                         Start here
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }

// export default Example;