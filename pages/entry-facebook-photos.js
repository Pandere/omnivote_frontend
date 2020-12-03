title = `Edit Baby's profile picture - Cutest Baby Photo November 2020 - BabyVote Baby Photo Contest`;

seo = {
    title: title,
    description: ``,
    keywords: ``,
    canonical: ``
};

content = `
<div class="entry-page entry-edit">

    <h1>Edit entry</h1>

	<span class="back-button">
		<img src="/img/back-button.svg" width="26" height="24" alt="">
	</span>

	<div class="entry-icon">
		<img src="/img/photo-icon.svg" width="75" height="75" alt="">
	</div>

    <h2>Select a Photo</h2>

    <div class="note">
        <p>Your Facebook photos are shown below; Please select the photo that you wish to enter in to the competition</p>
    </div>

    <div id="fb-photos"></div>

    <div class="pagination">
        <div class="prev">
            <a disabled="" href="#">
                &laquo; Prev
            </a>
        </div>
        <div class="next">
            <a disabled="" href="#">
                Next &raquo;
            </a>
        </div>
    </div>

</div>
`;

css = `
.entry-edit { padding:20px; text-align:center; } 
.entry-edit h1 { font-weight:normal } 
.entry-edit h2 { margin:0 0 30px; font-size:24px; font-weight:normal; text-align:center; color:#686868; }

.back-button { position:absolute; left:10px; top:20px; }

.entry-edit .entry-icon { margin:0 auto 20px; }

.hidden { display:none; }

.pagination { display:flex; justify-content:space-around; align-items:baseline; }
.pagination .prev a,
.pagination .next a {
    display:block;
    margin:0;
    padding:15px 20px;
    color:#2878c3;
    text-align:center;
    text-decoration:none;
    font-weight:bold;
    font-size:18px;
}
.pagination .prev a[disabled],
.pagination .next a[disabled] { cursor:not-allowed; color:#ccc; }

header,
nav,
footer { display:none; }
`;
