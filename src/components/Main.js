import React from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {

    render(){
        // console.log(this.props.DataMain);
        return(
            <div>
                {
                    this.props.DataMain.map(value => {

                        if(this.props.numberOfHorns == 0){
                            return <HornedBeasts key={value.title} 
                            title={value.title} 
                            image_url={value.image_url} 
                            description={value.description} 
                            show={this.props.show} 
                            onHide={() => this.props.onHide(false)}
                            setModalShow={() => this.props.setModalShow(true)}
                            setModalContent={this.props.setModalContent}
                            />;
                        }
                        else if(this.props.numberOfHorns == value.horns){
                            return <HornedBeasts key={value.title} 
                            title={value.title} 
                            image_url={value.image_url} 
                            description={value.description} 
                            show={this.props.show} 
                            onHide={() => this.props.onHide(false)}
                            setModalShow={() => this.props.setModalShow(true)}
                            setModalContent={this.props.setModalContent}
                            />
                        }
                    })
                        
                }
                </div>
        )
    }
}

export default Main;


// this.props.DataMain.map(value => <HornedBeasts key={value.title} 
//                         title={value.title} 
//                         image_url={value.image_url} 
//                         description={value.description} 
//                         show={this.props.show} 
//                         onHide={() => this.props.onHide(false)}
//                         setModalShow={() => this.props.setModalShow(true)}
//                         setModalContent={this.props.setModalContent}
//                         />)