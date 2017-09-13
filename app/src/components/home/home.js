import template from './home.html';

export default {
    template,
    controller
};


function controller() {


    this.soloProjects = [
        {
            title: 'Carter Hearts',
            url: 'https://carterhearts.com',
            imageURL: './images/carterHearts.png',
            description: 'A web-based single-player version of the card game hearts.',
            takeaway: 'I spent a lot of time cpntinually tweaking the AI to make it smarter.  Eventually I got it to place where it could win games and even shoot the moon.  I even ended up adding "easy" AI players as a result of getting feedback from people that it was too difficult.  Give it a try!',
            date: 'March 2017',
            tech: 'MEAN Stack'
        },
        {
            title: 'Level Up Science',
            url: 'https://levelupscience.com',
            imageURL: './images/levelUpScience.png',
            description: 'A platform I buit to teach people, particularly students science.  Right now, only a couple of the chemistry units are fleshed out.',
            takeaway: 'I purposely made this project huge, in case I ever wanted to work on it full time and roll it out as an eventually money-making venture.  The coolest feature about this site is that if you create a user account the site will track your progress for each discipline and each unit as you "level up" your skills. I\'m particularly pround of the chemistry section that uses the periodic table to dynamically generate questions and answers each time you take a quiz.',
            date: 'June 2017',
            tech: 'MEAN Stack, Bootstrap'
        },
        {
            title: 'MBTI Personality Quiz',
            url: 'https://mbti-personality-test.herokuapp.com',
            imageURL: './images/mbti.png',
            description: 'A quick meyers-briggs personality quiz that will tell the user their meyers-briggs personality type.',
            takeaway: 'Although I finished this project in a day, I feel like it works fairly accurately, ad I particularly like the way the subtle stlying of the site turned out.',
            date: 'September 2017',
            tech: 'MEAN Stack'
        }
    ];

    this.featuredWebsite = this.soloProjects[0];

    this.groupProjects = [];

};