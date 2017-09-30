import template from './home.html';

export default {
    template,
    controller
};


function controller() {




    this.toggleProject = (project)=>{
        for (let i =0; i < this.projects.length; i++){
            this.projects[i].showMore=false;
        }
        if (project.showMore === true){
            return this.projects[project.index].showMore = false;
        }
        else{
            return this.projects[project.index].showMore = true;
        }
    };

    this.location = 'home';

    this.projects = [
        {
            title: 'Imbibe-or',
            url: 'http://imbibe-or.herokuapp.com',
            imageURL: './images/imbibeor.png',
            description: '  A message board site focused on alcohol tourism in the state of oregon, where users can chat about different types of drinks in different regions around the state.',
            takeaway: '  This was a group project from the Code Fellows Advanced Web-Development in full stack JavaScript program from the backend portion of the program.  Our focus was to save user accounts, preferences, and contibutions in our Mongo database.',
            date: '  November 2017',
            tech: '  mongoDB, node.js, express, HTML, CSS',
            showMore: false,
            type: 'group',
            index: 0
        },
        {
            title: 'Transplantr',
            url: 'http://transplantr.herokuapp.com',
            imageURL: './images/transplantr.png',
            description: '  A site that lets users compare costs of living and housing costs for different cities.',
            takeaway: '  This was a group project from the Code Fellows Advanced Web-Development in full stack JavaScript program from the frontend portion of the program.  Our focus was to make the site look great on mobile devices and pulll data from both the US census and Zillow APIs.',
            date: '  October 2017',
            tech: '  Jquery, handlebars, HTML, CSS',
            showMore: false,
            type: 'group',
            index: 1
        },
        {
            title: 'Carter Hearts',
            url: 'http://carterhearts.com',
            imageURL: './images/carterHearts.png',
            description: '  A web-based single-player version of the card game hearts.',
            takeaway: '  I spent a lot of time continually tweaking the AI to make it smarter.  Eventually I got it to place where it could win games and even shoot the moon.  I even ended up adding "easy" AI players as a result of getting feedback from people that it was too difficult.  Give it a try!',
            date: '  March 2017',
            tech: '  MEAN Stack',
            showMore: false,
            type: 'solo',
            index: 2
        },
        {
            title: 'Level Up Science',
            url: 'http://levelupscience.com',
            imageURL: './images/levelUpScience.png',
            description: '  A platform I buit to teach people, particularly students, science.  Right now, only a couple of the chemistry units are fleshed out.',
            takeaway: '  I purposely made this project huge, on the off chance that I ever wanted to work on it full time and roll it out as an eventually money-making venture.  The coolest feature about this site is that if you create a user account the site will track your progress for each discipline and each unit as you "level up" your skills. I\'m particularly proud of the chemistry section that uses the periodic table to dynamically generate new unique questions and answers each time you take a quiz.',
            date: '  June 2017',
            tech: '  MEAN Stack, Bootstrap',
            showMore: false,
            type: 'solo',
            index: 3
        },
        {
            title: 'MBTI Personality Quiz',
            url: 'https://mbti-personality-test.herokuapp.com',
            imageURL: './images/mbti.png',
            description: '  A quick Meyers-Briggs personality quiz that will tell the user their personality type.',
            takeaway: '  Although I finished this project in a day, I feel like it works fairly accurately, and I particularly like the way the subtle stlying of the site turned out.',
            date: '  September 2017',
            tech: '  MEAN Stack',
            showMore: false,
            type: 'solo',
            index: 4
        },
        {
            title: 'Play Magic the Gathering',
            url: 'https://play-mtg.herokuapp.com',
            imageURL: './images/magic.png',
            description: '  A web app that lets you play Magic the Gathering, the popular tabletop card game with decks of your own construction.',
            takeaway: '  This web app is a work in progress. Currently I\'m working on the gameplay and the AI.',
            date: '  ongoing',
            tech: '  MEAN Stack',
            showMore: false,
            type: 'solo',
            index: 5
        }
    ];

    let num = (Math.round(Math.random() + 1))*2;
    console.log('num is ', num);
    this.featuredWebsite = this.projects[num];


};