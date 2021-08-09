const { Post } = require('../models');

const postdata = [
    {
        title:
            'Title1',
        post_url: 'https://paginegialle.it/mattis/egestas.jsp',
        user_id: 1
    },
    {
        title: 'Title2',
        post_url: 'http://wikia.com/turpis/eget.jpg',
        user_id: 1
    },
    {
        title: 'Title3',
        post_url: 'https://shareasale.com/quis.json',
        user_id: 2
    },
    {
        title: 'Title4',
        post_url: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
        user_id: 2
    },
    {
        title: 'Title5',
        post_url: 'https://java.com/at/nibh/in.png',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;