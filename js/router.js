const hasHistory = history && history.pushState;

const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
const date = new Date(), y = date.getFullYear(), m = date.getMonth();
let month_year = months[m].replace('dec', 'xmas') + y.toString().substr(-2);

const routes = {
    '/': { page:'home', css:'home', js:'home', cb:()=>{ window.init_home() } },
    '/c/boys': { page:'home', css:'home', js:'home', cb:()=>{ window.init_home('boys') } }, // /nov20/c/boys
    '/c/girls': { page:'home', css:'home', js:'home', cb:()=>{ window.init_home('girls') } }, // /nov20/c/girls
    '/friends': { page:'friends', css:'home' },
    '/featured': { page:'featured', css:'home', js:'featured', cb:()=>{ window.init_featured() } }, 
    '/featured/boys': { page:'featured', css:'home', js:'featured', cb:()=>{ window.init_featured('boys') } },
    '/featured/girls': { page:'featured', css:'home', js:'featured', cb:()=>{ window.init_featured('girls') } },
    // /nov20/entries/featured
    // /nov20/c/boys/featured
    // /nov20/c/girls/featured
    
    '/login': { page:'login', css:'form', js:'login', cb:()=>{ window.init_login() } },
    '/my/gems': { page:'gems', css:'gems', js:'gems', cb:()=>{ window.init_gems_history() } },
    '/my/votes': { page:'votes' },
    '/my/spins': { page:'spins', css:'spins,products', js:'vendor/jquery,vendor/TweenMax.min,vendor/winwheel,spins', cb:()=>{ window.init_spins() } },

    '/enter': { page:'enter', css:'form,enter', js:'enter', cb:()=>{ window.init_enter() } },
    '/enter/upload': { page:'enter-upload' },
    '/enter/photo': { page:'enter-photo' }, // facebook
    '/enter/photo/edit': { page:'enter-photo-edit' },
    // /entries/test-cho/share/new?source=entrant_share&track=true

    '/my/entry/edit': { page:'entry-edit' },
    '/my/entry/edit_picture': { page:'entry-edit-picture' },
    '/my/entry/facebook_photos': { page:'entry-facebook-photos' },
    '/my/entry/crop_picture': { page:'crop-picture' },
    '/my/entry/delete': { page:'entry-delete' },
    
    '/users': { page:'user',  css:'user', js:'user' }, // users ?
    ['/'+month_year]: { page:'entry',  css:'entry', js:'entry' },

    '/shop/buy': { page:'buy', css:'form' },
    '/shop/products': { page:'products', css:'products', js:'products', cb:()=>{ window.init_products() } },
    '/shop/products/2000-gems': { page:'buy', css:'form' },
    '/shop/products/4800-gems': { page:'buy', css:'form' },
    '/shop/products/10000-gems': { page:'buy', css:'form' },
    '/shop/products/26000-gems': { page:'buy', css:'form' },
    '/shop/products/56000-gems': { page:'buy', css:'form' },
    '/shop/products/7-day-vip': { page:'buy', css:'form' },
    '/shop/products/4-premium-spins': { page:'buy', css:'form' },
    '/shop/products/10-premium-spins': { page:'buy', css:'form' },

    '/previous_entries': { page:'previous_entries', js:'previous_entries', cb:()=>{ window.init_previous_entries() } },
    '/winners': { page:'winners', js:'winners', cb:()=>{ window.init_winners() } },
    '/search': { page:'search' },

    '/privacy': { page:'privacy' },
    '/terms': { page:'terms' },
    '/rules': { page:'rules' },
    '/help': { page:'help' },

    '/deactivate': { page:'deactivate' },

    // '/404': { page:'404' },
};

const router = {
    init() {
        let that = this;
        that.attach();
        window.onpopstate = (e) => {
            let p = that.get();
            if (p) page(p);
        }
    },
    attach() {
        let that = this;
        document.addEventListener('click', (e) => {
            let a = e.target;
            if (a.tagName !== 'A') a = a.parentElement;
            if (a && a.tagName === 'A' && a.href) {
                let p = that.get(a.href);
                if (p) {
// console.log(a);
                    that.go(p);
                    d.body.classList.remove('nav');
                    e.preventDefault();
                    return false;
                }
            }
        });
    },
    get(p) {
        p = p ? p.replace(/^.*\/\/[^\/]+/, '') : decodeURI(window.location.pathname);
        if (p !== '/') p = p.replace(/\/$/, '').replace(/\/+/g, '\/');
        let parts = p.split('/');
        if (parts[2]) {
            p = '/'+parts[1]+'/'+parts[2];
        }
        if (parts[3]) {
            p = '/'+parts[1]+'/'+parts[2]+'/'+parts[3];
        }

        let route = null;
        if (routes[p] && routes[p].page) {
            route = { path:p, ...routes[p] };
        }

        // User
        if (parts[1] === 'users' && parts[2]) {
            route = { ...routes['/users'] };
            route.p = '/users';
            route.id = parts[2];
            route.path = '/users/'+route.id;
            route.cb = ()=>{ window.init_user(route.id) };
        }

        // Entry
        if (parts[1] === month_year && parts[2]) {
            route = { ...routes['/'+month_year] };
            route.p = '/'+month_year;
            route.id = parts[2];
            route.path = '/'+month_year+'/'+route.id;
            route.cb = ()=>{ window.init_entry(route.id) };
        }

        if (!route) route = { path:'/404', ...routes['/404'] };

console.log(JSON.stringify(route));

        return route;
    },
    go(p) {
        if (!p) return;
        if (typeof p === 'string') p = router.get(p);
        if (p) {
            window.history.pushState({}, document.title, p.path);
            page(p);
        }
    },
    trimslash(p) { return p.replace(/^\/+|\/+$/g, '') }
};
