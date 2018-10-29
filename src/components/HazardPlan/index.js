import React, { Component } from 'react';
import { func, string, number } from 'prop-types';

import { 
  TextField, 
  Checkbox, 
  FormControl, 
  FormControlLabel, 
  FormGroup, 
  FormLabel } from '@material-ui/core';

import './HazardPlan.css';

export class HazardPlan extends Component {
  constructor() {
    super();
    this.state = {
      doesNotApply: false,
      chemical: false,
      physical: false,
      biological: false,
      hazardPlan: '',
      notes: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    const { id, handleReceivingPlan } = this.props;
    this.setState({ [name]: value }, () => {
      handleReceivingPlan({ingredientId:id, ...this.state});
    });
  }

  handleChecked = name => event => {
    const { checked } = event.target;
    const { id, handleReceivingPlan } = this.props;
    this.setState({ [name]: checked }, () => {
      handleReceivingPlan({ingredientId:id, ...this.state});
    });
  };

  displayHazardChecks = () => {
    const { doesNotApply, chemical, physical, biological } = this.state;
    return (
      <FormControl>
        <FormLabel component="legend">Hazard Control Points</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox 
                checked={doesNotApply}
                value="doesNotApply"
                onChange={this.handleChecked('doesNotApply')} />
            }
            label="Does Not Apply"
          />
          <FormControlLabel
            control={
              <Checkbox 
                checked={chemical}
                value="chemical"
                onChange={this.handleChecked('chemical')} />
            }
            label="Chemical"
          />
          <FormControlLabel
            control={
              <Checkbox 
                checked={physical}
                value="physical"
                onChange={this.handleChecked('physical')} />
            }
            label="Physical"
          />
          <FormControlLabel
            control={
              <Checkbox 
                checked={biological}
                value="biological"
                onChange={this.handleChecked('biological')} />
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
        name="hazardPlan"
        margin="normal"
        variant="outlined"
        placeholder="Type plan here"
        value={this.state.hazardPlan}
        onChange={this.handleChange}
      />
    );  
  }

  displayNotes = () => {
    return (
      <TextField
        id="outlined-with-placeholder"
        label="Notes" 
        name="notes"
        margin="normal"
        variant="outlined"
        placeholder="Type notes here"
        value={this.state.notes}
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
  id: number
};

export default HazardPlan;