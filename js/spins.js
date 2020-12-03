(function(){

    var spinning = false;
    var container = null;

    window.free_spin_complete = () => {
        let gems = window.data.gems;
        alert('You have won '+gems+' Gems. They have been added to your account');
        
        jQuery('#free').hide();
        jQuery('#premium').hide();
        jQuery('#no-spins').show();
    };

    window.premium_spin_complete = () => {
        let gems = window.data.gems;
        alert('You have won '+gems+' Gems. They have been added to your account');

        // @todo - add spins amount to response

        if (window.data.premium_spins_amount && window.data.premium_spins_amount > 0) {
            jQuery('#premium').show();
            jQuery('#free').hide();
            jQuery('#no-spins').hide();
        } else {
            jQuery('#free').hide();
            jQuery('#premium').hide();
            jQuery('#no-spins').show();
        }
    };

    const init_free_spins = () => {
        container = jQuery('#free');
        if (!container.length) return;
        window.free_wheel = new Winwheel({
            'outerRadius': container.data('radius'),
            'canvasId': 'free-wheel',
            'numSegments': container.data('segments').length,
            'textLineWidth': 1,
            'textFillStyle': 'white',
            'textFontSize': 18,
            'textFontFamily': 'Arial',
            'textAlignment': 'outer',
            'lineWidth': 1,
            'segments': container.data('segments'),
            'animation': {
                'type': 'spinToStop',
                'duration': container.data('duration'),
                'spins': container.data('spins'),
                'callbackFinished': 'free_spin_complete()'
            }
        });

        jQuery('#free img.press').on('click', (e)=>{
            if (!spinning) {
                spinning = true;
                jQuery(this).removeClass('animated');

                let u = '/my/spins';
                let body = { spin_type: 'free' };
                fetch_api(u,(json)=>{
                    if (json.success) {
                        window.data = json.data;
                        let stopAngle = free_wheel.getRandomForSegment(data.segment);
                        free_wheel.animation.stopAngle = stopAngle;
                        free_wheel.startAnimation();

                    } else {
                        if (json.message) {
                            alert(json.message);
                        }
                    }
                });
            }
        });
    };

    const init_premium_spins = () => {
        container = jQuery('#premium');
        if (!container.length) return;
        window.premium_wheel = new Winwheel({
            'outerRadius': container.data('radius'),
            'canvasId': 'premium-wheel',
            'numSegments': container.data('segments').length,
            'textLineWidth': 1,
            'textFillStyle': 'white',
            'textFontSize': 18,
            'textFontFamily': 'Arial',
            'textAlignment': 'outer',
            'lineWidth': 1,
            'segments': container.data('segments'),
            'animation': {
                'type': 'spinToStop',
                'duration': container.data('duration'),
                'spins': container.data('spins'),
                'callbackFinished': 'premium_spin_complete()'
            }
        });

        jQuery('#premium img.press').on('click', (e)=>{
            if (!spinning) {
                spinning = true;
                jQuery(this).removeClass('animated');

                let u = '/my/spins';
                let body = { spin_type: 'premium' };
                fetch_api(u,(json)=>{
                    if (json.success) {
                        window.data = json.data;
                        let stopAngle = wheel.getRandomForSegment(data.segment);
                        wheel.animation.stopAngle = stopAngle;
                        wheel.startAnimation();
                    } else {
                        if (json.message) {
                            alert(json.message);
                        }
                    }
                }, body);
            }
        });
    };

    window.init_spins = () => {
        let free = get('#free');
        let premium = get('#premium');
        let no_spins = get('#no-spins');

        let u = '/my/spins';
        fetch_api(u,(data)=>{
            let free_spins_amount = 0;
            let premium_spins_amount = 0;
            
            if (data && data.user) {
                free_spins_amount = data.user.free_spins_amount;
                premium_spins_amount = data.user.premium_spins_amount;

                if (premium_spins_amount > 0) { // Premium spins
                    premium.style.display="block";
                    free.style.display="none";
                    no_spins.style.display="none";
                    init_premium_spins();
                } else if (free_spins_amount > 0) { // Free spins
                    free.style.display="block";
                    premium.style.display="none";
                    no_spins.style.display="none";
                    init_free_spins();
                } else { // No spins
                    no_spins.style.display="block";
                    free.style.display="none";
                    premium.style.display="none";
                }

            } else {

                // @todo - message if no data

            }
        });
    }

})();