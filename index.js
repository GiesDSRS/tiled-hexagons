/* CommonJS entry wrapper for consumers.
   Preferably points at dist/index.js (CJS build) and falls back to dist/index.umd.js (UMD build)
   so installations from GitHub will work even if only the UMD file is present.
*/
try {
  // Prefer CommonJS build if available
  module.exports = require('./dist/index.js');
} catch (e) {
  // Fallback to UMD build
  module.exports = require('./dist/index.umd.js');
}
