title = `BabyVote Baby Photo Contest`;

seo = {
    title: title,
    description: ``,
    keywords: ``,
    canonical: `/previous_entries`,
};

content = `
<div class="text">
	<section id="js-with-entries" style="display:none">

		<h1>
			<span>Previous entries of</span>
			<span id="js-username"></span>
		</h1>
		
		<div class="previous-entries" id="js-previous-entries"></div>

		<div class="follow-us" id="js-follow-us" style="display:none;">
			<div class="follow-text">
				To stay updated and to see who wins follow us:
			</div>

			<a href="https://www.facebook.com/babyvote" target="_blank" rel="noopener">
				<img src="/img/facebook.svg" width="116" height="32">
				<span>Follow us</span>
			</a>

			<a href="https://instagram.com/officialbabyvote" target="_blank" rel="noopener">
				<img src="/img/instagram.svg" width="116" height="32">
				<span>Follow us</span>
			</a>
		</div>

	</section>
	<section id="js-no-entries" style="display:none">

		<h1>Previous entries</h1>
		
		<div class="previous-entries" id="js-no-entries-text">

			No previous entries yet.

		</div>

	</section>
</div>
`;

css = `
.text { text-align:center; }
h1 { font-weight:normal; }
.previous-entries { max-width:500px; min-width:240px; margin:0 auto 20px; }
.entry { margin:0 20px 20px; }
.entry-link,
.entry-name,
.entry-image { display:block; }
.entry-link { padding:7px; box-shadow: 0 0 4px rgba(125,119,119,0.25); }
.entry-name { margin:0 auto 10px; color:#515050; font-size:16px; line-height:1.4; text-align:center; }
.entry-image { width:100%; height:auto; vertical-align:top; }

.follow-us { font-size:14px; line-height:1.2; }
.follow-text { margin:0 0 12px; }
.follow-us a { position:relative; display:inline-block; margin:0 20px 15px; }
.follow-us span { width:100%; position:absolute; top:50%; left:55%; color:#fff; font-size:13px; text-align:center; transform:translate(-50%,-50%); }
`;