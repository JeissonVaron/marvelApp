import { ResponseCharacters } from 'src/app/characters/interfaces/characters.interface';
import { ResponseComic } from 'src/app/comics/interfaces/comics.interface';

export const responseCharacters: ResponseCharacters = {
  code: 200,
  status: 'Ok',
  copyright: '© 2022 MARVEL',
  attributionText: 'Data provided by Marvel. © 2022 MARVEL',
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2022 MARVEL</a>',
  etag: '02ead2609565d7bbb61c742dea6b7c3e1cd0f7a4',
  data: {
    offset: 0,
    limit: 20,
    total: 1562,
    count: 20,
    results: [
      {
        id: 1011334,
        name: '3-D Man',
        description: '',
        modified: '2014-04-29T14:18:17-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
        comics: {
          available: 12,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21366',
              name: 'Avengers: The Initiative (2007) #14',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24571',
              name: 'Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21546',
              name: 'Avengers: The Initiative (2007) #15',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21741',
              name: 'Avengers: The Initiative (2007) #16',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21975',
              name: 'Avengers: The Initiative (2007) #17',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22299',
              name: 'Avengers: The Initiative (2007) #18',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22300',
              name: 'Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22506',
              name: 'Avengers: The Initiative (2007) #19',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/8500',
              name: 'Deadpool (1997) #44',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10223',
              name: 'Marvel Premiere (1972) #35',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10224',
              name: 'Marvel Premiere (1972) #36',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10225',
              name: 'Marvel Premiere (1972) #37',
            },
          ],
          returned: 12,
        },
        series: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
              name: 'Avengers: The Initiative (2007 - 2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2005',
              name: 'Deadpool (1997 - 2002)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2045',
              name: 'Marvel Premiere (1972 - 1981)',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 21,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19947',
              name: 'Cover #19947',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19948',
              name: 'The 3-D Man!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19949',
              name: 'Cover #19949',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19950',
              name: "The Devil's Music!",
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19951',
              name: 'Cover #19951',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19952',
              name: 'Code-Name:  The Cold Warrior!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47184',
              name: 'AVENGERS: THE INITIATIVE (2007) #14',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47185',
              name: 'Avengers: The Initiative (2007) #14 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47498',
              name: 'AVENGERS: THE INITIATIVE (2007) #15',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47499',
              name: 'Avengers: The Initiative (2007) #15 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47792',
              name: 'AVENGERS: THE INITIATIVE (2007) #16',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/47793',
              name: 'Avengers: The Initiative (2007) #16 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/48361',
              name: 'AVENGERS: THE INITIATIVE (2007) #17',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/48362',
              name: 'Avengers: The Initiative (2007) #17 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49103',
              name: 'AVENGERS: THE INITIATIVE (2007) #18',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49104',
              name: 'Avengers: The Initiative (2007) #18 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49106',
              name: 'Avengers: The Initiative (2007) #18, Zombie Variant - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49888',
              name: 'AVENGERS: THE INITIATIVE (2007) #19',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49889',
              name: 'Avengers: The Initiative (2007) #19 - Int',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/54371',
              name: 'Avengers: The Initiative (2007) #14, Spotlight Variant - Int',
              type: 'interiorStory',
            },
          ],
          returned: 20,
        },
        events: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
              name: 'Secret Invasion',
            },
          ],
          returned: 1,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=1ef63d1cac2dbca3f7fa1af8d957384d',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=1ef63d1cac2dbca3f7fa1af8d957384d',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=1ef63d1cac2dbca3f7fa1af8d957384d',
          },
        ],
      },
    ],
  },
};

export const responseComic: ResponseComic = {
  code: 200,
  status: 'Ok',
  copyright: '© 2022 MARVEL',
  attributionText: 'Data provided by Marvel. © 2022 MARVEL',
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2022 MARVEL</a>',
  etag: 'f261be183dc4a6f3b60f7aca0e7edde4e32dee9e',
  data: {
    offset: 0,
    limit: 20,
    total: 52063,
    count: 20,
    results: [
      {
        id: 82967,
        digitalId: 0,
        title: 'Marvel Previews (2017)',
        issueNumber: 0,
        variantDescription: '',
        description: '',
        modified: '2019-11-07T08:46:15-0500',
        isbn: '',
        upc: '75960608839302811',
        diamondCode: '',
        ean: '',
        issn: '',
        format: '',
        pageCount: 112,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/82967',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/82967/marvel_previews_2017?utm_campaign=apiRef&utm_source=1ef63d1cac2dbca3f7fa1af8d957384d',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/23665',
          name: 'Marvel Previews (2017 - Present)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/82965',
            name: 'Marvel Previews (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/82970',
            name: 'Marvel Previews (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/82969',
            name: 'Marvel Previews (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/74697',
            name: 'Marvel Previews (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/72736',
            name: 'Marvel Previews (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/75668',
            name: 'Marvel Previews (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/65364',
            name: 'Marvel Previews (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/65158',
            name: 'Marvel Previews (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/65028',
            name: 'Marvel Previews (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/75662',
            name: 'Marvel Previews (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/74320',
            name: 'Marvel Previews (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/73776',
            name: 'Marvel Previews (2017)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          { type: 'onsaleDate', date: '2099-10-30T00:00:00-0500' },
          { type: 'focDate', date: '2019-10-07T00:00:00-0400' },
        ],
        prices: [{ type: 'printPrice', price: 0 }],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        images: [],
        creators: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/82967/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10021',
              name: 'Jim Nausedas',
              role: 'editor',
            },
          ],
          returned: 1,
        },
        characters: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/82967/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/82967/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/183698',
              name: 'cover from Marvel Previews (2017)',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/183699',
              name: 'story from Marvel Previews (2017)',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/82967/events',
          items: [],
          returned: 0,
        },
      },
    ],
  },
};
