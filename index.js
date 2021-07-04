'use strict';

const through = require('through2');
const PluginError = require('plugin-error');
const File = require('vinyl'); // eslint-disable-line no-unused-vars

const PLUGIN_NAME = 'gulp-apply';

/**
 *
 * @callback ApplyCallback
 * @param {File} file
 * @returns {(File|undefined)}
 */

/**
 * Apply function on stream.
 * @param {ApplyCallback} fn
 * @returns {NodeJS.ReadWriteStream}
 */
function GulpApply(fn) {
	/**
	 * @param {File} file
	 * @param {BufferEncoding} enc
	 * @param {through.TransformCallback} callback
	 */
	async function applyFile(file, enc, callback) {
		if (file.isNull()) {
			callback(null, file);
			return;
		}

		if (file.isStream()) {
			callback(new PluginError(PLUGIN_NAME, 'Streaming not supported'));
			return;
		}

		if (!file.isBuffer()) {
			callback(new PluginError(PLUGIN_NAME, 'Only Buffer is supported'));
			return;
		}

		file = fn.call(this, file);

		if (file) {
			callback(null, file);
			return;
		}

		callback();
	}

	return through.obj(applyFile);
}

module.exports = GulpApply;
