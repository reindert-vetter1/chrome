/**
 * LICENSE: This source file is subject to the Creative Commons License.
 * It is available through the world-wide-web at this URL:
 * http://creativecommons.org/licenses/by-nc-nd/3.0/nl/deed.en_US
 *
 * If you want to add improvements, please create a fork in our GitHub:
 * https://github.com/myparcelnl
 *
 * @author      Reindert Vetter <reindert@myparcel.nl>
 * @copyright   2010-2018 MyParcel
 * @license     http://creativecommons.org/licenses/by-nc-nd/3.0/nl/deed.en_US  CC BY-NC-ND 3.0 NL
 * @link        https://github.com/myparcelbe/magento1
 */
/*var myParcelConfig = {
    "apiBaseUrl": "https://api.myparcel.nl/",
    "countryCode": "BE",
    "carrierCode": "2",
    "carrierName": "Bpost",

    "priceBpostSaturdayDelivery": "2,55",
    "priceBpostAutograph": "2,22",

    "pricePickup": "3,33",

    "allowBpostSaturdayDelivery": true,
    "allowBpostAutograph": true,

    "dropOffDays": "1;2;3;4;5",
    "saturdayCutoffTime": "16:00",
    "cutoffTime": "15:59",
    "deliverydaysWindow": "0"

};*/

/* Text and translations */
txtWeekDays = [
    'Zondag',
    'Maandag',
    'Dinsdag',
    'Woensdag',
    'Donderdag',
    'Vrijdag',
    'Zaterdag'
];

translateENtoNL = {
    'monday'    : 'maandag',
    'tuesday'   : 'dindsag',
    'wednesday' : 'woensdag',
    'thursday'  : 'donderdag',
    'friday'    : 'vrijdag',
    'saturday'  : 'zaterdag',
    'sunday'    : 'zondag'
};

(function () {

    myParcelMethodInit = function () {
        MyParcel.setMagentoDataAndInit()
    };

})();
