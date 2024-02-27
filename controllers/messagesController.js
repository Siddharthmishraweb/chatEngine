// Assume you have an array of live groups and messages
const liveGroups = [
    { id: 1, name: 'Group 1' },
    { id: 2, name: 'Group 2' },
    { id: 3, name: 'Group 3' }
];

const liveMessagesByGroup = {
    1: [{ text: 'Message 1 for Group 1' }, { text: 'Message 2 for Group 1' }],
    2: [{ text: 'Message 1 for Group 2' }, { text: 'Message 2 for Group 2' }],
    3: [{ text: 'Message 1 for Group 3' }, { text: 'Message 2 for Group 3' }]
};

module.exports.messagesPage = function (req, res) {
    try {
        // Render the messages page with the live data
        res.render('messages', { title: 'Group Messages', groups: liveGroups, messagesByGroup: liveMessagesByGroup });
    } catch (err) {
        console.error('Error rendering messages page:', err);
        res.status(500).send('Internal Server Error');
    }
};
