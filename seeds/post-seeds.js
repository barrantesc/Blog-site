const { Post } = require('../models');

const postData = [
    {
        title: "Taskmaster goes public!",
        post_content: "Taskinator is a task-tracker app that will allow you to organize your personal to-do list items by clicking and dragging them into categories like To Do, In Progress, and Completed.",
        user_id: 1
    },
    {
        title: "Zoo Keepr reaches 1 million subscribers!",
        post_content: "The local zoo has received funding to build a new online catalog, and they've asked to create a web server for a front-end application they’re developing, called Zoo Keepr. This site’s data will be stored on the server. This will allow animal enthusiasts to access the data from different locations and browsers without needing to download it to their device",
        user_id: 2
    },
    {
        title: "Work Day Scheduler tool now available!",
        post_content: "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. Use Moment.js library to work with date and time",
        user_id: 3

    },
    {
        title: "Google is making it harder for Android apps to track you once you’ve opted out",
        content: "It’s going to get harder for Android apps to track users who’ve opted out of receiving personalized ads, the Financial Times reports, after Google announced changes to how it’ll handle the unique device identifiers that allow marketers to track them between apps. Starting later this year, Google is cutting off access to these “Advertising IDs” after a user opts out, and will show developers a “string of zeros” in its place.",
        user_id: 4
    },
    {
        title: "Just Tech News goes public!",
        post_content: "Just Tech News—a tech news website where users can post, upvote, and comment on links to news articles. Use Sequelize, an object-relational mapping (ORM) library, to simplify your MySQL queries, add password hashing so that users can create secure passwords, and connect your application to JawsDB, a MySQL add-on for Heroku",
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;