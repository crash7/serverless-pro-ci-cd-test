'use strict';

const { Octokit } = require('@octokit/rest');

/**
 * Creates an Octokit client with some helper functions to retrieve information.
 *
 * @param {string} token The token to authorize the requests.
 * @returns {object} An object with the octokit client and some helpers to retrieve data.
 */
function createOctokitClient(token) {
  const client = new Octokit({
    auth: token,
    previews: ['ant-man-preview', 'flash-preview']
  });

  return {
    _octokit: client,
    getRepositories: user => {
      return client.paginate('GET /users/:user/repos', {
        user,
        per_page: 100
      });
    }
  };
}

module.exports = createOctokitClient;
