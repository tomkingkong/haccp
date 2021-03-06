import React, { PureComponent } from 'react';
import { func, string, number, object } from 'prop-types';

import './HazardPlan.css';

export class HazardPlan extends PureComponent {
  constructor() {
    super();
    this.state = {
      gen_dna: false,
      gen_hazard_chem: false,
      gen_hazard_phys: false,
      gen_hazard_bio: false,
			gen_hazard_handling: '',
      gen_other: '',
      receiving_from: '',
      receiving_letter: false,
      inventory_type: '',
      processing_method: '',
			packaging_method: ''
    };
	}

	componentDidMount() {
		const { planName, details } = this.props;
    if (!Object.keys(details).length) return;
		this.setState({
			gen_dna: details[`${planName}_dna`],
      gen_hazard_chem: details[`${planName}_hazard_chem`],
      gen_hazard_phys: details[`${planName}_hazard_phys`],
      gen_hazard_bio: details[`${planName}_hazard_bio`],
			gen_hazard_handling: details[`${planName}_hazard_handling`],
      gen_other: details[`${planName}_other`],
      receiving_from: details.receiving_from,
      receiving_letter: details.receiving_letter,
      inventory_type: details.inventory_type,
      processing_method: details.processing_method,
			packaging_method: details.packaging_method
		});
	}

	cleanData = (planName, state) => {
    const planDetails = Object.keys(state);
		const updatedPlan = planDetails.reduce((plan, key) => {
      const detail = key.split('_');
      const endOfDetail = detail.slice(1);

      if (detail[0] === 'gen') {
        let planKey = [planName, ...endOfDetail].join('_');
        plan[planKey] = state[key];
      }
      if (detail[0] === planName) {
        plan[key] = state[key];
      }
			return plan;
    }, {});
    
    return updatedPlan;
	}
	
  handleChange = event => {
    const { name, value } = event.target;
    const { id, handlePlanEdits, planName } = this.props;
    this.setState({ [name]: value }, () => {
      handlePlanEdits({id, ...this.cleanData(planName, this.state)});
    });
  }

  displayHazardForm = (dna, chem, phys, bio, handling, other) => {
    return (
      <div className="hazard-plan-container">

				<h2>Hazard control points</h2>

				<label>
					<input 
            type="checkbox"
            name="gen_dna"
						value={dna}
						onChange={this.handleChange}
						/>
						Does not apply
				</label>

				<label>
					<input 
            type="checkbox"
            name="gen_hazard_chem"
						value={chem}
						onChange={this.handleChange}
						/>
						Chemical
				</label>

				<label>
					<input 
            type="checkbox"
            name="gen_hazard_phys"
						value={phys}
						onChange={this.handleChange}
						/>
						Physical
				</label>

				<label>
					<input 
            type="checkbox"
            name="gen_hazard_bio"
						value={bio}
						onChange={this.handleChange}
						/>
						Biological
				</label>

        <label>
					Hazard Type:
				<input
          name="gen_hazard_handling"
          value={handling}
          onChange={this.handleChange}
        />
					</label>
				
				<label>
					Notes:
				<input 
          name="gen_other"
          placeholder="Type notes here"
          value={other}
          onChange={this.handleChange}
        />
				</label>
        
      </div>
    );
  }

  displayPlanSpecifics = (fromWhere, letter, inventoryType, prepMethod, packMethod) => {
    const { planName } = this.props;
    return (
				<div>
					<h2>{ planName + ' info' }</h2>

          { planName === 'receiving' &&
            <div>
							<label>
								<input 
                  type="checkbox"
                  name="receiving_letter"
									value={letter}
									onChange={this.handleChange}
									/>
									Letter of Auth on File?
							</label>
							<br/>
							<label>
								Received From:
              <input 
                name="receiving_from"
                placeholder="Enter here"
                value={fromWhere}
                onChange={this.handleChange}
              />
							</label>
            </div> 
          }

					{ planName === 'inventory' &&
						<label>
							Hazard:
							<input 
							name="inventory_type"
							placeholder="Enter here"
							value={inventoryType}
							onChange={this.handleChange}
						/>
						</label>
          }

					{ planName === 'processing' &&
						<label>
							Hazard:
							<input 
							name="processing_method"
							placeholder="Enter here"
              value={prepMethod}
							onChange={this.handleChange}
						/>
						</label>
          }

					{ planName === 'packaging' &&
						<label>
							Hazard: 
							<input 
							name="packaging_method"
							placeholder="Enter here"
							value={packMethod}
							onChange={this.handleChange}
						/>
						</label>
          }
			</div>
		);
  }

  render() {
    const { 
      gen_dna,
      gen_hazard_chem, 
      gen_hazard_phys,
      gen_hazard_bio, 
      gen_hazard_handling, 
      gen_other,
      receiving_from,
      receiving_letter,
      inventory_type,
      processing_method,
      packaging_method } = this.state;
      
    return (
      <form className="hazard-plan">
        { this.displayPlanSpecifics(receiving_from, receiving_letter, inventory_type, processing_method, packaging_method) }
        { this.displayHazardForm(gen_dna, gen_hazard_chem, gen_hazard_phys, gen_hazard_bio, gen_hazard_handling, gen_other) }
      </form>
    );
  }
}

HazardPlan.propTypes = {
  handlePlanEdits: func,
  addIngredient: func,
  planType: string,
	id: number,
	planName: string,
	details: object
};

export default HazardPlan;