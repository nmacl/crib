import React, { useState } from 'react';
import Card from './Card';

function Menu() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div>
      <div className="mb-10">
        <button className={`hover:border-b-red-300 bg-transparent text-waves hover:text-dark-waves mx-10 text-2xl ${activeTab === 'description' ? 'active' : ''}`} onClick={() => setActiveTab('description')}>Description</button>
        <button className={`hover:border-b-red-300 bg-transparent text-waves hover:text-dark-waves mx-10 text-2xl ${activeTab === 'calculator' ? 'active' : ''}`} onClick={() => setActiveTab('calculator')}>Calculator</button>
      </div>
      {activeTab === 'description' && <Card />}
    </div>
  );
}

export default Menu;
