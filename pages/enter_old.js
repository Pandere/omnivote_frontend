const content = `
<h1>Enter the cutest baby photo competition</h1>

<img src="/img/logo.svg" alt="logo">

<div class="form">

    <form novalidate="novalidate" role="form" action="/enter/submit" accept-charset="UTF-8" method="get">
        <input name="utf8" type="hidden" value="✓" />
        <input type="hidden" name="uuid" id="uuid" value="98262636-44ae-4f64-a14a-ee74c160823d" />

        <label class="array required" for="entrant_gender">Is it a boy or girl?</label>
        <div class="radio_buttons entrant_gender">
            <span class="radio">
                <input class="radio_buttons" id="entrant_gender_1" name="entrant[gender]" type="radio" value="1" />
                <label for="entrant_gender_1">
                    <img src="/img/boy.svg" alt="Boy">
                    Boy
                </label>
            </span>
            <span class="radio">
                <input class="radio_buttons" id="entrant_gender_0" name="entrant[gender]" type="radio" value="0" />
                <label for="entrant_gender_0">
                    <img src="/img/girl.svg" alt="Girl">
                    Girl
                </label>
            </span>
        </div>

        <div class="input string required entrant_first_name">
            <label class="string required" for="entrant_first_name">Your baby first name</label>
            <input class="string required" autofocus="autofocus" required="required" aria-required="true" maxlength="30" size="30" type="text" name="entrant[first_name]" id="entrant_first_name" />
        </div>

        <div class="input email optional entrant_email">
            <label class="email optional" for="entrant_email">Your email address</label><input class="string email optional" type="email" name="entrant[email]" id="entrant_email" />
        </div>

        <div class="action-button">
            <button class="pure-button facebook"><span>Continue via Facebook</span></button>
        </div>

        <p class="legal">
            By submitting this form, you confirm that you have read <br />
            and agree to our <a href="/terms">Terms &amp; Conditions</a> and our <a href="/privacy">Privacy Policy</a>.
        </p>
    </form>

</div>
`;