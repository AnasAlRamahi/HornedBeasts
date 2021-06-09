import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';


export default class SelectedBeast extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Modal
                    {...this.props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.props.img} alt={this.props.title} title={this.props.title} style={{ width: '100%', height: '100%'}} />
                        <p>
                        {this.props.description}
                        </p>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

