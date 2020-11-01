'use strict';

async function dummyHandler(event) {
  console.info('Event', event);
  console.info('Event', process.env);
  return {
    statusCode: 200,
    body: 'hi from dummy'
  };
}

module.exports = {
  dummyHandler
};
