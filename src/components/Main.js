import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './data.json';

class Main extends React.Component {


    render(){
        
        return(
                
            Data.map(
                value => <HornedBeasts key={value.title} title={value.title} image_url={value.image_url} description={value.description} />
            ) 
        
        
        )
    }
}

export default Main;
