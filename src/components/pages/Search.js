import React from "react";
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
import API from "../utils/API";
import "../../styles/style.css";

class Search extends React.Component {
  state = {
    result: [],
    search: ""
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.search(this.state.search)
      .then(res => this.setState({ result: res.data.message }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="mb-5"></div>
                <h2 className="mb-5">Search by breed:</h2>
                <SearchForm
                  handleFormSubmit={this.handleFormSubmit}
                  handleInputChange={this.handleInputChange}
                />
                <SearchResults result={this.state.result} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Search;
