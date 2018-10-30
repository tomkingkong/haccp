import React, { PureComponent } from 'react';
import { func, string, number, object } from 'prop-types';

import { 
  TextField, 
  Checkbox, 
  FormControl, 
  FormControlLabel, 
  FormGroup, 
  FormLabel } from '@material-ui/core';

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
      storage_type: '',
      preparation_method: '',
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

	cleanData = () => {
		const { planName } = this.props;
		return Object.keys(this.state).reduce((thePlan, key) => {
      const keyString = key.split('_');
      const endOfKey = keyString.slice(1);

      if (keyString[0] === 'gen') {
        let planKey = [planName, ...endOfKey].join('_');
        thePlan[planKey] = this.state[key];
      } else if (keyString[0] === planName) {
        thePlan[key] = this.state[key];
      }

			return thePlan;
		}, {});
	}
	
  handleChange = event => {
    const { name, value } = event.target;
    const { id, handlePlanEdits } = this.props;
    this.setState({ [name]: value }, () => {
      handlePlanEdits({id, ...this.cleanData(this.state)});
    });
  }

  handleChecked = name => event => {
    const { checked } = event.target;
    const { id, handlePlanEdits } = this.props;
    this.setState({ [name]: checked }, () => {
      handlePlanEdits({id, ...this.cleanData(this.state)});
    });
  };

  displayHazardForm = (dna, chem, phys, bio, handling, other) => {
    return (
      <div>
        <FormControl>
          <FormLabel component="legend">Hazard Control Points</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={dna}
                  onChange={this.handleChecked('gen_dna')} />
              }
              label="Does Not Apply"
            />
            <FormControlLabel
              control={
                <Checkbox 
                  checked={chem}
                  onChange={this.handleChecked('gen_hazard_chem')} />
              }
              label="Chemical"
            />
            <FormControlLabel
              control={
                <Checkbox 
                  checked={phys}
                  onChange={this.handleChecked('gen_hazard_phys')} />
              }
              label="Physical"
            />
            <FormControlLabel
              control={
                <Checkbox 
                  checked={bio}
                  onChange={this.handleChecked('gen_hazard_bio')} />
              }
              label="Biological"
            />
          </FormGroup>
        </FormControl>
        <TextField
          id="outlined-with-placeholder"
          label="How will you handle the hazard?" 
          name="gen_hazard_handling"
          margin="normal"
          variant="outlined"
          placeholder="Type plan here"
          value={handling}
          onChange={this.handleChange}
        />
        <TextField
          id="outlined-with-placeholder"
          label="Notes" 
          name="gen_other"
          margin="normal"
          variant="outlined"
          placeholder="Type notes here"
          value={other}
          onChange={this.handleChange}
        />
      </div>
    );
  }

  displayPlanSpecifics = (fromWhere, letter, inventoryType, prepMethod, packMethod) => {
    const { planName } = this.props;
    return (
        <FormControl>
          <FormLabel component="legend">{ planName + ' info' }</FormLabel>
          { planName === 'receiving' &&
            <div>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox 
                      checked={letter}
                      onChange={this.handleChecked('receiving_letter')} />
                  }
                  label="Letter"
                />
              </FormGroup>
              <TextField
                id="outlined-with-placeholder"
                label="Where is this coming from?" 
                name="receiving_from"
                margin="normal"
                variant="outlined"
                placeholder="Enter here"
                value={fromWhere}
                onChange={this.handleChange}
              />
            </div> 
          }
          { planName === 'inventory' &&
            <TextField
              id="outlined-with-placeholder"
              label="Type of Storage" 
              name="inventory_type"
              margin="normal"
              variant="outlined"
              placeholder="Enter here"
              value={this.state.inventory_type}
              onChange={this.handleChange}
            />
          }
          { planName === 'processing' &&
            <TextField
              id="outlined-with-placeholder"
              label="Method of preparation:" 
              name="processing_method"
              margin="normal"
              variant="outlined"
              placeholder="Enter here"
              value={this.state.processing_method}
              onChange={this.handleChange}
            />
          }
          { planName === 'packaging' &&
            <TextField
              id="outlined-with-placeholder"
              label="Method of packaging:" 
              name="packaging_method"
              margin="normal"
              variant="outlined"
              placeholder="Enter here"
              value={packMethod}
              onChange={this.handleChange}
            />
          }
        </FormControl>
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