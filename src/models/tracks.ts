enum Tag {
    ambient = 'Ambient',
    darkAmbient = 'Dark Ambient',
    orchestral = 'Orchestral',
    electronic = 'Electronic',
    piano = 'Piano',
    jazz = 'Jazz',
    rock = 'Rock',
    funk = 'Funk',
    rnb = 'RnB',
    pop = 'Pop',
    classical = 'Classical',
}

enum Artist {
    allen = 'Allen Garvey',
    feldergarb = 'Feldergarb Trio',
    feldergarbWJWells = 'Feldergarb Trio w/ Jen Wells',
    hofstraBigBand = 'Hofstra University Jazz Ensemble',
    superbad = 'Superbad Quartet',
    superbadQuintet = 'Superbad Quintet',
}
export interface Track {
    title: string;
    year: number;
    length: number; // length in seconds, rounded down to the nearest second
    filename: string;
    description?: string;
    isMp3?: boolean;
}

interface AlbumMeta {
    title: string;
    slug: string;
    artist: Artist;
    description?: string[];
    coverImage?: string;
    tags: Tag[];
}

export interface Album {
    meta: AlbumMeta;
    tracks: Track[];
}

export const albums: Album[] = [
    {
        meta: {
            title: 'Rise and Fall',
            slug: 'rise-and-fall',
            artist: Artist.allen,
            tags: [Tag.electronic, Tag.classical],
        },
        tracks: [
            {
                title: 'Thoughts of Canada',
                // completion_date: '2023-11-06',
                year: 2023,
                filename: 'rise-and-fall/thoughts-of-canada',
                length: 184,
            },
            {
                title: 'Adieu',
                // completion_date: '2020-06-25',
                year: 2020,
                filename: 'rise-and-fall/adieu',
                length: 101,
            },
            {
                title: 'A New World',
                // completion_date: '2022-07-02',
                year: 2015,
                filename: 'rise-and-fall/a-new-world',
                length: 206,
            },
            {
                title: 'Stirrings of Catharsis',
                // completion_date: '2022-09-06',
                year: 2022,
                filename: 'rise-and-fall/stirrings-of-catharsis',
                length: 130,
            },
            {
                title: 'The Last Battle',
                // completion_date: '2014-01-28',
                year: 2014,
                filename: 'rise-and-fall/the-last-battle',
                length: 334,
            },
            {
                title: 'Marching Orders',
                // completion_date: '2014-01-05',
                year: 2014,
                filename: 'rise-and-fall/marching-orders',
                length: 224,
            },
            {
                title: 'A Dance of Love and Death',
                year: 2013,
                filename: 'rise-and-fall/a-dance-of-love-and-death',
                length: 371,
            },
            {
                title: 'A Visit to the Barony',
                // completion_date: '2025-02-20',
                year: 2025,
                filename: 'rise-and-fall/a-visit-to-the-barony',
                length: 122,
            },
        ],
    },
    {
        meta: {
            title: 'Swiss Army Band',
            slug: 'swiss-army-band',
            artist: Artist.allen,
            tags: [Tag.electronic, Tag.rock, Tag.jazz, Tag.funk],
        },
        tracks: [
            {
                title: 'World of Dreams',
                // completion_date: '2020-06-03',
                year: 2020,
                filename: 'swiss-army-band/world-of-dreams',
                length: 263,
            },
            {
                title: 'We Are All On The Same Team',
                // completion_date: '2022-11-19',
                year: 2022,
                filename: 'swiss-army-band/we-are-all-on-the-same-team',
                length: 97,
            },
            {
                title: 'Ataxite',
                // completion_date: '2023-01-30',
                year: 2023,
                filename: 'swiss-army-band/ataxite',
                length: 136,
            },
            {
                title: 'Like So Many Grains of Sand',
                // completion_date: '2022-11-16',
                year: 2014,
                filename: 'swiss-army-band/like-so-many-grains-of-sand',
                length: 230,
            },
        ],
    },
    {
        meta: {
            title: 'Secondary Colors',
            slug: 'secondary-colors',
            artist: Artist.allen,
            tags: [Tag.electronic],
        },
        tracks: [
            {
                title: 'Night in the Arcade',
                // completion_date: '2025-01-29',
                year: 2025,
                filename: 'secondary-colors/night-in-the-arcade',
                length: 146,
            },
            {
                title: 'Welcome to the Antechamber',
                // completion_date: '2023-02-07',
                year: 2023,
                filename: 'secondary-colors/welcome-to-the-antechamber',
                length: 128,
            },
            {
                title: 'Acid Confusion',
                // completion_date: '2022-10-20',
                year: 2022,
                filename: 'secondary-colors/acid-confusion',
                length: 144,
            },
            {
                title: 'Out of Sync, Out of Time',
                // completion_date: '2022-04-04',
                year: 2022,
                filename: 'secondary-colors/out-of-sync-out-of-time',
                length: 85,
            },
            {
                title: 'Retrograde Nostalgia',
                year: 2021,
                filename: 'secondary-colors/retrograde-nostalgia',
                length: 121,
            },
            {
                title: 'Shattered Horizons',
                year: 2021,
                filename: 'secondary-colors/shattered-horizons',
                length: 95,
            },
            {
                title: 'Everything In Its Correct Box',
                year: 2021,
                filename: 'secondary-colors/everything-in-its-correct-box',
                length: 108,
            },
            {
                title: 'New City',
                year: 2021,
                filename: 'secondary-colors/new-city',
                length: 165,
            },
            {
                title: 'Suburban Malaise',
                // completion_date: '2020-11-17',
                year: 2020,
                filename: 'secondary-colors/suburban-malaise',
                length: 97,
            },
            {
                title: 'Mechanized Emotion',
                // completion_date: '2022-10-02',
                year: 2020,
                filename: 'secondary-colors/mechanized-emotion',
                length: 189,
            },
            {
                title: 'Woozy Dreamworld',
                // completion_date: '2020-11-18',
                year: 2020,
                filename: 'secondary-colors/woozy-dreamworld',
                length: 104,
            },
            {
                title: 'Dance Rock',
                // completion_date: '2022-09-22',
                year: 2020,
                filename: 'secondary-colors/dance-rock',
                length: 116,
            },
            {
                title: 'Anxiety Jukebox',
                year: 2020,
                // completion_date: '2020-07-11',
                filename: 'secondary-colors/anxiety-jukebox',
                length: 159,
            },
            {
                title: 'Automate the Trulioo Checks!',
                // completion_date: '2022-05-08',
                year: 2022,
                filename: 'secondary-colors/automate-the-trulioo-checks',
                length: 188,
            },
            {
                title: 'Stranger Danger',
                // completion_date: '2022-10-25',
                year: 2014,
                filename: 'secondary-colors/stranger-danger',
                length: 105,
            },
        ],
    },
    {
        meta: {
            title: 'nightscapes:dreamscapes',
            slug: 'nightscapes-dreamscapes',
            artist: Artist.allen,
            tags: [Tag.ambient],
        },
        tracks: [
            {
                title: 'Psychic Cleansing',
                // completion_date: '2022-11-02',
                year: 2019,
                filename: 'nightscapes-dreamscapes/psychic-cleansing',
                length: 79,
            },
            {
                title: 'Paths Across The Desert',
                // completion_date: '2022-09-12',
                year: 2017,
                filename: 'nightscapes-dreamscapes/paths-across-the-desert',
                length: 150,
            },
            {
                title: 'Tuesday Morning',
                // completion_date: '2022-10-03',
                year: 2013,
                filename: 'nightscapes-dreamscapes/tuesday-morning',
                length: 281,
            },
            {
                title: 'Quest for Solitude',
                // completion_date: '2023-12-10',
                year: 2023,
                filename: 'nightscapes-dreamscapes/quest-for-solitude',
                length: 78,
            },
            {
                title: 'Crystal Remembrances',
                // completion_date: '2021-03-20',
                year: 2021,
                filename: 'nightscapes-dreamscapes/crystal-remembrances',
                length: 100,
            },
            {
                title: 'Voices in the Dark',
                // completion_date: '2022-09-14',
                year: 2019,
                filename: 'nightscapes-dreamscapes/voices-in-the-dark',
                length: 68,
            },
            {
                title: 'Sound of My Voice',
                // completion_date: '2020-07-02',
                year: 2020,
                filename: 'nightscapes-dreamscapes/sound-of-my-voice',
                length: 156,
            },
            {
                title: 'Sunrise Interpolation',
                // completion_date: '2020-06-25',
                year: 2019,
                filename: 'nightscapes-dreamscapes/sunrise-interpolation',
                length: 61,
            },
        ],
    },
    {
        meta: {
            title: 'Primary Colors',
            slug: 'primary-colors',
            artist: Artist.allen,
            tags: [Tag.electronic],
        },
        tracks: [
            {
                title: 'Invocation',
                // completion_date: '2014-04-13',
                year: 2014,
                filename: 'primary-colors/invocation',
                length: 130,
            },
            {
                title: "Just Doin' What I Do",
                // completion_date: '2013-09-02',
                year: 2013,
                filename: 'primary-colors/just-doin-what-i-do',
                length: 147,
            },
            {
                title: 'Trouble in the Urban Jungle',
                // completion_date: '2013-08-29',
                year: 2013,
                filename: 'primary-colors/trouble-in-the-urban-jungle',
                length: 135,
            },
            {
                title: 'Another World',
                // completion_date: '2013-09-08',
                year: 2013,
                filename: 'primary-colors/another-world',
                length: 134,
            },
            {
                title: 'Race Against Time',
                // completion_date: '2013-08-28',
                year: 2013,
                filename: 'primary-colors/race-against-time',
                length: 170,
            },
            {
                title: 'This Could Be The Start Of Something',
                // completion_date: '2013-10-25',
                year: 2013,
                filename:
                    'primary-colors/This%20Could%20Be%20The%20Start%20Of%20Something',
                length: 238,
            },
            {
                title: 'Laid Back Trance',
                // completion_date: '2014-03-21',
                year: 2014,
                filename: 'primary-colors/laid-back-trance',
                length: 276,
            },
            {
                title: 'Porta Del Paradiso',
                // completion_date: '2014-03-20',
                year: 2014,
                filename: 'primary-colors/porta-del-paradiso',
                length: 297,
            },
            {
                title: 'Return of the ___',
                // completion_date: '2013-10-25',
                year: 2013,
                filename: 'primary-colors/return-of-the-___',
                length: 155,
            },
            {
                title: 'Darksides',
                // completion_date: '2014-01-03',
                year: 2014,
                filename: 'primary-colors/darksides',
                length: 259,
            },
            {
                title: 'By The Seashore',
                // completion_date: '2013-10-25',
                year: 2013,
                filename: 'primary-colors/By%20The%20Seashore',
                length: 252,
            },
            {
                title: 'Sometimes I Miss You So Much',
                // completion_date: '2014-01-16',
                year: 2014,
                filename:
                    'primary-colors/Sometimes%20I%20Miss%20You%20So%20Much',
                length: 256,
            },
            {
                title: 'After the Storm',
                // completion_date: '2014-01-16',
                year: 2014,
                filename: 'primary-colors/after-the-storm',
                length: 305,
            },
            {
                title: 'Interstellar Funk',
                // completion_date: '2013-10-25',
                year: 2013,
                filename: 'primary-colors/interstellar-funk',
                length: 226,
            },
            {
                title: 'All That Glitters',
                // completion_date: '2013-06-03',
                year: 2013,
                filename: 'primary-colors/all-that-glitters',
                length: 128,
            },
            {
                title: 'Toys in the Attic',
                // completion_date: '2013-06-03',
                year: 2013,
                filename: 'primary-colors/toys-in-the-attic',
                length: 88,
            },
            {
                title: 'Looking Back From A Distance',
                // completion_date: '2013-10-25',
                year: 2013,
                filename: 'primary-colors/looking-back-from-a-distance',
                length: 152,
            },
            {
                title: 'Dream',
                // completion_date: '2013-06-10',
                year: 2013,
                filename: 'primary-colors/dream',
                length: 224,
            },
            {
                title: 'Last Night',
                // completion_date: '2014-01-01',
                year: 2014,
                filename: 'primary-colors/last-night',
                length: 221,
            },
            {
                title: 'Sunrise on the Moebius Strip',
                // completion_date: '2013-12-21',
                year: 2013,
                filename: 'primary-colors/sunrise-on-the-moebius-strip',
                length: 255,
            },
            {
                title: 'Graduation',
                // completion_date: '2014-03-18',
                year: 2014,
                filename: 'primary-colors/graduation',
                length: 282,
            },
        ],
    },
    {
        meta: {
            title: 'Senior Composition Recital',
            slug: 'senior-composition-recital',
            artist: Artist.allen,
            coverImage: 'allen-garvey-senior-composition-recital',
            tags: [Tag.classical, Tag.jazz],
        },
        tracks: [
            {
                title: 'Sky Meditation',
                year: 2009,
                filename: 'senior-recital/Sky%20Meditation',
                length: 277,
                description: 'Kathleen Vermaelen - flute',
            },
            {
                title: 'Prelude to the Rest of Your Life',
                year: 2009,
                filename:
                    'senior-recital/Prelude%20to%20the%20Rest%20of%20Your%20Life',
                length: 234,
                description:
                    'David Salazar, AnnMarie Buonaspina - violins, Steve Baker - electric guitar, Francisco Salazar - cello',
            },
            {
                title: 'Nighthawk',
                year: 2009,
                filename: 'senior-recital/Nighthawk',
                length: 321,
                description: 'Hofstra University Jazz Dectet',
            },
            {
                title: 'I Need A Vacation',
                year: 2009,
                filename: 'senior-recital/I%20Need%20A%20Vacation',
                length: 182,
                description: 'Hofstra University Jazz Dectet',
            },
        ],
    },
    {
        meta: {
            title: 'With the Hofstra University Jazz Ensemble',
            slug: 'with-the-hofstra-jazz-ensemble',
            artist: Artist.hofstraBigBand,
            coverImage: 'allen-garvey-junior-composition-recital',
            tags: [Tag.jazz],
        },
        tracks: [
            {
                title: 'Summer in New England',
                year: 2008,
                filename: 'hofstra-big-band/Summer%20in%20New%20England',
                length: 239,
            },
            {
                title: 'Surprise Party',
                year: 2009,
                filename: 'hofstra-big-band/Surprise%20Party',
                isMp3: true,
                length: 370,
                description:
                    'Symphony No. 94 Mvt. II by Joseph Haydn arr. by Allen Garvey',
            },
        ],
    },
    {
        meta: {
            title: '5/13/09 Jam',
            slug: 'superbad-05-13-09-jam',
            artist: Artist.superbadQuintet,
            coverImage: 'superbad-2009-05',
            tags: [Tag.jazz],
            description: [
                'Trumpet: Dan Wendelken',
                'Sax: Brian Carter',
                'Piano: Tim Zerone',
                'Bass: Allen Garvey',
                'Drums: Jordan Chiolis',
            ],
        },
        tracks: [
            {
                title: 'Have You Met Miss Jones?',
                year: 2009,
                filename:
                    'superbad-quartet/5-13-09-jam/Have%20You%20Met%20Miss%20Jones',
                length: 544,
            },
            {
                title: 'Eye of the Hurricane',
                year: 2009,
                filename:
                    'superbad-quartet/5-13-09-jam/Eye%20of%20the%20Hurricane',
                length: 766,
            },
            {
                title: 'Longing',
                year: 2009,
                filename: 'superbad-quartet/5-13-09-jam/Longing',
                length: 577,
            },
        ],
    },
    {
        meta: {
            title: 'The Departure of Adam Pin',
            slug: 'superbad-the-departure-of-adam-pin',
            artist: Artist.superbad,
            coverImage: 'departure-of-adam-pin',
            tags: [Tag.jazz],
            description: [
                'Sax: Brian Carter',
                'Piano: Tim Zerone',
                'Bass: Allen Garvey',
                'Drums: Adam Pin',
            ],
            // date: '2008-12'
        },
        tracks: [
            {
                title: 'Speak No Evil',
                year: 2008,
                filename:
                    'superbad-quartet/the-departure-of-adam-pin/01%20Speak%20No%20Evil',
                length: 576,
            },
            {
                title: 'Blue In Green (take 2)',
                year: 2008,
                filename:
                    'superbad-quartet/the-departure-of-adam-pin/02%20Blue%20In%20Green%20(take%202)',
                length: 1281,
            },
            {
                title: 'Blue In Green (take 1)',
                year: 2008,
                filename:
                    'superbad-quartet/the-departure-of-adam-pin/03%20Blue%20In%20Green%20(take%201)',
                length: 177,
            },
            {
                title: 'Night And Day (take 1)',
                year: 2008,
                filename:
                    'superbad-quartet/the-departure-of-adam-pin/04%20Night%20And%20Day%20(take%201)',
                length: 700,
            },
            {
                title: 'Night And Day (take 2)',
                year: 2008,
                filename:
                    'superbad-quartet/the-departure-of-adam-pin/05%20Night%20And%20Day%20(take%202)',
                length: 476,
            },
            {
                title: 'Pent-Up House',
                year: 2008,
                filename:
                    'superbad-quartet/the-departure-of-adam-pin/06%20Pent-Up%20House',
                length: 601,
            },
            {
                title: 'C-Jam Blues',
                year: 2008,
                filename:
                    'superbad-quartet/the-departure-of-adam-pin/07%20C-Jam%20Blues',
                length: 680,
            },
        ],
    },
    {
        meta: {
            title: '5/16/08 Jam',
            slug: 'feldergarb-5-16-08-jam',
            artist: Artist.feldergarb,
            coverImage: 'feldergarb-trio-bridge',
            tags: [Tag.jazz],
            description: [
                'Guitar: Dave Powell',
                'Bass: Allen Garvey',
                'Drums: Adam Pin',
            ],
        },
        tracks: [
            {
                title: 'Nostalgia in Times Square',
                year: 2008,
                filename:
                    'feldergarb-trio/5-16-08-jam/01%20Nostalgia%20in%20Times%20Square',
                length: 369,
            },
            {
                title: 'There Is No Greater Love',
                year: 2008,
                filename:
                    'feldergarb-trio/5-16-08-jam/02%20There%20Is%20No%20Greater%20Love',
                length: 484,
            },
            {
                title: 'Blue Bossa',
                year: 2008,
                filename: 'feldergarb-trio/5-16-08-jam/03%20Blue%20Bossa',
                length: 405,
            },
            {
                title: 'Pent-Up House',
                year: 2008,
                filename: 'feldergarb-trio/5-16-08-jam/04%20Pent-Up%20House',
                length: 392,
            },
            {
                title: 'Misty',
                year: 2008,
                filename: 'feldergarb-trio/5-16-08-jam/05%20Misty',
                length: 588,
            },
            {
                title: 'Tenor Madness (take 1)',
                year: 2008,
                filename:
                    'feldergarb-trio/5-16-08-jam/06%20Tenor%20Madness%20(take%201)',
                length: 384,
            },
            {
                title: 'Tenor Madness (take 2)',
                year: 2008,
                filename:
                    'feldergarb-trio/5-16-08-jam/07%20Tenor%20Madness%20(take%202)',
                length: 254,
            },
            {
                title: 'Just Friends',
                year: 2008,
                filename: 'feldergarb-trio/5-16-08-jam/08%20Just%20Friends',
                length: 538,
            },
        ],
    },
    {
        meta: {
            title: '1/28/08 Jam',
            slug: 'feldergarb-w-jen-wells-1-28-08-jam',
            artist: Artist.feldergarbWJWells,
            coverImage: 'feldergarb-trio-with-jen-wells',
            tags: [Tag.jazz],
            description: [
                'Guitar: Dave Powell',
                'Piano: Jen Wells',
                'Bass: Allen Garvey',
                'Drums: Adam Pin',
            ],
        },
        tracks: [
            {
                title: 'Someday My Prince Will Come',
                year: 2008,
                filename:
                    'feldergarb-trio-w-jen-wells/1-28-08-jam/01%20Someday%20My%20Prince%20Will%20Come',
                length: 457,
            },
            {
                title: 'Scrapple From The Apple',
                year: 2008,
                filename:
                    'feldergarb-trio-w-jen-wells/1-28-08-jam/02%20Scrapple%20From%20The%20Apple',
                length: 434,
            },
            {
                title: 'There Is No Greater Love',
                year: 2008,
                filename:
                    'feldergarb-trio-w-jen-wells/1-28-08-jam/03%20There%20Is%20No%20Greater%20Love',
                length: 431,
            },
            {
                title: 'Someday My Prince Will Come',
                year: 2008,
                filename:
                    'feldergarb-trio-w-jen-wells/1-28-08-jam/04%20Someday%20My%20Prince%20Will%20Come',
                length: 444,
            },
            {
                title: 'All Blues',
                year: 2008,
                filename:
                    'feldergarb-trio-w-jen-wells/1-28-08-jam/05%20All%20Blues',
                length: 1553,
            },
        ],
    },
    {
        meta: {
            title: '10/13/07 Jam',
            slug: 'feldergarb-10-13-07-jam',
            artist: Artist.feldergarb,
            coverImage: 'feldergarb-trio',
            tags: [Tag.jazz],
            description: [
                'Guitar: Dave Powell',
                'Bass: Allen Garvey',
                'Drums: Adam Pin',
            ],
        },
        tracks: [
            {
                title: "Now's The Time",
                year: 2007,
                filename:
                    "feldergarb-trio/10-13-07-jam/01%20Now's%20The%20Time",
                length: 380,
            },
            {
                title: 'Ladybird (take 1)',
                year: 2007,
                filename:
                    'feldergarb-trio/10-13-07-jam/02%20Ladybird%20(take%201)',
                length: 263,
            },
            {
                title: 'Ladybird (take 2)',
                year: 2007,
                filename:
                    'feldergarb-trio/10-13-07-jam/03%20Ladybird%20(take%202)',
                length: 294,
            },
            {
                title: 'Take The A Train',
                year: 2007,
                filename:
                    'feldergarb-trio/10-13-07-jam/04%20Take%20The%20A%20Train',
                length: 421,
            },
            {
                title: 'Romper Stomper',
                year: 2007,
                filename:
                    'feldergarb-102trio/10-13-07-jam/05%20Romper%20Stomper',
                length: 1114,
            },
        ],
    },
];
