var Model = function(){

    this.status = function(){
        console.log('loaded');
    },

    this.data = 'data from the model';

    this.get_data = function(){
        return this.data;
    }
};


var alonzo = new contact_information('Alonzo','Yrigollen','EDC','(559) 111-1111','geekwise.alonzo.yrigollen@gmail.com');

var j = new contact_information('J','Tablett','EDC','(559) 111-1112','geekwise.jennifer.tablett@gmail.com');

var tiffany = new contact_information('Tiffany','Ranish','EDC','(559) 111-1113','geekwise.tiffany.ranish@gmail.com');

var nicole = new contact_information('Nicole','Deltoro','EDC','(559) 111-1114','geekwise.nicole.deltoro@gmail.com');

var veronica = new contact_information('Veronica','Chavez','EDC','(559) 111-1115','geekwise.veronica.chavez@gmail.com');

var juston = new contact_information('Juston','Miller','EDC','(559) 111-1116','geekwise.juston.miller@gmail.com');

var mark = new contact_information('Mark','Thomas','EDC','(559) 111-1116','mark.thomas.miller@gmail.com');

var bob = new contact_information('Bob','Brettson','EDC','(559) 111-1116','mark.thomas.miller@gmail.com');

var sarah = new contact_information('Sarah','Smith','EDC','(559) 111-1116','mark.thomas.miller@gmail.com');


var contact_array = [
    alonzo,
    juston,
    tiffany,
    nicole,
    veronica,
    j,
    mark,
    bob,
    sarah
];

