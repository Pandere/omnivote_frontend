(function(){

    const isMe = (id) => id == 'me' || id == w.user.id ? true : false;

    const login_check = (id) => {
        if (isMe(id) && w.user) id = w.user.id;
        if (!id || id == 'me') {
            router.go('/login');
            return null;
        }
        return id;
    };

    const handle_error = (json, el) => {
        if (json.message) {
            if (json.message == 'User was not found') {
                router.go('/login');
            } else if (json.message !== 'User have no current entry') {
                el.innerHTML = '<div class="msg-error">'+json.message+'</div>';
            }
        }
    };

    const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];

    function getFormattedDate(date, prefomattedDate = false, hideYear = false) {
        let day = date.getDate(),
            month = MONTH_NAMES[date.getMonth()],
            year = date.getFullYear(),
            hours = date.getHours(),
            minutes = date.getMinutes();

        if (minutes < 10) minutes = `0${ minutes }`;
        if (prefomattedDate) return `${ prefomattedDate } at ${ hours }:${ minutes }`;
        if (hideYear) return `${ day }. ${ month } at ${ hours }:${ minutes }`;

        return `${ day }. ${ month } ${ year } at ${ hours }:${ minutes }`;
    }

    function time_ago(date) {
        if (!date) return '';
        if (typeof date !== 'object') date = new Date(date);

        const DAY_IN_MS = 86400000,
            today = new Date(),
            yesterday = new Date(today - DAY_IN_MS),
            seconds = Math.round((today - date) / 1000),
            minutes = Math.round(seconds / 60),
            isToday = today.toDateString() === date.toDateString(),
            isYesterday = yesterday.toDateString() === date.toDateString(),
            isThisYear = today.getFullYear() === date.getFullYear();

        if (seconds < 5) return 'now';
        if (seconds < 60) return `${ seconds } seconds ago`;
        if (seconds < 90) return 'about a minute ago';
        if (minutes < 60) return `${ minutes } minutes ago`;
        if (isToday) return getFormattedDate(date, 'Today');
        if (isYesterday) return getFormattedDate(date, 'Yesterday');
        if (isThisYear) return getFormattedDate(date, false, true);

        return getFormattedDate(date);
    }

    const fetch_current_entry = (id) => {
        id = login_check(id);
        if (!id) { router.go('/login'); return; }
    	let u = '/users/'+id+'/current_entry';
        fetch_api(u,(json)=>{
            let no_items = get('.js-entry .js-no-items');
            let with_items = get('.js-entry .js-with-items');
            let items = get('.js-entry .js-items');
            if (json.entry) {
                no_items.style.display="none";
                with_items.style.display="block";
                let html = render_entry(json.entry);
                items.innerHTML = html;
            } else {
                no_items.style.display="block";
                with_items.style.display="none";
                handle_error(json, no_items);
            }

            console.log('fetch_current_entry:');
            console.log(json);
        });
    }

    const render_entry = (entry) => {
        let img_url = entry.image_url.replace('thumbnail_default.png', 'default.png');
        // entry.entry_url
        let rank = entry.gender == 'male' ? 'Boys rank' : 'Girls rank';
        let html = `
<div class="entry-data" data-id="${entry.id}">
    <a class="entry-setting" href="/my/entry/edit"></a>
    <a class="entry-image" href="/${entry.slug}">
        <strong class="entry-name">
            ${sanitize(entry.full_name)}
        </strong>
        <img width="300" height="240" src="${img_url}" alt="" />
    </a>
    <span class="entry-stats">
        <span class="entry-rank">
            <strong>${entry.rank}</strong>
            <em>${rank}</em>
        </span>
        <span class="entry-votes">
            <strong>${entry.total_votes}</strong>
            <em>Votes</em>
        </span>
    </span>
</div>
`;
        return html;
    };

    const fetch_achievements = (id) => {
        id = login_check(id);
        if (!id) { router.go('/login'); return; }
        let u = '/users/'+id+'/achievements';
        fetch_api(u,(json)=>{
            let achts = json.achievements;
            let no_items = get('.js-achievements .js-no-items');
            let with_items = get('.js-achievements .js-with-items');
            let items = get('.js-achievements .js-items');
            if (achts) {
                if (achts.length) {
                    no_items.style.display="none";
                    with_items.style.display="block";
                    let html = render_achievements(achts);
                    items.innerHTML = html;

                } else {
                    no_items.style.display="block";
                    with_items.style.display="none";
                }
            } else {
                handle_error(json, no_items);
            }

            console.log('fetch_achievements:');
            console.log(json);
        });
    }

    const render_achievements = (achts) => {
        let html = '';
        achts.forEach((acht,i)=>{
            let img = '/img/achievements/'+acht.slug+'.svg';
            let reward = `
    <span class="a-reward">
        <img src="/img/gem.svg" width="33" height="33" alt="">
        <span class="a-gems">${acht.prize_gems}</span>
        <span class="a-claimed">Gems already claimed</span>
    </span>
`;
            if (acht.level >= 100) reward = `
    <a class="a-reward to-claim" href="/achievements/${acht.id}/claim">
        <img src="/img/gem-claim.svg" width="66" height="66" alt="">
        <span class="a-gems">${acht.prize_gems}</span>
    </a>
`;
            html += `
<div class="achievement${acht.claimed_at ? ' unlocked' : ' locked' }"
    data-id="${acht.id}"
    data-slug="${acht.slug}"
    data-level="${acht.level}"
>
    <img class="a-icon" src="${img}" width="40" height="40" alt="">
    <span class="a-title">${acht.title}</span>
    <span class="a-description">${acht.description}</span>
    <span class="a-progress"><span style="width:${acht.level}%"></span></span>
    ${reward}
</div>
`;
        });
        return html;
    };

    const fetch_notifications = (id) => {
        id = login_check(id);
        if (!id) { router.go('/login'); return; }
        let u = '/users/'+id+'/notifications';
        fetch_api(u,(json)=>{
            let ntfns = json.notifications;
            let no_items = get('.js-notifications .js-no-items');
            let with_items = get('.js-notifications .js-with-items');
            let items = get('.js-notifications .js-items');

            if (ntfns) {
                if (ntfns.length) {
                    no_items.style.display="none";
                    with_items.style.display="block";
                    let html = render_notifications(ntfns);
                    items.innerHTML = html;

                } else {
                    no_items.style.display="block";
                    with_items.style.display="none";
                }
            } else {
                handle_error(json, no_items);
            }

            console.log('fetch_notifications:');
            console.log(json);
        });
    }

    const render_notifications = (ntfns) => {
        let html = '';
        ntfns.forEach((ntfn,i)=>{
            let img = ntfn.icon ? '/'+ntfn.icon.replace('/svg/', '').replace(/\.svg$/, '') : '';
            html += `
<div class="notification${!ntfn.read ? ' unread' : '' }" data-id="${ntfn.id}">
    <a href="/achievements">
        <img class="n-icon" src="${img}" width="40" height="40" alt="">
        <span class="n-title">${ntfn.title}</span>
        <span class="n-date">${time_ago(ntfn.created_at)}</span>
    </a>
    <p class="n-text">${ntfn.message}</p>
</div>
`;
        });
        return html;
    };

    const handle_user = (user) => {

        const profile = get('#js-user-profile');
        // profile.src = 

        const name = get('#js-user-name');
        name.innerHTML = sanitize(user.name);

    	const vip = get('#js-user-vip');
        let img_on = '<img src="/img/crown_vip.svg" width="31" height="28" alt="">';
        let img_off = '<img src="/img/crown_not_active.svg" width="31" height="28" alt="">';
        if (isMe(user.id)) {
            if (user.vip) {
                vip.innerHTML = '<a href="/my/votes">'+img_on+'</a>';
            } else {
                vip.innerHTML = '<a href="/my/votes">'+img_off+'</a>';
            }
        } else {
            if (user.vip) {
                vip.innerHTML = '<span>'+img_on+'</span>';
            } else {
                vip.innerHTML = '<span>'+img_off+'</span>';
            }
        }

// data.points
// data.country
// data.guide_step = "vote_step"
// data.guider_id = "31b3dddd-8f4b-4e5a-9eb3-9d31e7b1a175"
// data.vip
// data.id = "cd25f359-cf92-4bdf-9170-5fc276e4da3e"

    }

    const init_tabs = (id) => {
        let tabs = d.querySelectorAll('.my .tabs .tab');
        tabs.forEach((tab,index)=>{
            tab.onclick = (e) => {
                if (tab.classList.contains('active')) return false;
                const parent = tab.parentElement;
                const old = parent.querySelector('.active');
                old.classList.remove('active');
                tab.classList.add('active');

                const panel = get('.my .'+tab.getAttribute('data-tab'));
                const panel_old = get('.my .'+old.getAttribute('data-tab'));
                panel_old.style.display = 'none';
                panel.style.display = 'block';

                let name = tab.getAttribute('data-tab');
                name = name.replace('js-','');
                // if (name == 'friends') {}
                if (name == 'achievements') fetch_achievements(id);
                if (name == 'notifications') fetch_notifications(id);

console.log(name);
            };
        });
    };

    window.init_user = (id) => {
    	let u = id ? '/users/'+id : '/users/me';
        fetch_api(u,(json)=>{
            console.log('init_user:');
            console.log(json);
            if (json.user) {
                handle_user(json.user);
            }

            fetch_current_entry(id);
            // fetch_achievements(id);
            // fetch_notifications(id);
        });

        init_tabs(id);
    }

})();