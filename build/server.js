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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nconst all_modules_1 = __webpack_require__(/*! ./modules/all.modules */ \"./src/modules/all.modules.ts\");\nconst config_module_1 = __webpack_require__(/*! ./modules/config/config.module */ \"./src/modules/config/config.module.ts\");\nconst config_service_1 = __webpack_require__(/*! ./modules/config/config.service */ \"./src/modules/config/config.service.ts\");\nasync function bootstrap() {\n    const app = await core_1.NestFactory.create(all_modules_1.AllModule);\n    const env = app.select(config_module_1.ConfigModule).get(config_service_1.ConfigService);\n    await app.listen(env.envConfig.PORT, () => {\n        common_1.Logger.log(`web service starting,web port:${env.envConfig.PORT}`);\n    });\n}\nbootstrap();\n\n\n//# sourceURL=webpack://turbos-nodejs-oracle/./src/main.ts?");

/***/ }),

/***/ "./src/modules/all.modules.ts":
/*!************************************!*\
  !*** ./src/modules/all.modules.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AllModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst app_module_1 = __webpack_require__(/*! ./app/app.module */ \"./src/modules/app/app.module.ts\");\nconst config_module_1 = __webpack_require__(/*! ./config/config.module */ \"./src/modules/config/config.module.ts\");\nconst tasks_module_1 = __webpack_require__(/*! ./tasks/tasks.module */ \"./src/modules/tasks/tasks.module.ts\");\nlet AllModule = class AllModule {\n};\nAllModule = __decorate([\n    (0, common_1.Module)({\n        imports: [\n            app_module_1.AppModule,\n            config_module_1.ConfigModule,\n            tasks_module_1.TasksModule,\n        ],\n        providers: []\n    })\n], AllModule);\nexports.AllModule = AllModule;\n\n\n//# sourceURL=webpack://turbos-nodejs-oracle/./src/modules/all.modules.ts?");

/***/ }),

/***/ "./src/modules/app/app.controller.ts":
/*!*******************************************!*\
  !*** ./src/modules/app/app.controller.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppController = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst app_service_1 = __webpack_require__(/*! ./app.service */ \"./src/modules/app/app.service.ts\");\nlet AppController = class AppController {\n    constructor(appService) {\n        this.appService = appService;\n    }\n    getHello() {\n        return this.appService.getHello();\n    }\n};\n__decorate([\n    (0, common_1.Get)(),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", String)\n], AppController.prototype, \"getHello\", null);\nAppController = __decorate([\n    (0, common_1.Controller)(),\n    __metadata(\"design:paramtypes\", [app_service_1.AppService])\n], AppController);\nexports.AppController = AppController;\n\n\n//# sourceURL=webpack://turbos-nodejs-oracle/./src/modules/app/app.controller.ts?");

/***/ }),

/***/ "./src/modules/app/app.module.ts":
/*!***************************************!*\
  !*** ./src/modules/app/app.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst app_controller_1 = __webpack_require__(/*! ./app.controller */ \"./src/modules/app/app.controller.ts\");\nconst app_service_1 = __webpack_require__(/*! ./app.service */ \"./src/modules/app/app.service.ts\");\nlet AppModule = class AppModule {\n};\nAppModule = __decorate([\n    (0, common_1.Module)({\n        imports: [],\n        controllers: [app_controller_1.AppController],\n        providers: [app_service_1.AppService],\n    })\n], AppModule);\nexports.AppModule = AppModule;\n\n\n//# sourceURL=webpack://turbos-nodejs-oracle/./src/modules/app/app.module.ts?");

/***/ }),

/***/ "./src/modules/app/app.service.ts":
/*!****************************************!*\
  !*** ./src/modules/app/app.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet AppService = class AppService {\n    getHello() {\n        return 'Hello Turbos!';\n    }\n};\nAppService = __decorate([\n    (0, common_1.Injectable)()\n], AppService);\nexports.AppService = AppService;\n\n\n//# sourceURL=webpack://turbos-nodejs-oracle/./src/modules/app/app.service.ts?");

/***/ }),

/***/ "./src/modules/config/config.module.ts":
/*!*********************************************!*\
  !*** ./src/modules/config/config.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ConfigModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst config_service_1 = __webpack_require__(/*! ./config.service */ \"./src/modules/config/config.service.ts\");\nlet ConfigModule = class ConfigModule {\n};\nConfigModule = __decorate([\n    (0, common_1.Module)({\n        providers: [{\n                provide: config_service_1.ConfigService,\n                useValue: new config_service_1.ConfigService((0, path_1.join)(process.cwd(), '.env')),\n            }],\n        exports: [config_service_1.ConfigService]\n    })\n], ConfigModule);\nexports.ConfigModule = ConfigModule;\n\n\n//# sourceURL=webpack://turbos-nodejs-oracle/./src/modules/config/config.module.ts?");

/***/ }),

/***/ "./src/modules/config/config.service.ts":
/*!**********************************************!*\
  !*** ./src/modules/config/config.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ConfigService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst dotenv_1 = __webpack_require__(/*! dotenv */ \"dotenv\");\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nlet ConfigService = class ConfigService {\n    constructor(filePath) {\n        this.envConfig = (0, dotenv_1.parse)((0, fs_1.readFileSync)(filePath));\n    }\n    get(key) {\n        return this.envConfig[key];\n    }\n};\nConfigService = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [String])\n], ConfigService);\nexports.ConfigService = ConfigService;\n\n\n//# sourceURL=webpack://turbos-nodejs-oracle/./src/modules/config/config.service.ts?");

/***/ }),

/***/ "./src/modules/tasks/aumTask.service.ts":
/*!**********************************************!*\
  !*** ./src/modules/tasks/aumTask.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AumTaskService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst sui_js_1 = __webpack_require__(/*! @mysten/sui.js */ \"@mysten/sui.js\");\nconst config_service_1 = __webpack_require__(/*! ../config/config.service */ \"./src/modules/config/config.service.ts\");\nconst shared = '0x1baef83150ab5b3ebd8f27b54bc21d7a42a7ecbc';\nconst packageObjectId = '0xb385af6057e8de63dfbdc64d9da12d94d5a41adb';\nlet AumTaskService = class AumTaskService {\n    constructor(configService) {\n        this.configService = configService;\n        this.shared = shared;\n        this.packageObjectId = packageObjectId;\n        this.init();\n    }\n    async init() {\n        if (this.configService.get('AUM_TASK') !== '1') {\n            return;\n        }\n        this.provider = new sui_js_1.JsonRpcProvider(sui_js_1.Network[this.configService.get('NETWORK')]);\n        const { signer, address } = await this.getKeypair();\n        this.signer = signer;\n        this.account = address;\n        const objects = await this.provider.getObjectsOwnedByAddress(address);\n        this.obj = objects.find((item) => item.type.indexOf(`${packageObjectId}::aum::AuthorityCap`) > -1);\n        if (!this.obj || !this.signer || !this.account)\n            return;\n        this.run();\n    }\n    async getKeypair() {\n        const keypair = sui_js_1.Ed25519Keypair.deriveKeypair(this.configService.get('AUM_PRIVACYKEY'));\n        let address = (keypair === null || keypair === void 0 ? void 0 : keypair.getPublicKey().toSuiAddress()) || null;\n        if (address && !address.startsWith('0x')) {\n            address = `0x${address}`;\n        }\n        if (!address)\n            return;\n        return { signer: new sui_js_1.RawSigner(keypair, this.provider), address };\n    }\n    async run() {\n        const start = Date.now();\n        try {\n            const moveCallTxn = await this.signer.executeMoveCall({\n                packageObjectId: packageObjectId,\n                module: 'aum',\n                function: 'update',\n                typeArguments: [],\n                arguments: [\n                    this.obj.objectId,\n                    shared,\n                    10000000000000,\n                    Date.now()\n                ],\n                gasBudget: 10000,\n            });\n            const transactionDigest = (0, sui_js_1.getTransactionDigest)(moveCallTxn);\n            const end = Date.now();\n            console.log(`Aum transaction: ${transactionDigest}; time: ${((end - start) / 1000).toFixed(0)}s`);\n        }\n        catch (err) {\n            console.log(`AumTask Erro: ${err.message}`);\n        }\n        this.run();\n    }\n};\nAumTaskService = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [config_service_1.ConfigService])\n], AumTaskService);\nexports.AumTaskService = AumTaskService;\n\n\n//# sourceURL=webpack://turbos-nodejs-oracle/./src/modules/tasks/aumTask.service.ts?");

/***/ }),

/***/ "./src/modules/tasks/priceBTCTask.service.ts":
/*!***************************************************!*\
  !*** ./src/modules/tasks/priceBTCTask.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PriceBTCTaskService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst sui_js_1 = __webpack_require__(/*! @mysten/sui.js */ \"@mysten/sui.js\");\nconst pyth_evm_js_1 = __webpack_require__(/*! @pythnetwork/pyth-evm-js */ \"@pythnetwork/pyth-evm-js\");\nconst config_service_1 = __webpack_require__(/*! ../config/config.service */ \"./src/modules/config/config.service.ts\");\nconst packageObjectId = '0x46991105f866d15a079f688f1cc121396be95963';\nconst objectId = '0x52ee4034ac647a276337949a6e10146b217a62a2';\nconst symbol = 'BTC';\nconst priceId = '0xf9c0172ba10dfa4d19088d94f5bf61d3b54d5bd7483a322a982e1373ee8ea31b';\nlet PriceBTCTaskService = class PriceBTCTaskService {\n    constructor(configService) {\n        this.configService = configService;\n        this.Timer = null;\n        this.priceFeed = [];\n        this.packageObjectId = packageObjectId;\n        this.objectId = objectId;\n        this.symbol = symbol;\n        this.priceId = priceId;\n        this.init();\n    }\n    async getPrice() {\n        const connection = new pyth_evm_js_1.EvmPriceServiceConnection(this.configService.get('PYTH_NETWORK'));\n        connection.subscribePriceFeedUpdates([this.priceId], (item) => {\n            this.priceFeed.push(item);\n        });\n    }\n    async init() {\n        if (this.configService.get('PRICE_TASK') !== '1') {\n            return;\n        }\n        this.getPrice();\n        this.provider = new sui_js_1.JsonRpcProvider(sui_js_1.Network[this.configService.get('NETWORK')]);\n        await this.getKeypair();\n        const objects = await this.provider.getObjectsOwnedByAddress(this.walletAddress);\n        this.obj = objects.find((item) => item.type.indexOf(`${this.packageObjectId}::price::AuthorityCap`) > -1);\n        if (!this.obj || !this.signer || !this.walletAddress)\n            return;\n        this.run();\n    }\n    async getKeypair() {\n        const keypair = sui_js_1.Ed25519Keypair.deriveKeypair(this.configService.get(`PRICE_${this.symbol}_PRIVACYKEY`));\n        let address = (keypair === null || keypair === void 0 ? void 0 : keypair.getPublicKey().toSuiAddress()) || null;\n        if (address && !address.startsWith('0x')) {\n            address = `0x${address}`;\n        }\n        if (!address)\n            return;\n        this.signer = new sui_js_1.RawSigner(keypair, this.provider);\n        this.walletAddress = address;\n    }\n    async run() {\n        clearTimeout(this.Timer);\n        const priceFeed = this.priceFeed.slice(0, 1);\n        if (!priceFeed[0]) {\n            this.Timer = setTimeout(() => {\n                this.run();\n            }, 3000);\n            return;\n        }\n        const price = Number(priceFeed[0].getPriceUnchecked().price + '0');\n        const ema_price = Number(priceFeed[0].getEmaPriceUnchecked().price + '0');\n        const publishTime = priceFeed[0].getPriceUnchecked().publishTime;\n        const start = Date.now();\n        try {\n            const moveCallTxn = await this.signer.executeMoveCall({\n                packageObjectId: packageObjectId,\n                module: 'price',\n                function: 'update_price_feed',\n                typeArguments: [],\n                arguments: [\n                    this.obj.objectId,\n                    this.objectId,\n                    price,\n                    ema_price,\n                    publishTime\n                ],\n                gasBudget: 10000,\n            });\n            const transactionDigest = (0, sui_js_1.getTransactionDigest)(moveCallTxn);\n            const end = Date.now();\n            console.log(`Price ${this.symbol} transaction: ${transactionDigest}; time: ${((end - start) / 1000).toFixed(0)}s`);\n            this.priceFeed.shift();\n        }\n        catch (err) {\n            console.log(`Price ${this.symbol} Error: ${err.message}`);\n        }\n        this.run();\n    }\n};\nPriceBTCTaskService = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [config_service_1.ConfigService])\n], PriceBTCTaskService);\nexports.PriceBTCTaskService = PriceBTCTaskService;\n\n\n//# sourceURL=webpack://turbos-nodejs-oracle/./src/modules/tasks/priceBTCTask.service.ts?");

/***/ }),

/***/ "./src/modules/tasks/priceETHTask.service.ts":
/*!***************************************************!*\
  !*** ./src/modules/tasks/priceETHTask.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PriceETHTaskService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst sui_js_1 = __webpack_require__(/*! @mysten/sui.js */ \"@mysten/sui.js\");\nconst pyth_evm_js_1 = __webpack_require__(/*! @pythnetwork/pyth-evm-js */ \"@pythnetwork/pyth-evm-js\");\nconst config_service_1 = __webpack_require__(/*! ../config/config.service */ \"./src/modules/config/config.service.ts\");\nconst packageObjectId = '0x745d1d067d9a0503dd61aaa481e00dc26a22dae9';\nconst objectId = '0x507dc90de342da4599e0be7db2c76f96eeb5e060';\nconst symbol = 'ETH';\nconst priceId = '0xca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6';\nlet PriceETHTaskService = class PriceETHTaskService {\n    constructor(configService) {\n        this.configService = configService;\n        this.Timer = null;\n        this.priceFeed = [];\n        this.packageObjectId = packageObjectId;\n        this.objectId = objectId;\n        this.symbol = symbol;\n        this.priceId = priceId;\n        this.init();\n    }\n    async getPrice() {\n        const connection = new pyth_evm_js_1.EvmPriceServiceConnection(this.configService.get('PYTH_NETWORK'));\n        connection.subscribePriceFeedUpdates([this.priceId], (item) => {\n            this.priceFeed.push(item);\n        });\n    }\n    async init() {\n        if (this.configService.get('PRICE_TASK') !== '1') {\n            return;\n        }\n        this.getPrice();\n        this.provider = new sui_js_1.JsonRpcProvider(sui_js_1.Network[this.configService.get('NETWORK')]);\n        await this.getKeypair();\n        const objects = await this.provider.getObjectsOwnedByAddress(this.walletAddress);\n        this.obj = objects.find((item) => item.type.indexOf(`${this.packageObjectId}::price::AuthorityCap`) > -1);\n        if (!this.obj || !this.signer || !this.walletAddress)\n            return;\n        this.run();\n    }\n    async getKeypair() {\n        const keypair = sui_js_1.Ed25519Keypair.deriveKeypair(this.configService.get(`PRICE_${this.symbol}_PRIVACYKEY`));\n        let address = (keypair === null || keypair === void 0 ? void 0 : keypair.getPublicKey().toSuiAddress()) || null;\n        if (address && !address.startsWith('0x')) {\n            address = `0x${address}`;\n        }\n        if (!address)\n            return;\n        this.signer = new sui_js_1.RawSigner(keypair, this.provider);\n        this.walletAddress = address;\n    }\n    async run() {\n        clearTimeout(this.Timer);\n        const priceFeed = this.priceFeed.slice(0, 1);\n        if (!priceFeed[0]) {\n            this.Timer = setTimeout(() => {\n                this.run();\n            }, 3000);\n            return;\n        }\n        const price = Number(priceFeed[0].getPriceUnchecked().price + '0');\n        const ema_price = Number(priceFeed[0].getEmaPriceUnchecked().price + '0');\n        const publishTime = priceFeed[0].getPriceUnchecked().publishTime;\n        const start = Date.now();\n        try {\n            const moveCallTxn = await this.signer.executeMoveCall({\n                packageObjectId: packageObjectId,\n                module: 'price',\n                function: 'update_price_feed',\n                typeArguments: [],\n                arguments: [\n                    this.obj.objectId,\n                    this.objectId,\n                    price,\n                    ema_price,\n                    publishTime\n                ],\n                gasBudget: 10000,\n            });\n            const transactionDigest = (0, sui_js_1.getTransactionDigest)(moveCallTxn);\n            const end = Date.now();\n            console.log(`Price ${this.symbol} transaction: ${transactionDigest}; time: ${((end - start) / 1000).toFixed(0)}s`);\n            this.priceFeed.shift();\n        }\n        catch (err) {\n            console.log(`Price ${this.symbol} Error: ${err.message}`);\n        }\n        this.run();\n    }\n};\nPriceETHTaskService = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [config_service_1.ConfigService])\n], PriceETHTaskService);\nexports.PriceETHTaskService = PriceETHTaskService;\n\n\n//# sourceURL=webpack://turbos-nodejs-oracle/./src/modules/tasks/priceETHTask.service.ts?");

/***/ }),

/***/ "./src/modules/tasks/priceUSDCTask.service.ts":
/*!****************************************************!*\
  !*** ./src/modules/tasks/priceUSDCTask.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PriceUSDCTaskService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst sui_js_1 = __webpack_require__(/*! @mysten/sui.js */ \"@mysten/sui.js\");\nconst pyth_evm_js_1 = __webpack_require__(/*! @pythnetwork/pyth-evm-js */ \"@pythnetwork/pyth-evm-js\");\nconst config_service_1 = __webpack_require__(/*! ../config/config.service */ \"./src/modules/config/config.service.ts\");\nconst packageObjectId = '0xfc20199a519b5b551e82daef04369ee0d3e91e25';\nconst objectId = '0xe1d93a1e7a20abff5e9b28ada5b1d52f1d5c32cb';\nconst symbol = 'USDC';\nconst priceId = '0x41f3625971ca2ed2263e78573fe5ce23e13d2558ed3f2e47ab0f84fb9e7ae722';\nlet PriceUSDCTaskService = class PriceUSDCTaskService {\n    constructor(configService) {\n        this.configService = configService;\n        this.Timer = null;\n        this.priceFeed = [];\n        this.packageObjectId = packageObjectId;\n        this.objectId = objectId;\n        this.symbol = symbol;\n        this.priceId = priceId;\n        this.init();\n    }\n    async getPrice() {\n        const connection = new pyth_evm_js_1.EvmPriceServiceConnection(this.configService.get('PYTH_NETWORK'));\n        connection.subscribePriceFeedUpdates([this.priceId], (item) => {\n            this.priceFeed.push(item);\n        });\n    }\n    async init() {\n        if (this.configService.get('PRICE_TASK') !== '1') {\n            return;\n        }\n        this.getPrice();\n        this.provider = new sui_js_1.JsonRpcProvider(sui_js_1.Network[this.configService.get('NETWORK')]);\n        await this.getKeypair();\n        const objects = await this.provider.getObjectsOwnedByAddress(this.walletAddress);\n        this.obj = objects.find((item) => item.type.indexOf(`${this.packageObjectId}::price::AuthorityCap`) > -1);\n        if (!this.obj || !this.signer || !this.walletAddress)\n            return;\n        this.run();\n    }\n    async getKeypair() {\n        const keypair = sui_js_1.Ed25519Keypair.deriveKeypair(this.configService.get(`PRICE_${this.symbol}_PRIVACYKEY`));\n        let address = (keypair === null || keypair === void 0 ? void 0 : keypair.getPublicKey().toSuiAddress()) || null;\n        if (address && !address.startsWith('0x')) {\n            address = `0x${address}`;\n        }\n        if (!address)\n            return;\n        this.signer = new sui_js_1.RawSigner(keypair, this.provider);\n        this.walletAddress = address;\n    }\n    async run() {\n        clearTimeout(this.Timer);\n        const priceFeed = this.priceFeed.slice(0, 1);\n        if (!priceFeed[0]) {\n            this.Timer = setTimeout(() => {\n                this.run();\n            }, 3000);\n            return;\n        }\n        const price = Number(priceFeed[0].getPriceUnchecked().price + '0');\n        const ema_price = Number(priceFeed[0].getEmaPriceUnchecked().price + '0');\n        const publishTime = priceFeed[0].getPriceUnchecked().publishTime;\n        const start = Date.now();\n        try {\n            const moveCallTxn = await this.signer.executeMoveCall({\n                packageObjectId: packageObjectId,\n                module: 'price',\n                function: 'update_price_feed',\n                typeArguments: [],\n                arguments: [\n                    this.obj.objectId,\n                    this.objectId,\n                    price,\n                    ema_price,\n                    publishTime\n                ],\n                gasBudget: 10000,\n            });\n            const transactionDigest = (0, sui_js_1.getTransactionDigest)(moveCallTxn);\n            const end = Date.now();\n            console.log(`Price ${this.symbol} transaction: ${transactionDigest}; time: ${((end - start) / 1000).toFixed(0)}s`);\n            this.priceFeed.shift();\n        }\n        catch (err) {\n            console.log(`Price ${this.symbol} Error: ${err.message}`);\n        }\n        this.run();\n    }\n};\nPriceUSDCTaskService = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [config_service_1.ConfigService])\n], PriceUSDCTaskService);\nexports.PriceUSDCTaskService = PriceUSDCTaskService;\n\n\n//# sourceURL=webpack://turbos-nodejs-oracle/./src/modules/tasks/priceUSDCTask.service.ts?");

/***/ }),

/***/ "./src/modules/tasks/tasks.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/tasks/tasks.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TasksModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst schedule_1 = __webpack_require__(/*! @nestjs/schedule */ \"@nestjs/schedule\");\nconst config_module_1 = __webpack_require__(/*! ../config/config.module */ \"./src/modules/config/config.module.ts\");\nconst aumTask_service_1 = __webpack_require__(/*! ./aumTask.service */ \"./src/modules/tasks/aumTask.service.ts\");\nconst priceBTCTask_service_1 = __webpack_require__(/*! ./priceBTCTask.service */ \"./src/modules/tasks/priceBTCTask.service.ts\");\nconst priceETHTask_service_1 = __webpack_require__(/*! ./priceETHTask.service */ \"./src/modules/tasks/priceETHTask.service.ts\");\nconst priceUSDCTask_service_1 = __webpack_require__(/*! ./priceUSDCTask.service */ \"./src/modules/tasks/priceUSDCTask.service.ts\");\nconst tasks_service_1 = __webpack_require__(/*! ./tasks.service */ \"./src/modules/tasks/tasks.service.ts\");\nconst timeTask_service_1 = __webpack_require__(/*! ./timeTask.service */ \"./src/modules/tasks/timeTask.service.ts\");\nlet TasksModule = class TasksModule {\n};\nTasksModule = __decorate([\n    (0, common_1.Module)({\n        imports: [\n            schedule_1.ScheduleModule.forRoot(),\n            config_module_1.ConfigModule,\n        ],\n        providers: [\n            tasks_service_1.TasksService,\n            timeTask_service_1.TimeTaskService,\n            aumTask_service_1.AumTaskService,\n            priceBTCTask_service_1.PriceBTCTaskService,\n            priceETHTask_service_1.PriceETHTaskService,\n            priceUSDCTask_service_1.PriceUSDCTaskService\n        ]\n    })\n], TasksModule);\nexports.TasksModule = TasksModule;\n\n\n//# sourceURL=webpack://turbos-nodejs-oracle/./src/modules/tasks/tasks.module.ts?");

/***/ }),

/***/ "./src/modules/tasks/tasks.service.ts":
/*!********************************************!*\
  !*** ./src/modules/tasks/tasks.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TasksService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst config_service_1 = __webpack_require__(/*! ../config/config.service */ \"./src/modules/config/config.service.ts\");\nlet TasksService = class TasksService {\n    constructor(configService) {\n        this.configService = configService;\n    }\n};\nTasksService = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [config_service_1.ConfigService])\n], TasksService);\nexports.TasksService = TasksService;\n\n\n//# sourceURL=webpack://turbos-nodejs-oracle/./src/modules/tasks/tasks.service.ts?");

/***/ }),

/***/ "./src/modules/tasks/timeTask.service.ts":
/*!***********************************************!*\
  !*** ./src/modules/tasks/timeTask.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TimeTaskService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst sui_js_1 = __webpack_require__(/*! @mysten/sui.js */ \"@mysten/sui.js\");\nconst config_service_1 = __webpack_require__(/*! ../config/config.service */ \"./src/modules/config/config.service.ts\");\nconst shared = '0x97fcd0a08770552f456c8c7d8b89d3520b644d34';\nconst packageObjectId = '0x2046307f7787ad605261b3b82057daa5fe5884ba';\nlet TimeTaskService = class TimeTaskService {\n    constructor(configService) {\n        this.configService = configService;\n        this.shared = shared;\n        this.packageObjectId = packageObjectId;\n        this.init();\n    }\n    async init() {\n        if (this.configService.get('TIME_TASK') !== '1') {\n            return;\n        }\n        this.provider = new sui_js_1.JsonRpcProvider(sui_js_1.Network[this.configService.get('NETWORK')]);\n        const { signer, address } = await this.getKeypair();\n        this.signer = signer;\n        this.account = address;\n        const objects = await this.provider.getObjectsOwnedByAddress(address);\n        this.obj = objects.find((item) => item.type.indexOf(`${packageObjectId}::time::AuthorityCap`) > -1);\n        if (!this.obj || !this.signer || !this.account)\n            return;\n        this.run();\n    }\n    async getKeypair() {\n        const keypair = sui_js_1.Ed25519Keypair.deriveKeypair(this.configService.get('TIME_PRIVACYKEY'));\n        let address = (keypair === null || keypair === void 0 ? void 0 : keypair.getPublicKey().toSuiAddress()) || null;\n        if (address && !address.startsWith('0x')) {\n            address = `0x${address}`;\n        }\n        if (!address)\n            return;\n        return { signer: new sui_js_1.RawSigner(keypair, this.provider), address };\n    }\n    async run() {\n        const start = Date.now();\n        try {\n            const moveCallTxn = await this.signer.executeMoveCall({\n                packageObjectId: packageObjectId,\n                module: 'time',\n                function: 'stamp',\n                typeArguments: [],\n                arguments: [\n                    this.obj.objectId,\n                    shared,\n                    Date.now()\n                ],\n                gasBudget: 10000,\n            });\n            const transactionDigest = (0, sui_js_1.getTransactionDigest)(moveCallTxn);\n            const end = Date.now();\n            console.log(`time transaction: ${transactionDigest}; time: ${((end - start) / 1000).toFixed(0)}s`);\n        }\n        catch (err) {\n            console.log(`TimeTask Error : ${err.message}`);\n        }\n        this.run();\n    }\n};\nTimeTaskService = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [config_service_1.ConfigService])\n], TimeTaskService);\nexports.TimeTaskService = TimeTaskService;\n\n\n//# sourceURL=webpack://turbos-nodejs-oracle/./src/modules/tasks/timeTask.service.ts?");

/***/ }),

/***/ "@mysten/sui.js":
/*!*********************************!*\
  !*** external "@mysten/sui.js" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@mysten/sui.js");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/schedule":
/*!***********************************!*\
  !*** external "@nestjs/schedule" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "@pythnetwork/pyth-evm-js":
/*!*******************************************!*\
  !*** external "@pythnetwork/pyth-evm-js" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@pythnetwork/pyth-evm-js");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;