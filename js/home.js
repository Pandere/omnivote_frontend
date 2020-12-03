(function(){

    const id = '#js-leaderboard',
        entries_per_load = 20,
        pixel_offset = 200, // px
        throttle_delay = 1000; // ms

    let isLoading = false;

    const trottleHandler = () => {
        if (isLoading) return;
        throttle(handleLoad.call(this), throttle_delay);
    };

    const throttle = (cb, delay) => {
        let within;
        return function() {
            const args = arguments;
            const context = this;
            if (!within) {
                cb.call(context, args);
                within = true;
                setTimeout(()=>(within=false),delay);
            }
        };
    };

    const handleLoad = () => {
        if (!get('#js-home')) return;
        // if(Math.ceil($(window).scrollTop()) == Math.ceil(($(document).height() - $(window).height()))) {
        // if ($(window).scrollTop() >= ($(document).height() - $(window).height() - 200)) {
        if ((w.innerHeight + w.scrollY) >= d.body.offsetHeight - pixel_offset) {
            let board = leaderboard.get(),
                type = leaderboard.type(),
                page = leaderboard.page(board)+1,
                total = leaderboard.total(board);

            if (page * entries_per_load + 1 <= total) {
                // w.removeEventListener('scroll', trottleHandler);
                fetch_entries(page, type, board);
            }
        }
    }

    const fetch_entries = (page, type, board) => {
        let u = '/api/v1/contests/'+type+'/entries';
        let per = page === 1 ? entries_per_load+1 : entries_per_load;
        let params = '?page='+encodeURIComponent(page)+'&per='+encodeURIComponent(per);
        u = base+u+params;

        isLoading = true;
        fetch(u, { method:'GET', redirect:'follow' }).then(r=>r.json()).then(data=>{
            isLoading = false;
            let html = '';            

            if (!data) html = get(id).getAttribute('data-error-text');
            if (!data.entries && !data.entries.length && page === 1) {
                html = get(id).getAttribute('data-no-entries-text');
            }
            if (!data.meta) {
                console.error('No entries meta data returned.');
            }

            if (html != '') {
                board.innerHTML = html;
                return;
            }
            page = data.meta.page*1
            html = render(data.entries, page);

            let grid_page = get(id+'-'+type+' .grid-page[data-page="'+page+'"]');
            if (grid_page) {
                grid_page.innerHTML = html.trim();
console.info('page exists: '+page);
console.log(grid_page);
            } else {
                let div = cre('div');
                div.innerHTML = html.trim();
                div.classList.add('grid-page');
                div.setAttribute('data-page', page);
                board.appendChild(div);
console.log('page added: '+page);
            }

            let total = data.meta.total_count*1;
            leaderboard.total(board, total);
            leaderboard.page(board, page);

            if (page * entries_per_load + 1 > total) {
console.info('all entries are loaded - page: '+page+' | total items: '+document.querySelectorAll('.grid-page .entry').length+' | total: '+total );
            } else {
                // w.addEventListener('scroll', trottleHandler);
            }

        }).catch(e=>{
            isLoading = false;
            log(e);
        });
    }

    const render = (entries, page) => {
        let html = '', img;
        entries.forEach((entry,i)=>{
            img = entry.image_url.replace('thumbnail_default.png', 'default.png');
            html += `
<div class="item entry${i === 0 && page === 1 ? ' first' : '' }" data-id="${entry.id}">
    <a class="thumb" href="${entry.entry_url}">
        <img width="300" height="240" src="${img}" alt="" />
        <span class="stats">
            <strong class="name">${entry.full_name}</strong>
            <span class="rank">${entry.global_rank}<sup>${nth(entry.global_rank)}</sup></span>
            <span class="votes">with ${entry.total_votes} <em>votes</em></span>
        </span>
    </a>
</div>
`;
        });
        return html;
    };

    const nth = (n) => ["st","nd","rd"][((n+90)%100-10)%10-1]||"th";

    const leaderboard = {
        clean(type) {
            return (!type && type !== 'boys' && type !== 'girls') ? 'all' : type;
        },
        type() {
            return get(id).getAttribute('data-type');
        },
        get(type) {
            type = type ? this.clean(type) : this.type();
            return get(id+'-'+type);
        },
        set(type) {
            type = type ? this.clean(type) : this.type();
            let board = get(id+'-'+type);
            get(id).setAttribute('data-type', type);
            get(id+' .active').classList.remove('active');
            board.classList.add('active');
            board.removeAttribute('style');
            return board;
        },
        page(board, page) {
            if (page) board.setAttribute('data-active-page', page*1);
            return board.getAttribute('data-active-page')*1;
        },
        total(board, total) {
            if (total) board.setAttribute('data-total-pages', total*1);
            return board.getAttribute('data-total-pages')*1;
        }
    }

    window.init_home = (type) => {
        type = leaderboard.clean(type);
        let board = type ? leaderboard.set(type) : leaderboard.get();
        let page = leaderboard.page(board);

        let grid_page = get(id+'-'+type+' .grid-page[data-page="'+page+'"]');
        if (page == 1 && !grid_page) {
            fetch_entries(page, type, board);
        } else {
            // @todo - scroll to page position
        }

        w.isOnScrollAttached = w.isOnScrollAttached || false;
        if (!w.isOnScrollAttached) {
            w.addEventListener('scroll', trottleHandler);
            w.isOnScrollAttached = true;
console.log('scroll attached');
        }
    }

/*
    const btn = get('#js-share');
    btn.onclick = (e) => {
        submitShare();
    }

    const submitShare = () => {
        // https://www.babyvote.com/auth/facebook?scope=email,public_profile,user_photos&origin=https://www.babyvote.com/friends
    }
*/

})();

// /nov20/c/boys
// /nov20/c/girls
// /nov20/entries/featured
// /nov20/c/girls/featured
// /nov20/c/boys/featured