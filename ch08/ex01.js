/*
8.1 HTTP client cache: Write a proxy for your favorite HTTP client library
that caches the response of a given HTTP request, so that if you make the
same request again, the response is immediately returned from the local cache,
rather than being fetched from the remote URL. If you need inspiration, you
can check out the superagent-cache module (nodejsdp.link/superagent-cache).
*/

import fetch from 'node-fetch';

const URL = 'https://randomuser.me/api/?nat=US&results=';
const NUM_RESULTS = 10;

const randomNumber = () => Math.floor(Math.random() * 5) + 1;

const fetchJsonProxy = (() => {
	const jsonCache = {};

	return async url => {
		if (url in jsonCache) {
			console.log(`Fetching URL: ${url} from cache`);
			return jsonCache[url];
		}

		console.log(`Fetching URL: ${url} from server`);

		try {
			const response = await fetch(url);
			const json = await response.json();
			jsonCache[url] = json;
			return json;
		} catch (error) {
			console.error(`Error fetching URL: ${url}`, error);
			throw error;
		}
	};
})();

const getResultsViaProxy = async () => {
	for (let i = 0; i < NUM_RESULTS; i++) {
		const randomNum = randomNumber();
		// eslint-disable-next-line no-await-in-loop
		const json = await fetchJsonProxy(`${URL}${randomNum}`);
		const { results } = json;
		console.log(`Called for ${randomNum} results, got ${results.length} results. First name = ${JSON.stringify(results[0].name)}\n`);
	}
};

getResultsViaProxy();
