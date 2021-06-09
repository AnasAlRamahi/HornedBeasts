import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class HornedBeasts extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            interactCount : 0,
        }
    }

    favAnimal = () => {
        let newCount = this.state.interactCount;
        this.setState({
            interactCount: newCount + 1,
        });
        this.props.setModalShow();
        this.props.setModalContent(this.props.title, this.props.image_url, this.props.description);
    }

    render() {
        return (
            <div style={{ width: '33.33%', display: 'inline-block' }}>
                <Container>
                    <Card bg="dark" style={{ width: '18rem', display: 'inline-block', color:'white' }}>
                        <Card.Img variant="top" src={this.props.image_url} alt="HornedBeast" title={this.props.title} 
                        onClick={this.favAnimal} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                            {this.props.description}
                            </Card.Text>
                            <p>&#9829;{this.state.interactCount}</p>
                        </Card.Body>
                    </Card>
                </Container>
                <br />
                <br />

            </div>
        )
    }
}

export default HornedBeasts;
