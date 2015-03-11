'use strict';

var utils = {
    url: 'http://localhost:3000/',

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

    validCreditCardResponse : {
        object: "transaction",
        status: "paid",
        refuse_reason: null,
        status_reason: "acquirer",
        acquirer_response_code: "00",
        acquirer_name: "development",
        authorization_code: "604653",
        soft_descriptor: null,
        tid: 1426077977741,
        nsu: 1426077977741,
        date_created: "2015-03-11T12:46:17.000Z",
        date_updated: "2015-03-11T12:46:17.000Z",
        amount: 4990,
        installments: 1,
        id: 185827,
        cost: 124.85,
        card_holder_name: "Paulo Luan Mariano Silva",
        card_last_digits: "0007",
        card_first_digits: "445700",
        card_brand: "visa",
        postback_url: null,
        payment_method: "credit_card",
        antifraud_score: null,
        boleto_url: null,
        boleto_barcode: null,
        boleto_expiration_date: null,
        referer: "api_key",
        ip: "189.55.109.175",
        subscription_id: null,
        phone: null,
        address: null,
        customer: null,
        card: {
            object: "card",
            id: "card_ci74q09sx002nqs16xves7ydi",
            date_created: "2015-03-11T12:46:17.000Z",
            date_updated: "2015-03-11T12:46:18.000Z",
            brand: "visa",
            holder_name: "Paulo Luan Mariano Silva",
            first_digits: "445700",
            last_digits: "0007",
            fingerprint: "pJuL+iaAtw1N",
            valid: true
        },
        metadata: {}
    },

    validBoletoResponse:
    {
        object: "transaction",
        status: "waiting_payment",
        refuse_reason: null,
        status_reason: "acquirer",
        acquirer_response_code: null,
        acquirer_name: "development",
        authorization_code: null,
        soft_descriptor: null,
        tid: null,
        nsu: null,
        date_created: "2015-03-11T16:01:41.000Z",
        date_updated: "2015-03-11T16:01:41.000Z",
        amount: 4990,
        installments: 1,
        id: 185905,
        cost: 0,
        card_holder_name: null,
        card_last_digits: null,
        card_first_digits: null,
        card_brand: null,
        postback_url: null,
        payment_method: "boleto",
        antifraud_score: null,
        boleto_url: "https://pagar.me",
        boleto_barcode: "1234 5678",
        boleto_expiration_date: "2015-03-18T03:00:00.025Z",
        referer: "api_key",
        ip: "189.55.109.175",
        subscription_id: null,
        phone: null,
        address: null,
        customer: null,
        card: null,
        metadata: {}
    },

    api_key: "ak_test_F6Fp2q3wwysq7ndfav4EIajYv8XHuR",
    cripto: "ek_test_lIJEfPcIBJMKCYn6o6uH6Sm3U4cs67"
};

module.exports = utils;