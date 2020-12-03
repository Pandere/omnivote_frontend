title = `Buy 2,000 Gems - Cutest Baby Photo November 2020 - BabyVote Baby Photo Contest`;

seo = {
    title: title,
    description: ``,
    keywords: ``,
    canonical: `/enter`,
};

content = `
<section class="buy">

<h1 id="product">2,000 Gems</h1>

<div class="gems-amount">
	For only <strong class="amount" id="amount">$2.99</strong>
</div>

<form action="/shop/payments/stripe/2000-gems/processing" id="payment-form" method="post">

	<input id="current_user_id" type="hidden" value="70e3545b-ab3c-44b9-b817-0a8198c9daba">
	<input id="recipient_id" name="recipient" type="hidden">
	<input id="draft_id" type="hidden" value="95bfc4fc-c557-40da-9eae-3623ab9eb194">
	<input name="d" type="hidden" value="95bfc4fc-c557-40da-9eae-3623ab9eb194">
	<input id="recipient_entry_url" type="hidden">
	<input id="product_batch" type="hidden" value="2000">
	<input id="quick_shop" type="hidden">
	<input id="product_slug" type="hidden" value="2000-gems">
	<input id="vip_bonus_gems" type="hidden" value="0">

	<div class="form-row">
		<p class="form-text">Use your credit card or debit card</p>

		<input class="input cardholder_name" id="cardholder-name" placeholder="Cardholder name" type="text">
				
		<div id="card-errors" role="alert"></div>

		<div class="buttons" id="card-buttons">
			<button class="stripe-button" id="checkout-btn">
				Buy Now
			</button>
		</div>
	</div>

	<div class="description-bottom">
		The primary use for gems, is to <strong>trade them for bonus votes</strong>, for either your own entry or a friend's.
	</div>

</form>

</section>
`;