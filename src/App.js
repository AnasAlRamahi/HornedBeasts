import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Data from './components/data.json';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import Button from 'react-bootstrap/Button';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        modalShow : false,
        modalTitle : '',
        modalImg : '',
        modalDescription : '' 
    }
  }

  setModalShow = (boolean) => {
    this.setState({
      modalShow: boolean,
    })
  }

  setModalContent = (title, img, description) => {
    this.setState({
      modalTitle : title,
      modalImg : img,
      modalDescription: description
    })
  }

  render(){
    return (
      <div>
        <Header />
        <Main show={this.state.modalShow} 
        onHide={() => this.setModalShow(false)}
        setModalShow={() => this.setModalShow(true)}
        DataMain={Data}
        setModalContent={this.setModalContent}
         />
        <>
        <SelectedBeast show={this.state.modalShow} 
        onHide={() => this.setModalShow(false)}
        title={this.state.modalTitle}
        img={this.state.modalImg}
        description={this.state.modalDescription}
        />
        <Footer />
    </>
      </div>
    );
  }
}

export default App;
