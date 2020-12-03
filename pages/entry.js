title = `Please support %firstname% %lastname% in the %month_year% Cutest Baby Photo Competition! 😍 - Cutest Baby Photo %month_year% - BabyVote Baby Photo Contest`;

seo = {
    title: title,
    description: ``,
    keywords: ``,
    canonical: ``
};

content = `
<div class="entry-page">

	<div class="entry-image">

		<div class="image">

			<div class="entry-options">
				<button>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 408"><path d="M51 153c-28.05 0-51 22.95-51 51s22.95 51 51 51 51-22.95 51-51-22.95-51-51-51zm306 0c-28.05 0-51 22.95-51 51s22.95 51 51 51 51-22.95 51-51-22.95-51-51-51zm-153 0c-28.05 0-51 22.95-51 51s22.95 51 51 51 51-22.95 51-51-22.95-51-51-51z"/></svg>
				</button>
			</div>

			<img id="js-entry-image" src="" width="600" height="480" alt="">

			<a id="js-prev-entry" class="left" href="">
				<svg version="1" xmlns="http://www.w3.org/2000/svg" width="445" height="445" viewBox="0 0 444.531 444.531"><path d="M213 222L352 84c7-7 10-16 10-26s-3-19-10-26l-22-21a35 35 0 00-52 0L94 196a36 36 0 000 52l186 186c7 7 15 11 26 11s18-4 25-11l22-21c7-7 10-16 10-26s-3-19-10-26L213 222z"/></svg>
			</a>

			<a id="js-next-entry" class="right" href="">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 444.819 444.819"><path d="M352.025 196.712L165.884 10.848C159.029 3.615 150.469 0 140.187 0s-18.842 3.619-25.697 10.848L92.792 32.264c-7.044 7.043-10.566 15.604-10.566 25.692 0 9.897 3.521 18.56 10.566 25.981L231.545 222.41 92.786 361.168c-7.042 7.043-10.564 15.604-10.564 25.693 0 9.896 3.521 18.562 10.564 25.98l21.7 21.413c7.043 7.043 15.612 10.564 25.697 10.564 10.089 0 18.656-3.521 25.697-10.564L352.025 248.39c7.046-7.423 10.571-16.084 10.571-25.981.001-10.088-3.525-18.654-10.571-25.697z"/></svg>
			</a>

		</div>

	</div>

	<div class="btns_undr_pct_cont">
		<div class="share-button-container">
			<button type="button" class="share-circle-btn" id="share_btn_svg">
<!--
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -33 512 512"><path d="M512 190.535c0-47.465-34.867-86.933-80.332-94.152V41.918c0-24.68-15.555-41.918-37.82-41.918-6.532 0-13.246 1.531-19.965 4.555L172.449 95.199H55.168C24.746 95.2 0 119.95 0 150.367V230.7c0 19.29 9.96 36.29 25 46.156L48.645 395.09c5.773 28.847 33.335 51.445 62.753 51.445 30.422 0 55.168-24.75 55.168-55.168v-105.5h5.883l201.434 90.645c6.719 3.023 13.433 4.554 19.965 4.554h.004c10.957 0 20.808-4.379 27.726-12.332 6.602-7.582 10.09-17.812 10.09-29.582v-54.468c45.465-7.22 80.332-46.688 80.332-94.149zM30 150.367c0-13.879 11.29-25.168 25.168-25.168h105.5v130.668h-105.5C41.289 255.867 30 244.578 30 230.7zm106.566 241c0 13.875-11.289 25.168-25.168 25.168-14.843 0-30.421-12.773-33.335-27.332L57.398 285.867h79.168zm265.102-52.219c0 4.368-.965 7.88-2.719 9.891-.758.871-2.11 2.027-5.101 2.027-2.227 0-4.871-.66-7.653-1.914l-195.527-87.984v-141.27L386.195 31.91c2.782-1.25 5.426-1.91 7.653-1.91 6.46 0 7.816 6.48 7.816 11.914v297.234zm30-85.02v-127.19c28.816 6.796 50.332 32.73 50.332 63.597 0 30.863-21.516 56.797-50.332 63.594zm0 0"/></svg>
-->

				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -22 512 511"><path d="M512 233.82L299.223.5v139.203h-45.239C113.711 139.703 0 253.414 0 393.687v73.77l20.094-22.02a360.573 360.573 0 01266.324-117.5h12.805v139.204zm0 0"/></svg>
			</button>
		</div>
	</div>

	<div id="share-buttons-modal" class="popup modal white-popup share-buttons-modal mfp-hide">

		<div class="close-button">
			<button class="close-button-svg" type="button">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 507.2 507.2"><circle cx="253.6" cy="253.6" r="253.6" fill="#f15249"/><path fill="#ad0e0e" d="M147.2 368L284 504.8c115.2-13.6 206.4-104 220.8-219.2L367.2 148l-220 220z"/><path fill="#fff" d="M373.6 309.6c11.2 11.2 11.2 30.4 0 41.6l-22.4 22.4c-11.2 11.2-30.4 11.2-41.6 0l-176-176c-11.2-11.2-11.2-30.4 0-41.6l23.2-23.2c11.2-11.2 30.4-11.2 41.6 0l175.2 176.8z"/><path fill="#d6d6d6" d="M280.8 216L216 280.8l93.6 92.8c11.2 11.2 30.4 11.2 41.6 0l23.2-23.2c11.2-11.2 11.2-30.4 0-41.6L280.8 216z"/><path fill="#fff" d="M309.6 133.6c11.2-11.2 30.4-11.2 41.6 0l23.2 23.2c11.2 11.2 11.2 30.4 0 41.6L197.6 373.6c-11.2 11.2-30.4 11.2-41.6 0l-22.4-22.4c-11.2-11.2-11.2-30.4 0-41.6l176-176z"/></svg>
			</button>
		</div>

		<h4 id="js-entry-share" class="center" data-text="Share"></h4>

		<div class="share-buttons">

			<div class="button-for-share">
				<div class="fb-share-screen facebook fb from_share_modal">
					<a class="facebook" href="https://www.babyvote.com/nov20/sohana-cutting">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.002 512.002"><circle cx="256.001" cy="256" r="256" fill="#4e598f"/><path d="M511.596 241.7L391.019 121.085c-1.998.605-6.982-1.714-9.173-1.274-51.717 8.62-101.71 0-151.704 13.791-24.135 6.896-25.859 36.202-34.478 55.165-12.067 34.478-10.343 72.404-25.859 105.158-10.343 22.411-34.478 36.202-43.098 62.061-2.875 10.785-2.705 24.379-5.956 34.69l120.98 120.922c4.725.26 9.48.403 14.269.403 141.384 0 256-114.616 256-256 .001-4.8-.142-9.567-.404-14.301z" fill="#364270"/><g fill="#fff"><path d="M363.043 109.466H148.958c-21.809 0-39.49 17.68-39.49 39.49v214.085c0 21.811 17.68 39.49 39.49 39.49h105.584l.183-104.722h-27.21a6.418 6.418 0 01-6.418-6.396l-.133-33.759a6.422 6.422 0 016.42-6.444h27.162v-32.618c0-37.852 23.118-58.463 56.884-58.463h27.71a6.421 6.421 0 016.42 6.42v28.463a6.419 6.419 0 01-6.416 6.42l-17.006.01c-18.363 0-21.921 8.725-21.921 21.533v28.239h40.351c3.848 0 6.83 3.358 6.375 7.173l-4.001 33.759a6.418 6.418 0 01-6.375 5.665h-36.168l-.183 104.726h62.826c21.809 0 39.49-17.682 39.49-39.491v-214.09c.001-21.809-17.68-39.49-39.489-39.49z"/><path d="M254.542 402.53l.183-104.722h-.448V402.53z"/></g><path d="M363.043 109.466H254.277v141.741h.269V218.59c0-37.852 23.118-58.463 56.884-58.463h27.71a6.421 6.421 0 016.42 6.42v28.463a6.419 6.419 0 01-6.416 6.42l-17.006.01c-18.363 0-21.921 8.725-21.921 21.533v28.238h40.351c3.848 0 6.83 3.358 6.375 7.173l-4.001 33.759a6.418 6.418 0 01-6.375 5.665h-36.168l-.183 104.726h62.826c21.809 0 39.49-17.682 39.49-39.491V148.956c.001-21.809-17.68-39.49-39.489-39.49z" fill="#d1d1d1"/></svg>
						Facebook
					</a>
				</div>
			</div>

			<div class="button-for-share">
				<div class="fb-share-screen facebook fb from_share_modal">
					<a class="messenger" target="_blank" href="#">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="255.999" r="255.999" fill="#b0e1ff"/><path d="M123.027 164.574c-33.373 60.946-20.675 135.636 28.348 182.339l1.122 79.036 85.406 85.406c5.98.417 12.012.645 18.098.645 133.85 0 243.689-102.73 255.017-233.643L362.875 130.213a151.482 151.482 0 00-34.356-25.711c-73.372-40.177-165.339-13.255-205.492 60.072z" fill="#85c5ed"/><path d="M388.589 309.994c-33.58 61.323-103.586 90.369-168.897 74.329l-67.196 41.627-1.122-79.036c-49.023-46.703-61.721-121.393-28.348-182.339 40.153-73.325 132.121-100.248 205.491-60.071 73.313 40.142 100.259 132.101 60.072 205.49z" fill="#41a0d7"/><path fill="#fff" d="M152.578 285.877l87.534-94.193 42.34 42.815 78.493-42.815-86.106 94.193-39.484-39.961z"/></svg>
						Messenger
					</a>
				</div>
			</div>

			<div class="button-for-share">
				<div class="from_share_modal">
					<a class="copy" data-clipboard-target="#copy_entry_path">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256.006C0 397.402 114.606 512.004 255.996 512 397.394 512.004 512 397.402 512 256.006 512.009 114.61 397.394 0 255.996 0 114.606 0 0 114.614 0 256.006z" fill="#fa6e51"/><path d="M511.393 272.788l-119.43-119.43h-.001l-61.725-61.725a6.926 6.926 0 00-2.235-1.494 6.92 6.92 0 00-2.669-.539h-124.8a6.934 6.934 0 00-6.933 6.933V131.2h-76.267a6.934 6.934 0 00-6.933 6.933v277.333c0 2.347 1.243 4.32 3.027 5.574.463.658 82.754 82.949 83.412 83.412.217.309.526.521.783.783 18.758 4.377 38.282 6.765 58.373 6.764 135.755.005 246.747-105.648 255.398-239.211z" fill="#e8573f"/><path d="M401.061 163.197a6.943 6.943 0 00-1.494-2.235l-69.329-69.329a6.943 6.943 0 00-2.235-1.494 6.928 6.928 0 00-2.67-.539h-124.8a6.933 6.933 0 00-6.933 6.933V131.2h-76.267a6.933 6.933 0 00-6.933 6.933v277.333a6.933 6.933 0 006.933 6.933h194.133a6.933 6.933 0 006.933-6.933V380.8h76.267a6.933 6.933 0 006.933-6.933v-208a6.909 6.909 0 00-.538-2.67zm-68.794-49.927l45.663 45.663h-45.663V113.27zm-27.734 295.263H124.267V145.067H235.2v62.4a6.933 6.933 0 006.933 6.933h62.4v194.133zm-9.803-208h-45.663V154.87l45.663 45.663zm23.67 166.4V207.467c0-.926-.189-1.831-.539-2.67a6.943 6.943 0 00-1.494-2.235l-69.329-69.329a6.943 6.943 0 00-2.235-1.494 6.928 6.928 0 00-2.67-.539h-34.667v-27.733H318.4v62.4a6.933 6.933 0 006.933 6.933h62.4v194.133H318.4z" fill="#f4f6f9"/></svg>
						Copy link
					</a>
					<textarea id="copy_entry_path" style="position: absolute;left: -9999px;">https://www.babyvote.com/nov20/sohana-cutting</textarea>
				</div>
			</div>

			<div class="button-for-share">
				<div class="from_share_modal">
					<a class="whatsapp" target="_blank" href="whatsapp://send?text=https://www.babyvote.com/nov20/sohana-cutting">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="256" fill="#75b73b"/><path d="M360.241 151.826c-14.843-3.712-36.671-16.532-50.8-21.671-55.165-17.239-129.293-3.448-149.98 60.337-1.724 1.724-5.172 1.724-6.896 1.724-41.374 48.269-13.791 106.882-17.239 160.323-1.177 18.839-11.083 35.497-23.831 49.588l107.282 107.17A258.13 258.13 0 00256 512c126.436 0 231.452-91.665 252.247-212.161L360.241 151.826z" fill="#52891d"/><g fill="#fff"><path d="M248.837 108.447c-78.029 3.712-139.604 68.696-139.369 146.811.072 23.792 5.816 46.249 15.95 66.095l-15.557 75.514c-.841 4.086 2.843 7.663 6.901 6.701l73.995-17.53c19.011 9.471 40.364 14.939 62.962 15.284 79.753 1.219 146.251-62.105 148.74-141.829 2.662-85.458-67.868-155.131-153.622-151.046zm88.293 227.489c-21.669 21.669-50.483 33.604-81.13 33.604-17.944 0-35.126-4.027-51.066-11.966l-10.302-5.134-45.37 10.747 9.549-46.356-5.075-9.943c-8.276-16.206-12.472-33.728-12.472-52.084 0-30.648 11.935-59.459 33.604-81.13 21.476-21.478 50.759-33.604 81.134-33.604 30.644 0 59.458 11.935 81.127 33.604 21.669 21.669 33.604 50.483 33.604 81.127.002 30.376-12.126 59.658-33.603 81.135z"/><path d="M327.115 286.582l-28.384-8.149a10.585 10.585 0 00-10.468 2.76l-6.942 7.07c-2.926 2.984-7.366 3.941-11.24 2.374-13.427-5.434-41.672-30.548-48.881-43.106-2.084-3.624-1.739-8.152.817-11.462l6.058-7.839a10.58 10.58 0 001.305-10.747l-11.941-27.008c-2.86-6.468-11.126-8.352-16.527-3.784-7.921 6.701-17.32 16.88-18.461 28.16-2.015 19.887 6.515 44.954 38.762 75.055 37.257 34.778 67.094 39.369 86.523 34.664 11.019-2.667 19.825-13.365 25.379-22.126 3.791-5.977.795-13.909-6-15.862z"/></g><g fill="#d1d1d1"><path d="M356.004 147.708l-22.223 22.778a115.641 115.641 0 013.351 3.191c21.67 21.669 33.604 50.483 33.604 81.127 0 30.375-12.128 59.656-33.604 81.134-21.669 21.669-50.483 33.604-81.13 33.604-17.944 0-35.125-4.027-51.066-11.966l-10.302-5.134-45.37 10.747.938-4.553-40.174 41.172c.886 2.663 3.705 4.475 6.734 3.758l73.995-17.53c19.011 9.471 40.364 14.939 62.962 15.284 79.753 1.219 146.253-62.105 148.74-141.829 1.375-44.134-16.773-84.056-46.455-111.783z"/><path d="M327.115 286.582l-28.384-8.149a10.585 10.585 0 00-10.468 2.76l-6.942 7.07c-2.926 2.984-7.366 3.941-11.24 2.374-7.756-3.139-20.451-12.845-31.185-22.904l-19.732 20.225c.677.648 1.352 1.295 2.05 1.948 37.257 34.778 67.094 39.369 86.523 34.664 11.019-2.667 19.825-13.365 25.379-22.126 3.79-5.977.794-13.909-6.001-15.862z"/></g></svg>
						WhatsApp
					</a>
				</div>
			</div>

			<div class="button-for-share">
				<div class="from_share_modal">
					<a class="twitter" target="_blank" href="https://twitter.com/intent/tweet?url=https://www.babyvote.com/nov20/sohana-cutting&amp;hashtags=BabyVote Baby Photo Contest">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="256" fill="#65a2d9"/><path d="M393.014 139.326c-26.703 23.169-53.253 43.475-74.954 71.852-53.381 64.372-118.613 155.7-207.386 142.086l158.61 158.396c134.456-6.873 241.497-117.493 242.686-253.376L393.014 139.326z" fill="#3a7ca5"/><path d="M397.872 162.471a115.847 115.847 0 01-20.208 6.815 62.977 62.977 0 0016.631-26.484c.926-2.893-2.219-5.398-4.832-3.848a116.572 116.572 0 01-30.894 12.762c-.628.16-1.276.24-1.929.24a8.195 8.195 0 01-5.411-2.065 63.176 63.176 0 00-41.805-15.777c-6.672 0-13.405 1.04-20.016 3.091-20.487 6.353-36.295 23.254-41.257 44.103-1.86 7.818-2.362 15.648-1.496 23.264a2.268 2.268 0 01-.569 1.772 2.35 2.35 0 01-1.969.781c-44.846-4.168-85.287-25.772-113.869-60.837-1.455-1.789-4.253-1.569-5.415.422-5.596 9.606-8.554 20.589-8.554 31.766a63.123 63.123 0 0018.837 45.039 56.639 56.639 0 01-14.414-5.582c-2.188-1.214-4.877.35-4.908 2.851-.31 25.445 14.588 48.087 36.905 58.282a56.578 56.578 0 01-11.995-1.001c-2.463-.467-4.532 1.867-3.768 4.253 7.246 22.618 26.717 39.288 50.021 43.07-19.339 12.983-41.863 19.83-65.302 19.83l-7.306-.003c-2.255 0-4.16 1.469-4.73 3.65-.565 2.145.474 4.413 2.396 5.53 26.412 15.372 56.541 23.495 87.138 23.495 26.784 0 51.838-5.313 74.466-15.798 20.745-9.609 39.076-23.345 54.486-40.827 14.357-16.286 25.581-35.085 33.365-55.879 7.418-19.816 11.34-40.967 11.34-61.154v-.964c0-3.241 1.465-6.291 4.024-8.37a124.916 124.916 0 0025.122-27.572c1.84-2.748-1.06-6.196-4.084-4.855z" fill="#fff"/><path d="M397.872 162.471a115.904 115.904 0 01-20.208 6.815 62.989 62.989 0 0016.632-26.484c.926-2.893-2.219-5.398-4.832-3.848a116.572 116.572 0 01-30.894 12.762c-.628.16-1.276.24-1.929.24a8.195 8.195 0 01-5.411-2.065 63.176 63.176 0 00-41.805-15.777c-6.671 0-13.405 1.04-20.016 3.091-14.322 4.441-26.343 14.048-33.985 26.546v205.477a164.729 164.729 0 0018.198-7.139c20.745-9.609 39.076-23.345 54.486-40.827 14.357-16.287 25.581-35.085 33.365-55.879 7.418-19.816 11.34-40.967 11.34-61.154v-.964c0-3.241 1.465-6.291 4.024-8.37a124.916 124.916 0 0025.122-27.572c1.837-2.745-1.063-6.193-4.087-4.852z" fill="#d1d1d1"/></svg>
						Twitter
					</a>
				</div>
			</div>

		</div>
	</div>

	<div class="entry-container">

		<div class="report_block" id="report_block" style="bottom: 0px;">
			<div class="report_head">
				<div class="report_head_text">
					<p>Report</p>
				</div>
			</div>

			<div class="report_body">
				<div class="report_q">
					Why are you reporting this post?
				</div>
				<div class="report_options">
					<a class="report_option" data-method="post" data-remote="true" href="/reports?entry_id=6a977ef4-b7ee-44e4-9027-ef0f03a00cdb&amp;reason=spam">
						Spam
						<svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11l5-5-5-5" stroke="#ADADAD" stroke-width="1.2"/></svg>
					</a>
					<a class="report_option" data-method="post" data-remote="true" href="/reports?entry_id=6a977ef4-b7ee-44e4-9027-ef0f03a00cdb&amp;reason=inappropriate">
						It’s inappropriate
						<svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11l5-5-5-5" stroke="#ADADAD" stroke-width="1.2"/></svg>
					</a>
				</div>
			</div>
		</div>

		<div id="entry" class="entry-content">

			<div class="entry-head">
				<h2 id="js-entry-fullname"></h2>
				<h3><span>entered by</span>&nbsp;<a id="js-entry-link" class="user_profile_link" href=""></a></h3>
			</div>


			<div class="vote-btn-wrapper">
				<div class="box panel">
					<div id="js-vote-button-holder">
						<div class="vote-button">
							<button class="pure-button fp vote vote-for-entry-btn free_vote_btn" type="button" id="js-vote-button">
								Tap to Vote
							</button>
						</div>
					</div>

					<div id="js-buy-more-button-holder" style="display:none;">
						<div class="vote-button voted gift-button voted-entry-btn">
							<button class="pure-button vote-for-entry-btn" type="button" id="js-buy-more-button">
								Buy more Gems
							</button>
						</div>
						<p class="vote_counter" id="js-vote-counter" style="display:none;">
							You can vote for free in
							<span id="js-vote-counter-time"></span>
						</p>
					</div>
				</div>
			</div>

			<div class="stats">
				<div class="stat">
					<div class="value">
						<span class="value_key" id="rank-value">
							<img src="https://assets.babyvote.com/assets/svg/entry/star-fa4d1b224a3a7195f089af96bdad5619d80561aac7104f0a22cef1ae6ed1bfff.svg">
							<span class="rank_number" id="js-entry-rank"></span>
						</span>
					</div>
					<div class="key" id="js-entry-competition" data-text-boys="Boys rank" data-text-girls="Girls rank"></div>
				</div>
				<div class="votes stat">
					<div class="value">
						<span class="value_key" id="votes-value">
							<img src="https://assets.babyvote.com/assets/svg/entry/heart-2cd226b75c85d8ec3d4f78df4c9049440250e611857f9fffa541c59010e85b82.svg">
							<span class="vote_number" id="js-vote-number"></span>
						</span>
					</div>
					<div class="key">
						Votes
					</div>
				</div>
			</div>

			<div class="bonus-votes" id="js-exchange" style="display:none;">
				<div class="intro">
					<p>Exchange your gems for bonus votes</p>
				</div>
				<div class="price-list" id="price_list">

					<div class="gem_amount">
						<div class="gem_amount_container">
							<img src="https://assets.babyvote.com/images/card_shop/gems.svg" width="136" height="45">
							<p id="js-gems-amount"></p>
						</div>
					</div>

					<div class="exchange-list" id="js-exchange-list"></div>

				</div>
			</div>

<!--
			<div class="box padded section" id="comments">
				<div class="fb-comments fb_iframe_widget fb_iframe_widget_fluid_desktop fb_iframe_widget_fluid" data-href="https://www.babyvote.com/nov20/sohana-cutting" data-numposts="15" data-order-by="reverse_time" data-width="100%" style="width: 100%;" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=1415665481985001&amp;container_width=315&amp;height=100&amp;href=https%3A%2F%2Fwww.babyvote.com%2Fnov20%2Fsohana-cutting&amp;locale=en_US&amp;mobile=true&amp;numposts=15&amp;order_by=reverse_time&amp;sdk=joey&amp;version=v3.2&amp;width=">
					<span style="vertical-align: bottom; width: 100%; height: 2260px;">
					</span>
				</div>
			</div>
-->

		</div>

	</div>

</div>
`;
