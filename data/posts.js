import {USERS} from './users'
export const POSTS = [
    {
        imageurl: 'https://instagram.fsrg1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/104316440_800100173857992_7058917651215328041_n.jpg?_nc_ht=instagram.fsrg1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Yg5GUN0eXdgAX8XBdpY&edm=AP_V10EBAAAA&ccb=7-4&oh=b1cd44ee92bc787ee9aad7f123a54b0d&oe=61A518FE&_nc_sid=4f375e',
        user: USERS[0].user,
        likes: 90823,
        caption: 'I made instaclone today',
        profile_picture: USERS[0].Image,
        comments: [
            {
                user: 'subject1',
                comment: 'Nice!',
            },
            {
                user: 'subject2',
                comment: 'Great!',
            },
        ],
    },
    {
        imageurl: 'https://www.matthewraymond.me/assets/img/about.jpg',
        user: USERS[1].user,
        likes: 190823,
        caption: 'I hope to be a succesfull developer!',
        profile_picture: USERS[1].Image,
        comments: [
            {
                user: 'subject1',
                comment: 'Nice!',
            },
            {
                user: 'subject2',
                comment: 'Great!',
            },
            {
                user: 'subject3',
                comment: 'Awesome!',
            },
        ],
    },
]