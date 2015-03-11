'use strict';

var ursa = require('ursa');

var utils = {

    /*
        Segue os passos descritos na documentação (https://pagar.me/docs_legacy/restful-api/card-hash/)
        para a geração do card_hash

        @param Object data
            Contém o id da transação e o a chave pública

        @param Object cardInformations
            contém as informações do dono do cartão de crédito.

        @return String card_hash
            o hash do cartão utilizado para realizar a transação.
     */
    generateCardHash: function (data, cardInformations) {
        var ursaObj = ursa.createPublicKey(new Buffer(data.public_key));
        var card_data = "";
        var card_hash;

        var cardObj = {
            card_number: cardInformations.card_number,
            card_holder_name: cardInformations.card_holder_name,
            card_expiration_date: cardInformations.card_expiration_date,
            card_cvv: cardInformations.card_cvv
        };

        for (var key in Object.keys(cardObj)) {
            card_data += key + "=" + cardObj[key];
        }

        var encoded = ursaObj.encrypt(new Buffer(card_data, 'utf8'), 'utf8', 'base64', ursa.RSA_PKCS1_PADDING);
        card_hash = data.id + '_' + encoded;

        return card_hash;
    },

    /*
        Converte uma string comum em base64
    */
    stringToBase64: function (str) {
        var buffer;

        if (str instanceof Buffer) {
            buffer = str;
        } else {
            buffer = new Buffer(str.toString(), 'binary');
        }

        return buffer.toString('base64');
    }
};

module.exports = utils;