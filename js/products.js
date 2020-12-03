(function(){

    window.init_products = () => {
        let u = '/shop';
        fetch_api(u,(data)=>{
            console.log('init_products:');
            console.log(data);
            console.log(data.drafts);
        });
    }

})();