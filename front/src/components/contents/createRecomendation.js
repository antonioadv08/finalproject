import React, { Component } from 'react'

export default class createRecomendation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticker: '',
            nameCompany: '',
            recomendation: '',
            charturl:''

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            ticker: event.target.ticker,
            nameCompany: event.target.nameCompany,
            recomendation: event.target.advice,
            charturl: event.target.url

        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form action="/stockadvice" method="POST" enctype="multipart/form-data" onSubmit={this.handleSubmit}>
                <label>
                    ticker:
              <input type="text" for="ticker" value={this.state.ticker} onChange={this.handleChange} />
                </label>

                <input type="submit" value="Submit"/>
                <br />

                <label >nameCompany</label>
                <input type="text" for="namecompany" value={this.state.nameCompany} onChange={this.handleChange} />
                <br />
                <label >advice</label>
                <input for="recomendation" type="text" value={this.state.recomendation} onChange={this.handleChange} />
                <br />

                <label >Upload chart</label>

                <input  value={this.state.charturl} type="file"/>


                <br />

            </form>
        );
    }
}

