const test = require('ava');
const File = require('vinyl');
const apply = require('..');

const testString = 'abufferwiththiscontent';

test('basic', (t) => {
	return new Promise((resolve) => {
		const stream = apply((file) => {
			return file;
		});
		stream.write(
			new File({
				contents: Buffer.from(testString),
			})
		);
		stream.once('data', (file) => {
			t.truthy(file.isBuffer());
			t.is(file.contents.toString(), testString);
			resolve();
		});
	});
});

test('push', (t) => {
	return new Promise((resolve) => {
		const stream = apply(function (file) {
			this.push(file);
		});
		stream.write(
			new File({
				contents: Buffer.from(testString),
			})
		);
		stream.once('data', (file) => {
			t.truthy(file.isBuffer());
			t.is(file.contents.toString(), testString);
			resolve();
		});
	});
});
