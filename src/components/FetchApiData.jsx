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
        //Update url here with required query paramas
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
                
                <ul>
                    {this.state.personsData.map( personSkill => (
                        <li key={personSkill.id}>
                            Name : {personSkill.name} | Mail : {personSkill.email}
                        </li>
                    ))}
                </ul>
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