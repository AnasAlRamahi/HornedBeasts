import React from 'react';

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
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt="HornedBeast" title={this.props.title} onClick={this.favAnimal} />
                <p>{this.props.description}</p>
                <p>&#9829;{this.state.interactCount}</p>
                <hr />
            </div>
        )
    }
}

export default HornedBeasts;
