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


    main_script.parentNode.insertBefore(script, main_script.nextSibling);
}


//var load_js = function(js_file_name,callback_function){
//
//    var request = new XMLHttpRequest();
//
//    //open a new request connection and set asynchronous to false;
//    request.open('GET',url,false);
//    request.onreadystatechange = function(){
//
//        var script = request.response || request.responseText;
//        //load the callback function once the script is fully loaded
//        if(request.readyState === 4){
//            switch(request.status){
//                case 200:
//
//            }
//        }
//    }
//
//    var head = document.getElementsByTagName('head')[0];
//    var script = document.createElement('script');
//    script.type = 'text/javascript';
//    script.src = 'js/'+js_file_name;
//    script.async = true;
//    script.onreadystatechange = function(){
//        console.log('onreadystatechange');
//    };
//
//    script.onload = function(){
//        console.log('onload');
//        callback_function;
//    }
//
//    console.log(head);
//    head.appendChild(script);
//
//};
//


document.addEventListener('DOMContentLoaded',function(){


    load('model.js',function(){
        //
    });

    load('view.js',function(){
    //
    });

    load('controller.js',function(){

        var controller = new Controller;
        controller.status;

    });

});


//window.location.hostname
//http://stackoverflow.com/questions/11401897/get-the-current-domain-name-with-javascript-not-the-path-etc
//http://stackoverflow.com/questions/2300771/jquery-domain-get-url
//https://www.sitepoint.com/create-one-time-events-javascript/

//http://stackoverflow.com/questions/9899372/pure-javascript-equivalent-to-jquerys-ready-how-to-call-a-function-when-the

//http://stackoverflow.com/questions/12820953/asynchronous-script-loading-callback
//http://stackoverflow.com/questions/12820953/asynchronous-script-loading-callback

//https://github.com/niftylettuce/javascript-async-callback
//http://www.phpied.com/async-javascript-callbacks/
//http://unixpapa.com/js/dyna.html
//http://stackoverflow.com/questions/280049/javascript-callback-for-knowing-when-an-image-is-loaded
//http://stackoverflow.com/questions/4249030/load-javascript-async-then-check-dom-loaded-before-executing-callback
//http://stackoverflow.com/questions/7084557/javascript-select-all-elements-with-data-attribute-without-jquery

//https://intuio.at/blog/dont-use-data-attributes-to-find-html-elements-with-js/

//http://www.html5rocks.com/en/tutorials/speed/script-loading/

//http://www.html5rocks.com/en/tutorials/file/dndfiles/

//https://developer.chrome.com/apps/app_frameworks

//http://stackoverflow.com/questions/8497833/hello-world-in-mvc-pattern


//http://stackoverflow.com/questions/504803/how-do-you-create-a-method-for-a-custom-object-in-javascript
