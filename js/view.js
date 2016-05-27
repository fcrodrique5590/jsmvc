var View = function(){

    this.status  =  function(){
        console.log('loaded');
    };

    this.body = document.getElementsByTagName('body');

    this.display_data = function(data){
        this.body.innerHTML = data;
    };

};


var name_view = function(){
    var name_container = document.querySelectorAll('[data-name]')[0];
    return name_container;
}
