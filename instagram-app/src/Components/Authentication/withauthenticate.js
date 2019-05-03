import React from 'react';
import Login from '../Login/LoginPage';

const withAuthenticate = PostPage => LoginPage =>
class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logedIn: false
        };
    }
    componentDidMount() {
        if(!localStorage.getItem('user')){
            this.setState({logedIn: false});
        }else{
            this.setState({logedIn: true});
        }
    }

    render() {
        if(this.state.logedIn) return <PostPage />;
        return <Login />
        }
};
export default withAuthenticate;