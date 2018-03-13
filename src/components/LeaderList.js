import React, { Component } from 'react';
import LeaderListItem from './LeaderListItem';

export default class LeaderList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  async getUsers(range) {
    const response = await fetch(`https://fcctop100.herokuapp.com/api/fccusers/top/${range}`);

    const campers = await response.json();
    this.setState({ 
      campers,
      selected: range
    });
  }

  renderList(camper, i) {
    return (
      <LeaderListItem
        key={camper.username}
        camper={camper}
        rank={i + 1}
      />
    )
  }

  handleClick = (range) => {
    this.getUsers(range);
  }

  componentDidMount() {
    this.getUsers('recent');
  }

  render() {
    return (
      <table className="table">
        <thead className="table__header">
          <tr>
            <th>Camper Rank</th>
            <th
              className={this.state.selected === 'recent' ?
                "table__sort-btn table__sort-btn--active" :
                "table__sort-btn"
              }
              onClick={() => this.handleClick('recent')}
            >Last 30 Days<span> &#8595;</span></th>
            <th
              className={ this.state.selected === 'alltime' ?
                "table__sort-btn table__sort-btn--active" :
                "table__sort-btn"
              }
              onClick={() => this.handleClick('alltime')}
            >All Time<span> &#8595;</span></th>
          </tr>
        </thead>
        <tbody>
          {this.state.campers && this.state.campers.map(this.renderList)}
        </tbody>
      </table>
    );
  }
}
