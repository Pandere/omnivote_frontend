title = `Cutest Baby Photo - Previous Winners - Cutest Baby Photo December 2020 - BabyVote Baby Photo Contest`;

seo = {
    title: title,
    description: ``,
    keywords: ``,
    canonical: `/winners`,
};

content = `
<section class="winners">

    <h1>Previous Winners</h1>

    <div id="js-with-entries">
    
        <p>Below are the previous winners of the monthly BabyVote Baby Photo Contest Cutest Baby Photo Competition:</p>

        <div class="tabs" id="winners-tabs">
            <span class="tab t-2020 active" data-tab="2020">2020</span>
            <span class="tab t-2019" data-tab="2019">2019</span>
            <span class="tab t-2018" data-tab="2018">2018</span>
            <span class="tab t-2017" data-tab="2017">2017</span>
            <span class="tab t-2016" data-tab="2016">2016</span>
            <span class="tab t-2015" data-tab="2015">2015</span>
            <span class="tab t-2014" data-tab="2014">2014</span>
        </div>

        <div class="winners-list" id="winners-list"></div>
    </div>

    <div id="js-no-entries"></div>

</section>
`;

css = `
.winners { padding:20px; text-align:center; }
.winners h3 {
    font-size:22px;
    font-weight:normal;
    color: #555;
    text-align: center;
    line-height: 1.3;
    padding: 0;
    margin: 0 0 10px;
}
.winners p {
    color: #888;
    line-height: 1.5;
    font-size: 14px;
}

.winners .winner_box {
    padding: 5px 5px 10px;
}

.winners .thumb {
    position: relative;
    box-shadow: 0 0 2px 0 #000;
    max-width:600px;
    margin:0 auto;
}

.winners .thumb img {
    width: 100%;
    height: auto;
}

.winner_box .padded {
    padding: 20px;
}

.winners .winner .date {
    text-align: center;
    color: #bbb;
    font-size: 12px;
    margin:0 0 10px;
}

.winner p {
    font-size: 11px;
    color: #999;
    text-align: center;
}
`;