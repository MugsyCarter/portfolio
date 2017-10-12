import template from './app.html';

export default {
    template,
    controller
};


function controller() {

    this.link = {
        home: true,
        projects: false,
        bio: false,
        contact: false,
        resume: false
    };

    this.header = false;

    this.clicked = (page)=>{
        if (this.link[page] === false){
            console.log('updating link');
            this.link = {
                home: false,
                projects: false,
                bio: false,
                contact: false,
                resume: false
            };
            this.link[page] = true;
        }
        if (this.link.home === true){
            this.header = false;
        }
        else{
            this.header = true;
        }
    };
};