(function(){

    const fetch_user = (slug) => {
        console.log('slug');
        console.log(slug);

        let u = '/entries/'+slug;
        fetch_api(u,(json)=>{
            render_user(json.entry, slug);
        });
    }

    const render_user = (data, slug) => {

        let entry_image = get('#js-entry-image');
        entry_image.src = data.image_url;

        let entry_fullname = get('#js-entry-fullname');
        entry_fullname.innerHTML = data.full_name;

        let entry_share = get('#js-entry-share');
        entry_share.innerHTML = entry_share.getAttribute('data-text')+' '+data.full_name;

        let entry_link = get('#js-entry-link');
        entry_link.href = '/users/'+data.owner_id;
        entry_link.innerHTML = data.owner_name;

        let prev_entry_link = get('#js-prev-entry');
        prev_entry_link.href = data.previous_slug;

        let next_entry_link = get('#js-next-entry');
        next_entry_link.href = data.next_slug;

        let entry_rank = get('#js-entry-rank');
        entry_rank.innerHTML = data.rank;
        let vote_number = get('#js-vote-number');
        vote_number.innerHTML = data.total_votes;

        // let gems_amount = get('#js-gems-amount');

        let entry_competition = get('#js-entry-competition');
        if (data.gender == "male") entry_competition.innerHTML = entry_competition.getAttribute('data-text-boys');
        if (data.gender == "female") entry_competition.innerHTML = entry_competition.getAttribute('data-text-girls')

        const vote_button = get('#js-vote-button');
        vote_button.onclick = (e) => {
            vote(slug);
        }

        const buy_more_button = get('#js-buy-more-button');
        buy_more_button.onclick = (e) => {
            console.log('buy_more');
        }

        show_vote_button(true);
    }

    const show_vote_button = (flag) => {
        const vote_button_holder = get('#js-vote-button-holder');
        const buy_more_button_holder = get('#js-buy-more-button-holder');
        if (flag) {
            hide(buy_more_button_holder);
            show(vote_button_holder);
        } else {
            hide(vote_button_holder);
            show(buy_more_button_holder);
        }
    }

    const post_exchange = (amount, slug) => {
        console.log(amount + ' - ' + slug);

        let u = '/my/exchange_packs';
        let body = { gems: amount, entry_slug: slug };
        fetch_api(u,(json)=>{
            if (json.success) {

                //

            } else {
                // @todo - no packs
            }
        }, body, 'POST');
    }

    const fetch_exchange_packs = (slug) => {
        let u = '/my/exchange_packs';
        fetch_api(u,(json)=>{
            if (json.success) {
                let exchange_list = get('#js-exchange-list');
                let html = render_exchange_packs(json.dataset.reverse(), slug);
                exchange_list.innerHTML = html;

                let items = getall('#js-exchange-list .gem_exchange_item');
                items.forEach((item) => {
                    item.onclick = (e) => {
                        let amount = item.getAttribute('data-amount')*1;
                        post_exchange(amount, item.getAttribute('data-slug'));
                    }
                });

                let exchange = get('#js-exchange');
                show(exchange);
            } else {
                // @todo - no packs
            }
        });
    }

    const render_exchange_packs = (packs, slug) => {
        let html = '';
        packs.forEach((s)=>{
            let amount = s[0];
            let votes = s[1];
            html += `
<div class="gem_exchange">
    <div class="gem_exchange_button">
        <p class="gem_exchange_text">${votes} Votes</p>
        <div class="gem_exchange_item"
            data-amount="${amount}"
            data-votes="${votes}"
            data-slug="${slug}"
        >
            <img src="/img/gem_exchange_item.svg" width="98" height="98" alt="">
            <p class="gem_exchange_votes">${amount}</p>
        </div>
    </div>
</div>
`;
        });
        return html;
    }

    const tick = (time) => {
        let timer = get('#js-vote-counter-time');
        timer.setAttribute('data-time', time);

        if (time < 1) {
            time = 0;
            timer.removeAttribute('data-time');
            timer.innerHTML = '0:00';
            show_vote_button(true);
        } else {
            let minutes = ~~(time / 60);
            let seconds = ~~(time - minutes * 60);
            timer.innerHTML = minutes+":"+(seconds<10?"0":"")+seconds;
            setTimeout(()=>{
                tick(time-1);
            }, 1000);
        }
    }

	const vote = (slug) => {
        console.log(slug);

        let u = '/votes';
        let params = '?entry_slug='+slug;
        u = u + params;

        fetch_api(u,(json)=>{
            if (json.vote) {

                show_vote_button(false);
                let counter = get('#js-vote-counter');
                tick(json.vote.recent_expire_in);
                show(counter);

            } else {
                // @todo - no vote data
            }

            if (json.errors) {
                alert(json.errors[0]);
            }

            if (json.success === false) {
                alert(json.message);
            }

        }, null, 'POST');

        // credentials: 'include'
	}

    window.init_entry = (slug) => {

        fetch_user(slug);

        fetch_exchange_packs(slug);
    }

})();