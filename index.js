// const Parser = require('rss-parser');


module.exports = function(bp) {

    bp.middlewares.load();

    bp.hear(/GET_STARTED|hello|hi|hey|holla|bonjour/i, (event, next) => {

        event.reply('#welcome');

    })

    bp.hear(/twitter/, (event, next) => {

        event.reply('#twitter');

    })

    bp.hear(/github/, (event, next) => {

        event.reply('#github');

    })

    bp.hear(/blog/, (event, next) => {

        event.reply('#github');

    })

    bp.hear(/followus/, (event, next) => {

        event.reply('#github');

    })


    // bp.hear(/lastposts/, (event, next) => {

    //     parser.parseURL('https://www.sweetkoala.com/feed', (err, parsed) => {
  
    //         parsed.feed.entries.forEach((entry) => {

    //             bp.messenger.sendTemplate(event.user.id, entry.title + ' : ' + entry.link)

    //         })
    //     })


    // })

}