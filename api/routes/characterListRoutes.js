'use strict';
module.exports = function(app) {
var characterList = require('../controllers/characterListController');

app.route('/v1/characters')
.get(characterList.list_all_characters)
.post(characterList.create_a_character)

app.route('/v1/characters/:characterId')
.get(characterList.get_a_character)
.put(characterList.update_a_character)
.delete(characterList.delete_a_character);
};



