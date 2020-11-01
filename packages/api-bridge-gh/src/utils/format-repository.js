'use strict';

const { applySpec, path, prop } = require('ramda');

/**
 * Extracts data from the original `repository` payload.
 *
 * @param {object} repository The github repository descriptor.
 * @returns {object} The extracted repository data.
 */
const formatRepository = applySpec({
  id: prop('node_id'),
  name: prop('name'),
  description: prop('description'),
  url: prop('html_url'),
  isFork: prop('fork'),
  stars: prop('stargazers_count'),
  followers: prop('watchers_count'),
  language: prop('language'),
  license: path(['license', 'name'])
});

module.exports = formatRepository;
