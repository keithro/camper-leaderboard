import React from 'react';

const LeaderListItem = ({camper, rank}) => {
  const altText = `${camper.username}'s avatar`;
  const linkAddress = `https://www.freecodecamp.org/${camper.username}`;

  return (
    <tr className="table__row">
      <td>
        <div className="table__camper">
          <span className="table__rank">{rank}</span>
          <img className="table__img" src={camper.img} alt={altText} />
          <a className="table__username" href={linkAddress}>{camper.username}</a>
        </div>
      </td>
      <td>{camper.recent}</td>
      <td>{camper.alltime}</td>
    </tr>
  );
};

export default LeaderListItem;
