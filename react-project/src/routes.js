export default function createRouter(store) {
    const getPageTitle = (name) => {
        const state = store.getState();
        const { message } = state.intl;
        const pageNameInfo = `sp.${name}`;
        const pageName = message[pageNameInfo] ? message[pageNameInfo] + '-' : '';
        document.title = `${pageName}${message['sp']}`;
    }
    console.log('123', store);
    return [
        {
            onEnter: (nextState) => {
                console.log('nextState', nextState);
            },
            childRoutes: [
                {
                    path: 'http://localhost:3000/index.html',
                    indexRoute: {
                        onEnter: (nextState, replace) => {
                            console.log('nextState', nextState);
                            replace('http://localhost:3000/landing');
                        }
                    },
                    component: require(`./containers/landing`).default,
                    getChildRoutes: (_, cb) => {
                        cb(null, [
                            {
                                path: 'orderstatus',
                                component: require('./containers/orderStatus').default,
                                indexRoute: {
                                    onEnter: (nextState, replace) => {
                                        getPageTitle('');
                                    }
                                }
                            },
                            {
                                path: 'landing',
                                component: require('./containers/landing').default,
                                indexRoute: {
                                    onEnter: (nextState, replace) => {
                                        getPageTitle('');
                                    }
                                }
                            }
                        ])
                    }
                }
            ]
        }
    ];
}