import React from 'react';

const LeaderListItem = ({camper, rank}) => {
  const altText = `${camper.username}'s avatar`;
  const linkAddress = `https://www.freecodecamp.org/${camper.username}`;

  return (
    <tr className="leader-table__row">
      <td>
        <div className="leader-table__camper">
          <span className="leader-table__rank">{rank}</span>
          <img className="leader-table__img" src={camper.img} alt={altText} />
          <a className="leader-table__username" href={linkAddress}>{camper.username}</a>
        </div>
      </td>
      <td>{camper.recent}</td>
      <td>{camper.alltime}</td>
    </tr>
  );
};

export default LeaderListItem;
