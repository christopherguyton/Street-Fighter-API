'use strict';

var mongoose = require('mongoose'),
Character = require('..//models/characterListModels')
mongoose.model('Characters')

exports.list_all_characters = function (req, res) {
    Character.find({}, function (error, character) {
        if (error) {
            res.send(error);
        } else {
        res.json(character)
        }
    })
}

exports.create_a_character = function (req, res) {
    var new_character = new Character(req.body);
    new_character.save(function (error, character) {
        if (error) {
            res.send(error);
        }
        res.json(character);
    });
}

exports.get_a_character = function (req, res) {
    Character.findById(req.params.characterId, function (error, character) {
        if (error) {
            res.send(error);
        }
        res.json(character);
    });
}

exports.update_a_character = function (req, res) {
    Character.findByIdAndUpdate({
        _id: req.params.characterId
    }, req.body, {
        new: true
    }, function (error, character) {
        if (error) {
            res.send(error);
        }
        res.json(character);
    });
}

exports.delete_a_character = function (req, res) {
    Character.deleteOne({
        _id: req.params.characterId
    }, function (error, character) {
        if (error) {
            res.send(error);
        }
        if (!error) {
            res.json('Character Successfully Deleted');
        }
    })
}