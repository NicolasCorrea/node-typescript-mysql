"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = __importDefault(require("../db/db"));
const router = express_1.Router();
router.get("/heroes", (req, res) => {
    const query = `SELECT * FROM heroes`;
    db_1.default.ejecutarQuery(query, (err, heroes) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        else {
            res.json({
                ok: true,
                heroes
            });
        }
    });
});
router.get('/heroes/:id', (req, res) => {
    const id = req.params.id;
    const escapeId = db_1.default.instance.cnn.escape(id);
    const query = `SELECT * FROM heroes where id=${escapeId}`;
    db_1.default.ejecutarQuery(query, (err, heroe) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        else {
            res.json({
                ok: true,
                heroe: heroe[0]
            });
        }
    });
});
exports.default = router;
