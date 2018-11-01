import React from 'react';

export const SummaryRow = ({ingredient}) => {
	return (
		<tr>
		<td>{ingredient.name}</td>
						<td>
							<div className="summary-bool">
								<p className="summary-info-single-line">
									 {ingredient.receiving_dna ? 'Does not apply' : ''}
								</p>
							</div>
							
							<div className="summary-bool">
								<p className="summary-info-single-line">
								Letter of Auth on file:
								</p >
									<p className="summary-info-single-line">{ingredient.receiving_letter ? 'Yes' : 'No'}
									</p>
							</div>
							<div className="summary-bool">
								<p className="summary-info-single-line">
									Bio Hazard:  
								</p>
								<p className="summary-info-single-line"> 
								{ingredient.receiving_hazard_bio ? 'yes' : 'no'}
								</p>
							</div>

							<div className="summary-bool">
								<p className="summary-info-single-line">
									Chem Hazard:  
								</p>
								<p className="summary-info-single-line"> 
								{ingredient.receiving_hazard_chem ? 'yes' : 'no'}
								</p>
							</div>

							<div className="summary-bool">
								<p className="summary-info-single-line">
									Physical Hazard:  
								</p>
								<p className="summary-info-single-line"> 
								{ingredient.receiving_hazard_phys ? 'yes' : 'no'}
								</p>
							</div>

							<div className="summary-info-dual-line">
								<p className="summary-table-item summary-table-item-header">
									Hazard Handling:
								</p>
								<p className="summary-table-item">
								{ingredient.receiving_hazard_handling}
								</p>
							</div>
							<div className="summary-info-dual-line">
								<p className="summary-table-item summary-table-item-header">
									Received From:
								</p>
								<p className="summary-table-item">
									{ingredient.receiving_from}
								</p>
							</div>
							<div className="summary-info-dual-line">
								<p className="summary-table-item summary-table-item-header">
									Other: 
								</p>
								<p className="summary-table-item">
									{ingredient.receiving_other}
								</p>
							</div>
						</td> 
						
						<td>

						<div className="summary-bool">
								<p className="summary-info-single-line">
									 {ingredient.inventory_dna ? 'Does not apply' : ''}
								</p>
							</div>
							
							<div className="summary-bool">
								<p className="summary-info-single-line">
									Bio Hazard:  
								</p>
								<p className="summary-info-single-line"> 
								{ingredient.inventory_hazard_bio ? 'yes' : 'no'}
								</p>
							</div>

							<div className="summary-bool">
								<p className="summary-info-single-line">
									Chem Hazard:  
								</p>
								<p className="summary-info-single-line"> 
								{ingredient.inventory_hazard_chem ? 'yes' : 'no'}
								</p>
							</div>

							<div className="summary-bool">
								<p className="summary-info-single-line">
									Physical Hazard:  
								</p>
								<p className="summary-info-single-line"> 
								{ingredient.inventory_hazard_phys ? 'yes' : 'no'}
								</p>
							</div>

							<div className="summary-info-dual-line">
								<p className="summary-table-item summary-table-item-header">
									Hazard Handling:
								</p>
								<p className="summary-table-item">
								{ingredient.inventory_hazard_handling}
								</p>
							</div>
							<div className="summary-info-dual-line">
								<p className="summary-table-item summary-table-item-header">
									Received From:
								</p>
								<p className="summary-table-item">
									{ingredient.receiving_from}
								</p>
							</div>
							<div className="summary-info-dual-line">
								<p className="summary-table-item summary-table-item-header">
									Other: 
								</p>
								<p className="summary-table-item">
									{ingredient.inventory_other}
								</p>
							</div>
						</td>
						
						<td>
							<div className="summary-bool">
								<p className="summary-info-single-line">
									 {ingredient.processing_dna ? 'Does not apply' : ''}
								</p>
							</div>
							
							<div className="summary-bool">
								<p className="summary-info-single-line">
									Bio Hazard:  
								</p>
								<p className="summary-info-single-line"> 
								{ingredient.processing_hazard_bio ? 'yes' : 'no'}
								</p>
							</div>

							<div className="summary-bool">
								<p className="summary-info-single-line">
									Chem Hazard:  
								</p>
								<p className="summary-info-single-line"> 
								{ingredient.processing_hazard_chem ? 'yes' : 'no'}
								</p>
							</div>

							<div className="summary-bool">
								<p className="summary-info-single-line">
									Physical Hazard:  
								</p>
								<p className="summary-info-single-line"> 
								{ingredient.processing_hazard_phys ? 'yes' : 'no'}
								</p>
							</div>

							<div className="summary-info-dual-line">
								<p className="summary-table-item summary-table-item-header">
									Hazard Handling:
								</p>
								<p className="summary-table-item">
								{ingredient.processing_hazard_handling}
								</p>
							</div>
							
							<div className="summary-info-dual-line">
								<p className="summary-table-item summary-table-item-header">
									Other: 
								</p>
								<p className="summary-table-item">
									{ingredient.processing_other}
								</p>
							</div>
							
							</td> 
						
						<td>
							<div className="summary-bool">
								<p className="summary-info-single-line">
									 {ingredient.packaging_dna ? 'Does not apply' : ''}
								</p>
							</div>
							
							<div className="summary-bool">
								<p className="summary-info-single-line">
									Bio Hazard:  
								</p>
								<p className="summary-info-single-line"> 
								{ingredient.packaging_hazard_bio ? 'yes' : 'no'}
								</p>
							</div>

							<div className="summary-bool">
								<p className="summary-info-single-line">
									Chem Hazard:  
								</p>
								<p className="summary-info-single-line"> 
								{ingredient.packaging_hazard_chem ? 'yes' : 'no'}
								</p>
							</div>

							<div className="summary-bool">
								<p className="summary-info-single-line">
									Physical Hazard:  
								</p>
								<p className="summary-info-single-line"> 
								{ingredient.packaging_hazard_phys ? 'yes' : 'no'}
								</p>
							</div>

							<div className="summary-info-dual-line">
								<p className="summary-table-item summary-table-item-header">
									Hazard Handling:
								</p>
								<p className="summary-table-item">
								{ingredient.packaging_hazard_handling}
								</p>
							</div>

							<div className="summary-info-dual-line">
								<p className="summary-table-item summary-table-item-header">
									Packaging method:
								</p>
								<p className="summary-table-item">
								{ingredient.packaging_method}
								</p>
							</div>
							
							<div className="summary-info-dual-line">
								<p className="summary-table-item summary-table-item-header">
									Other: 
								</p>
								<p className="summary-table-item">
									{ingredient.packaging_other}
								</p>
							</div>
						</td>
					</tr>
	)
}