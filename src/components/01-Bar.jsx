import {Container,Navbar,Nav} from 'react-bootstrap'

const Bar=()=>{

    return(
        <>
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand>Time Waits For Nobody</Navbar.Brand>
            <Nav className="ms-auto">
            <Nav.Link onClick={()=>alert('Feature in progress')}>Login</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Bar