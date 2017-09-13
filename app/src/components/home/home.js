import template from './home.html';

export default {
    template,
    controller
};


function controller() {
    this.featuredWebsite = {
        title: 'Carter Hearts',
        url: 'https://carterhearts.com',
        ImageURL: './images/carterHearts.png',
        description: 'A web-based single-player version of the card game hearts.',
        takeaway: 'I spend a lot of time cpntinually tweaking the AI to make it smarter.  Eventually I got it to place where it could win games and even shoot the moon.  I even ended up adding "easy" AI players as a result of getting feedback from people that it was too difficult.  Give it a try!',
        date: 'March 2017',
        tech: 'MEAN Stack'
    };

    this.soloProjects = [
        {
            title: 'Carter Hearts',
            url: 'https://carterhearts.com',
            ImageURL: './images/carterHearts.png',
            description: 'A web-based single-player version of the card game hearts.',
            takeaway: 'I spend a lot of time cpntinually tweaking the AI to make it smarter.  Eventually I got it to place where it could win games and even shoot the moon.  I even ended up adding "easy" AI players as a result of getting feedback from people that it was too difficult.  Give it a try!',
            date: 'March 2017',
            tech: 'MEAN Stack'
        }
    ];
    this.groupProjects = [];

};