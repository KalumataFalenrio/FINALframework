import React from 'react';

import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import { fetchData } from './api/';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    data: {},
    dataCountry: {},
    country: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ dataCountry: fetchedData, country: country });
  }

  render() {
    const { country } = this.state;
    return (
      <div className={styles.container}>
        <h1>Global :</h1>
        <Cards data={this.state.data} />
        <h1>Country :</h1>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        {country && <Cards data={this.state.dataCountry} country={country} />}
      </div>
    );
  }
}

export default App;