/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/file.js":
/*!*********************!*\
  !*** ./src/file.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   copyDirectory: () => (/* binding */ copyDirectory),\n/* harmony export */   copyFile: () => (/* binding */ copyFile),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   downloadFilePro: () => (/* binding */ downloadFilePro),\n/* harmony export */   readDirRecursively: () => (/* binding */ readDirRecursively)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n/**\r\n * 文件操作相关方法\r\n */\r\n\r\n/**\r\n * 递归读取目录 并按照regex筛选出需要的文件路径\r\n * @param dirPath\r\n * @param regex\r\n */\r\nfunction readDirRecursively(dirPath, regex) {\r\n    const filter = [];\r\n    const files =  fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(dirPath);\r\n    for (const file of files) {\r\n        const tempPath = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(dirPath, file);\r\n        const stat = fs__WEBPACK_IMPORTED_MODULE_0___default().statSync(tempPath);\r\n        if (stat.isDirectory()) {\r\n            const tempFilter = readDirRecursively(tempPath, regex);\r\n            filter.push(...tempFilter);\r\n        } else if (stat.isFile()) {\r\n            const extname = path__WEBPACK_IMPORTED_MODULE_1___default().basename(tempPath);\r\n            if (regex.test(extname)) {\r\n                filter.push(tempPath);\r\n            }\r\n        }\r\n    }\r\n    return filter;\r\n}\r\n\r\n/**\r\n * 拷贝文件\r\n * 兼容低版本node\r\n * @param srcPath\r\n * @param desPath\r\n */\r\nfunction copyFile(srcPath, desPath) {\r\n    return new Promise((resolve, reject) => {\r\n        try {\r\n            const writeStream = fs__WEBPACK_IMPORTED_MODULE_0___default().createWriteStream(desPath);\r\n            const readStream = fs__WEBPACK_IMPORTED_MODULE_0___default().createReadStream(srcPath);\r\n            readStream.on(\"error\", reject);\r\n            readStream.on(\"close\", resolve);\r\n            writeStream.on(\"error\", reject);\r\n            writeStream.on(\"finish\", () => {\r\n                console.log(\"文件复制成功!\");\r\n            });\r\n            //将原文件流导向目标文件流\r\n            readStream.pipe(writeStream);\r\n        } catch (error) {\r\n            console.error(error);\r\n        }\r\n    });\r\n}\r\n\r\n/**\r\n * 递归拷贝目录\r\n * @param srcPath\r\n * @param desPath\r\n */\r\nasync function copyDirectory(srcPath, desPath) {\r\n    try {\r\n        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(desPath)) {\r\n            fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(desPath);\r\n        }\r\n        // 读取源目录中的所有文件和子目录\r\n        const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(srcPath);\r\n        for (const file of files) {\r\n            const copyPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(srcPath, file);\r\n            const destPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(desPath, file);\r\n            const stats = fs__WEBPACK_IMPORTED_MODULE_0___default().statSync(copyPath);\r\n            if (stats.isDirectory()) {\r\n                // 如果是子目录，递归拷贝\r\n                await copyDirectory(copyPath, destPath);\r\n            } else {\r\n                // 如果是文件且不存在，直接拷贝\r\n                if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(destPath)) {\r\n                    await copyFile(copyPath, destPath);\r\n                }\r\n            }\r\n        }\r\n    } catch (error) {\r\n        console.error(`Error copying directory: ${error.message}`);\r\n    }\r\n}\r\n\r\n/**\r\n * 下载文件\r\n * @param url\r\n * @param saveDir\r\n * @param fileName\r\n */\r\nasync function downloadFilePro(url, saveDir, fileName = '') {\r\n    console.log('开始下载文件', url);\r\n    const buffer = await download(url);\r\n    // 从buffer中获取文件格式\r\n    const typeInfo = await fileTypeFromBuffer(buffer);\r\n    const ext = typeInfo.ext || '';\r\n    // 写入文件\r\n    const rand = 1000 + Math.floor(Math.random() * 9000);\r\n    fileName = fileName || `${timeNo()}_${rand}.${ext}`;\r\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(saveDir, fileName);\r\n    fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(filePath, buffer);\r\n    return { filePath, fileName };\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    copyFileSync: copyFile,\r\n    copyDirectorySync: copyDirectory,\r\n    downloadFilePro\r\n});\r\n\n\n//# sourceURL=webpack://node/./src/file.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _file_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file.js */ \"./src/file.js\");\n\r\n\r\n\r\n\r\nfunction exec() {\r\n    window.nodeObj = {\r\n        fs: (fs__WEBPACK_IMPORTED_MODULE_0___default()),\r\n        path: (path__WEBPACK_IMPORTED_MODULE_1___default()),\r\n        file: _file_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n        video,\r\n    }\r\n}\r\n\r\nexec();\r\n\n\n//# sourceURL=webpack://node/./src/index.js?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;