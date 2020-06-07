import React, { Component, PureComponent } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentComp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name:'Giribabu'
        }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'Giribabu'
            })
        }, 2000)
    }
    render() {
        return (
            <div>
                {/* <RegComp name={this.state.name}></RegComp> */}
                {/* <PureComp name={this.state.name}></PureComp> */}
                <MemoComp name={this.state.name}></MemoComp>
            </div>
        );
    }
}

export default ParentComp;