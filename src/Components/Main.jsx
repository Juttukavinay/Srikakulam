import React from 'react';
import FamousPersons from './FamousPersons';
import FamousFood from './FamousFood';
import AgricultureProduction from './AgricultureProduction';
import FamousFestivals from './FamousFestivals';
import '../styles/Main.css';

const Main = () => {
  return (
    <div className="main-container">
      <main className="main-content">
        <h2 className="section-heading">Famous Persons</h2>
        <section className="main-section">
          <FamousPersons />
        </section>

        <h2 className="section-heading">Famous Foods</h2>
        <section className="main-section">
          <FamousFood />
        </section>

        <h2 className="section-heading">Agriculture Production</h2>
        <section className="main-section">
          <AgricultureProduction />
        </section>

        <h2 className="section-heading">Famous Festivals</h2>
        <section className="main-section">
          <FamousFestivals />
        </section>
      </main>
    </div>
  );
};

export default Main;
