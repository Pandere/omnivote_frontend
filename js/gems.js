(function(){

    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    const datef = (date) => `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

    render_history = (data) => {
        let html = '';
        data.forEach((day)=>{
            // render rows
            let rows = '';
            if (day.gem_logs) day.gem_logs.forEach((row)=>{
                let message = row.message ? '<p>'+sanitize(row.message)+'</p>' : '';
                let img = '';
                let title = '';
                if (row.details) {
                    let title = row.details.title ? row.details.title : '';
                    let src = row.details.icon ? row.details.icon : '';
                    if (src) src = src.replace('my/gems/', '').replace(/\.svg$/, '');
                    img = src ? '<img src="/img/history/'+src+'.svg" width="45" height="45" alt="">' : '';
                }
                // ${message}
                rows += `
<div class="row" data-id="${row.id}">
    <div class="icon">
        ${img}
    </div>
    <div class="title">
        ${sanitize(row.details.title)}
    </div>
    <div class="amount">
        ${row.points} <em class="gem"></em>
    </div>
</div>
`;
            });

            // render day
            let today = new Date();
            let date = '';
            if (day.date) {
                if (day.date.indexOf('20') === 0) {
                    date = day.date.split('-');
                    date = new Date(date[0],date[1]-1,date[2]);
                    if (today.toDateString() === date.toDateString()) {
                        date = 'Today';
                    } else {
                        date = datef(date);
                    }
                } else {
                    date = day.date;
                }
            }
            html += `
${date ? '<div class="date">'+date+'</div>' : '' }
${rows}
`;
        });
        return html;
    };

    window.init_gems_history = () => {
    	let u = '/users/gem_logs';
        fetch_api(u,(data)=>{
            let history = get('#js-gems-history');
            if (data && data.length) {
                let html = render_history(data);
                get('#js-gems-history-text').style.display="block";
                get('#js-no-gems-history-text').style.display="none";
                history.innerHTML = html;
                history.style.display="block";
            } else {
                get('#js-no-gems-history-text').style.display="block";
                get('#js-gems-history-text').style.display="none";
                history.style.display="none";
                history.innerHTML = '';
            }

            console.log('init_gems:');
            console.log(data);
        });
    }

})();
