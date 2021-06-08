import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class Header extends React.Component {

    render(){
        return(
            <div>
                <>
                    <Navbar bg="dark" variant="dark">
                        <Container style={{fontWeight: "bold"}}>
                        <Navbar.Brand href="#home">
                        Horn Gallary
                        </Navbar.Brand>
                        </Container>
                    </Navbar>
                    <br />
                </>
            </div>
        )
    }
}

export default Header;
