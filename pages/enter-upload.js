title = `Choose a Photo - Cutest Baby Photo December 2020 - BabyVote Baby Photo Contest`;

seo = {
    title: title,
    description: ``,
    keywords: ``,
    canonical: `/enter/upload`,
};

content = `
<section class="enter enter-upload">

    <div class="head">

        <h1>Add Baby’s photo</h1>

        <a class="back" href="/enter">
            <svg version="1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 444.531 444.531"><path fill="#e5e5e5" d="M213 222L352 84c7-7 10-16 10-26s-3-19-10-26l-22-21a35 35 0 0 0-52 0L94 196a36 36 0 0 0 0 52l186 186c7 7 15 11 26 11s18-4 25-11l22-21c7-7 10-16 10-26s-3-19-10-26L213 222z"></path></svg>
        </a>

    </div>

    <div class="body">

        <img src="/img/image-upload.svg" width="159" height="159" alt="">

        <div class="action-button">

            <button class="pure-button">
                <span>Add a photo</span>
                <input type="hidden" name="entrant[image_cache]" id="entrant_image_cache" />
                <input type="file" name="entrant[image]" id="entrant_image" />
            </button>

        </div>

        <div>
            <a class="facebook" href="/enter/photo">
                Add photo from Facebook
            </a>
        </div>

    </div>

</section>
`;

// multipart/form-data
//enter/photo

css = `
.enter-upload { padding:23px 10px; text-align:center; }
.head { position:relative; }
.head h1 { margin:0 30px; font-size:22px; color:#979797; }
.back { position:absolute; top:22px; left:0; width:30px; height:30px; }
.back svg { display:block; }

.body { padding:46px 0 0; }
.body svg { display:block; }

.body .action-button { margin:156px 0 30px; position:relative; }
.body .action-button .pure-button { margin:0 0 20px 0; font-size:18px; line-height:1.4; background: #ee49ba; color:#fff; position: relative; z-index: 1; width:auto; min-width:233px; border-radius:6px; margin:0 auto; padding:14px 20px; cursor:pointer; }

.body input[type="file"] { position: absolute; z-index:999; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer; text-indent:-999em; }

.facebook { font-size:14px; color: #828282; }

header, nav, footer { display:none; }
`;

