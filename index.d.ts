export = GulpApply;
/**
 * @typedef {import('vinyl').BufferFile} File
 */
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
declare function GulpApply(fn: ApplyCallback): NodeJS.ReadWriteStream;
declare namespace GulpApply {
    export { File, ApplyCallback };
}
type ApplyCallback = (file: File) => (File | undefined);
type File = import('vinyl').BufferFile;
