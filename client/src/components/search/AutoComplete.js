import React from 'react';

var LingoAutoComplete = React.createClass({

	selectOption: function( event ) {
		
		this.props.onSelectOption( event.target.value );
	},
	
	render: function(){

		return (
			<div>
				{this.props.autoCompleteOptions
					.map( option => 
						<button key={option} onClick={this.selectOption} value={option}>{option}</button>
					)
				}
			</div>
		);
	}
});

export default LingoAutoComplete;