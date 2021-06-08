import React from 'react';

export default class List extends React.Component {

    render(){
        const arr = [10, 20, 30, 40, 50];
        const listItems = arr.map(
            (number) => <li key={number.toString()}>{Number(number)}</li>
        );
        return(
            <ul>{listItems}</ul>
        );
    }
}
