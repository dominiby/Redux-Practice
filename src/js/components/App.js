import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';
import { fetchTweets } from '../actions/tweetsActions';

class App extends Component {

  componentDidMount () {
    this.props.dispatch(fetchUser());
  }

  fetchTweets () {
    this.props.dispatch(fetchTweets());
  }

  render() {
    console.log(this.props);

    const { user, tweets } = this.props;
    if (!tweets.length) {
      return (
        <button onClick={this.fetchTweets.bind(this)}>Load tweets</button>
      )
    }

    const mappedTweets = tweets.map((tweet, i) => <li key={i}>{tweet.text}</li>);

    return (
      <div className="App">
        <h1>{user.name}</h1>
        <ul>
          {mappedTweets}
        </ul>
      </div>
    );

  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    userFetched: state.user.fetched,
    tweets: state.tweets.tweets
  }
};

export default connect(mapStateToProps)(App);
