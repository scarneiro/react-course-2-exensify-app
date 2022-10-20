import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export class LoginPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            userid: '',
            password: ''
        };
        this.startLogin = props.startLogin
    }
    onSubmit(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>User</label>
                        <input type="text" placeholder="User Id" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder="Password" />
                    </div>
                    <div>
                        <button onClick={this.props.startLogin}>Login</button>
                    </div>
                </form>
            </div>
        )
    };   
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);