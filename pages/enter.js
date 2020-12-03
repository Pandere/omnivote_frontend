title = `Baby's Details - Cutest Baby Photo November 2020 - BabyVote Baby Photo Contest`;

seo = {
    title: `Baby's Details - Cutest Baby Photo November 2020 - BabyVote Baby Photo Contest`,
    description: ``,
    keywords: ``,
    canonical: `/enter`,
};

content = `
<section class="enter">

<!--
<img src="/img/logo-enter.svg" width="90" height="75" alt="logo">
-->

<h1>Enter the cutest baby<br> photo competition</h1>

<form class="form">

    <div class="row gender">
        <p class="label">Is it a boy or girl?</p>

        <input id="boy" name="entrant[gender]" type="radio" value="1">
        <label class="boy" for="boy">
            <img src="/img/boy.svg" width="57" height="64" alt="Boy">
            <strong>Boy</strong>
        </label>

        <input id="girl" name="entrant[gender]" type="radio" value="0">
        <label class="girl" for="girl">
            <img src="/img/girl.svg" width="49" height="64" alt="Girl">
            <strong>Girl</strong>
        </label>
    </div>

    <div class="row firstname">
        <label class="label" for="firstname">Your baby first name</label>
        <input id="firstname" class="input" type="text" name="entrant[first_name]" required aria-required="true" maxlength="40" />
        <span class="error">Please enter first name</span>
    </div>

    <div class="row email">
        <label class="label" for="email">Your email address</label>
        <input id="email" class="input" type="email" name="entrant[email]" required aria-required="true" maxlength="40" />
        <span class="error">Please enter email</span>
    </div>

    <div class="actions">
        <button type="button" class="facebook" id="js-enter-step-1">
            <span>Continue via Facebook</span>
        </button>
    </div>

    <div id="js-form-errors" style="color:#a00; padding:0 0 20px;"></div>

    <p class="legal">
        By submitting this form, you confirm that you have read and agree to our <a href="/terms" target="_blank">Terms &amp; Conditions</a> and our <a href="/privacy" target="_blank">Privacy Policy</a>.
    </p>
</form>

</section>
`;