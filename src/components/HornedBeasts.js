import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

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
        })
    }

    render() {
        return (
            <div>

                   <Card bg="dark" style={{ width: '18rem', display: 'inline-block', color:'white' }}>
                    <Card.Img variant="top" src={this.props.image_url} alt="HornedBeast" title={this.props.title} onClick={this.favAnimal} />
                    <Card.Body>
                        <Card.Title>{this.props.title}<br /></Card.Title>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                        <p>&#9829;{this.state.interactCount}</p>
                    </Card.Body>
                </Card>

                <hr />

            </div>
        )
    }
}

export default HornedBeasts;
