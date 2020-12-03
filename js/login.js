(function(){

    const submit_login = () => {
        let email = get('#email').value;
        let password = get('#password').value;

        if (!email) email = 'rrr@gmail.com';
        if (!password) password = '123123123';

        let u = '/auth/sign_in';
        let params = '?email='+encodeURIComponent(email)+'&password='+encodeURIComponent(password);

        fetch_api(u+params,(json,headers)=>{
            let data = json.data;
            data['uid'] = headers.get('uid');
            data['client'] = headers.get('client');
            data['access_token'] = headers.get('access-token');
            // data['expiry'] = headers.get('expiry');
            // data['token_type'] = headers.get('token-type');

// headers.forEach(function(value, name) { console.log(name + ": " + value); })

            handle_login(data);
        }, null, 'POST');
    }

    const handle_login = (data) => {
        const list = [
            'id','email','image','first_name','last_name','gender','date_of_birth','points','country',
            'provider','facebook_url','timezone','unsubscribed_at','access_token_expires_at','facebook_uid','verified','enabled_channels','last_login','stripe_user_id','premium_spins','captcha_enabled','vip_until','has_image','user_photos','user_friends','guide_step','deactivated_at',
            'uid','client','access_token','expiry','token_type'
        ];

        w.user = {};
        list.map(item => {
            if (data[item] !== null) w.user[item] = data[item];
        });

        router.go('/');

        init_header();
        init_footer();

// validate_token();
    }

    window.init_login = () => {
        const login_button = get('#js-login-button');
        login_button.onclick = (e) => {
            submit_login();
        }

        const register_button = get('#js-register-button');
        register_button.onclick = (e) => {
            register();
        }
    }

})();