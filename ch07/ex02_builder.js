import { request } from 'https';

/*
7.2 Request builder: Create your own Builder class around the built-in http.request() function.
The builder must be able to provide at least basic facilities to specify the HTTP method, the
URL, the query component of the URL, the header parameters, and the eventual body data to be
sent. To send the request, provide an invoke() method that returns a Promise for the
invocation. You can find the docs for http.request() at the following URL:
nodejsdp.link/docs-http-request.
*/

class HTTPBuilder {
	setHost(hostname) {
		this.hostname = hostname;
		return this;
	}

	setMethod(method) {
		this.method = method;
		return this;
	}

	setBody(body) {
		if (this.method !== 'GET') {
			this.body = body;
			return this;
		}
		return this;
	}

	setHeaders(headers) {
		this.headers = headers;
		return this;
	}

	setPath(path) {
		this.path = path;
		return this;
	}

	invoke() {
		return new Promise((resolve, reject) => {
			const options = {
				hostname: this.hostname,
				method: this.method,
			};

			if (this.path) {
				options.path = this.path;
			}

			if (this.headers) {
				options.headers = this.headers;
			} else {
				options.headers = {};
			}

			let postData;
			if (this.body) {
				postData = JSON.stringify(this.body);
				options.headers = { ...options.headers,
					'Content-Length': Buffer.byteLength(postData) };
			}

			console.log(`final options = ${JSON.stringify(options)}`);

			const req = request(options, res => {
				let data = '';

				res.on('data', chunk => {
					data += chunk;
				});

				res.on('end', () => {
					try {
						resolve(data);
					} catch (error) {
						reject(new Error({ message: 'Error parsing JSON' }));
					}
				});
			});

			if (postData) {
				req.write(postData);
			}
			req.on('error', err => reject(err));
			req.end();
		});
	}
}

const testRandomUsers = async () => {
	const host = 'randomuser.me';
	const path = '/api/?nat=US&results=50';
	const method = 'GET';

	const randomUserResp = await new HTTPBuilder()
		.setHost(host)
		.setMethod(method)
		.setPath(path)
		.invoke();
	console.log(`randomUserResp = \n${JSON.stringify(randomUserResp)}\n`);
};

const testPost = async () => {
	const host = 'api.restful-api.dev';
	const path = '/objects';
	const method = 'POST';

	const headers = {
		Accept: 'application/json',
		'Content-Type': 'application/json',

	};

	const body = {
		test: new Date().getTime(),
	};

	const postResp = await new HTTPBuilder()
		.setHost(host)
		.setPath(path)
		.setHeaders(headers)
		.setMethod(method)
		.setBody(body)
		.invoke();
	console.log(`postResp = \n${JSON.stringify(postResp)}\n`);
};

testRandomUsers();
testPost();
