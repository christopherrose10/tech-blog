const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'textone',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'texttwo',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'textthree',
    user_id: 2,
    post_id: 19
  },
  {
    comment_text: 'textfour',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'textfive',
    user_id: 2,
    post_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
