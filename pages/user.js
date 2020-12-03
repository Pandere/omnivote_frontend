title = `Firstname Lastname - Cutest Baby Photo November 2020 - BabyVote Baby Photo Contest`;

seo = {
    title: `Firstname Lastname - Cutest Baby Photo November 2020 - BabyVote Baby Photo Contest`,
    description: ``,
    keywords: ``,
    canonical: `/users/%id%`
};

content = `
<div class="my">

	<div class="profile">
		<div class="photo">
			<img class="profile-image" src="" width="200" height="200" alt="" id="js-user-profile">
			<div class="crown" id="js-user-vip"></div>
		</div>
		<div class="name" id="js-user-name"></div>
	</div>

	<div class="tabs">
	    <div class="tab t-friends" data-tab="js-friends">
	        Friends
	    </div>
	    <div class="tab t-entry active" data-tab="js-entry">
	        My Entry
	    </div>
	    <div class="tab t-achievements" data-tab="js-achievements">
	        Achievements
	    </div>
	    <div class="tab t-notifications" data-tab="js-notifications">
	        Notifications
	    </div>
	</div>

	<section class="friends js-friends" style="display:none;">
	    <div class="text">
	        <p>No friends have entries :(</p>

			<div class="buttons">
	        	<button>Invite Friends</button>
	        </div>
	    </div>
	</section>

	<section class="entry js-entry">
	    <div class="text js-no-items" style="display:none;">
			<p>You have not entered this competition :(</p>

			<div class="buttons">
				<a class="btn-pink" href="/enter">Enter the competition</a>
			</div>
	    </div>
	    <div class="js-with-items" style="display:none;">

	    	<div class="js-items"></div>
	    	
			<div class="follow-us">
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
	    </div>

	</section>

	<section class="achievements js-achievements" style="display:none;">
	    <div class="text js-no-items" style="display:none;">

			<p>No achievements yet :(</p>

	    </div>
	    <div class="js-with-items" style="display:none;">

	    	<div class="js-items"></div>

    	</div>
	</section>

	<section class="notifications js-notifications" style="display:none;">
	    <div class="text js-no-items" style="display:none;">
			<p>Inbox is currently empty :(</p>
	    </div>
	    <div class="js-with-items" style="display:none;">

	    	<div class="js-items"></div>

    	</div>
	</section>

</div>
`;
