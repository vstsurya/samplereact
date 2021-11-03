import React from 'react';

export default class FetchApiData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            personsData: []
        };
    }

    async getApiData() {
        const result =  await fetch('https://jsonplaceholder.typicode.com/users', {
            method : 'GET',
            headers : new Headers( {
                'Accept': 'application/json',
                //'Authorization': 'Bearer ',
                'Content-Type': 'application/json'
            })
        });
        return result.json();
    }

    async componentDidMount() {
        const apiResult = await this.getApiData();
        this.setState({
            loaded: true,
            personsData: apiResult
        });
    }

    render() {
        if (this.state.loaded) {
        return (
            <div className='App'>
                <h1>Data Loaded</h1>             
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.personsData.map((person,i) =>(
                            <tr key={i}>
                                <td>{person.name}</td>
                                <td>{person.username}</td>
                                <td>{person.email}</td>
                                <td>{person.phone}</td>
                                <td>{person.website}</td>
                            </tr>
                            ))
                    }
                    </tbody>
                </table>
            </div>
        );
        }
        else {
            return (
                <div>
                    Loading........
                </div>
            )
        }
    }

}