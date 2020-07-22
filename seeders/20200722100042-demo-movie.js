'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'movies',
      [
        // 1
        {
          categoryId: 1,
          title: 'Your Name',
          thumbnail: 'https://i.imgur.com/pGTKlTo.jpg',
          year: 2018,
          description:
            'Tells the story a high school boy in Tokyo and a high school girl in a rural town, who suddenly and inexplicably begin to swap bodies. The film stars the voices of Ryunosuke Kamiki, Mone Kamishiraishi, Masami Nagasawa and Etsuko Ichihara.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 2
        {
          categoryId: 2,
          title: 'The Witcher',
          thumbnail: 'https://i.imgur.com/y3WDY0h.png',
          year: 2020,
          description:
            'It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts. But when destiny hurtles him toward a powerful sorceress, and a young princess with a special gift, the three must learn to navigate independently the increasingly volatile Continent.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 3
        {
          categoryId: 2,
          title: 'Persona 3',
          thumbnail: 'https://i.imgur.com/Fi9yNLu.png',
          year: 2016,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 4
        {
          categoryId: 2,
          title: 'Game Of Thrones',
          thumbnail: 'https://i.imgur.com/MsCpR19.png',
          year: 2011,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 5
        {
          categoryId: 2,
          title: 'Money Heist',
          thumbnail: 'https://i.imgur.com/Hy0kOeF.png',
          year: 2017,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 6
        {
          categoryId: 2,
          title: 'Touch',
          thumbnail: 'https://i.imgur.com/xwb4md2.png',
          year: 2020,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 7
        {
          categoryId: 2,
          title: 'Arrow',
          thumbnail: 'https://i.imgur.com/IlUBhLG.png',
          year: 2012,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 8
        {
          categoryId: 2,
          title: 'You',
          thumbnail: 'https://i.imgur.com/Q8PZWEp.png',
          year: 2018,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 9
        {
          categoryId: 2,
          title: 'Castlevania',
          thumbnail: 'https://i.imgur.com/wJER8FP.png',
          year: 2017,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 10
        {
          categoryId: 2,
          title: 'The Oa',
          thumbnail: 'https://i.imgur.com/ihFDUKT.png',
          year: 2016,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 11
        {
          categoryId: 2,
          title: 'Locke',
          thumbnail: 'https://i.imgur.com/J7QAQ6Z.png',
          year: 2020,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 12
        {
          categoryId: 2,
          title: 'Replay 1988',
          thumbnail: 'https://i.imgur.com/QM6oBTG.png',
          year: 2015,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 13
        {
          categoryId: 2,
          title: 'Panji Manusia Millenium',
          thumbnail: 'https://i.imgur.com/A3W6pzi.png',
          year: 1999,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 14
        {
          categoryId: 1,
          title: 'The God father',
          thumbnail: 'https://i.imgur.com/SHVRTef.png',
          year: 1972,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 15
        {
          categoryId: 1,
          title: 'Batman',
          thumbnail: 'https://i.imgur.com/iT6IhMK.png',
          year: 2008,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 16
        {
          categoryId: 1,
          title: 'End Game',
          thumbnail: 'https://i.imgur.com/gafS82d.png',
          year: 2019,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 17
        {
          categoryId: 1,
          title: 'Joker',
          thumbnail: 'https://i.imgur.com/nK5DkSC.png',
          year: 2019,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 18
        {
          categoryId: 1,
          title: 'Parasite',
          thumbnail: 'https://i.imgur.com/sgYHXLH.png',
          year: 2019,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 19
        {
          categoryId: 1,
          title: 'Chernobil',
          thumbnail: 'https://i.imgur.com/tMejaRa.png',
          year: 2020,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 20
        {
          categoryId: 1,
          title: 'Serigala Terakhir',
          thumbnail: 'https://i.imgur.com/qF8GqQI.png',
          year: 2009,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 21
        {
          categoryId: 1,
          title: 'Grave',
          thumbnail: 'https://i.imgur.com/d0h1H24.png',
          year: 2012,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 22
        {
          categoryId: 1,
          title: 'Tororo',
          thumbnail: 'https://i.imgur.com/3rgtEzA.png',
          year: 1988,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 23
        {
          categoryId: 1,
          title: 'Quite',
          thumbnail: 'https://i.imgur.com/vwvqMoZ.png',
          year: 2020,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 24
        {
          categoryId: 1,
          title: 'Plojen 2',
          thumbnail: 'https://i.imgur.com/l84Wj3x.png',
          year: 2020,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // 25
        {
          categoryId: 1,
          title: 'Suicide Squad',
          thumbnail: 'https://i.imgur.com/FrkBwI3.png',
          year: 2016,
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
