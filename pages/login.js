title = `Login`;

seo = {
    title: `Login`,
    description: ``,
    keywords: `Login`,
    canonical: `/login`,
};

content = `
<section class="login">

    <div class="img">
        <img src="/img/logo-enter.svg" width="90" height="75" alt="logo">
    </div>

    <!-- <h1>Sign in to continue</h1> -->

    <p style="margin:0 0 20px;">Please sign in with your personal information:</p>

    <div class="form form-login">

        <div class="row">
            <label class="label" for="email">Email:</label>
            <input class="input" id="email" type="text">
            <!-- Please enter your email address. -->
        </div>

        <div class="row">
            <label class="label" for="password">Password:</label>
            <input class="input" id="password" type="password">
            <!-- Please enter your password. -->
        </div>

        <div class="buttons">
            <button class="button" id="js-login-button">
                Sign in
            </button>

            <button class="button" id="js-register-button" style="margin:20px 0 0">
                Register
            </button>
        </div>

    </div>

<!--

    <p><a href="/forgot">Forgot password?</a></p>

    <p>Don't have an account? <a href="/signup">Join Now</a></p>

    <div class="or">OR</div>

    <div class="fb-login-button" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" data-width=""></div>
    data-use-continue-as="true"
    data-onlogin
    data-scope

    <fb:login-button scope="public_profile,email" onlogin="checkLoginState();"></fb:login-button>

    <div id="status"></div>

    <p>Sign in with Facebook</p>
    
    <p>Sign in with Apple</p>

    <p>Sign in with Google</p>


    <p><small>By signing up, you agree to our <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Service</a>.</small></p>

    <script crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v9.0" nonce="K8MkXrtu"></script>
-->

</section>
`;

css = `
.login { padding:20px; text-align:center; }
.login h1 { margin:0 0 30px; font-size:32px; font-weight:bold; }
.login .img { margin:20px 0 40px; }

.buttons { padding-bottom:30px; }

.or { margin:20px 0; font-size:18px; line-height:1; color:#888; }
.or:before, .or:after { content:''; display:inline-block; margin:9px 10px 0; width:50px; height:100%; border-top:2px solid #e0e0e0; vertical-align:top; }
`;

js = `
`;
