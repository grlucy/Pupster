import React from "react";
import "../../styles/style.css";
import API from "../utils/API";
import RandomDoggo from "../RandomDoggo";

class Discover extends React.Component {
  state = {
    friends: 0,
    dogImage: ""
  };

  componentDidMount() {
    this.searchRandomDoggo();
  }

  handleLike = () => {
    const currentFriendCount = this.state.friends;
    const randomNum = Math.floor(Math.random() * 5 + 1);
    if (randomNum === 4) {
      this.setState({ friends: currentFriendCount + 1 });
    }
    this.searchRandomDoggo();
  };

  searchRandomDoggo = () => {
    API.searchRandom()
      .then(res => this.setState({ dogImage: res.data.message }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-5"></div>
              <h2>Make new friends:</h2>
              <h5 className="mb-5">
                <i>Thumbs up on any pups you want to meet!</i>
              </h5>
              <RandomDoggo
                handleLike={this.handleLike}
                handleDislike={this.searchRandomDoggo}
                dogImage={this.state.dogImage}
              />
            </div>
            <div className="col-md-6 text-right">
              <div className="mb-5"></div>
              <h5 className="p-5 bg-warning rounded text-white text-right d-inline-block">
                <i>Pupster Friend Count:</i>
                <br />
                <span className="friendCount">{this.state.friends}</span>
              </h5>
              <div className="mb-5"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Discover;
