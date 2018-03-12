import React from 'react';
import Header from './Header';
import LeaderList from './LeaderList';
import SocialWidget from './SocialWidget';

const App = () => {
  return (
    <div className="container">
      <SocialWidget />
      <Header />
      <LeaderList />
    </div>
  );
}

export default App;
