import { Event } from '../modules/events/interfaces'

const dummyEvents = [
  {
    title: 'Trip to Las Vegas',
    description: 'What happen in Vegas stay in Vegas',
    img: 'https://www.pro-sky.com/images/en/news/news_header_webseite_-49-_342_big.jpg',
  },
  {
    title: 'Trip to Las Vegas yeaaaaaa',
    description: 'What happen in Vegas stay in Vegas',
    img: 'https://www.pro-sky.com/images/en/news/news_header_webseite_-49-_342_big.jpg',
  },
  {
    title: 'Trip to Las Vegas',
    description: 'What happen in Vegas stay in Vegas',
    img: 'https://www.pro-sky.com/images/en/news/news_header_webseite_-49-_342_big.jpg',
  },
  {
    title: 'Trip to Las Vegas',
    description: 'What happen in Vegas stay in Vegas',
    img: 'https://www.pro-sky.com/images/en/news/news_header_webseite_-49-_342_big.jpg',
  },
  {
    title: 'Trip to Las Vegas',
    description: 'What happen in Vegas stay in Vegas',
    img: 'https://www.pro-sky.com/images/en/news/news_header_webseite_-49-_342_big.jpg',
  },
  {
    title: 'Trip to Las Vegas',
    description: 'What happen in Vegas stay in Vegas',
    img: 'https://www.pro-sky.com/images/en/news/news_header_webseite_-49-_342_big.jpg',
  },
];

/**
 * A function to fetch events from backend.
 * Curently it is mocked and return a promise that resolve to the list of dummy events above.
 */
const get = async (): Promise<Event[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
    resolve(dummyEvents);
  }, 3000)
  })
  
}

/**
 * A function to fetch an event by id.
 * Currently it is mocked and return a promise that resolve to a selected event by index from the list of dummy events above. 
 * @param id : The id of the fetched event, currently it use the index of the list of dummy events above.
 */
const getOne = async (id): Promise<Event> => {
  return new Promise((resolve) => {
    setTimeout(() => {
    resolve(dummyEvents[id]);
  }, 3000)
  })
}

export default {
  get,
  getOne,
}