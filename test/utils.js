'use strict';

var utils = {
    url: 'http://localhost:3000',

    validCreditCard: {
        card_cvv: '901',
        card_number: '4457000300000007',
        issuing_network: "Visa",
        amount: 4990,
        card_holder_name: 'Paulo Luan Mariano Silva',
        card_expiration_date: '0120'
    },

    refuseCreditCard: {
        card_cvv: '609',
        card_number: '371382403151296',
        issuing_network: "American Express",
        amount: 13880,
        card_holder_name: 'Paulo Luan Mariano Silva',
        card_expiration_date: '0120'
    },

    api_key: "ak_test_F6Fp2q3wwysq7ndfav4EIajYv8XHuR",
    cripto: "ek_test_lIJEfPcIBJMKCYn6o6uH6Sm3U4cs67"
};

module.exports = utils;