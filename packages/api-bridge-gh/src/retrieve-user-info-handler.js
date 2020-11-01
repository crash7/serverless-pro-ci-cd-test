'use strict';

const { GH_TOKEN } = process.env;
const { map } = require('ramda');
const createOctokit = require('./utils/create-octokit');
const formatRepository = require('./utils/format-repository');
const octokitClient = createOctokit(GH_TOKEN);

/**
 * The retrieve user info handler for the API Gateway event attached to the lambda function.
 *
 * @param {object} event The API Gateway event.
 * @param {object} event.pathParameters The parameters detected in the resource request.
 * @param {string} event.pathParameters.user The username to retrieve repositories from.
 * @returns {object} The API Gateway response.
 */
async function retrieveUserInfo(event) {
  const {
    pathParameters: { user }
  } = event;
  let repositories = null;

  console.info(`Retrieving repositories for ${user}`);
  try {
    repositories = await octokitClient.getRepositories(user);
  } catch (error) {
    console.error(`Error fetching repositories: ${error.message}`);
    return {
      statusCode: 500
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify(map(formatRepository, repositories))
  };
}

module.exports = retrieveUserInfo;
