'use strict';

var ursa = require('ursa');
var request = require('request');
var keys = require('./keys.json');

var utils = {

    api_url: 'https://api.pagar.me/1/transactions/',

    /*
        TODO: armazenar os dados da chave pública, pois aparentemente é o
        mesmo a cada requisição.
    */
    getKeyForTransaction: function(params, callback) {
        var key_url = utils.api_url + 'card_hash_key';

        request.get({ url: key_url, form: params }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var body_json = JSON.parse(body);
                var card_hash = utils.generateCardHash(body_json, params);
                callback(card_hash);
            } else {
                callback(null);
            }
        });
    },

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
    },

    validateCreditCardData: function(data) {
        // TODO: validar se cartão é válido e etc
        data.payment_method = "credit_card";
        data.api_key = keys.api_key;
        return data;
    },

    validateBillData: function(data) {
        // TODO: validar informações?
        data.payment_method = "boleto";
        data.api_key = keys.api_key;
        return data;
    },

    validateSubscriptionData: function(data) {
        // must have:
        // plan_id
        // customer[email]
        // api_key
        // card_hash

        if(!data.plan_id) throw new Error("Esqueceu o id do plano");

        data.api_key = keys.api_key;
        return data;
    },

    validatePlanData: function(data) {
        /*
        MUST HAVE:

        'api_key=ak_test_grXijQ4GicOa2BLGZrDRTR5qNQxJW0' \
        'amount=4990' \
        'days=30' \
        'name=Plano Mensal'
        */

        data.api_key = keys.api_key;
        return data;
    }
};

module.exports = utils;