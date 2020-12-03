title = `Search Entries - Cutest Baby Photo November 2020 - BabyVote Baby Photo Contest`;

seo = {
    title: title,
    description: ``,
    keywords: ``,
    canonical: `/search`,
};

content = `
<section class="search">

	<h1>Search Entries</h1>

	<p>Use the form below to search the current competitions entries:</p>

	<form action="/search" id="search">
		<input class="pure-field" name="q" placeholder="Search for an entry..." type="search" value="">
		<button>
			<img src="/img/search.svg" alt="">
			Search
		</button>
	</form>

</section class="search">
`;

css = `
.search { padding:40px; text-align:center; }
.search h1,
.search h2 {
	font: 300 28px open sans,sans-serif;
	color: #555;
	text-align: center;
	line-height: 1.3;
	padding: 0;
	margin: 0 0 10px;
}
.search p, .search ul, .search ol {
	color: #888;
	line-height: 1.5;
	font-size: 14px;
}

.search input {
	width: 100%;
	margin-bottom: 10px;
	padding:10px 10px;
	display: inline-block;
	border: 1px solid #ccc;
	box-shadow: inset 0 1px 3px #ddd;
	border-radius: 4px;
	vertical-align: middle;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

.search button {
	-webkit-appearance: none;
	font-size: 16px;
	padding: 10px;
	display: block;
	width: 100%;
	border-width: 0;
	background-color: #0078e7 !important;
	color: #fff;
}

.search button img {
	width: 14px;
	height: 14px;
	margin-top:3px;
	margin-right:2px;
	vertical-align:top;
}
`;