import template from './resume.html';

export default {
    template,
    controller
};


function controller() {

    this.location = 'resume';

    console.log('location is ', this.location);

};