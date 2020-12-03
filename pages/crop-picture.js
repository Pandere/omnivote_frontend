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

	<div class="entry-image">
		<img id="js-entry-image" src="" width="460" height="368" alt="">
	</div>

    <div class="fileinput-button" id="preview">
        <div class="upload">
            <span>Enter the Competition</span>
        </div>
    </div>

</div>
`;

css = `
.entry-edit { padding:20px; text-align:center; } 
.entry-edit h1 { padding:0; font-weight:normal } 
.entry-edit h2 { margin:0 0 30px; font-size:24px; font-weight:normal; text-align:center; color:#686868; }

.back-button { position:absolute; left:10px; top:20px; }

.entry-edit .entry-image { margin:0 auto 20px; position:relative; }
.entry-edit .entry-image img { width:100%; height:auto; }

#preview { position:relative; max-width:250px; margin:0 auto; }
.entry-edit input[type="file"] { position:absolute; z-index:9999; top:0; left:0; bottom:0; right:0; opacity:0; cursor:pointer; }

.entry-edit .upload {
    margin:0 0 20px;
    padding:20px 15px;
    display:block;
    font-size:18px;
    border-radius: 5px;
    color:#fff;
    text-align: center;
    cursor:pointer;
    text-decoration:none;
    font-weight:bold;
    font-size:18px;
    background:#f056ba;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
    -moz-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
}

.entry-edit svg { display:inline-block; }

.hidden { display:none; }

header,
nav,
footer { display:none; }
`;
