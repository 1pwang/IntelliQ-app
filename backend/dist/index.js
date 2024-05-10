"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = 3000;
const url = 'mongodb+srv://paulinewang222:nfzaC54scBtUqt30@cluster0.mywzxrj.mongodb.net/tasklist?retryWrites=true&w=majority';
app.use(express_1.default.json());
mongoose_1.default.connect(url)
    .then(result => console.log('Connected'))
    .catch(err => console.error('Error connecting to db', err));
app.listen(port, () => {
    console.log('Listening on', port);
});
