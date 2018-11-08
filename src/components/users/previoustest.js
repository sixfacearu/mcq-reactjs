import React, { Component } from 'react';

import '../App.css';
class PreviousTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }
    }
    render() {
        return (
            <table class="table table-hover table-bordered">
                <thead id="trs">
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Test</th>
                        <th>Date</th>
                        <th>Mark</th>
                        <th>Result</th>
                    </tr>
                </thead>
                {/* {this.state.data.map(function (list) {
                    return <tbody key={list.sno}>
                        <tr>
                            <td>{list.sno}</td>
                            <td>{list.name}</td>
                            <td>{list.test}</td>
                            <td>{list.date}</td>
                            <td>{list.mark}</td>
                            <td>{list.result}</td>
                        </tr>
                    </tbody>;
                })} */}
            </table>

        )
    }
}

export default PreviousTest;