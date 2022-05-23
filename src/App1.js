import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

class App1 extends Component {
    state = {
        clients: []
    };

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/api/admin/user');
        const body = await response.json();
        console.log("DATA",body);
        this.setState({clients: body});
        //this.handleGetJson();
    }

    handleGetJson(){
        console.log("inside handleGetJson");
        fetch(`http://localhost:8080/api/admin/user`, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        })
            .then((response) => response.json())
            .then((messages) => {console.log("messages");});
    }

    render() {
        const {clients} = this.state;
        return (

            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="App-intro">
                        <h2>Clients</h2>
                        {clients.map(client =>
                            <div key={client.id}>
                                {client.name} ({client.email})
                            </div>
                        )}
                    </div>
                </header>
            </div>

        );
    }
}
export default App1;
