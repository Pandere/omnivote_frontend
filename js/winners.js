(function(){

	const render_entries = (data) => {
		let html = '';
		data.entries.forEach((entry)=>{
			html += `
<div class="winner" data-id="${entry.id}">
    <div class="winner_box">
        <div class="thumb">
            <img class="thumbnail" src="${entry.image_url}" width="300" height="240">
        </div>
        <div class="padded">
            <h3>${entry.full_name}</h3>
            <div class="date">${entry.competition.title}</div>
            <p>${entry.full_name} beat all the other entries to win the prize of ${entry.prize_currency}${entry.prize_fund_pence / 100} in the ${entry.competition.title} Cutest Baby Photo Competition.</p>
        </div>
    </div>
</div>
`;
/*
*/
        });
		return html;
	}

    window.init_winners = () => {
        let u = '/winners';

        // @todo - requests by year

        fetch_api(u,(data)=>{
			let with_entries = get('#js-with-entries');
			let no_entries = get('#js-no-entries');

			if (data.entries && data.entries.length) {
				let winners_tabs = get('#winners-tabs');
				let winners_list = get('#winners-list');

				let html = render_entries(data);
				winners_list.innerHTML = html;

				hide(no_entries);
				show(with_entries);
			} else {
				hide(with_entries);
				show(no_entries);
			}

			if (data.errors) {
				no_entries.innerHTML = data.errors[0];

				hide(with_entries);
				show(no_entries);
			}
        });
    }

})();