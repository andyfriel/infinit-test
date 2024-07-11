import { useState } from 'react';
import Summary from '../Components/Summary';
import List from '../Components/List';

function Home() {
  const [activeTab, setActiveTab] = useState('list');

  return (
    <div>
      <nav>
        <button onClick={() => setActiveTab('list')}>User list</button>
        <button onClick={() => setActiveTab('summary')}>User summary</button>
      </nav>
      {activeTab === 'list' ? <List /> : <Summary />}
    </div>
  );
}

export default Home;
