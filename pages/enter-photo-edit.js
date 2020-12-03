title = `BabyVote Baby Photo Contest`;

seo = {
    title: title,
    description: ``,
    keywords: ``,
    canonical: `/enter/photo/edit`,
};

content = `
<section class="enter enter-photo">

    <div class="head">

        <h1>Crop My Photo</h1>

        <p>You can drag the photo and zoom by pinching the image on your device</p>

<!--
        <a class="back" href="/enter">
            <svg version="1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 444.531 444.531"><path fill="#e5e5e5" d="M213 222L352 84c7-7 10-16 10-26s-3-19-10-26l-22-21a35 35 0 0 0-52 0L94 196a36 36 0 0 0 0 52l186 186c7 7 15 11 26 11s18-4 25-11l22-21c7-7 10-16 10-26s-3-19-10-26L213 222z"></path></svg>
        </a>
-->

    </div>

    <div class="body">

        <div class="crop-area-wrapper">
            <img id="js-entry-image" src="https://cdn.babyvote.com/production/entrant/image/0047cd62-b16d-41c4-8249-891be8b1143e/profilepic.jpg" width="500" height="400" alt="">
        </div>

        <div class="action-button">

            <button class="pure-button">
                <span>Enter the Competition</span>
            </button>

            <input type="hidden" name="_method" value="patch" />
            <input type="hidden" name="x1" id="x1" />
            <input type="hidden" name="y1" id="y1" />
            <input type="hidden" name="x2" id="x2" />
            <input type="hidden" name="y2" id="y2" />
            <input type="hidden" name="zoom" id="zoom" />

        </div>

    </div>

</section>
`;

// multipart/form-data
//enter/photo

css = `
.enter-photo { padding:23px 10px; text-align:center; }
.head { position:relative; padding:0 0 30px; }
.head h1 { margin:0 0 10px; font-size:28px; color:#333; }
.head p { margin:0 0 10px; font-size:14px; color:#888; }
.back { position:absolute; top:22px; left:0; width:30px; height:30px; }
.back svg { display:block; }

.body { padding:0 30px; }
.body svg { display:block; }

.body .action-button { margin:30px 0 30px; position:relative; }
.body .action-button .pure-button { display:block; margin:0 0 20px 0; font-size:18px; line-height:1.4; font-weight:bold; background:#f056ba; color:#fff; position: relative; z-index: 1; min-width:300px; border-radius:6px; margin:0 auto; padding:14px 20px; cursor:pointer;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,.2);
    -moz-box-shadow: 0 2px 2px 0 rgba(0,0,0,.2);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.2);
}

header, nav, footer { display:none; }
`;
