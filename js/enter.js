(function(){

    const submit_entry = () => {
        let u = '/entrants';
        let params = '?entrant[gender]=1&entrant[first_name]=Test&entrant[email]=schizik@gmail.com&contest_id=4162ee97-12f8-4f6a-9a98-70dc3b6ba2ce';
        // entrant ?
        // competition_id: 4162ee97-12f8-4f6a-9a98-70dc3b6ba2ce
        // boys: 59d99687-075e-4ee3-8785-cb09ea132c83
        // girls: 4d431fc3-ffff-4650-a1ef-42d0497cfc29
        u = u + params;
        fetch_api(u,(data)=>{

        	if (data.entrant) {
        		w.entry = data.entrant;
            	router.go('/enter/upload');
        	} else {
        		if (data.errors) {
        			get('#js-form-errors').innerHTML = data.errors[0];
        		}
        	}
 
        }, null, 'POST');
    }

    const new_entry = () => {
        let u = '/entrants/new';
        fetch_api(u,(response)=>{

            // @todo - prefil form data

        });
    }

    window.init_enter = () => {

        new_entry();

        let enter_button = get('#js-enter-step-1');
        enter_button.onclick = () => {
        	submit_entry();
        }

    }

})();
