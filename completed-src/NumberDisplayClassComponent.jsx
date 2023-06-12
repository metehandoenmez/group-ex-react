import React, { Component } from 'react';

class NumberFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchNumber();
  }

  fetchNumber = () => {
    fetch('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        this.setState({
          number: data,
          loading: false,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: 'Error fetching number'
        });
      });
  };

  render() {
    const { number, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div>
        <p>Number: {number}</p>
        <button onClick={this.fetchNumber}>Fetch Number</button>
      </div>
    );
  }
}

export default NumberFetcher;
