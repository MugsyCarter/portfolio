import template from './bio.html';

export default {
    template,
    controller
};


function controller() {

    this.location = 'bio';

    console.log('location is ', this.location);

};