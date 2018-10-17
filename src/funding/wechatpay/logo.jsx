/* @flow */
/** @jsx jsxToHTML */

import { jsxToHTML, JsxHTMLNode } from 'belter/src';

import { SVGLogo, type LogoColorMap } from '../common';
import { LOGO_COLOR, BUTTON_LOGO } from '../../constants';

const WECHATPAY_LOGO_COLORS : LogoColorMap = {
    [ LOGO_COLOR.BLACK ]: {
        primary:   '#1AAD19',
        secondary: '#4D4D4D'
    }
};

export function WechatpayLogo({ logoColor, nonce } : { logoColor : $Values<typeof LOGO_COLOR>, nonce : string }) : JsxHTMLNode {

    if (!WECHATPAY_LOGO_COLORS[logoColor]) {
        throw new Error(`No ${ logoColor } wechatpay logo available`);
    }

    const { primary, secondary } = WECHATPAY_LOGO_COLORS[logoColor];

    return (
        <SVGLogo
            nonce={ nonce }
            name={ BUTTON_LOGO.WECHATPAY }
            logoColor={ logoColor }
            render={ () => {
                return (
                    <svg width="81px" height="15px" viewBox="0 0 81 15" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-100.000000, -159.000000)">
                                <g transform="translate(100.000000, 159.000000)">
                                    <path d="M6.14570881,9.41936066 C6.06938663,9.45772131 5.98346261,9.48009836 5.89212219,9.48009836 C5.68112827,9.48009836 5.49746261,9.36378689 5.40095198,9.19214754 L5.36402188,9.1114918 L3.82600669,5.74042623 C3.80926505,5.70354098 3.79892462,5.66222951 3.79892462,5.62190164 C3.79892462,5.4664918 3.92497933,5.34059016 4.08057812,5.34059016 C4.14385167,5.34059016 4.20220122,5.3612459 4.24922553,5.39640984 L6.06421641,6.68714754 C6.19691854,6.77370492 6.35522553,6.82460656 6.52559635,6.82460656 C6.6272772,6.82460656 6.72428024,6.80567213 6.81438967,6.77272131 L15.3506571,2.97821311 C13.8205204,1.17698361 11.3006571,9.83606557e-05 8.4489155,9.83606557e-05 C3.78267538,9.83606557e-05 4.92401216e-05,3.14837705 4.92401216e-05,7.03239344 C4.92401216e-05,9.15157377 1.13823465,11.0587869 2.91924985,12.3480492 C3.0622924,12.4498525 3.15584863,12.6173115 3.15584863,12.8061639 C3.15584863,12.868623 3.1425538,12.925918 3.12605836,12.9854262 C2.98400061,13.5155902 2.75601884,14.3644426 2.74543222,14.4040328 C2.72770578,14.4706721 2.70013131,14.5400164 2.70013131,14.6096066 C2.70013131,14.7650164 2.82618602,14.890918 2.9817848,14.890918 C3.04284255,14.890918 3.09282128,14.8682951 3.1445234,14.838541 L4.99422857,13.7720656 C5.13333191,13.6916557 5.28055988,13.6422295 5.44280608,13.6422295 C5.52922249,13.6422295 5.6124383,13.6552623 5.69122249,13.6793607 C6.55415562,13.9272295 7.48504012,14.0651803 8.4489155,14.0651803 C13.1151556,14.0651803 16.898028,10.9164098 16.898028,7.03239344 C16.898028,5.856 16.5491617,4.74821311 15.9356298,3.77370492 L6.20750517,9.38370492 L6.14570881,9.41936066 Z" fill={ primary } />
                                    <path d="M29.5311474,7.78413934 C29.4695973,8.00446721 29.4090319,8.21864754 29.3499438,8.42741803 C29.1195,9.24086066 28.9178617,9.9529918 28.7610319,10.6688115 C28.6071565,9.81012295 28.3429833,8.80143443 28.0625608,7.75807377 L26.7178131,2.69422131 L26.0208191,2.69422131 L24.5423845,7.79594262 C24.2043511,8.89659836 23.9096489,9.88020492 23.7515881,10.6766803 C23.601652,9.98348361 23.388196,9.1429918 23.1634149,8.2575 L21.7290502,2.69422131 L20.9618891,2.69422131 L23.3652994,11.7837295 L24.0485061,11.7837295 L25.5941535,6.57528689 C25.9632082,5.35881148 26.2020228,4.52004098 26.3514666,3.76856557 C26.4819529,4.57340164 26.6959012,5.42446721 27.009807,6.57331967 L28.3676033,11.7837295 L29.0643511,11.7837295 L31.7917614,2.69422131 L31.0236155,2.69422131 L29.5311474,7.78413934 Z" fill={ secondary } />
                                    <path d="M34.628214,5.77482787 C35.1580377,5.77482787 35.5859343,5.93638525 35.9000863,6.25507377 C36.4119374,6.77368033 36.4798888,7.54482787 36.481366,7.90384426 L32.5428948,7.90384426 C32.6832292,6.90769672 33.3071015,5.77482787 34.628214,5.77482787 Z M36.5818158,10.9372869 C36.2093143,11.109418 35.7368553,11.2616311 34.8950954,11.2616311 C33.3940103,11.2616311 32.5266456,10.2630246 32.5089191,8.51958197 L37.220214,8.51958197 L37.2295696,8.47679508 C37.2576365,8.35089344 37.2576365,8.2542541 37.2576365,8.07843443 C37.2576365,7.83695902 37.2236608,6.99228689 36.7878857,6.2602377 C36.3425088,5.51195902 35.6428067,5.13277869 34.7082292,5.13277869 C32.9520802,5.13277869 31.7722869,6.54671311 31.7722869,8.65163115 C31.7722869,10.6048279 32.9949191,11.9172049 34.814834,11.9172049 C35.9744389,11.9172049 36.6283477,11.6233525 36.8558371,11.4972049 L36.8935058,11.4763033 L36.5818158,10.9372869 Z" fill={ secondary } />
                                    <path d="M42.8043392,11.2616066 C40.4580474,11.2616066 39.057166,9.7827541 39.057166,7.30578689 C39.057166,4.73709836 40.4979319,3.20340984 42.9111903,3.20340984 C43.5806097,3.20340984 44.2094061,3.32931148 44.6939289,3.55677049 L45.0334395,2.96955738 L45.0051264,2.95406557 C44.831555,2.85865574 44.1660748,2.54783607 42.8978954,2.54783607 C40.1362632,2.54783607 38.2808954,4.45455738 38.2808954,7.2925082 C38.2808954,10.7058689 40.6028134,11.9171803 42.5908833,11.9171803 C43.7216827,11.9171803 44.5991416,11.6801311 45.0432875,11.4583279 L45.077017,11.4413607 L44.751786,10.8787377 C44.2308255,11.1184918 43.5099502,11.2616066 42.8043392,11.2616066" fill={ secondary } />
                                    <path d="M49.1547392,5.13265574 C48.6780948,5.13265574 48.2204079,5.26445902 47.8336267,5.51281967 C47.5150432,5.69478689 47.2255112,5.98347541 47.0216571,6.31839344 L47.0216571,2.5477377 L46.2719763,2.5477377 L46.2719763,11.7838033 L47.0216571,11.7838033 L47.0216571,7.82527869 C47.0216571,7.56634426 47.033721,7.39888525 47.0984717,7.20413115 C47.3929277,6.37814754 48.1669824,5.8015082 48.981414,5.8015082 C50.4657574,5.8015082 50.6875842,7.14462295 50.6875842,7.94527869 L50.6875842,11.7838033 L51.437265,11.7838033 L51.437265,7.87863934 C51.437265,5.26519672 49.5358578,5.13265574 49.1547392,5.13265574" fill={ secondary } />
                                    <path d="M61.0768805,11.2239836 C60.9456556,11.2517705 60.7622362,11.2748852 60.5106191,11.2748852 C59.9106283,11.2748852 59.6314368,10.873082 59.6314368,10.010459 L59.6314368,5.90808197 L61.4589839,5.90808197 L61.4589839,5.27906557 L59.6314368,5.27906557 L59.6314368,3.8425082 L58.8815097,3.8425082 L58.8815097,5.27906557 L57.8011815,5.27906557 L57.8011815,5.90808197 L58.8815097,5.90808197 L58.8815097,9.89070492 C58.8815097,10.6298852 59.0169201,11.1428361 59.2936495,11.4566066 C59.5366495,11.7666885 59.9295857,11.930459 60.4303578,11.930459 C60.7880872,11.930459 61.0960842,11.8751311 61.346224,11.7659508 L61.3811845,11.750459 L61.0768805,11.2239836 Z" fill={ secondary } />
                                    <path d="M68.8747432,5.2672377 C68.8747432,6.62977869 67.9564149,7.4110082 66.3548799,7.4110082 C66.0161079,7.4110082 65.5899347,7.3972377 65.2622416,7.29297541 L65.2622416,3.36617213 C65.4183328,3.33518852 65.8238252,3.27002459 66.4747796,3.27002459 C67.9999924,3.27002459 68.8747432,3.99789344 68.8747432,5.2672377 M66.5016155,2.62772951 C65.8550927,2.62772951 65.2009377,2.6862541 64.5576155,2.80182787 L64.5125608,2.80994262 L64.5125608,11.783877 L65.2622416,11.783877 L65.2622416,7.96354918 C65.5552204,8.03756557 65.8809438,8.05305738 66.3014544,8.05305738 C67.4544119,8.05305738 68.4072082,7.69158197 68.9830714,7.0360082 C69.4146611,6.56338525 69.6241778,5.96289344 69.6241778,5.20059836 C69.6241778,4.46018852 69.3784696,3.83830328 68.9141353,3.40281148 C68.3926824,2.8957623 67.5583085,2.62772951 66.5016155,2.62772951" fill={ secondary } />
                                    <path d="M79.9828222,5.27906557 L78.4091079,9.45791803 C78.2636033,9.83537705 78.1402568,10.2032459 78.03119,10.528082 C78.0050927,10.6060328 77.979734,10.6812787 77.9553602,10.753082 C77.8268435,10.3370164 77.6687827,9.87644262 77.5235243,9.49701639 L75.8427128,5.3132459 L75.8289255,5.27906557 L75.0307432,5.27906557 L77.4356307,11.2832459 C77.4984119,11.4401311 77.5114605,11.5109508 77.5114605,11.5426721 C77.5114605,11.6011967 77.4848708,11.6789016 77.4358769,11.8013607 C77.1103997,12.5732459 76.6822568,13.0945574 76.3811535,13.3952951 C75.9648283,13.7961148 75.5120653,14.0024262 75.2791596,14.0897213 L75.2348435,14.1061967 L75.5795243,14.7025082 C75.7501413,14.6378361 76.1772994,14.4507049 76.6551748,14.0486557 C77.4873328,13.3232459 78.0198647,12.2048852 78.8308495,10.1240656 L80.7819894,5.27906557 L79.9828222,5.27906557 Z" fill={ secondary } />
                                    <path d="M56.4250185,9.67738525 C56.4250185,9.77279508 56.4139395,9.91394262 56.3610064,10.0462377 C56.1564137,10.6467295 55.5650398,11.2882869 54.518441,11.2882869 C53.9531644,11.2882869 53.2926082,10.9536148 53.2926082,10.0103361 C53.2926082,9.60804098 53.4260489,9.27459836 53.6889912,9.01935246 C54.1434775,8.57820492 54.981052,8.35517213 56.1815261,8.35517213 C56.2610489,8.35517213 56.3422951,8.35615574 56.4250185,8.35812295 L56.4250185,9.67738525 Z M57.2672708,11.720582 C57.1857784,11.2186967 57.1744532,10.698123 57.1744532,10.2102541 L57.1744532,7.7055 C57.1744532,6.02230328 56.3898119,5.13263115 54.9054684,5.13263115 C54.2370337,5.13263115 53.5225596,5.34017213 52.9947055,5.68787705 L52.9917511,5.68984426 L53.297286,6.21804098 C53.7170581,5.93279508 54.2614076,5.77492623 54.8392404,5.77492623 C54.8468726,5.77492623 54.8545049,5.77468033 54.8621371,5.77468033 C55.3363195,5.77468033 55.70759,5.90451639 55.9663468,6.1607459 C56.2748362,6.46615574 56.4250185,6.93681148 56.4250185,7.59902459 L56.4250185,7.71705738 C54.8549973,7.70427049 53.7414319,8.02492623 53.1015565,8.65787705 C52.713052,9.04172951 52.5163377,9.53254918 52.5163377,10.1170574 C52.5163377,10.9905 53.1219912,11.930582 54.4519669,11.930582 C55.4200277,11.930582 56.1258848,11.4289426 56.4902617,10.9295164 L56.5769243,11.7837787 L57.2776112,11.7837787 L57.2672708,11.720582 Z" fill={ secondary } />
                                    <path d="M73.6282614,9.67738525 C73.6282614,9.77279508 73.6174286,9.91369672 73.5644954,10.0462377 C73.3596565,10.6467295 72.7682827,11.2882869 71.7219301,11.2882869 C71.1564073,11.2882869 70.4958511,10.9536148 70.4958511,10.0103361 C70.4958511,9.60804098 70.6292918,9.27459836 70.892234,9.01935246 C71.3467204,8.57820492 72.1842948,8.35517213 73.384769,8.35517213 C73.4642918,8.35517213 73.545538,8.35615574 73.6282614,8.35812295 L73.6282614,9.67738525 Z M74.4705137,11.720582 C74.3892675,11.2184508 74.3779422,10.697877 74.3779422,10.2102541 L74.3779422,7.7055 C74.3779422,6.02230328 73.5933009,5.13263115 72.1087112,5.13263115 C71.4708055,5.13263115 70.7930152,5.32320492 70.2732857,5.64263115 L70.5775897,6.16886066 C70.9857903,5.91509016 71.4991185,5.77492623 72.0427295,5.77492623 C72.0506079,5.77492623 72.0579939,5.77468033 72.0656261,5.77468033 C72.5395623,5.77468033 72.9108328,5.90451639 73.1695897,6.1605 C73.4783252,6.46615574 73.6282614,6.93681148 73.6282614,7.59902459 L73.6282614,7.71705738 C72.0646413,7.70427049 70.9446748,8.02492623 70.3047994,8.65787705 C69.9162948,9.04172951 69.7195805,9.53254918 69.7195805,10.1170574 C69.7195805,10.9905 70.325234,11.930582 71.6552097,11.930582 C72.6232705,11.930582 73.3291277,11.4291885 73.6935046,10.9295164 L73.7801672,11.7837787 L74.4808541,11.7837787 L74.4705137,11.720582 Z" fill={ secondary } />
                                </g>
                            </g>
                        </g>
                    </svg>
                );
            } }
        />
    );
}