import React from 'react';
import { object } from 'prop-types';
import { HeaderNav } from '../HeaderNav';

import './index.css';

export const Home = ({ history }) => {

  return (
    <div>
      <div className="welcome-header-img">
        <div className="splash-text">
          <p>
					HACCP Planner offers a step-by-step, food safety plan generator to comply with the Food Safety Modernization Act and HACCP.
          </p>
          <button onClick={() => history.push('/signup')}className="get-started">GET STARTED</button>
        </div>
      </div>

      <section className="welcome-container">

        <div className="welcome-step-container">
          <div className="welcome-step-img welcome-img-1"></div>
          <h2 className="welcome-step-title">Create an account</h2>
          <p className="welcome-step-text">Enter basic information about your facility, products, and team members.</p>
        </div>

        <div className="welcome-step-container">
          <div className="welcome-step-img welcome-img-2"></div>
          <h2 className="welcome-step-title">Add products</h2>
          <p className="welcome-step-text">Start a plan for each product by adding ingredient information.</p>
        </div>

        <div className="welcome-step-container">
          <div className="welcome-step-img welcome-img-3"></div>
          <h2 className="welcome-step-title">Define your process</h2>
          <p className="welcome-step-text">Enter information about each ingredient during its life cycle.</p>
        </div>

        <div className="welcome-step-container">
          <div className="welcome-step-img welcome-img-4"></div>
          <h2 className="welcome-step-title">Identify hazards</h2>
          <p className="welcome-step-text">Identify hazards and critical control points for different processing stages.</p>
        </div>

        <div className="welcome-step-container">
          <div className="welcome-step-img welcome-img-5"></div>
          <h2 className="welcome-step-title">Review your plan</h2>
          <p className="welcome-step-text">View and print the completed version of your HACCP plans.</p>
        </div>

        <div className="welcome-step-container">
          <div className="welcome-step-img welcome-img-6"></div>
          <h2 className="welcome-step-title">Edit anytime</h2>
          <p className="welcome-step-text">Review and make changes to your product plans anytime, anywhere.</p>

        </div>

      </section>
			
    </div>
  );
};

Home.propTypes = {
  history: object
};