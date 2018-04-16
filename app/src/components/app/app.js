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

    this.activeColor = '#083D77';

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

            if (page === 'home'){
                this.activeColor = '#083D77';
            }
            if (page === 'projects'){
                this.activeColor = '#FF9438';
            }
            if (page === 'contact'){
                this.activeColor = '#8CC5D8';
            }
            if (page === 'bio'){
                this.activeColor = '#012a36';
            }
        }
        if (this.link.home === true){
            this.header = false;
        }
        else{
            this.header = true;
        }
    };
};