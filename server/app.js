"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _webpack = _interopRequireDefault(require("webpack"));

var _webpackDevMiddleware = _interopRequireDefault(require("webpack-dev-middleware"));

var _webpackHotMiddleware = _interopRequireDefault(require("webpack-hot-middleware"));

var _webpack2 = _interopRequireDefault(require("../webpack.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
const app = (0, _express.default)();

const publicPath = _path.default.resolve(__dirname, '..', 'dist', 'index.html');

const compiler = (0, _webpack.default)(_webpack2.default);
/** Webpack HMR */

app.use((0, _webpackDevMiddleware.default)(compiler, {
  noInfo: true,
  publicPath: _webpack2.default.output.publicPath
}));
app.use((0, _webpackHotMiddleware.default)(compiler)); // app.use(express.static(publicPath));
// Handles any requests that don't match the ones above

app.get('*', (req, res) => {
  res.sendFile(publicPath);
});
app.listen(3000, () => {
  console.log(`Listening on port 3000 and looking in folder ${publicPath} ...`);
});