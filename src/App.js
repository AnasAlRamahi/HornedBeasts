import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Data from './components/data.json';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import SelectForm from './components/SelectForm';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        modalShow : false,
        modalTitle : '',
        modalImg : '',
        modalDescription : '',
        numberOfHorns : 0,
        selectedBeastsShow : false
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

  setNumberOfHorns = (e) => {
    e.preventDefault();
    this.setState({
      numberOfHorns : e.target.value
    })
    this.setSelectedBeasesShow();
  }

  setSelectedBeasesShow = () => {
    this.setState({
      selectedBeastsShow: true
    })
  }

  render(){
    console.log(this.state.numberOfHorns);
    return (
      <div>
        <Header />
        <SelectForm setNumberOfHorns={this.setNumberOfHorns}  />
        <Main show={this.state.modalShow} 
        onHide={() => this.setModalShow(false)}
        setModalShow={() => this.setModalShow(true)}
        DataMain={Data}
        setModalContent={this.setModalContent}
        numberOfHorns={this.state.numberOfHorns}
        selectedBeastsShow={this.state.selectedBeastsShow}
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
