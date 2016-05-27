var Controller = function(){

    this.status = function(){
        console.log('loaded');
    }

    this.model = new Model();
    this.view = new View();

    this.view.display_data(this.model.get_data());

};


var contact_information = function(first_name,last_name,company,phone,email){
    this.first_name = first_name;
    this.last_name = last_name;
    this.company = company;
    this.phone = phone;
    this.email = email;
};


