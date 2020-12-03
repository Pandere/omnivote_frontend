title = `Edit Baby's profile - Cutest Baby Photo November 2020 - BabyVote Baby Photo Contest`;

seo = {
    title: title,
    description: ``,
    keywords: ``,
    canonical: ``
};

content = `
<div class="entry-page entry-edit">

    <div class="head">

		<h1>Edit entry</h1>

		<span class="back-button">
			<img src="/img/back-button.svg" width="26" height="24" alt="">
		</span>

		<div class="entry-image">
			<img id="js-entry-image" src="" width="200" height="200" alt="">
			<a class="camera-button" href="/my/entry/edit_picture">
				<img src="/img/camera.svg" width="30" height="30" alt="">
			</a>
		</div>

		<div class="important_note">
			<p>Photo can be changed before <strong>first vote</strong></p>
		</div>
    </div>

	<div class="entry-container">

		<div class="form first_name_form hidden">
    		<form class="simple_form pure-form" id="entry_first_name_form" action="/my/entry" accept-charset="UTF-8" data-remote="true" method="post">
        		<input name="utf8" type="hidden" value="✓" />
        		<input type="hidden" name="_method" value="patch" />

        		<label>Baby’s First Name</label>
        		<div class="input_container">
            		<div class="input string optional entry_first_name">
            			<input class="string optional" maxlength="30" size="30" type="text" value="Test" name="entry[first_name]" id="entry_first_name" />
        			</div>
            		<img class="clear_input_button" src="/img/input-clear.svg" width="15" height="15">
    			</div>

        		<div class="submit_button">
        			<input type="submit" name="commit" value="Save changes" data-disable-with="Save changes" />
    			</div>
    		</form>
		</div>

		<div class="form last_name_form hidden">
    		<form class="simple_form pure-form" id="entry_last_name_form" action="/my/entry" accept-charset="UTF-8" data-remote="true" method="post">
        		<input name="utf8" type="hidden" value="✓" />
        		<input type="hidden" name="_method" value="patch" />

        		<label>Baby’s Last Name</label>
        		<div class="input_container">
            		<div class="input string optional entry_last_name">
	            		<input class="string optional" maxlength="30" size="30" type="text" value="Entry" name="entry[last_name]" id="entry_last_name" />
        			</div>
            		<img class="clear_input_button" src="/img/input-clear.svg" width="15" height="15">
    			</div>

        		<div class="submit_button">
        			<input type="submit" name="commit" value="Save changes" data-disable-with="Save changes" />
    			</div>
    		</form>
		</div>

		<div class="form gender_form hidden">
    		<form class="simple_form pure-form" id="entry_gender_form" action="/my/entry" accept-charset="UTF-8" data-remote="true" method="post">
        		<input name="utf8" type="hidden" value="✓" />
        		<input type="hidden" name="_method" value="patch" />

        		<label>Is it a boy or girl?</label>
        		<div class="input_container">
            		<div class="input radio_buttons optional entrant_gender">
                		<span class="radio">
                    		<input checked="" class="radio_buttons optional" id="entrant_gender_1" name="entry[gender]" type="radio" value="male" />
                    		<label for="entrant_gender_1">
                        		<img src="/img/gender-male.svg" width="18px" height="40">
                        		Boy
                    		</label>
                		</span>
                		<span class="radio">
                    		<input class="radio_buttons optional" id="entrant_gender_0" name="entry[gender]" type="radio" value="female" />
                    		<label for="entrant_gender_0">
                        		<img src="/img/gender-female.svg" width="18px" height="40">
                        		Girl
                    		</label>
                		</span>
            		</div>
        		</div>

        		<div class="submit_button">
        			<input type="submit" name="commit" value="Save changes" data-disable-with="Save changes" />
    			</div>
    		</form>
		</div>

		<div class="fields_set">
    		<div class="field_item" data-direct="first_name">
    			<div class="field_label">Change Baby’s First Name</div>
        		<div class="field_title">Test</div>
        		<div class="field_set_icon"></div>
    		</div>
    		<div class="field_item" data-direct="last_name">
        		<div class="field_label">Change Baby's Second</div>
        		<div class="field_title">Entry</div>
        		<div class="field_set_icon"></div>
    		</div>
    		<div class="field_item" data-direct="gender">
        		<div class="field_label">Change Baby's Gender</div>
        		<div class="field_title">Boy</div>
        		<div class="field_set_icon"></div>
    		</div>
    		<div class="field_link">
    			<a class="delete" href="/my/entry/delete">Delete this Entry</a>
			</div>
		</div>

	</div>

</div>
`;

css = `
.entry-edit .head { text-align:center; } 
.entry-edit .head h1 { font-weight:normal } 

.back-button { position:absolute; left:10px; top:20px; }

.entry-edit .entry-image { margin:0 auto 20px; width:200px; height:200px; border-radius:50%; position:relative; }
.entry-edit .camera-button { position:absolute; bottom:-1px; left:-2px; }

.entry-edit .field_item { position:relative; padding:15px 20px; border-bottom:1px solid #e6e6e6; cursor:pointer; }
.entry-edit .field_item .field_label { width:100%; color:#979797; font-weight:normal; font-size:14px; line-height:1.4; text-align:left; cursor:pointer; }
.entry-edit .field_item .field_title { width:100%; margin-top:6px; font-weight:normal; font-size:18px; line-height:1.4; text-align:left; color: #515050; }
.entry-edit .field_item .field_set_icon { position:absolute; right:20px; top:32px; width:16px; height:16px; background:url("/img/input-edit.svg") no-repeat 50% 50%; background-size:16px 16px; }
.entry-edit .field_link a { margin:40px 0 0 20px; display:inline-block; font-weight:normal; font-size:14px; line-height:1.4; color:red; }

.hidden { display:none; }

header,
nav,
footer { display:none; }
`;
