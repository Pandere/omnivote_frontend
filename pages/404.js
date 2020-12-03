title = `404: Page not Found`;

seo = {
    title: title,
    description: ``,
    keywords: ``,
    canonical: `/404`,
};

content = `
<div class="page-404">

	<div class="head">

		<img src="/img/bear-pink.svg" width="90" height="100">

		<h2>Sorry</h2>

	</div>

	<p>
		We could not find that page<br>
		Page has been moved or deleted
	</p>

	<img src="/img/baby-sleeping.svg" width="280" height="170">

	<div class="button-container">
		<a class="button" id="home-button" href="https://www.babyvote.com">
			<span>
				Go back
			</span>
		</a>
	</div>

</div>
`;

css = `
.page-404 { padding:20px; text-align:center; }
.page-404 p { font-size:18px; color:#888; }
.page-404 .button-container {}
.page-404 .button-container .button {
	width: 230px;
	height: 47px;
	padding: 13px;
	margin: 25px auto 20px;
	font-family: sans-serif;
	text-align: center;
	text-decoration: none;
	display: block;
	border-radius: 3px;
	box-sizing: border-box;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	color: white;
	background: #82b123;
	border:0;
}

.page-404 .head {
	text-align: center;
	border-bottom: 1px dotted #e5e5e5;
	margin-bottom: 15px;
	padding-bottom: 10px;
	position: relative;
}

.page-404 .head h2 {
	font-size: 30px;
	text-align: center;
	color: #4f4f4f;
	font-weight:normal;
}

.page-404 .head svg {
	width: 90px;
	height: 100px;
	margin-bottom: 15px;
}

header,
footer { display:none; }
`;