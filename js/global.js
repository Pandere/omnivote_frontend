const w=window, d=document, h=d.head, b=d.body,
    log=(t)=>console.log(t),
    get=(s)=>d.querySelector(s),
    getid=(s)=>d.getElementById(s),
    getall=(s)=>d.querySelectorAll(s),
    cre=(tag)=>d.createElement(tag),
    show=(el)=>el.style.display='block';
    hide=(el)=>el.style.display='none';
    // attr=(a,v)=>v?this.setAttribute(a,v):this.getAttribute(a);
    sanitize=(s)=>{let map={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;',"/":'&#x2F;',};return s.replace(/[&<>"'/]/ig,(m)=>(map[m]));
}

var title, seo, content, css, js,
    header, nav, footer,
    main = get('main article');

const base = 'https://staging.babyvote.com';
const api = '/api/v1';

w.user = w.user || null;

let css_holder = get('#css-holder');
if (!css_holder) {
    css_holder = cre('div');
    css_holder.setAttribute('id','css-holder');
    b.appendChild(css_holder);
}

let js_holder = get('#js-holder');
if (!js_holder) {
    js_holder = cre('div');
    js_holder.setAttribute('id','js-holder');
    b.appendChild(js_holder);
}

const loadcss = (f, cb) => {
    let el = cre('link');
    el.setAttribute('rel', 'stylesheet');
    el.setAttribute('href', '/css/'+f+'.css');
    el.setAttribute('id', 'css-'+f);
    if (cb) el.onload=()=>cb();
    css_holder.appendChild(el);
};

const loadjs = (f, cb) => {
    let el = cre('script');
    el.src = '/js/'+f+'.js';
    el.type = 'text/javascript';
    el.setAttribute('id', 'js-'+f);
    if (cb) el.onload=()=>cb();
    js_holder.appendChild(el);
};

const loadfont = (f, cb) => {
    //
};

const addcss = (css) => {
    css = css.trim();
    if (!css) return;
    let el;
    if (css.match('<style')) {
        el = cre('div');
        el.innerHTML = css;
    } else {
        el = cre('style');
        el.setAttribute('id', 'css-inline');
        css = d.createTextNode(css);
        el.appendChild(css);
    }
    css_holder.appendChild(el);
};

const addjs = (js) => {
    js = js.trim();
    if (!js) return;
    let el;

    if (js.match('<script')) {
        // @todo - add possibility to parse script
    } else {
        el = cre('script');
        // el.type = 'text/javascript';
        js = d.createTextNode(js);
        el.setAttribute('id', 'js-'+js);
        el.appendChild(js);
    }
    js_holder.appendChild(el);
};

const include = (f, cb) => {
    fetch('/inc/'+f+'.js').then(r => r.text()).then(html => {
        get(f).innerHTML = html;
        if (cb) cb();
    }).catch(e => log(e));
};

const page = (p) => {
    if (!p && !p.page) {
console.log('no page - '+p);
        return;
    }

    let jsloaded = false;
    let pageloaded = false;

    let home = get('#js-home');
    let isHome = home && (p.page == 'home' || p.page == 'featured') ? true : false;

    css_holder.innerHTML = ''; // @todo - check if required css files are already included
    js_holder.innerHTML = ''; // @todo - check if possible to optimize js load and events attach

    if (p.css) {
        let styles = p.css.split(',');
        css_holder.childNodes.forEach((s,index)=>{
            let id = s.getAttribute('id').replace('css-','');
            if (id && styles.indexOf(id)<0) {
                s.remove();
            }
        });
        styles.forEach((s,index)=>{
            loadcss(s);
        });
    }

    if (p.js) {
        let scripts = p.js.split(',');
        if (scripts.length > 1) {
            if (p.cb) {
                var files = {};
                scripts.map(s=>files[s]=false);
                scripts.forEach((s,index)=>{
                    loadjs(s,()=>{
                        files[s] = true;
                        if (Object.keys(files).every(f => !!files[f])) {
                            jsloaded = true;
                            if (pageloaded) {
                                p.cb();
                            }
                        }
                    });
                });
            } else {
                scripts.forEach((s,index)=>{
                    loadjs(s);
                });
            }
        } else {
            if (p.cb) {
                loadjs(p.js,()=>{
                    jsloaded = true;
                    if (pageloaded) {
                        p.cb();
                    }
                });
            } else {
                loadjs(p.js);
            }
        }
    }

    fetch('/pages/'+p.page+'.js').then(r => {
        console.log(r);
        return r.text();
    }).then(data => {

        if (!isHome) {
            main.innerHTML = '';
        }

        let el = cre('script');
        el.innerHTML = data;
        b.appendChild(el);

        if (title) {
            d.title = title.trim();
        }
        if (seo) {
            if (title || seo.title) {
                get('meta[property="og:title"]').setAttribute("content", seo.title ? seo.title.trim() : title.trim());
            }
            if (seo.description) {
                get('meta[name="description"]').setAttribute("content", seo.description.trim());
                get('meta[property="og:description"]').setAttribute("content", seo.description.trim());
            }
            if (seo.keywords) get('meta[name="keywords"]').setAttribute("content", seo.keywords.trim());
        }

        if (content) {
            main.innerHTML = content.trim();
        }
        if (css) {
            addcss(css);
        }
        if (js) {
            addjs(js);
        }

        pageloaded = true;
        if (jsloaded) {
            p.cb();
        }

        el.remove();
    }).catch(e => log(e));
};

const load = () => {
    include('header', ()=> { init_header() });
    include('nav', ()=> { init_search() });
    include('footer', ()=> { init_footer() });

    let p = router.get();
    if (p) page(p);

    router.init();
};

const menu = () => b.classList.toggle('nav');

const tab = (tab) => {
    if (tab.classList.contains('active')) return false;
    const parent = tab.parentElement;
    const old = parent.querySelector('.active');
    old.classList.remove('active');
    tab.classList.add('active');

    const panel = get('.'+tab.getAttribute('data-tab'));
    const panel_old = get('.'+old.getAttribute('data-tab'));
    
    panel_old.style.display = 'none';
    panel.style.display = '';
};

const init_header = () => {
    const btn = get('#js-login');
    btn.onclick = (e) => router.go('/login');

    const youhave = get('.you-have');
    const gems = get('.you-have .gems');

    if (w.user) {
        btn.style.display = 'none';
        youhave.style.display = 'block';
        gems.innerHTML = w.user.points || 0;
    } else {
        youhave.style.display = 'none';
        gems.innerHTML = '';
        btn.style.display = 'block';
    }
}

const init_footer = () => {
    if (w.user) {
        let id = w.user.id;
        // link.setAttribute('href', '/users/'+id);

        let l, img, src;

        l = get('#js-account-link');
        img = get('#js-account-link .img-profile');
        src = w.user.image ? w.user.image.cropped_entry.url : null;
        if (src) {
            l.style.backgroundSize = '0 0';
            img.style.background = '#fff url("'+base+src+'") no-repeat 50% 50% / contain';
            img.style.display = 'block';
        }

        l = get('#js-entry-link');
        img = get('#js-entry-link .img-entry');
        src = w.user.image ? w.user.image.cropped_entry.url : null;
        if (src) {
            l.style.backgroundSize = '0 0';
            img.style.background = '#fff url("'+base+src+'") no-repeat 50% 50% / contain';
            img.style.display = 'block';
        }
    }
}

const fetch_api = (u,cb,body,method,options,headers) => {
    u = base + api + u;
    method = method || 'GET';

    if (w.user) {
        if (!headers) {
            headers = headers || new Headers();
            headers.append('access-token', w.user.access_token);
            headers.append('client', w.user.client);
            headers.append('uid', w.user.uid);
            // headers.append('token-type', "Bearer");
            // headers.append('expiry', w.user.expiry);
            // headers.append('Content-Type', 'application/json');
        }
        options = options || { method:method, headers:headers, redirect: 'follow' };
    } else {
        options = options || { method:method, redirect: 'follow' };
    }

    if (body && method == 'POST') options.body = JSON.stringify(body);

// console.log(w.user);
console.log(u+' - '+method+(body?' - '+body:''));

    let hdrs = null;
    fetch(u, options).then(r => { hdrs = r.headers; return r.json() }).then(json => {

console.log(json);

        if (cb) {
            cb(json,hdrs);
        } else {
            return json;
        }
    }).catch(e => {
        log(e);
        return e;
    });
}


const validate_token = () => {
    if (w.user) {
        fetch_api('/auth/validate_token',(response)=>{
            // @todo
        });
    } else {
        router.go('/login');
    }
}

const register = () => {
    let body = {
        user: {
            email: "rrr@gmail.com",
            password: "123123123",
            first_name: "Niko",
            last_name: "Kuzmenko"
        }
    };

    let u = '/auth';
    let params = '?email=rrr@gmail.com&password=123123123&first_name=Niko&last_name=Kuzmenko';
    u = u + params;
    fetch_api(u,(response)=>{

        // @todo
        // router.go('/login');

    // }, body, 'POST', { method:'POST', redirect: 'follow' });
    }, null, 'POST', { method:'POST', redirect: 'follow' });
}

const init_search = () => {
    const input = get('#search');
    input.onkeyup = (e) => {
        e = e || window.event;
        let el = e.srcElement || e.target;
        if (e.keyCode === 13 || e.key === 'Enter') {
            search(el.value)
console.log(e);
        }
    }
    const btn = get('#btn-search');
    btn.onclick = () => search(input.value);
}

const search = (q) => {
    q = q ? q : q.trim();
    if (!q) return;

    let u = '/entries/search';
    let params = '?q='+q;
    u = u + params;
    fetch_api(u,(response)=>{

        // router.go('/login');

    });
}


// const profile = get('#js-user-profile');
