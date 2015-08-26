
class lingoController {

	filterData( terms, filterText ) {
		var filteredTerms = terms.filter(function( term ){
			return ~term.Name.toLowerCase().replace(/\s/g, '').indexOf( filterText.replace(/\s/g, '').toLowerCase() );
		});
        return filteredTerms;
                             
	}
}

export default lingoController; 