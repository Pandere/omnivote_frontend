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
		<img id="js-entry-image" src="" width="200" height="200" alt="">
	</div>

	<div class="important_note">
		<p>Photo can be changed before <strong>first vote</strong></p>
	</div>

    <h2>Choose Photo</h2>

    <div class="fileinput-button" id="preview">
        <form class="edit_entry" id="entry_photo" enctype="multipart/form-data" action="/my/entry/crop_picture" accept-charset="UTF-8" method="post">
            <input name="utf8" type="hidden" value="✓">
            <input type="hidden" name="_method" value="patch">
            <input type="file" name="entry[image]" id="entry_image">
            <input type="hidden" name="entry[image_cache]" id="entry_image_cache">
        </form>

        <div class="upload">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 533.333 533.333"><path fill="#fff" d="M516.667 200H333.333V16.667C333.333 7.462 325.871 0 316.667 0h-100C207.462 0 200 7.462 200 16.667V200H16.667C7.462 200 0 207.462 0 216.667v100c0 9.204 7.462 16.666 16.667 16.666H200v183.334c0 9.204 7.462 16.666 16.667 16.666h100c9.204 0 16.667-7.462 16.667-16.666V333.333h183.333c9.204 0 16.667-7.462 16.667-16.666v-100c-.001-9.205-7.463-16.667-16.667-16.667z"/></svg>
            <span>Upload</span>
        </div>
    </div>

    <div class="facebook-button" id="preview">
        <a class="facebook" href="/my/entry/facebook_photos">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" preserveAspectRatio="xMidYMid" viewBox="0 0 29 29"><path fill="#fff" d="M26 0H3L0 3v23l3 3h12V18h-4v-4h4v-3c0-4 3-6 6-6h3v4h-3c-2 0-2 1-2 2v3h5l-1 4h-4v11h7l3-3V3l-3-3z" class="cls-2"/></svg>
            Facebook
        </a>
    </div>

</div>
`;

css = `
.entry-edit { text-align:center; } 
.entry-edit h1 { font-weight:normal } 
.entry-edit h2 { margin:0 0 30px; font-size:24px; font-weight:normal; text-align:center; color:#686868; }

.back-button { position:absolute; left:10px; top:20px; }

.entry-edit .entry-image { margin:0 auto 20px; width:200px; height:200px; border-radius:50%; position:relative; }

#preview { position:relative; max-width:250px; margin:0 auto; }
.entry-edit input[type="file"] { position:absolute; z-index:9999; top:0; left:0; bottom:0; right:0; opacity:0; cursor:pointer; }

.entry-edit .upload,
.entry-edit .facebook {
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
    background:#0078e7;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
    -moz-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
}
.entry-edit .facebook { background:#3b5998; }

.entry-edit svg { display:inline-block; }

.hidden { display:none; }

header,
nav,
footer { display:none; }
`;
