import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class Footer extends React.Component {

    render(){
        return(

            <>
                <Navbar mb="0" bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">
                    Made by: Anas Al-Ramahi
                    </Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default Footer;
