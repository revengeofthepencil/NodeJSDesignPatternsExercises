/* eslint-disable import/prefer-default-export */
import nunjucks from 'nunjucks';

const template = '<h1>Hello <i>{{ name }}</i></h1>';
export function sayHello(name) {
	return nunjucks.renderString(template, { name });
}
