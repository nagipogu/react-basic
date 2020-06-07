import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <div>Welcome Giribabu</div>
        //         </div>
        //     );
        // } else {
        //     return (
        //         <div>
        //             <div>Welcome Guest</div>
        //         </div>
        //     );
        // }
        // return (
        //     <div>
        //         <div>Welcome Giribabu</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // );

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Giri</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

        // return (
        //     this.state.isLoggedIn ?
        //         (<div>Welcome GIRIBABU</div>) :
        //         (<div>Welcome Guest</div>)
        // );

        return this.state.isLoggedIn && <div>Welcome GIRIBABU</div>

    }
}

export default UserGreeting;