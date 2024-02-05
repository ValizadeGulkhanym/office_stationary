var LEO_COOKIE_THEME = "LEO_STATIONERO_PANEL_CONFIG";
var add_cart_error = "An error occurred while processing your request. Please try again";
var ajaxsearch = "1";
var approfile_multilang_url = [{
    "id_appagebuilder_profiles": "25",
    "name": "Home 03",
    "id_lang": "1",
    "friendly_url": "home-03",
    "iso_code": "en"
}, {
    "id_appagebuilder_profiles": "25",
    "name": "Home 03",
    "id_lang": "2",
    "friendly_url": "home-03",
    "iso_code": "fr"
}, {
    "id_appagebuilder_profiles": "25",
    "name": "Home 03",
    "id_lang": "3",
    "friendly_url": "home-03",
    "iso_code": "de"
}, {
    "id_appagebuilder_profiles": "25",
    "name": "Home 03",
    "id_lang": "4",
    "friendly_url": "home-03",
    "iso_code": "it"
}, {
    "id_appagebuilder_profiles": "25",
    "name": "Home 03",
    "id_lang": "5",
    "friendly_url": "home-03",
    "iso_code": "es"
}, {
    "id_appagebuilder_profiles": "25",
    "name": "Home 03",
    "id_lang": "6",
    "friendly_url": "home-03",
    "iso_code": "ar"
}];
var buttoncompare_title_add = "Add to Compare";
var buttoncompare_title_remove = "Remove from Compare";
var buttonwishlist_title_add = "Add to Wishlist";
var buttonwishlist_title_remove = "Remove from WishList";
var cancel_rating_txt = "Cancel Rating";
var comparator_max_item = 3;
var compared_products = [];
var data_product_popup = [{
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/28-cart_default\/the-adventure-begins-framed-poster.jpg",
    "title": "Collins Elite Refill Week to View Manager",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/4-the-adventure-begins-framed-poster.html",
    "id_product": "4",
    "time": "Puchare By MGUERRERO 50 minutes ago",
    "phone": "xxx0753416",
    "address": "calle 3 #3232, col estrella gustavo a madero mexico"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/27-cart_default\/brown-bear-printed-sweater.jpg",
    "title": "Guildhall Pre-Printed HR File Yellow (Pack of 50)",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/2-brown-bear-printed-sweater.html",
    "id_product": "2",
    "time": "Puchare By MGUERRERO 37 minutes ago",
    "phone": "xxx0753416",
    "address": "calle 3 #3232, col estrella gustavo a madero mexico"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/32-cart_default\/mug-the-best-is-yet-to-come.jpg",
    "title": "Zebra 102 x 152mm 1000D Industrial Printer Label Paper",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/6-mug-the-best-is-yet-to-come.html",
    "id_product": "6",
    "time": "Puchare By MGUERRERO 11 minutes ago",
    "phone": "xxx0753416",
    "address": "calle 3 #3232, col estrella gustavo a madero mexico"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/40-cart_default\/brown-bear-cushion.jpg",
    "title": "Parker Jotter Blue Stainless Steel Chrome Ballpoint Pen",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/10-brown-bear-cushion.html",
    "id_product": "10",
    "time": "Puchare By MGUERRERO 3 minutes ago",
    "phone": "xxx0753416",
    "address": "calle 3 #3232, col estrella gustavo a madero mexico"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/58-cart_default\/hummingbird-printed-t-shirt.jpg",
    "title": "Bankers Box Blue\/White Heavy Duty Maxi Storage Box",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/paper\/1-hummingbird-printed-t-shirt.html",
    "id_product": "1",
    "time": "Puchare By MGUERRERO 42 minutes ago",
    "phone": "xxx0753416",
    "address": "calle 3 #3232, col estrella gustavo a madero mexico"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/28-cart_default\/the-adventure-begins-framed-poster.jpg",
    "title": "Collins Elite Refill Week to View Manager",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/4-the-adventure-begins-framed-poster.html",
    "id_product": "4",
    "time": "Puchare By kkumar 1 minutes ago",
    "phone": "xxx",
    "address": "fgnfgfg nkl"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/27-cart_default\/brown-bear-printed-sweater.jpg",
    "title": "Guildhall Pre-Printed HR File Yellow (Pack of 50)",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/2-brown-bear-printed-sweater.html",
    "id_product": "2",
    "time": "Puchare By kkumar 19 minutes ago",
    "phone": "xxx",
    "address": "fgnfgfg nkl"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/32-cart_default\/mug-the-best-is-yet-to-come.jpg",
    "title": "Zebra 102 x 152mm 1000D Industrial Printer Label Paper",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/6-mug-the-best-is-yet-to-come.html",
    "id_product": "6",
    "time": "Puchare By kkumar 22 minutes ago",
    "phone": "xxx",
    "address": "fgnfgfg nkl"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/40-cart_default\/brown-bear-cushion.jpg",
    "title": "Parker Jotter Blue Stainless Steel Chrome Ballpoint Pen",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/10-brown-bear-cushion.html",
    "id_product": "10",
    "time": "Puchare By kkumar 20 minutes ago",
    "phone": "xxx",
    "address": "fgnfgfg nkl"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/58-cart_default\/hummingbird-printed-t-shirt.jpg",
    "title": "Bankers Box Blue\/White Heavy Duty Maxi Storage Box",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/paper\/1-hummingbird-printed-t-shirt.html",
    "id_product": "1",
    "time": "Puchare By kkumar 9 minutes ago",
    "phone": "xxx",
    "address": "fgnfgfg nkl"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/28-cart_default\/the-adventure-begins-framed-poster.jpg",
    "title": "Collins Elite Refill Week to View Manager",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/4-the-adventure-begins-framed-poster.html",
    "id_product": "4",
    "time": "Puchare By SKhan 49 minutes ago",
    "phone": "xxx",
    "address": "Kha Pes"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/27-cart_default\/brown-bear-printed-sweater.jpg",
    "title": "Guildhall Pre-Printed HR File Yellow (Pack of 50)",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/2-brown-bear-printed-sweater.html",
    "id_product": "2",
    "time": "Puchare By SKhan 10 minutes ago",
    "phone": "xxx",
    "address": "Kha Pes"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/32-cart_default\/mug-the-best-is-yet-to-come.jpg",
    "title": "Zebra 102 x 152mm 1000D Industrial Printer Label Paper",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/6-mug-the-best-is-yet-to-come.html",
    "id_product": "6",
    "time": "Puchare By SKhan 5 minutes ago",
    "phone": "xxx",
    "address": "Kha Pes"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/40-cart_default\/brown-bear-cushion.jpg",
    "title": "Parker Jotter Blue Stainless Steel Chrome Ballpoint Pen",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/10-brown-bear-cushion.html",
    "id_product": "10",
    "time": "Puchare By SKhan 15 minutes ago",
    "phone": "xxx",
    "address": "Kha Pes"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/58-cart_default\/hummingbird-printed-t-shirt.jpg",
    "title": "Bankers Box Blue\/White Heavy Duty Maxi Storage Box",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/paper\/1-hummingbird-printed-t-shirt.html",
    "id_product": "1",
    "time": "Puchare By SKhan 51 minutes ago",
    "phone": "xxx",
    "address": "Kha Pes"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/28-cart_default\/the-adventure-begins-framed-poster.jpg",
    "title": "Collins Elite Refill Week to View Manager",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/4-the-adventure-begins-framed-poster.html",
    "id_product": "4",
    "time": "Puchare By TFerreira 34 minutes ago",
    "phone": "xxx",
    "address": "Rua do foral, Edf. Pra\u00e7a da Republica Oliveira do Bairro"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/27-cart_default\/brown-bear-printed-sweater.jpg",
    "title": "Guildhall Pre-Printed HR File Yellow (Pack of 50)",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/2-brown-bear-printed-sweater.html",
    "id_product": "2",
    "time": "Puchare By TFerreira 38 minutes ago",
    "phone": "xxx",
    "address": "Rua do foral, Edf. Pra\u00e7a da Republica Oliveira do Bairro"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/32-cart_default\/mug-the-best-is-yet-to-come.jpg",
    "title": "Zebra 102 x 152mm 1000D Industrial Printer Label Paper",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/6-mug-the-best-is-yet-to-come.html",
    "id_product": "6",
    "time": "Puchare By TFerreira 5 minutes ago",
    "phone": "xxx",
    "address": "Rua do foral, Edf. Pra\u00e7a da Republica Oliveira do Bairro"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/40-cart_default\/brown-bear-cushion.jpg",
    "title": "Parker Jotter Blue Stainless Steel Chrome Ballpoint Pen",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/10-brown-bear-cushion.html",
    "id_product": "10",
    "time": "Puchare By TFerreira 49 minutes ago",
    "phone": "xxx",
    "address": "Rua do foral, Edf. Pra\u00e7a da Republica Oliveira do Bairro"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/58-cart_default\/hummingbird-printed-t-shirt.jpg",
    "title": "Bankers Box Blue\/White Heavy Duty Maxi Storage Box",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/paper\/1-hummingbird-printed-t-shirt.html",
    "id_product": "1",
    "time": "Puchare By TFerreira 58 minutes ago",
    "phone": "xxx",
    "address": "Rua do foral, Edf. Pra\u00e7a da Republica Oliveira do Bairro"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/28-cart_default\/the-adventure-begins-framed-poster.jpg",
    "title": "Collins Elite Refill Week to View Manager",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/4-the-adventure-begins-framed-poster.html",
    "id_product": "4",
    "time": "Puchare By TFerreira 3 minutes ago",
    "phone": "xxx",
    "address": "sss Oliveira do Bairro"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/27-cart_default\/brown-bear-printed-sweater.jpg",
    "title": "Guildhall Pre-Printed HR File Yellow (Pack of 50)",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/2-brown-bear-printed-sweater.html",
    "id_product": "2",
    "time": "Puchare By TFerreira 23 minutes ago",
    "phone": "xxx",
    "address": "sss Oliveira do Bairro"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/32-cart_default\/mug-the-best-is-yet-to-come.jpg",
    "title": "Zebra 102 x 152mm 1000D Industrial Printer Label Paper",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/6-mug-the-best-is-yet-to-come.html",
    "id_product": "6",
    "time": "Puchare By TFerreira 16 minutes ago",
    "phone": "xxx",
    "address": "sss Oliveira do Bairro"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/40-cart_default\/brown-bear-cushion.jpg",
    "title": "Parker Jotter Blue Stainless Steel Chrome Ballpoint Pen",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/10-brown-bear-cushion.html",
    "id_product": "10",
    "time": "Puchare By TFerreira 45 minutes ago",
    "phone": "xxx",
    "address": "sss Oliveira do Bairro"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/58-cart_default\/hummingbird-printed-t-shirt.jpg",
    "title": "Bankers Box Blue\/White Heavy Duty Maxi Storage Box",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/paper\/1-hummingbird-printed-t-shirt.html",
    "id_product": "1",
    "time": "Puchare By TFerreira 7 minutes ago",
    "phone": "xxx",
    "address": "sss Oliveira do Bairro"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/28-cart_default\/the-adventure-begins-framed-poster.jpg",
    "title": "Collins Elite Refill Week to View Manager",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/4-the-adventure-begins-framed-poster.html",
    "id_product": "4",
    "time": "Puchare By VMagde 15 minutes ago",
    "phone": "xxx61843",
    "address": "48, Lataniers Avenue Morcellement St-Jean Quatre-Bornes Quatre bornes"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/27-cart_default\/brown-bear-printed-sweater.jpg",
    "title": "Guildhall Pre-Printed HR File Yellow (Pack of 50)",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/2-brown-bear-printed-sweater.html",
    "id_product": "2",
    "time": "Puchare By VMagde 43 minutes ago",
    "phone": "xxx61843",
    "address": "48, Lataniers Avenue Morcellement St-Jean Quatre-Bornes Quatre bornes"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/32-cart_default\/mug-the-best-is-yet-to-come.jpg",
    "title": "Zebra 102 x 152mm 1000D Industrial Printer Label Paper",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/6-mug-the-best-is-yet-to-come.html",
    "id_product": "6",
    "time": "Puchare By VMagde 14 minutes ago",
    "phone": "xxx61843",
    "address": "48, Lataniers Avenue Morcellement St-Jean Quatre-Bornes Quatre bornes"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/40-cart_default\/brown-bear-cushion.jpg",
    "title": "Parker Jotter Blue Stainless Steel Chrome Ballpoint Pen",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/10-brown-bear-cushion.html",
    "id_product": "10",
    "time": "Puchare By VMagde 16 minutes ago",
    "phone": "xxx61843",
    "address": "48, Lataniers Avenue Morcellement St-Jean Quatre-Bornes Quatre bornes"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/58-cart_default\/hummingbird-printed-t-shirt.jpg",
    "title": "Bankers Box Blue\/White Heavy Duty Maxi Storage Box",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/paper\/1-hummingbird-printed-t-shirt.html",
    "id_product": "1",
    "time": "Puchare By VMagde 17 minutes ago",
    "phone": "xxx61843",
    "address": "48, Lataniers Avenue Morcellement St-Jean Quatre-Bornes Quatre bornes"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/28-cart_default\/the-adventure-begins-framed-poster.jpg",
    "title": "Collins Elite Refill Week to View Manager",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/4-the-adventure-begins-framed-poster.html",
    "id_product": "4",
    "time": "Puchare By sdani 8 minutes ago",
    "phone": "xxx",
    "address": "street 123 new york"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/27-cart_default\/brown-bear-printed-sweater.jpg",
    "title": "Guildhall Pre-Printed HR File Yellow (Pack of 50)",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/2-brown-bear-printed-sweater.html",
    "id_product": "2",
    "time": "Puchare By sdani 25 minutes ago",
    "phone": "xxx",
    "address": "street 123 new york"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/32-cart_default\/mug-the-best-is-yet-to-come.jpg",
    "title": "Zebra 102 x 152mm 1000D Industrial Printer Label Paper",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/6-mug-the-best-is-yet-to-come.html",
    "id_product": "6",
    "time": "Puchare By sdani 22 minutes ago",
    "phone": "xxx",
    "address": "street 123 new york"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/40-cart_default\/brown-bear-cushion.jpg",
    "title": "Parker Jotter Blue Stainless Steel Chrome Ballpoint Pen",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/10-brown-bear-cushion.html",
    "id_product": "10",
    "time": "Puchare By sdani 31 minutes ago",
    "phone": "xxx",
    "address": "street 123 new york"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/58-cart_default\/hummingbird-printed-t-shirt.jpg",
    "title": "Bankers Box Blue\/White Heavy Duty Maxi Storage Box",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/paper\/1-hummingbird-printed-t-shirt.html",
    "id_product": "1",
    "time": "Puchare By sdani 18 minutes ago",
    "phone": "xxx",
    "address": "street 123 new york"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/28-cart_default\/the-adventure-begins-framed-poster.jpg",
    "title": "Collins Elite Refill Week to View Manager",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/4-the-adventure-begins-framed-poster.html",
    "id_product": "4",
    "time": "Puchare By Ttes 49 minutes ago",
    "phone": "xxx456789",
    "address": "dsad asd dasd sad ad  d"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/27-cart_default\/brown-bear-printed-sweater.jpg",
    "title": "Guildhall Pre-Printed HR File Yellow (Pack of 50)",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/2-brown-bear-printed-sweater.html",
    "id_product": "2",
    "time": "Puchare By Ttes 24 minutes ago",
    "phone": "xxx456789",
    "address": "dsad asd dasd sad ad  d"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/32-cart_default\/mug-the-best-is-yet-to-come.jpg",
    "title": "Zebra 102 x 152mm 1000D Industrial Printer Label Paper",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/6-mug-the-best-is-yet-to-come.html",
    "id_product": "6",
    "time": "Puchare By Ttes 53 minutes ago",
    "phone": "xxx456789",
    "address": "dsad asd dasd sad ad  d"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/40-cart_default\/brown-bear-cushion.jpg",
    "title": "Parker Jotter Blue Stainless Steel Chrome Ballpoint Pen",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/10-brown-bear-cushion.html",
    "id_product": "10",
    "time": "Puchare By Ttes 57 minutes ago",
    "phone": "xxx456789",
    "address": "dsad asd dasd sad ad  d"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/58-cart_default\/hummingbird-printed-t-shirt.jpg",
    "title": "Bankers Box Blue\/White Heavy Duty Maxi Storage Box",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/paper\/1-hummingbird-printed-t-shirt.html",
    "id_product": "1",
    "time": "Puchare By Ttes 53 minutes ago",
    "phone": "xxx456789",
    "address": "dsad asd dasd sad ad  d"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/28-cart_default\/the-adventure-begins-framed-poster.jpg",
    "title": "Collins Elite Refill Week to View Manager",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/4-the-adventure-begins-framed-poster.html",
    "id_product": "4",
    "time": "Puchare By ergreg 14 minutes ago",
    "phone": "xxx35215346234",
    "address": "f3tgrg argrg"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/27-cart_default\/brown-bear-printed-sweater.jpg",
    "title": "Guildhall Pre-Printed HR File Yellow (Pack of 50)",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/2-brown-bear-printed-sweater.html",
    "id_product": "2",
    "time": "Puchare By ergreg 56 minutes ago",
    "phone": "xxx35215346234",
    "address": "f3tgrg argrg"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/32-cart_default\/mug-the-best-is-yet-to-come.jpg",
    "title": "Zebra 102 x 152mm 1000D Industrial Printer Label Paper",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/6-mug-the-best-is-yet-to-come.html",
    "id_product": "6",
    "time": "Puchare By ergreg 42 minutes ago",
    "phone": "xxx35215346234",
    "address": "f3tgrg argrg"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/40-cart_default\/brown-bear-cushion.jpg",
    "title": "Parker Jotter Blue Stainless Steel Chrome Ballpoint Pen",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/10-brown-bear-cushion.html",
    "id_product": "10",
    "time": "Puchare By ergreg 33 minutes ago",
    "phone": "xxx35215346234",
    "address": "f3tgrg argrg"
}, {
    "image": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/58-cart_default\/hummingbird-printed-t-shirt.jpg",
    "title": "Bankers Box Blue\/White Heavy Duty Maxi Storage Box",
    "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/paper\/1-hummingbird-printed-t-shirt.html",
    "id_product": "1",
    "time": "Puchare By ergreg 6 minutes ago",
    "phone": "xxx35215346234",
    "address": "f3tgrg argrg"
}];
var disable_review_form_txt = "Not exists a criterion to review for this product or this language";
var enable_dropdown_defaultcart = 1;
var enable_flycart_effect = 1;
var enable_notification = 0;
var height_cart_item = "135";
var isLogged = false;
var leo_push = 0;
var leo_search_url = "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/module\/leoproductsearch\/productsearch";
var leo_token = "db62e42ed679a2b3256f637c8b160d22";
var leoproductsearch_static_token = "db62e42ed679a2b3256f637c8b160d22";
var leoproductsearch_token = "bd75a0c043e7698d8860d5ff006b2279";
var lf_is_gen_rtl = false;
var lps_show_product_img = "1";
var lps_show_product_price = "1";
var lql_ajax_url = "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/module\/leoquicklogin\/leocustomer";
var lql_is_gen_rtl = false;
var lql_module_dir = "\/prestashop\/leo_stationero_demo\/modules\/leoquicklogin\/";
var lql_myaccount_url = "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/my-account";
var lql_redirect = "0";
var number_cartitem_display = 3;
var numpro_display = "100";
var prestashop = {
    "cart": {
        "products": [],
        "totals": {
            "total": {
                "type": "total",
                "label": "Total",
                "amount": 0,
                "value": "$0.00"
            },
            "total_including_tax": {
                "type": "total",
                "label": "Total (tax incl.)",
                "amount": 0,
                "value": "$0.00"
            },
            "total_excluding_tax": {
                "type": "total",
                "label": "Total (tax excl.)",
                "amount": 0,
                "value": "$0.00"
            }
        },
        "subtotals": {
            "products": {
                "type": "products",
                "label": "Subtotal",
                "amount": 0,
                "value": "$0.00"
            },
            "discounts": null,
            "shipping": {
                "type": "shipping",
                "label": "Shipping",
                "amount": 0,
                "value": ""
            },
            "tax": {
                "type": "tax",
                "label": "Taxes",
                "amount": 0,
                "value": "$0.00"
            }
        },
        "products_count": 0,
        "summary_string": "0 items",
        "vouchers": {
            "allowed": 0,
            "added": []
        },
        "discounts": [],
        "minimalPurchase": 0,
        "minimalPurchaseRequired": ""
    },
    "currency": {
        "id": 1,
        "name": "US Dollar",
        "iso_code": "USD",
        "iso_code_num": "840",
        "sign": "$"
    },
    "customer": {
        "lastname": null,
        "firstname": null,
        "email": null,
        "birthday": null,
        "newsletter": null,
        "newsletter_date_add": null,
        "optin": null,
        "website": null,
        "company": null,
        "siret": null,
        "ape": null,
        "is_logged": false,
        "gender": {
            "type": null,
            "name": null
        },
        "addresses": []
    },
    "language": {
        "name": "English (English)",
        "iso_code": "en",
        "locale": "en-US",
        "language_code": "en-us",
        "is_rtl": "0",
        "date_format_lite": "m\/d\/Y",
        "date_format_full": "m\/d\/Y H:i:s",
        "id": 1
    },
    "page": {
        "title": "",
        "canonical": null,
        "meta": {
            "title": "Leo Stationero",
            "description": "Shop powered by PrestaShop",
            "keywords": "",
            "robots": "index"
        },
        "page_name": "index",
        "body_classes": {
            "lang-en": true,
            "lang-rtl": false,
            "country-US": true,
            "currency-USD": true,
            "layout-full-width": true,
            "tax-display-disabled": true,
            "page-index": true
        },
        "admin_notifications": []
    },
    "shop": {
        "name": "Leo Stationero",
        "logo": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/stationero-logo-1631178759.jpg",
        "stores_icon": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/logo_stores.png",
        "favicon": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/favicon.ico"
    },
    "urls": {
        "base_url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/",
        "current_url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/home-03.html",
        "shop_domain_url": "https:\/\/demo74.leotheme.com",
        "img_ps_url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/",
        "img_cat_url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/c\/",
        "img_lang_url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/l\/",
        "img_prod_url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/p\/",
        "img_manu_url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/m\/",
        "img_sup_url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/su\/",
        "img_ship_url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/s\/",
        "img_store_url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/st\/",
        "img_col_url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/co\/",
        "img_url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/themes\/leo_stationero\/assets\/img\/",
        "css_url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/themes\/leo_stationero\/assets\/css\/",
        "js_url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/themes\/leo_stationero\/assets\/js\/",
        "pic_url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/upload\/",
        "pages": {
            "address": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/address",
            "addresses": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/addresses",
            "authentication": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/login",
            "cart": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/cart",
            "category": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/index.php?controller=category",
            "cms": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/index.php?controller=cms",
            "contact": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/contact-us",
            "discount": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/discount",
            "guest_tracking": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/guest-tracking",
            "history": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/order-history",
            "identity": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/identity",
            "index": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/",
            "my_account": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/my-account",
            "order_confirmation": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/order-confirmation",
            "order_detail": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/index.php?controller=order-detail",
            "order_follow": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/order-follow",
            "order": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/order",
            "order_return": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/index.php?controller=order-return",
            "order_slip": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/credit-slip",
            "pagenotfound": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/page-not-found",
            "password": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/password-recovery",
            "pdf_invoice": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/index.php?controller=pdf-invoice",
            "pdf_order_return": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/index.php?controller=pdf-order-return",
            "pdf_order_slip": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/index.php?controller=pdf-order-slip",
            "prices_drop": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/prices-drop",
            "product": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/index.php?controller=product",
            "search": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/search",
            "sitemap": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/sitemap",
            "stores": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/stores",
            "supplier": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/supplier",
            "register": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/login?create_account=1",
            "order_login": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/order?login=1"
        },
        "alternative_langs": {
            "en-us": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/module\/appagebuilder\/appagebuilderhome?module=appagebuilder",
            "fr-fr": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/fr\/module\/appagebuilder\/appagebuilderhome?module=appagebuilder",
            "de-de": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/de\/module\/appagebuilder\/appagebuilderhome?module=appagebuilder",
            "it-it": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/it\/module\/appagebuilder\/appagebuilderhome?module=appagebuilder",
            "es-es": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/es\/module\/appagebuilder\/appagebuilderhome?module=appagebuilder",
            "ar-sa": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/ar\/module\/appagebuilder\/appagebuilderhome?module=appagebuilder"
        },
        "theme_assets": "\/prestashop\/leo_stationero_demo\/themes\/leo_stationero\/assets\/",
        "actions": {
            "logout": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/?mylogout="
        },
        "no_picture_image": {
            "bySize": {
                "small_default": {
                    "url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/p\/en-default-small_default.jpg",
                    "width": 98,
                    "height": 98
                },
                "cart_default": {
                    "url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/p\/en-default-cart_default.jpg",
                    "width": 125,
                    "height": 125
                },
                "medium_default": {
                    "url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/p\/en-default-medium_default.jpg",
                    "width": 250,
                    "height": 250
                },
                "home_default": {
                    "url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/p\/en-default-home_default.jpg",
                    "width": 452,
                    "height": 452
                },
                "large_default": {
                    "url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/p\/en-default-large_default.jpg",
                    "width": 800,
                    "height": 800
                }
            },
            "small": {
                "url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/p\/en-default-small_default.jpg",
                "width": 98,
                "height": 98
            },
            "medium": {
                "url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/p\/en-default-medium_default.jpg",
                "width": 250,
                "height": 250
            },
            "large": {
                "url": "https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/p\/en-default-large_default.jpg",
                "width": 800,
                "height": 800
            },
            "legend": ""
        }
    },
    "configuration": {
        "display_taxes_label": false,
        "display_prices_tax_incl": false,
        "is_catalog": false,
        "show_prices": true,
        "opt_in": {
            "partner": true
        },
        "quantity_discount": {
            "type": "discount",
            "label": "Unit discount"
        },
        "voucher_enabled": 0,
        "return_enabled": 0
    },
    "field_required": [],
    "breadcrumb": {
        "links": [{
            "title": "Home",
            "url": "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/"
        }],
        "count": 1
    },
    "link": {
        "protocol_link": "https:\/\/",
        "protocol_content": "https:\/\/"
    },
    "time": 1706023854,
    "static_token": "db62e42ed679a2b3256f637c8b160d22",
    "token": "bd75a0c043e7698d8860d5ff006b2279",
    "debug": false
};
var productcompare_add = "The product has been added to list compare";
var productcompare_add_error = "An error occurred while adding. Please try again";
var productcompare_max_item = "You cannot add more than 3 product(s) to the product comparison";
var productcompare_remove = "The product was successfully removed from list compare";
var productcompare_remove_error = "An error occurred while removing. Please try again";
var productcompare_url = "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/module\/leofeature\/productscompare";
var productcompare_viewlistcompare = "View list compare";
var psemailsubscription_subscription = "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/module\/ps_emailsubscription\/subscription";
var psr_icon_color = "#F19D76";
var review_error = "An error occurred while processing your request. Please try again";
var show_popup = 1;
var text_no_product = "Don't have products";
var text_results_count = "results";
var type_dropdown_defaultcart = "dropdown";
var type_flycart_effect = "fade";
var url_leoproductattribute = "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/module\/leofeature\/LeoProductAttribute";
var width_cart_item = "265";
var wishlist_add = "The product was successfully added to your wishlist";
var wishlist_cancel_txt = "Cancel";
var wishlist_confirm_del_txt = "Delete selected item?";
var wishlist_del_default_txt = "Cannot delete default wishlist";
var wishlist_email_txt = "Email";
var wishlist_loggin_required = "You must be logged in to manage your wishlist";
var wishlist_ok_txt = "Ok";
var wishlist_quantity_required = "You must enter a quantity";
var wishlist_remove = "The product was successfully removed from your wishlist";
var wishlist_reset_txt = "Reset";
var wishlist_send_txt = "Send";
var wishlist_send_wishlist_txt = "Send wishlist";
var wishlist_url = "https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/module\/leofeature\/mywishlist";
var wishlist_viewwishlist = "View your wishlist";

var choosefile_text = "Choose file";
var turnoff_popup_text = "Do not show this popup again";

var size_item_quickview = 113;
var style_scroll_quickview = 'vertical';

var size_item_page = 113;
var style_scroll_page = 'horizontal';

var size_item_quickview_attr = 113;
var style_scroll_quickview_attr = 'vertical';

var size_item_popup = 113;
var style_scroll_popup = 'vertical';
var FancyboxI18nClose = "Close";
var FancyboxI18nNext = "Next";
var FancyboxI18nPrev = "Previous";
var current_link = "http://demo74.leotheme.com/prestashop/leo_stationero_demo/en/";
var currentURL = window.location;
currentURL = String(currentURL);
currentURL = currentURL.replace("https://", "").replace("http://", "").replace("www.", "").replace(/#\w*/, "");
current_link = current_link.replace("https://", "").replace("http://", "").replace("www.", "");
var text_warning_select_txt = "Please select One to remove?";
var text_confirm_remove_txt = "Are you sure to remove footer row?";
var close_bt_txt = "Close";
var list_menu = [];
var list_menu_tmp = {};
var list_tab = [];
var isHomeMenu = 0;

/**
 * List functions will run when document.ready()
 */
var ap_list_functions = [];
/**
 * List functions will run when window.load()
 */
var ap_list_functions_loaded = [];

/**
 * List functions will run when document.ready() for theme
 */

var products_list_functions = [];

var leoOption = {
    category_qty: 0,
    product_list_image: 0,
    product_one_img: 1,
    productCdown: 1,
    productColor: 0,
    homeWidth: 452,
    homeheight: 452,
}

ap_list_functions.push(function() {
    if (typeof $.LeoCustomAjax !== "undefined" && $.isFunction($.LeoCustomAjax)) {
        var leoCustomAjax = new $.LeoCustomAjax();
        leoCustomAjax.processAjax();
    }
});

var sp_link_base = 'https://demo74leotheme.b-cdn.net/prestashop/leo_stationero_demo';

function renderDataAjax(jsonData) {
    for (var key in jsonData) {
        if (key == 'java_script') {
            $('body').append(jsonData[key]);
        } else
        if ($('#ets_speed_dy_' + key).length)
            $('#ets_speed_dy_' + key).replaceWith(jsonData[key]);
    }
    if ($('#header .shopping_cart').length && $('#header .cart_block').length) {
        var shopping_cart = new HoverWatcher('#header .shopping_cart');
        var cart_block = new HoverWatcher('#header .cart_block');
        $("#header .shopping_cart a:first").live("hover",
            function() {
                if (ajaxCart.nb_total_products > 0 || parseInt($('.ajax_cart_quantity').html()) > 0)
                    $("#header .cart_block").stop(true, true).slideDown(450);
            },
            function() {
                setTimeout(function() {
                    if (!shopping_cart.isHoveringOver() && !cart_block.isHoveringOver())
                        $("#header .cart_block").stop(true, true).slideUp(450);
                }, 200);
            }
        );
    }
    if (jsonData['custom_js'])
        $('head').append('<script src="' + sp_link_base + '/modules/ets_superspeed/views/js/script_custom.js"></javascript');
}



ap_list_functions.push(function() {

    jQuery(".iview-group-65af624568525-62").iView({
        // COMMON
        pauseTime: 9000, // delay
        startSlide: 0,
        autoAdvance: 1, // enable timer thá»�i gian auto next slide
        pauseOnHover: 1,
        randomStart: 0, // Ramdom slide when start

        // TIMER
        timer: "360Bar",
        timerPosition: "top-right", // Top-right, top left ....
        timerX: 10,
        timerY: 10,
        timerOpacity: 0.5,
        timerBg: "#000",
        timerColor: "#EEE",
        timerDiameter: 30,
        timerPadding: 4,
        timerStroke: 3,
        timerBarStroke: 1,
        timerBarStrokeColor: "#EEE",
        timerBarStrokeStyle: "solid",
        playLabel: "Play",
        pauseLabel: "Pause",
        closeLabel: "Close", // Muli language

        // NAVIGATOR controlNav
        controlNav: 1, // true : enable navigate - default:'false'
        keyboardNav: 1, // true : enable keybroad
        controlNavThumbs: 0, // true show thumbnail, false show number ( bullet )
        controlNavTooltip: 0, // true : hover to bullet show thumnail
        tooltipX: 5,
        tooltipY: -5,
        controlNavHoverOpacity: 0.6, // opacity navigator

        // DIRECTION
        controlNavNextPrev: false, // false dont show direction at navigator
        directionNav: 1, // true  show direction at image ( in this case : enable direction )
        directionNavHoverOpacity: 0.6, // direction opacity at image
        nextLabel: "Next", // Muli language
        previousLabel: "Previous", // Muli language

        // ANIMATION
        fx: 'random', // Animation
        animationSpeed: 500, // time to change slide
        //		strips: 20,
        strips: 1, // set value is 1 -> fix animation full background
        blockCols: 10, // number of columns
        blockRows: 5, // number of rows

        captionSpeed: 500, // speed to show caption
        captionOpacity: 1, // caption opacity
        captionEasing: 'easeInOutSine', // caption transition easing effect, use JQuery Easings effect
        customWidth: 1920,
        customHtmlBullet: false,
        rtl: false,
        height: 680,
        timer_show: 1,

        //onBeforeChange: function(){}, // Triggers before a slide transition
        //onAfterChange: function(){}, // Triggers after a slide transition
        //onSlideshowEnd: function(){}, // Triggers after all slides have been shown
        //onLastSlide: function(){}, // Triggers when last slide is shown
        //onPause: function(){}, // Triggers when slider has paused
        //onPlay: function(){} // Triggers when slider has played

        onAfterLoad: function() {
            // THUMBNAIL

            // BULLET

            // Display timer
            $('.iview-group-65af624568525-62 .iview-timer').hide();
        },

    });

    $(".img_disable_drag").bind('dragstart', function() {
        return false;
    });


    // Fix : Slide link, image cant swipe
    // step 1
    var link_event = 'click';

    // step 3
    $(".iview-group-65af624568525-62 .slide_config").on("click", function() {

        if (link_event !== 'click') {
            link_event = 'click';
            return;
        }

        if ($(this).data('link') != undefined && $(this).data('link') != '') {
            window.open($(this).data('link'), $(this).data('target'));
        }

    });

    // step 2
    $(".iview-group-65af624568525-62 .slide_config").on('swipe', function() {
        link_event = 'swiped'; // do not click event
    });
});



ap_list_functions.push(function() {

    // ACTION SET ACTIVE
    $('#tab_3246675617 .nav a:eq(0)').trigger('click');
});


ap_list_functions.push(function() {
    if ($('#carousel-2729648423').parents('.tab-pane').length) {
        if (!$('#carousel-2729648423').parents('.tab-pane').hasClass('active')) {
            var width_owl_active_tab = $('#carousel-2729648423').parents('.tab-pane').siblings('.active').find('.owl-carousel').width();
            $('#carousel-2729648423').width(width_owl_active_tab);
        }
    }
    $('#carousel-2729648423').imagesLoaded(function() {
        $('#carousel-2729648423').owlCarousel({
            items: 5,
            itemsDesktop: [1200, 4],
            itemsDesktopSmall: [992, 3],
            itemsTablet: [768, 2],
            itemsMobile: [576, 1],
            itemsCustom: false,
            singleItem: false, // true : show only 1 item
            itemsScaleUp: false,
            slideSpeed: 200, //  change speed when drag and drop a item
            paginationSpeed: 800, // change speed when go next page
            autoPlay: false, // time to show each item
            stopOnHover: false,
            navigation: false,
            navigationText: ["&lsaquo;", "&rsaquo;"],
            scrollPerPage: false,
            pagination: false, // show bullist
            paginationNumbers: false, // show number
            responsive: true,
            responsiveRefreshRate: 0,
            lazyLoad: false,
            lazyFollow: false, // true : go to page 7th and load all images page 1...7. false : go to page 7th and load only images of page 7th
            lazyEffect: "fade",
            autoHeight: false,
            mouseDrag: true,
            touchDrag: true,
            addClassActive: true,
            direction: false,
            afterInit: OwlLoaded,
            afterAction: SetOwlCarouselFirstLast,
        });
    });
});

function OwlLoaded(el) {
    el.removeClass('owl-loading').addClass('owl-loaded').parents('.owl-row').addClass('hide-loading');
    if ($(el).parents('.tab-pane').length && !$(el).parents('.tab-pane').hasClass('active'))
        el.width('100%');
};

var choosefile_text = "Choose file";
var turnoff_popup_text = "Do not show this popup again";

var size_item_quickview = 113;
var style_scroll_quickview = 'vertical';

var size_item_page = 113;
var style_scroll_page = 'horizontal';

var size_item_quickview_attr = 113;
var style_scroll_quickview_attr = 'vertical';

var size_item_popup = 113;
var style_scroll_popup = 'vertical';

list_menu_tmp.id = '22609142809946675';
list_menu_tmp.type = 'horizontal';
list_menu_tmp.show_cavas = 1;
list_menu_tmp.list_tab = list_tab;
list_menu.push(list_menu_tmp);
list_menu_tmp = {};
list_tab = {};



//blog
var LEO_COOKIE_THEME = "LEO_STATIONERO_PANEL_CONFIG";
var add_cart_error = "An error occurred while processing your request. Please try again";
var ajaxsearch = "1";
var array_blog_rewrite = [];
var array_category_rewrite = [];
var array_config_blog_rewrite = [];
var array_config_category_rewrite = [];
var array_list_rewrite = {"en":"blog","fr":"blog","de":"blog","it":"blog","es":"blog","ar":"blog"};
var buttoncompare_title_add = "Add to Compare";
var buttoncompare_title_remove = "Remove from Compare";
var buttonwishlist_title_add = "Add to Wishlist";
var buttonwishlist_title_remove = "Remove from WishList";
var cancel_rating_txt = "Cancel Rating";
var comparator_max_item = 3;
var compared_products = [];
var config_url_use_id = "1";
var data_product_popup = [{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/28-cart_default\/the-adventure-begins-framed-poster.jpg","title":"Collins Elite Refill Week to View Manager","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/4-the-adventure-begins-framed-poster.html","id_product":"4","time":"Puchare By MGUERRERO 27 minutes ago","phone":"xxx0753416","address":"calle 3 #3232, col estrella gustavo a madero mexico"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/27-cart_default\/brown-bear-printed-sweater.jpg","title":"Guildhall Pre-Printed HR File Yellow (Pack of 50)","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/2-brown-bear-printed-sweater.html","id_product":"2","time":"Puchare By MGUERRERO 13 minutes ago","phone":"xxx0753416","address":"calle 3 #3232, col estrella gustavo a madero mexico"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/32-cart_default\/mug-the-best-is-yet-to-come.jpg","title":"Zebra 102 x 152mm 1000D Industrial Printer Label Paper","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/6-mug-the-best-is-yet-to-come.html","id_product":"6","time":"Puchare By MGUERRERO 31 minutes ago","phone":"xxx0753416","address":"calle 3 #3232, col estrella gustavo a madero mexico"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/40-cart_default\/brown-bear-cushion.jpg","title":"Parker Jotter Blue Stainless Steel Chrome Ballpoint Pen","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/10-brown-bear-cushion.html","id_product":"10","time":"Puchare By MGUERRERO 27 minutes ago","phone":"xxx0753416","address":"calle 3 #3232, col estrella gustavo a madero mexico"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/58-cart_default\/hummingbird-printed-t-shirt.jpg","title":"Bankers Box Blue\/White Heavy Duty Maxi Storage Box","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/paper\/1-hummingbird-printed-t-shirt.html","id_product":"1","time":"Puchare By MGUERRERO 51 minutes ago","phone":"xxx0753416","address":"calle 3 #3232, col estrella gustavo a madero mexico"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/28-cart_default\/the-adventure-begins-framed-poster.jpg","title":"Collins Elite Refill Week to View Manager","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/4-the-adventure-begins-framed-poster.html","id_product":"4","time":"Puchare By kkumar 26 minutes ago","phone":"xxx","address":"fgnfgfg nkl"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/27-cart_default\/brown-bear-printed-sweater.jpg","title":"Guildhall Pre-Printed HR File Yellow (Pack of 50)","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/2-brown-bear-printed-sweater.html","id_product":"2","time":"Puchare By kkumar 38 minutes ago","phone":"xxx","address":"fgnfgfg nkl"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/32-cart_default\/mug-the-best-is-yet-to-come.jpg","title":"Zebra 102 x 152mm 1000D Industrial Printer Label Paper","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/6-mug-the-best-is-yet-to-come.html","id_product":"6","time":"Puchare By kkumar 7 minutes ago","phone":"xxx","address":"fgnfgfg nkl"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/40-cart_default\/brown-bear-cushion.jpg","title":"Parker Jotter Blue Stainless Steel Chrome Ballpoint Pen","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/10-brown-bear-cushion.html","id_product":"10","time":"Puchare By kkumar 26 minutes ago","phone":"xxx","address":"fgnfgfg nkl"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/58-cart_default\/hummingbird-printed-t-shirt.jpg","title":"Bankers Box Blue\/White Heavy Duty Maxi Storage Box","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/paper\/1-hummingbird-printed-t-shirt.html","id_product":"1","time":"Puchare By kkumar 35 minutes ago","phone":"xxx","address":"fgnfgfg nkl"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/28-cart_default\/the-adventure-begins-framed-poster.jpg","title":"Collins Elite Refill Week to View Manager","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/4-the-adventure-begins-framed-poster.html","id_product":"4","time":"Puchare By SKhan 11 minutes ago","phone":"xxx","address":"Kha Pes"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/27-cart_default\/brown-bear-printed-sweater.jpg","title":"Guildhall Pre-Printed HR File Yellow (Pack of 50)","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/2-brown-bear-printed-sweater.html","id_product":"2","time":"Puchare By SKhan 38 minutes ago","phone":"xxx","address":"Kha Pes"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/32-cart_default\/mug-the-best-is-yet-to-come.jpg","title":"Zebra 102 x 152mm 1000D Industrial Printer Label Paper","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/6-mug-the-best-is-yet-to-come.html","id_product":"6","time":"Puchare By SKhan 31 minutes ago","phone":"xxx","address":"Kha Pes"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/40-cart_default\/brown-bear-cushion.jpg","title":"Parker Jotter Blue Stainless Steel Chrome Ballpoint Pen","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/10-brown-bear-cushion.html","id_product":"10","time":"Puchare By SKhan 56 minutes ago","phone":"xxx","address":"Kha Pes"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/58-cart_default\/hummingbird-printed-t-shirt.jpg","title":"Bankers Box Blue\/White Heavy Duty Maxi Storage Box","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/paper\/1-hummingbird-printed-t-shirt.html","id_product":"1","time":"Puchare By SKhan 23 minutes ago","phone":"xxx","address":"Kha Pes"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/28-cart_default\/the-adventure-begins-framed-poster.jpg","title":"Collins Elite Refill Week to View Manager","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/4-the-adventure-begins-framed-poster.html","id_product":"4","time":"Puchare By TFerreira 3 minutes ago","phone":"xxx","address":"Rua do foral, Edf. Pra\u00e7a da Republica Oliveira do Bairro"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/27-cart_default\/brown-bear-printed-sweater.jpg","title":"Guildhall Pre-Printed HR File Yellow (Pack of 50)","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/2-brown-bear-printed-sweater.html","id_product":"2","time":"Puchare By TFerreira 38 minutes ago","phone":"xxx","address":"Rua do foral, Edf. Pra\u00e7a da Republica Oliveira do Bairro"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/32-cart_default\/mug-the-best-is-yet-to-come.jpg","title":"Zebra 102 x 152mm 1000D Industrial Printer Label Paper","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/6-mug-the-best-is-yet-to-come.html","id_product":"6","time":"Puchare By TFerreira 42 minutes ago","phone":"xxx","address":"Rua do foral, Edf. Pra\u00e7a da Republica Oliveira do Bairro"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/40-cart_default\/brown-bear-cushion.jpg","title":"Parker Jotter Blue Stainless Steel Chrome Ballpoint Pen","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/10-brown-bear-cushion.html","id_product":"10","time":"Puchare By TFerreira 55 minutes ago","phone":"xxx","address":"Rua do foral, Edf. Pra\u00e7a da Republica Oliveira do Bairro"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/58-cart_default\/hummingbird-printed-t-shirt.jpg","title":"Bankers Box Blue\/White Heavy Duty Maxi Storage Box","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/paper\/1-hummingbird-printed-t-shirt.html","id_product":"1","time":"Puchare By TFerreira 39 minutes ago","phone":"xxx","address":"Rua do foral, Edf. Pra\u00e7a da Republica Oliveira do Bairro"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/28-cart_default\/the-adventure-begins-framed-poster.jpg","title":"Collins Elite Refill Week to View Manager","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/4-the-adventure-begins-framed-poster.html","id_product":"4","time":"Puchare By TFerreira 44 minutes ago","phone":"xxx","address":"sss Oliveira do Bairro"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/27-cart_default\/brown-bear-printed-sweater.jpg","title":"Guildhall Pre-Printed HR File Yellow (Pack of 50)","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/2-brown-bear-printed-sweater.html","id_product":"2","time":"Puchare By TFerreira 20 minutes ago","phone":"xxx","address":"sss Oliveira do Bairro"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/32-cart_default\/mug-the-best-is-yet-to-come.jpg","title":"Zebra 102 x 152mm 1000D Industrial Printer Label Paper","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/6-mug-the-best-is-yet-to-come.html","id_product":"6","time":"Puchare By TFerreira 7 minutes ago","phone":"xxx","address":"sss Oliveira do Bairro"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/40-cart_default\/brown-bear-cushion.jpg","title":"Parker Jotter Blue Stainless Steel Chrome Ballpoint Pen","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/10-brown-bear-cushion.html","id_product":"10","time":"Puchare By TFerreira 49 minutes ago","phone":"xxx","address":"sss Oliveira do Bairro"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/58-cart_default\/hummingbird-printed-t-shirt.jpg","title":"Bankers Box Blue\/White Heavy Duty Maxi Storage Box","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/paper\/1-hummingbird-printed-t-shirt.html","id_product":"1","time":"Puchare By TFerreira 50 minutes ago","phone":"xxx","address":"sss Oliveira do Bairro"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/28-cart_default\/the-adventure-begins-framed-poster.jpg","title":"Collins Elite Refill Week to View Manager","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/4-the-adventure-begins-framed-poster.html","id_product":"4","time":"Puchare By VMagde 49 minutes ago","phone":"xxx61843","address":"48, Lataniers Avenue Morcellement St-Jean Quatre-Bornes Quatre bornes"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/27-cart_default\/brown-bear-printed-sweater.jpg","title":"Guildhall Pre-Printed HR File Yellow (Pack of 50)","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/2-brown-bear-printed-sweater.html","id_product":"2","time":"Puchare By VMagde 42 minutes ago","phone":"xxx61843","address":"48, Lataniers Avenue Morcellement St-Jean Quatre-Bornes Quatre bornes"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/32-cart_default\/mug-the-best-is-yet-to-come.jpg","title":"Zebra 102 x 152mm 1000D Industrial Printer Label Paper","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/6-mug-the-best-is-yet-to-come.html","id_product":"6","time":"Puchare By VMagde 12 minutes ago","phone":"xxx61843","address":"48, Lataniers Avenue Morcellement St-Jean Quatre-Bornes Quatre bornes"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/40-cart_default\/brown-bear-cushion.jpg","title":"Parker Jotter Blue Stainless Steel Chrome Ballpoint Pen","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/10-brown-bear-cushion.html","id_product":"10","time":"Puchare By VMagde 37 minutes ago","phone":"xxx61843","address":"48, Lataniers Avenue Morcellement St-Jean Quatre-Bornes Quatre bornes"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/58-cart_default\/hummingbird-printed-t-shirt.jpg","title":"Bankers Box Blue\/White Heavy Duty Maxi Storage Box","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/paper\/1-hummingbird-printed-t-shirt.html","id_product":"1","time":"Puchare By VMagde 43 minutes ago","phone":"xxx61843","address":"48, Lataniers Avenue Morcellement St-Jean Quatre-Bornes Quatre bornes"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/28-cart_default\/the-adventure-begins-framed-poster.jpg","title":"Collins Elite Refill Week to View Manager","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/4-the-adventure-begins-framed-poster.html","id_product":"4","time":"Puchare By sdani 58 minutes ago","phone":"xxx","address":"street 123 new york"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/27-cart_default\/brown-bear-printed-sweater.jpg","title":"Guildhall Pre-Printed HR File Yellow (Pack of 50)","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/2-brown-bear-printed-sweater.html","id_product":"2","time":"Puchare By sdani 57 minutes ago","phone":"xxx","address":"street 123 new york"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/32-cart_default\/mug-the-best-is-yet-to-come.jpg","title":"Zebra 102 x 152mm 1000D Industrial Printer Label Paper","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/6-mug-the-best-is-yet-to-come.html","id_product":"6","time":"Puchare By sdani 5 minutes ago","phone":"xxx","address":"street 123 new york"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/40-cart_default\/brown-bear-cushion.jpg","title":"Parker Jotter Blue Stainless Steel Chrome Ballpoint Pen","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/10-brown-bear-cushion.html","id_product":"10","time":"Puchare By sdani 26 minutes ago","phone":"xxx","address":"street 123 new york"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/58-cart_default\/hummingbird-printed-t-shirt.jpg","title":"Bankers Box Blue\/White Heavy Duty Maxi Storage Box","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/paper\/1-hummingbird-printed-t-shirt.html","id_product":"1","time":"Puchare By sdani 13 minutes ago","phone":"xxx","address":"street 123 new york"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/28-cart_default\/the-adventure-begins-framed-poster.jpg","title":"Collins Elite Refill Week to View Manager","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/4-the-adventure-begins-framed-poster.html","id_product":"4","time":"Puchare By Ttes 23 minutes ago","phone":"xxx456789","address":"dsad asd dasd sad ad  d"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/27-cart_default\/brown-bear-printed-sweater.jpg","title":"Guildhall Pre-Printed HR File Yellow (Pack of 50)","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/2-brown-bear-printed-sweater.html","id_product":"2","time":"Puchare By Ttes 55 minutes ago","phone":"xxx456789","address":"dsad asd dasd sad ad  d"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/32-cart_default\/mug-the-best-is-yet-to-come.jpg","title":"Zebra 102 x 152mm 1000D Industrial Printer Label Paper","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/6-mug-the-best-is-yet-to-come.html","id_product":"6","time":"Puchare By Ttes 48 minutes ago","phone":"xxx456789","address":"dsad asd dasd sad ad  d"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/40-cart_default\/brown-bear-cushion.jpg","title":"Parker Jotter Blue Stainless Steel Chrome Ballpoint Pen","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/10-brown-bear-cushion.html","id_product":"10","time":"Puchare By Ttes 56 minutes ago","phone":"xxx456789","address":"dsad asd dasd sad ad  d"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/58-cart_default\/hummingbird-printed-t-shirt.jpg","title":"Bankers Box Blue\/White Heavy Duty Maxi Storage Box","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/paper\/1-hummingbird-printed-t-shirt.html","id_product":"1","time":"Puchare By Ttes 11 minutes ago","phone":"xxx456789","address":"dsad asd dasd sad ad  d"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/28-cart_default\/the-adventure-begins-framed-poster.jpg","title":"Collins Elite Refill Week to View Manager","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/4-the-adventure-begins-framed-poster.html","id_product":"4","time":"Puchare By ergreg 26 minutes ago","phone":"xxx35215346234","address":"f3tgrg argrg"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/27-cart_default\/brown-bear-printed-sweater.jpg","title":"Guildhall Pre-Printed HR File Yellow (Pack of 50)","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/2-brown-bear-printed-sweater.html","id_product":"2","time":"Puchare By ergreg 27 minutes ago","phone":"xxx35215346234","address":"f3tgrg argrg"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/32-cart_default\/mug-the-best-is-yet-to-come.jpg","title":"Zebra 102 x 152mm 1000D Industrial Printer Label Paper","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/writing-supplies\/6-mug-the-best-is-yet-to-come.html","id_product":"6","time":"Puchare By ergreg 1 minutes ago","phone":"xxx35215346234","address":"f3tgrg argrg"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/40-cart_default\/brown-bear-cushion.jpg","title":"Parker Jotter Blue Stainless Steel Chrome Ballpoint Pen","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/office-supplies-and-stationery\/10-brown-bear-cushion.html","id_product":"10","time":"Puchare By ergreg 55 minutes ago","phone":"xxx35215346234","address":"f3tgrg argrg"},{"image":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/58-cart_default\/hummingbird-printed-t-shirt.jpg","title":"Bankers Box Blue\/White Heavy Duty Maxi Storage Box","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/paper\/1-hummingbird-printed-t-shirt.html","id_product":"1","time":"Puchare By ergreg 19 minutes ago","phone":"xxx35215346234","address":"f3tgrg argrg"}];
var disable_review_form_txt = "Not exists a criterion to review for this product or this language";
var enable_dropdown_defaultcart = 1;
var enable_flycart_effect = 1;
var enable_notification = 0;
var height_cart_item = "135";
var isLogged = false;
var leo_push = 0;
var leo_search_url = "blog.html\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/module\/leoproductsearch\/productsearch";
var leo_token = "db62e42ed679a2b3256f637c8b160d22";
var leoproductsearch_static_token = "db62e42ed679a2b3256f637c8b160d22";
var leoproductsearch_token = "bd75a0c043e7698d8860d5ff006b2279";
var lf_is_gen_rtl = false;
var lps_show_product_img = "1";
var lps_show_product_price = "1";
var lql_ajax_url = "blog.html\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/module\/leoquicklogin\/leocustomer";
var lql_is_gen_rtl = false;
var lql_module_dir = "#\/prestashop\/leo_stationero_demo\/modules\/leoquicklogin\/";
var lql_myaccount_url = "blog.html\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/my-account";
var lql_redirect = "0";
var number_cartitem_display = 3;
var numpro_display = "100";
var prestashop = {"cart":{"products":[],"totals":{"total":{"type":"total","label":"Total","amount":0,"value":"$0.00"},"total_including_tax":{"type":"total","label":"Total (tax incl.)","amount":0,"value":"$0.00"},"total_excluding_tax":{"type":"total","label":"Total (tax excl.)","amount":0,"value":"$0.00"}},"subtotals":{"products":{"type":"products","label":"Subtotal","amount":0,"value":"$0.00"},"discounts":null,"shipping":{"type":"shipping","label":"Shipping","amount":0,"value":""},"tax":{"type":"tax","label":"Taxes","amount":0,"value":"$0.00"}},"products_count":0,"summary_string":"0 items","vouchers":{"allowed":0,"added":[]},"discounts":[],"minimalPurchase":0,"minimalPurchaseRequired":""},"currency":{"id":1,"name":"US Dollar","iso_code":"USD","iso_code_num":"840","sign":"$"},"customer":{"lastname":null,"firstname":null,"email":null,"birthday":null,"newsletter":null,"newsletter_date_add":null,"optin":null,"website":null,"company":null,"siret":null,"ape":null,"is_logged":false,"gender":{"type":null,"name":null},"addresses":[]},"language":{"name":"English (English)","iso_code":"en","locale":"en-US","language_code":"en-us","is_rtl":"0","date_format_lite":"m\/d\/Y","date_format_full":"m\/d\/Y H:i:s","id":1},"page":{"title":"","canonical":null,"meta":{"title":"Blog - Leo Stationero","description":"","keywords":"","robots":"index"},"page_name":"module-leoblog-list","body_classes":{"lang-en":true,"lang-rtl":false,"country-US":true,"currency-USD":true,"layout-full-width":true,"page-list":true,"tax-display-disabled":true},"admin_notifications":[]},"shop":{"name":"Leo Stationero","logo":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/stationero-logo-1631178759.jpg","stores_icon":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/logo_stores.png","favicon":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/favicon.ico"},"urls":{"base_url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/","current_url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/blog.html","shop_domain_url":"https:\/\/demo74.leotheme.com","img_ps_url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/","img_cat_url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/c\/","img_lang_url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/l\/","img_prod_url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/p\/","img_manu_url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/m\/","img_sup_url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/su\/","img_ship_url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/s\/","img_store_url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/st\/","img_col_url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/co\/","img_url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/themes\/leo_stationero\/assets\/img\/","css_url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/themes\/leo_stationero\/assets\/css\/","js_url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/themes\/leo_stationero\/assets\/js\/","pic_url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/upload\/","pages":{"address":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/address","addresses":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/addresses","authentication":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/login","cart":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/cart","category":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/index.php?controller=category","cms":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/index.php?controller=cms","contact":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/contact-us","discount":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/discount","guest_tracking":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/guest-tracking","history":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/order-history","identity":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/identity","index":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/","my_account":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/my-account","order_confirmation":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/order-confirmation","order_detail":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/index.php?controller=order-detail","order_follow":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/order-follow","order":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/order","order_return":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/index.php?controller=order-return","order_slip":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/credit-slip","pagenotfound":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/page-not-found","password":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/password-recovery","pdf_invoice":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/index.php?controller=pdf-invoice","pdf_order_return":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/index.php?controller=pdf-order-return","pdf_order_slip":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/index.php?controller=pdf-order-slip","prices_drop":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/prices-drop","product":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/index.php?controller=product","search":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/search","sitemap":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/sitemap","stores":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/stores","supplier":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/supplier","register":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/login?create_account=1","order_login":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/order?login=1"},"alternative_langs":{"en-us":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/blog.html?module=leoblog","fr-fr":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/fr\/blog.html?module=leoblog","de-de":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/de\/blog.html?module=leoblog","it-it":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/it\/blog.html?module=leoblog","es-es":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/es\/blog.html?module=leoblog","ar-sa":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/ar\/blog.html?module=leoblog"},"theme_assets":"\/prestashop\/leo_stationero_demo\/themes\/leo_stationero\/assets\/","actions":{"logout":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/?mylogout="},"no_picture_image":{"bySize":{"small_default":{"url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/p\/en-default-small_default.jpg","width":98,"height":98},"cart_default":{"url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/p\/en-default-cart_default.jpg","width":125,"height":125},"medium_default":{"url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/p\/en-default-medium_default.jpg","width":250,"height":250},"home_default":{"url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/p\/en-default-home_default.jpg","width":452,"height":452},"large_default":{"url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/p\/en-default-large_default.jpg","width":800,"height":800}},"small":{"url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/p\/en-default-small_default.jpg","width":98,"height":98},"medium":{"url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/p\/en-default-medium_default.jpg","width":250,"height":250},"large":{"url":"https:\/\/demo74leotheme.b-cdn.net\/prestashop\/leo_stationero_demo\/img\/p\/en-default-large_default.jpg","width":800,"height":800},"legend":""}},"configuration":{"display_taxes_label":false,"display_prices_tax_incl":false,"is_catalog":false,"show_prices":true,"opt_in":{"partner":true},"quantity_discount":{"type":"discount","label":"Unit discount"},"voucher_enabled":0,"return_enabled":0},"field_required":[],"breadcrumb":{"links":[{"title":"Home","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/"},{"title":"Blog","url":"https:\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/blog.html"}],"count":2},"link":{"protocol_link":"https:\/\/","protocol_content":"https:\/\/"},"time":1706013965,"static_token":"db62e42ed679a2b3256f637c8b160d22","token":"bd75a0c043e7698d8860d5ff006b2279","debug":false};
var productcompare_add = "The product has been added to list compare";
var productcompare_add_error = "An error occurred while adding. Please try again";
var productcompare_max_item = "You cannot add more than 3 product(s) to the product comparison";
var productcompare_remove = "The product was successfully removed from list compare";
var productcompare_remove_error = "An error occurred while removing. Please try again";
var productcompare_url = "blog.html\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/module\/leofeature\/productscompare";
var productcompare_viewlistcompare = "View list compare";
var psemailsubscription_subscription = "blog.html\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/module\/ps_emailsubscription\/subscription";
var psr_icon_color = "#F19D76";
var review_error = "An error occurred while processing your request. Please try again";
var show_popup = 1;
var text_no_product = "Don't have products";
var text_results_count = "results";
var type_dropdown_defaultcart = "dropdown";
var type_flycart_effect = "fade";
var url_leoproductattribute = "blog.html\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/module\/leofeature\/LeoProductAttribute";
var width_cart_item = "265";
var wishlist_add = "The product was successfully added to your wishlist";
var wishlist_cancel_txt = "Cancel";
var wishlist_confirm_del_txt = "Delete selected item?";
var wishlist_del_default_txt = "Cannot delete default wishlist";
var wishlist_email_txt = "Email";
var wishlist_loggin_required = "You must be logged in to manage your wishlist";
var wishlist_ok_txt = "Ok";
var wishlist_quantity_required = "You must enter a quantity";
var wishlist_remove = "The product was successfully removed from your wishlist";
var wishlist_reset_txt = "Reset";
var wishlist_send_txt = "Send";
var wishlist_send_wishlist_txt = "Send wishlist";
var wishlist_url = "blog.html\/\/demo74.leotheme.com\/prestashop\/leo_stationero_demo\/en\/module\/leofeature\/mywishlist";
var wishlist_viewwishlist = "View your wishlist";


var choosefile_text = "Choose file";
	var turnoff_popup_text = "Do not show this popup again";
	
	var size_item_quickview = 113;
	var style_scroll_quickview = 'vertical';
	
	var size_item_page = 113;
	var style_scroll_page = 'horizontal';
	
	var size_item_quickview_attr = 113;	
	var style_scroll_quickview_attr = 'vertical';
	
	var size_item_popup = 113;
	var style_scroll_popup = 'vertical';
	
	var FancyboxI18nClose = "Close";
	var FancyboxI18nNext = "Next";
	var FancyboxI18nPrev = "Previous";
	var current_link = "index.html";		
	var currentURL = window.location;
	currentURL = String(currentURL);
	currentURL = currentURL.replace("https:///","").replace("http://","").replace("www.","").replace( /#\w*/, "" );
	current_link = current_link.replace("https:///","").replace("http://","").replace("www.","");
	var text_warning_select_txt = "Please select One to remove?";
	var text_confirm_remove_txt = "Are you sure to remove footer row?";
	var close_bt_txt = "Close";
	var list_menu = [];
	var list_menu_tmp = {};
	var list_tab = [];
	var isHomeMenu = 0;


    var choosefile_text = "Choose file";
    var turnoff_popup_text = "Do not show this popup again";

    var size_item_quickview = 113;
    var style_scroll_quickview = 'vertical';

    var size_item_page = 113;
    var style_scroll_page = 'horizontal';

    var size_item_quickview_attr = 113;
    var style_scroll_quickview_attr = 'vertical';

    var size_item_popup = 113;
    var style_scroll_popup = 'vertical';

    //contact-us

    var apGMap = {"translation_5":"Click to larger Map","logo_store":"logo_stores.png","img_store_dir":"\/prestashop\/leo_stationero_demo\/img\/st\/","img_ps_dir":"\/prestashop\/leo_stationero_demo\/img\/"};
    var marker_list_form_15631990511139685 = [{"id":"1","id_store":"1","id_country":"21","id_state":"12","city":"Miami","postcode":"33135","latitude":"25.76500500","longitude":"-80.24379700","phone":null,"fax":null,"email":null,"active":"1","date_add":"2021-09-09 10:49:05","date_upd":"2021-09-09 10:49:05","id_lang":"1","name":"Dade County","address1":"3030 SW 8th St Miami","address2":null,"hours":" [[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"10:00AM - 04:00PM\"],[\"10:00AM - 04:00PM\"]]","note":null,"other":"<p><strong class=\"dark\" style=\"clear:both;\">Monday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Tuesday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Wednesday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Thursday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Friday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Saturday:<\/strong>&nbsp<span>10:00AM - 04:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Sunday:<\/strong>&nbsp<span>10:00AM - 04:00PM<\/span><\/p>","address":"3030 SW 8th St Miami<br \/>Miami, FL 33135","has_store_picture":true},{"id":"2","id_store":"2","id_country":"21","id_state":"12","city":"Miami","postcode":"33304","latitude":"26.13793600","longitude":"-80.13943500","phone":null,"fax":null,"email":null,"active":"1","date_add":"2021-09-09 10:49:05","date_upd":"2021-09-09 10:49:05","id_lang":"1","name":"E Fort Lauderdale","address1":"1000 Northeast 4th Ave Fort Lauderdale","address2":null,"hours":" [[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"10:00AM - 04:00PM\"],[\"10:00AM - 04:00PM\"]]","note":null,"other":"<p><strong class=\"dark\" style=\"clear:both;\">Monday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Tuesday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Wednesday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Thursday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Friday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Saturday:<\/strong>&nbsp<span>10:00AM - 04:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Sunday:<\/strong>&nbsp<span>10:00AM - 04:00PM<\/span><\/p>","address":"1000 Northeast 4th Ave Fort Lauderdale<br \/>Miami, FL 33304","has_store_picture":true},{"id":"3","id_store":"3","id_country":"21","id_state":"12","city":"Miami","postcode":"33026","latitude":"26.00998700","longitude":"-80.29447200","phone":null,"fax":null,"email":null,"active":"1","date_add":"2021-09-09 10:49:06","date_upd":"2021-09-09 10:49:06","id_lang":"1","name":"Pembroke Pines","address1":"11001 Pines Blvd Pembroke Pines","address2":null,"hours":" [[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"10:00AM - 04:00PM\"],[\"10:00AM - 04:00PM\"]]","note":null,"other":"<p><strong class=\"dark\" style=\"clear:both;\">Monday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Tuesday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Wednesday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Thursday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Friday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Saturday:<\/strong>&nbsp<span>10:00AM - 04:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Sunday:<\/strong>&nbsp<span>10:00AM - 04:00PM<\/span><\/p>","address":"11001 Pines Blvd Pembroke Pines<br \/>Miami, FL 33026","has_store_picture":true},{"id":"4","id_store":"4","id_country":"21","id_state":"12","city":"Miami","postcode":"33133","latitude":"25.73629600","longitude":"-80.24479700","phone":null,"fax":null,"email":null,"active":"1","date_add":"2021-09-09 10:49:06","date_upd":"2021-09-09 10:49:06","id_lang":"1","name":"Coconut Grove","address1":"2999 SW 32nd Avenue","address2":null,"hours":" [[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"10:00AM - 04:00PM\"],[\"10:00AM - 04:00PM\"]]","note":null,"other":"<p><strong class=\"dark\" style=\"clear:both;\">Monday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Tuesday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Wednesday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Thursday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Friday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Saturday:<\/strong>&nbsp<span>10:00AM - 04:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Sunday:<\/strong>&nbsp<span>10:00AM - 04:00PM<\/span><\/p>","address":"2999 SW 32nd Avenue<br \/>Miami, FL 33133","has_store_picture":true},{"id":"5","id_store":"5","id_country":"21","id_state":"12","city":"Miami","postcode":"33181","latitude":"25.88674000","longitude":"-80.16329200","phone":null,"fax":null,"email":null,"active":"1","date_add":"2021-09-09 10:49:06","date_upd":"2021-09-09 10:49:06","id_lang":"1","name":"N Miami\/Biscayne","address1":"12055 Biscayne Blvd","address2":null,"hours":" [[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"10:00AM - 04:00PM\"],[\"10:00AM - 04:00PM\"]]","note":null,"other":"<p><strong class=\"dark\" style=\"clear:both;\">Monday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Tuesday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Wednesday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Thursday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Friday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Saturday:<\/strong>&nbsp<span>10:00AM - 04:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Sunday:<\/strong>&nbsp<span>10:00AM - 04:00PM<\/span><\/p>","address":"12055 Biscayne Blvd<br \/>Miami, FL 33181","has_store_picture":true}];
    var marker_center = {"id":"1","id_store":"1","id_country":"21","id_state":"12","city":"Miami","postcode":"33135","latitude":"25.76500500","longitude":"-80.24379700","phone":null,"fax":null,"email":null,"active":"1","date_add":"2021-09-09 10:49:05","date_upd":"2021-09-09 10:49:05","id_lang":"1","name":"Dade County","address1":"3030 SW 8th St Miami","address2":null,"hours":" [[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"09:00AM - 07:00PM\"],[\"10:00AM - 04:00PM\"],[\"10:00AM - 04:00PM\"]]","note":null,"other":"<p><strong class=\"dark\" style=\"clear:both;\">Monday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Tuesday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Wednesday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Thursday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Friday:<\/strong>&nbsp<span>09:00AM - 07:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Saturday:<\/strong>&nbsp<span>10:00AM - 04:00PM<\/span><\/p><p><strong class=\"dark\" style=\"clear:both;\">Sunday:<\/strong>&nbsp<span>10:00AM - 04:00PM<\/span><\/p>","address":"3030 SW 8th St Miami<br \/>Miami, FL 33135","has_store_picture":true}
          var markers_form_15631990511139685 = [];

          function displayAMarker(data, obj, id) {
              var m = markers_form_15631990511139685[id];
              google.maps.event.trigger(m, 'click');
          }
          function initializeListStore(data, name) {
              var obj = $("#" + name + " ul");
              synSize(name);
              for(var i = 0; i < data.length; i++) {
                  var s = data[i];
                  obj.append("<li class='item-gmap-store' marker-id='" + i + "'"
                          + "onclick='return displayAMarker(marker_list_form_15631990511139685, this, " + i + ");'>"
                          + "<strong><b><span class='icon-map-marker'></span> "
                          + s.name + "</b></strong><br/><text>" + s.address + "</text>");
              }
          }
          function initLeoMap(){
              initializeGmap('',
                      marker_list_form_15631990511139685,
                      markers_form_15631990511139685,
                      "map-canvas-form_15631990511139685",
                      11);

              if("".length > 0) {
                  initializeListStore(
                          marker_list_form_15631990511139685,
                          "gmap-stores-list-form_15631990511139685");
              }

          }

      // CODE HERE not write in *.js, compatility with Chrome
      function initializeGmap(map, data, markers, nameGmap, zoom)
      {
          map = new google.maps.Map(document.getElementById(nameGmap), {
              center: new google.maps.LatLng(marker_center.latitude, marker_center.longitude),
              zoom: zoom,
              mapTypeId: 'roadmap'
          });

          if(data.length>0)
          {
              setTimeout(createMarkers(map, markers, data), 1500);
          }
          else
          {
              markers[0] = new google.maps.Marker({
                  position: new google.maps.LatLng(marker_center.latitude, marker_center.longitude),
                  animation: google.maps.Animation.DROP,
                  map: map,
              });
          }
      };

      function createMarkers(map, markers, data) {
          // dataMarkers
          for (var i = 0; i < data.length; i++) {
              var obj = data[i];
              var lg = parseFloat(obj.longitude);
              var lt = parseFloat(obj.latitude);
              var name = obj.name;
              var address = obj.address;
              var other = obj.other;
              var id_store = obj.id_store;
              var has_store_picture = obj.has_store_picture;

              var latlng = new google.maps.LatLng(lt, lg);
              var html = "<div style='min-width:200px;'><b>" + name + "</b><br/>" + address;
              html += (has_store_picture ? "<br /><br /><p><img src='" + apGMap.img_store_dir + parseInt(id_store) + ".jpg' alt='' /></p>" : "");
              html += other + "<a href='http://maps.google.com/maps?saddr=&daddr=" + latlng + "' target='_blank'>" + apGMap.translation_5 +"<\/a>";
              html += "</div>";

              var infowindow = new google.maps.InfoWindow({
                  content: "loading..."
              });

              var marker = new google.maps.Marker({
                  position: new google.maps.LatLng(lt, lg),
                  animation: google.maps.Animation.DROP,
                  map: map,
                  icon: apGMap.img_ps_dir + apGMap.logo_store,
                  title: obj.name,
                  html: html
              });

              google.maps.event.addListener(marker, "click", function () {
                  infowindow.setContent(this.html);
                  infowindow.open(map, this);
              });
              markers[i] = marker;
          }
      }

      var blocksearch_type = 'top';

      ap_list_functions.push(function(){
        $('<script>')
        .attr('type', 'text/javascript')
        .attr('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCWJmaoDNR_l3GVkP6uRnMzsGG5iuuU_AM&amp;callback=initLeoMap')
        .appendTo('head');
    });
    var blocksearch_type = 'top';
    //blog detail

    (function() {
        window.___gcfg = {
            lang: 'en'
        }; // Define button default language here
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = 'https://apis.google.com/js/plusone.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
    })();


    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    //PRODUCTS

    if (window.jQuery) {
        $(document).ready(function(){
            if (prestashop.page.page_name == 'category'){
                setDefaultListGrid();
            }
        });
    }
//dropdown header
$(function () {
    $(".my_dropdown .dropdown-toggle").on("click", function (e) {
        var current = $(this).next();
        var grandparent = $(this).parent().parent();
        if ($(this).hasClass('left-caret') || $(this).hasClass('right-caret'))
            $(this).toggleClass('right-caret left-caret');
        grandparent.find('.left-caret').not(this).toggleClass('right-caret left-caret');
        grandparent.find(".my_dropdown_menu:visible").not(current).hide();
        current.toggle();
        e.stopPropagation();
    });

    $(".my_dropdown_menu li a.trigger").on("click", function () {
        var current = $(this).next();
        var grandparent = $(this).parent();
        if ($(this).hasClass('left-caret') || $(this).hasClass('right-caret'))
            $(this).toggleClass('right-caret left-caret');
        grandparent.find('.left-caret').not(this).toggleClass('right-caret left-caret');
        grandparent.find(".my_dropdown_menu:visible").not(current).hide();
        current.toggle();
    });
    
    $(".my_dropdown_menu > li > a:not(.trigger)").on("click", function () {
        var root = $(this).closest('.my_dropdown');
        root.find('.left-caret').toggleClass('right-caret left-caret');
        root.find('.my_dropdown_menu:visible').hide();
    });
});

//home
ap_list_functions.push(function() {
    if ($('#carousel-3232422016').parents('.tab-pane').length) {
        if (!$('#carousel-3232422016').parents('.tab-pane').hasClass('active')) {
            var width_owl_active_tab = $('#carousel-3232422016').parents('.tab-pane').siblings('.active').find('.owl-carousel').width();
            $('#carousel-3232422016').width(width_owl_active_tab);
        }
    }
    $('#carousel-3232422016').imagesLoaded(function() {
        $('#carousel-3232422016').owlCarousel({
            items: 5,
            itemsDesktop: [1200, 3],
            itemsDesktopSmall: [992, 3],
            itemsTablet: [768, 2],
            itemsMobile: [576, 1],
            itemsCustom: false,
            singleItem: false, // true : show only 1 item
            itemsScaleUp: false,
            slideSpeed: 200, //  change speed when drag and drop a item
            paginationSpeed: 800, // change speed when go next page
            autoPlay: false, // time to show each item
            stopOnHover: false,
            navigation: false,
            navigationText: ["&lsaquo;", "&rsaquo;"],
            scrollPerPage: false,
            pagination: false, // show bullist
            paginationNumbers: false, // show number
            responsive: true,
            responsiveRefreshRate: 0,
            lazyLoad: false,
            lazyFollow: false, // true : go to page 7th and load all images page 1...7. false : go to page 7th and load only images of page 7th
            lazyEffect: "fade",
            autoHeight: false,
            mouseDrag: true,
            touchDrag: true,
            addClassActive: true,
            direction: false,
            afterInit: OwlLoaded,
            afterAction: SetOwlCarouselFirstLast,
        });
    });
});

function OwlLoaded(el) {
    el.removeClass('owl-loading').addClass('owl-loaded').parents('.owl-row').addClass('hide-loading');
    if ($(el).parents('.tab-pane').length && !$(el).parents('.tab-pane').hasClass('active'))
        el.width('100%');
};

//carousel

ap_list_functions.push(function() {
    $('#carousel-2612739272').imagesLoaded(function() {
        $('#carousel-2612739272').owlCarousel({
            items: 1,
            itemsDesktop: [1200, 1],
            itemsDesktopSmall: [992, 1],
            itemsTablet: [768, 1],
            itemsMobile: [576, 1],
            itemsCustom: false,
            singleItem: false, // true : show only 1 item
            itemsScaleUp: false,
            slideSpeed: 200, //  change speed when drag and drop a item
            paginationSpeed: 800, // change speed when go next page
            autoPlay: false, // time to show each item
            stopOnHover: false,
            navigation: false,
            navigationText: ["&lsaquo;", "&rsaquo;"],
            scrollPerPage: false,
            pagination: true, // show bullist
            paginationNumbers: false, // show number
            responsive: true,
            lazyLoad: false,
            lazyFollow: false, // true : go to page 7th and load all images page 1...7. false : go to page 7th and load only images of page 7th
            lazyEffect: "fade",
            autoHeight: false,
            mouseDrag: true,
            touchDrag: true,
            addClassActive: true,
            direction: false,
            afterInit: OwlLoaded,
            afterAction: SetOwlCarouselFirstLast,
        });
    });
});

function OwlLoaded(el) {
    el.removeClass('owl-loading').addClass('owl-loaded').parents('.owl-row').addClass('hide-loading');
};



//HOME SLİDER
ap_list_functions.push(function() {
    if ($('#carousel-2995517547').parents('.tab-pane').length) {
        if (!$('#carousel-2995517547').parents('.tab-pane').hasClass('active')) {
            var width_owl_active_tab = $('#carousel-2995517547').parents('.tab-pane').siblings('.active').find('.owl-carousel').width();
            $('#carousel-2995517547').width(width_owl_active_tab);
        }
    }
    $('#carousel-2995517547').imagesLoaded(function() {
        $('#carousel-2995517547').owlCarousel({
            items: 5,
            itemsDesktop: [1200, 3],
            itemsDesktopSmall: [992, 3],
            itemsTablet: [768, 2],
            itemsMobile: [576, 1],
            itemsCustom: false,
            singleItem: false, // true : show only 1 item
            itemsScaleUp: false,
            slideSpeed: 200, //  change speed when drag and drop a item
            paginationSpeed: 800, // change speed when go next page
            autoPlay: false, // time to show each item
            stopOnHover: false,
            navigation: false,
            navigationText: ["&lsaquo;", "&rsaquo;"],
            scrollPerPage: false,
            pagination: false, // show bullist
            paginationNumbers: false, // show number
            responsive: true,
            responsiveRefreshRate: 0,
            lazyLoad: false,
            lazyFollow: false, // true : go to page 7th and load all images page 1...7. false : go to page 7th and load only images of page 7th
            lazyEffect: "fade",
            autoHeight: false,
            mouseDrag: true,
            touchDrag: true,
            addClassActive: true,
            direction: false,
            afterInit: OwlLoaded,
            afterAction: SetOwlCarouselFirstLast,
        });
    });
});

function OwlLoaded(el) {
    el.removeClass('owl-loading').addClass('owl-loaded').parents('.owl-row').addClass('hide-loading');
    if ($(el).parents('.tab-pane').length && !$(el).parents('.tab-pane').hasClass('active'))
        el.width('100%');
};