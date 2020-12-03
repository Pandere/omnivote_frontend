title = `BabyVote Baby Photo Contest`;

seo = {
    title: title,
    description: ``,
    keywords: ``,
    canonical: ``
};

content = `
<div class="entry-delete">

    <div class="head">

        <img src="/img/bear-pink.svg" width="90" height="100">

        <h1>Delete my entry</h1>

    </div>

    <p>
        All votes will be deleted and no gems<br>
        will be refunded.
    </p>

    <img src="/img/baby-crying.svg" width="280" height="170">

    <div class="button-container">
        <form class="button_to" method="post" action="/my/entry">
            <input type="hidden" name="_method" value="delete">
            <input class="button pure-button" id="delete-button" data-confirm="This is your last chance. Do you still wish to delete?" type="submit" value="Delete entry">
        </form>
    </div>

    <p class="button-comment">This will remove your entry forever!</p>
</div>
`;

css = `
.entry-delete { padding:20px; text-align:center; }
.entry-delete h1 { font-size:30px; color:#4f4f4f; text-align:center; font-weight:normal; }
.entry-delete p { margin:0 0 20px; font-size:18px; color:#888; }
.entry-delete .button-container {}
.entry-delete .button-container .button {
    width: 230px;
    height: 47px;
    padding: 13px;
    margin: 25px auto 20px;
    text-align: center;
    text-decoration: none;
    display: block;
    border-radius: 3px;
    box-sizing: border-box;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: white;
    background: #000;
    border:0;
}

.entry-delete p.button-comment { color:#4f4f4f; margin:0 auto 18px; font-size:18px; }

header,
footer { display:none; }
`;