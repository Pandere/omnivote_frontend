(function(){

	const render_entries = (data) => {
		let html = '';
		data.entries.forEach((entry)=>{
			html += `
<div class="entry" data-id="${entry.id}">
	<a class="entry-link" href="/${entry.slug}">
		<span class="entry-name">${entry.full_name}</span>
		<img class="entry-image" src="${entry.image_url}" width="300" height="240" alt="${entry.full_name}">
	</a>
</div>
`;
        });
		return html;
	}

    window.init_previous_entries = () => {
        let u = '/my/previous_entries';
        fetch_api(u,(data)=>{
			let with_entries = get('#js-with-entries');
			let no_entries = get('#js-no-entries');

			if (data.entries && data.entries.length) {
		    	let user = get('#js-username');
		    	if (w.user) {
		    		user.innerHTML = w.user.first_name + ' '+w.user.last_name;
		    	}

				let entries = get('#js-previous-entries');
				let html = render_entries(data);
				entries.innerHTML = html;

				hide(no_entries);
				show(with_entries);
			} else {
				hide(with_entries);
				show(no_entries);
			}

			if (data.errors) {
				let text = get('#js-no-entries-text');
				text.innerHTML = data.errors[0];

				hide(with_entries);
				show(no_entries);
			}
        });
    }

})();