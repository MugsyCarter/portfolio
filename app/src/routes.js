routes.$inject = ['$stateProvider', '$urlRouterProvider']; 

export default function routes($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state({
        name: 'home',
        url: '/',
        data: { public: true },
        component: 'home' 
    });

    $stateProvider.state({
        name: 'projects',
        url: '/projects',
        data: { public: true },
        component: 'projects' 
    });

    $stateProvider.state({
        name: 'bio',
        url: '/bio',
        data: { public: true },
        component: 'bio' 
    });

    $stateProvider.state({
        name: 'resume',
        url: '/resume',
        data: { public: true },
        component: 'resume' 
    });

    $stateProvider.state({
        name: 'contact',
        url: '/contact',
        data: { public: true },
        component: 'contact' 
    });

    $urlRouterProvider.otherwise('/');
}
