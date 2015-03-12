'use strict';

var utils = {
    url: 'http://localhost:3000/',

    validCreditCard: {
        postback_url: "http://SeMeuSiteExistisse.com.br/transaction/postback",

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

    fraudPerson: {
        name:"John Appleseed",
        document_number:11111111111, // simula fraude quando o documento é 11111111111
        email:"jappleseed@apple.com",

        address: {
            street:"Av. Brigadeiro Faria Lima",
            neighborhood:"Jardim Paulistano",
            zipcode: "01452000",
            street_number:2941,
            complementary:"8º andar"
        },

        phone: {
            ddd:11,
            number:30713261
        }
    },

    planData: {
        amount: 5990,
        days: 30,
        name: 'Plano Mensal'
    },

    subscribeTest: {
        card_cvv: '901',
        card_number: '4457000300000007',
        issuing_network: "Visa",
        card_holder_name: 'Paulo Luan Mariano Silva',
        card_expiration_date: '0120',

        customer: {
            name:"Paulo Luan Mariano Silva",
            document_number: "12345678909",
            email:"teste@teste.com",

            address: {
                street:"Av. Brigadeiro Faria Lima",
                neighborhood:"Jardim Paulistano",
                zipcode: "01452000",
                street_number:2941,
                complementary:"8º andar"
            },

            phone: {
                ddd:12,
                number:991146489
            },

        },

        postback_url: "http://SeMeuSiteExistisse.com.br/plan/subscriptions/postback"
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

    refundResponse: {
        object: "transaction",
        status: "refunded",
        refuse_reason: null,
        status_reason: "acquirer",
        acquirer_response_code: "00",
        acquirer_name: "development",
        authorization_code: "604653",
        soft_descriptor: null,
        tid: "1426077977741",
        nsu: "1426077977741",
        date_created: "2015-03-11T12:46:17.000Z",
        date_updated: "2015-03-11T17:22:06.000Z",
        amount: 4990,
        installments: 1,
        id: 185827,
        cost: 0,
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

    createPlanResponse: {
        object: "plan",
        id: 14288,
        amount: 5990,
        days: 30,
        name: "Plano Mensal",
        trial_days: 0,
        date_created: "2015-03-11T20:18:45.000Z",
        payment_methods: [
            "boleto",
            "credit_card"
        ],
        color: null,
        charges: null,
        installments: 1
    },

    createSubscriptionResponse: {
        object: "subscription",
        plan: {
            object: "plan",
            id: 14302,
            amount: 5990,
            days: 30,
            name: "Plano Mensal",
            trial_days: 0,
            date_created: "2015-03-12T11:31:35.000Z",
            payment_methods: [
                "boleto",
                "credit_card"
            ],
            color: null,
            charges: null,
            installments: 1
        },
        id: 15095,
        current_transaction: {
            object: "transaction",
            status: "paid",
            refuse_reason: null,
            status_reason: "acquirer",
            acquirer_response_code: "00",
            acquirer_name: "development",
            authorization_code: "636200",
            soft_descriptor: null,
            tid: "1426159898665",
            nsu: "1426159898665",
            date_created: "2015-03-12T11:31:38.000Z",
            date_updated: "2015-03-12T11:31:39.000Z",
            amount: 5990,
            installments: 1,
            id: 186137,
            cost: 139.85,
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
            subscription_id: 15095,
            metadata: {}
        },
        postback_url: "http://SeMeuSiteExistisse.com.br/plan/subscriptions/postback",
        payment_method: "credit_card",
        card_brand: "visa",
        card_last_digits: "0007",
        current_period_start: "2015-03-12T11:31:38.462Z",
        current_period_end: "2015-04-11T11:31:38.462Z",
        charges: 0,
        status: "paid",
        date_created: "2015-03-12T11:31:38.000Z",
        phone: null,
        address: null,
        customer: {
            object: "customer",
            document_number: null,
            document_type: "cpf",
            name: null,
            email: "pauloluan.inova@gmail.com",
            born_at: null,
            gender: null,
            date_created: "2015-03-11T20:39:54.000Z",
            id: 14538
        },
        card: {
            object: "card",
            id: "card_ci756xccb001l5m16wwvxeywj",
            date_created: "2015-03-11T20:39:54.000Z",
            date_updated: "2015-03-11T20:39:54.000Z",
            brand: "visa",
            holder_name: "Paulo Luan Mariano Silva",
            first_digits: "445700",
            last_digits: "0007",
            fingerprint: "pJuL+iaAtw1N",
            valid: true
        },
        metadata: null
    },

    api_key: "ak_test_F6Fp2q3wwysq7ndfav4EIajYv8XHuR",
    cripto: "ek_test_lIJEfPcIBJMKCYn6o6uH6Sm3U4cs67"
};

module.exports = utils;