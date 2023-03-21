"use strict";
(() => {
var exports = {};
exports.id = 475;
exports.ids = [475];
exports.modules = {

/***/ 5253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "stripe"
const external_stripe_namespaceObject = require("stripe");
var external_stripe_default = /*#__PURE__*/__webpack_require__.n(external_stripe_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/stripe.js

const stripe = new (external_stripe_default())("sk_test_51MjgS0SGTKp4VhON3mFL2lXuITKr9AuaHaSFUhHn6Riwmj2egHXIQvW5DIlQ890ZtJEk5oZ94ep8YsOtJH8AcGa300RQQ77qBq");
async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const params = {
                submit_type: "pay",
                mode: "payment",
                payment_method_types: [
                    "card"
                ],
                billing_address_collection: "auto",
                shipping_options: [
                    {
                        shipping_rate: "shr_1MjhgZSGTKp4VhONO5hRNfh4"
                    },
                    {
                        shipping_rate: "shr_1MjhieSGTKp4VhONLP5rop0S"
                    }
                ],
                line_items: req.body.map((item)=>{
                    const img = item.image[0].asset._ref;
                    const newImage = img.replace("image-", "http://cdn.sanity.io/images/f8z5s3ve/production/").replace("-webp", ".webp");
                    return {
                        price_data: {
                            currency: "inr",
                            product_data: {
                                name: item.name,
                                images: [
                                    newImage
                                ]
                            },
                            unit_amount: item.price * 100
                        },
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1
                        },
                        quantity: item.quantity
                    };
                }),
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/canceled`
            };
            const session = await stripe.checkout.sessions.create(params);
            res.status(200).json(session);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5253));
module.exports = __webpack_exports__;

})();