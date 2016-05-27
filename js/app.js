var load = function(url,callback){

    var main_script = document.querySelectorAll('[data-script=\'app.js\']')[0];
    var script = document.createElement('script');

    if(/^http|https/.test(url)){
            script.src = url;
    }else{
            script.src = 'js/' + url;
    }

    script.type = 'text/javascript';
    script.async = false;


    script.addEventListener('load',function(event){

        callback(null,event);

    },false);


    main_script.parentNode.insertBefore(script, main_script);
}

var DocumentURL = function(){
    this.href = window.location.href;
    this.host = window.location.host;
};

var doc_url = new DocumentURL;

document.addEventListener('DOMContentLoaded',function(){


    load('controller/controller.js',function(){
    });

    load('model.js',function(){
    });

    load('view.js',function(){

    });

    load('controller/create_name_containers.js',function(){
        create_name_containers();
    })

});

