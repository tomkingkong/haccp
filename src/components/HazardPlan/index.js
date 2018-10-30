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
      _dna: false,
      _hazard_chem: false,
      _hazard_phys: false,
      _hazard_bio: false,
			_hazard_handling: '',
			_other: ''
    };
	}

	componentDidMount() {
		const { planName, details } = this.props;
    if (!details) return;
		this.setState({
			_dna: details[`${planName}_dna`],
      _hazard_chem: details[`${planName}_hazard_chem`],
      _hazard_phys: details[`${planName}_hazard_phys`],
      _hazard_bio: details[`${planName}_hazard_bio`],
			_hazard_handling: details[`${planName}_hazard_handling`],
			_other: details[`${planName}_other`]
		});
	}

	cleanData = () => {
		const { planName } = this.props;
		return Object.keys(this.state).reduce((thePlan, key) => {
			thePlan[planName+key] = this.state[key];
			return thePlan;
		}, {});
	}
	
  handleChange = event => {
    const { name, value } = event.target;
    const { id, handleReceivingPlan } = this.props;
    this.setState({ [name]: value }, () => {
      handleReceivingPlan({id, ...this.cleanData(this.state)});
    });
  }

  handleChecked = name => event => {
    const { checked } = event.target;
    const { id, handleReceivingPlan } = this.props;
    this.setState({ [name]: checked }, () => {
      handleReceivingPlan({id, ...this.cleanData(this.state)});
    });
  };

  displayHazardChecks = () => {
    const { _dna, _hazard_chem, _hazard_phys, _hazard_bio } = this.state;
    return (
      <FormControl>
        <FormLabel component="legend">Hazard Control Points</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox 
                checked={_dna}
                onChange={this.handleChecked('_dna')} />
            }
            label="Does Not Apply"
          />
          <FormControlLabel
            control={
              <Checkbox 
                checked={_hazard_chem}
                onChange={this.handleChecked('_hazard_chem')} />
            }
            label="Chemical"
          />
          <FormControlLabel
            control={
              <Checkbox 
                checked={_hazard_phys}
                onChange={this.handleChecked('_hazard_phys')} />
            }
            label="Physical"
          />
          <FormControlLabel
            control={
              <Checkbox 
                checked={_hazard_bio}
                onChange={this.handleChecked('_hazard_bio')} />
            }
            label="Biological"
          />
        </FormGroup>
      </FormControl>
    );
  }

  displayHazardPlan = () => {
    return (
      <TextField
        id="outlined-with-placeholder"
        label="How will you handle the hazard?" 
        name="_hazard_handling"
        margin="normal"
        variant="outlined"
        placeholder="Type plan here"
        value={this.state._hazard_handling}
        onChange={this.handleChange}
      />
    );  
  }

  displayNotes = () => {
    return (
      <TextField
        id="outlined-with-placeholder"
        label="Notes" 
        name="_other"
        margin="normal"
        variant="outlined"
        placeholder="Type notes here"
        value={this.state._other}
        onChange={this.handleChange}
      />
    );  
  }

  render() {
    return (
      <form className="hazard-plan">
        { this.displayHazardChecks() }
        { this.displayHazardPlan() }
        { this.displayNotes() }
      </form>
    );
  }
}

HazardPlan.propTypes = {
  handleReceivingPlan: func,
  addIngredient: func,
  planType: string,
	id: number,
	planName: string,
	details: object
};

export default HazardPlan;