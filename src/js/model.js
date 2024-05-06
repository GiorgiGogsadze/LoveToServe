import { arrayLoop } from "./helper";
export const state = {
  table: {
    currentTable: +window.localStorage.getItem("currentTable") || 1,
    tableAmount: 10,
  },
  language: {
    current: window.localStorage.getItem("currentLanguage") || "eng",
    all: [
      { value: "geo", flag: "🇬🇪" },
      { value: "eng", flag: "🇬🇧" },
    ],
  },
  star: {},
  navItems: [
    {
      title: `comeuli`,
      name: { geo: `ცომეული`, eng: `Pastry` },
      image: require("../img/navs/comeuli.jpg"),
    },
    {
      title: `hot`,
      name: { geo: `ცხელი კერძები`, eng: `Hot Dishes` },
      image: require("../img/navs/hot.jpg"),
    },
    {
      title: `fast-food`,
      name: { geo: `სწრაფი კვება`, eng: `Fast Food` },
      image: require("../img/navs/fast-food.jpg"),
    },
    {
      title: `soups`,
      name: { geo: `წვნიანები`, eng: `Soups` },
      image: require("../img/navs/soups.jpg"),
    },
    {
      title: `salads`,
      name: { geo: `სალათები`, eng: `Salads` },
      image: require("../img/navs/salads.jpg"),
    },
    {
      title: `suggestions`,
      name: { geo: `შემოთავაზებული`, eng: `Suggestions` },
      image: require("../img/navs/suggestions.jpg"),
    },
    {
      title: `dessert`,
      name: { geo: `დესერტი`, eng: `Dessert` },
      image: require("../img/navs/dessert.jpg"),
    },
    {
      title: `drinks`,
      name: { geo: `სასმელები`, eng: `Drinks` },
      image: require("../img/navs/drinks.jpg"),
    },
  ],
  food: [
    {
      tag: `comeuli`,
      title: `blini`,
      name: { geo: `ბლინი`, eng: `Pancake` },
      image: require(`../img/cards/1-blini.jpg`),
      price: 5,
      info: {
        geo: [
          `ფასი: 1 თეფში — 5ლ.`,
          `6 ცალი`,
          `დალოდება მოგიწევთ მინ. 5, მაქს. 15 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 5₾`,
          `6 piece`,
          `You will have to wait for min. 5, Max. 15 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `comeuli`,
      title: `bubliki`,
      name: { geo: `ბუბლიკი`, eng: `Bagel` },
      image: require("../img/cards/1-bubliki.jpg"),
      price: 1,
      info: {
        geo: [`ფასი: 1 ცალი — 1ლ.`, `დალოდება მოგიწევთ მინ. 5, მაქს. 10 წუთი`],
        eng: [
          `Price: 1 piece — 1₾`,
          `You will have to wait for min. 5, Max. 10 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `comeuli`,
      title: `funtusha`,
      name: { geo: `ფუნთუშა`, eng: `Cookie` },
      image: require("../img/cards/1-funtusha.jpg"),
      price: 2,
      info: {
        geo: [`ფასი: 1 ცალი — 2ლ.`, `დალოდება მოგიწევთ მინ. 10, მაქს. 15 წუთი`],
        eng: [
          `Price: 1 piece — 2₾`,
          `You will have to wait for min. 10, Max. 15 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `comeuli`,
      title: `khachapuri`,
      name: { geo: `ხაჭაპური`, eng: `Khachapuri` },
      image: require("../img/cards/1-khachapuri.jpg"),
      info: {
        geo: [`ფასი: სხვადასხვა`, `დალოდება მოგიწევთ მინ. 20, მაქს. 25 წუთი`],
        eng: [
          `Price: different`,
          `You will have to wait for min. 20, Max. 25 minutes`,
        ],
      },
      btn: `select-button`,
    },
    {
      tag: `comeuli`,
      title: `khinkali`,
      name: { geo: `ხინკალი`, eng: `Khinkali` },
      image: require("../img/cards/1-khinkali.jpg"),
      price: 1.5,
      info: {
        geo: [
          `ფასი: 1 ცალი — 1.5ლ.`,
          `დალოდება მოგიწევთ მინ. 15, მაქს. 25 წუთი`,
        ],
        eng: [
          `Price: 1 piece — 1.5₾`,
          `You will have to wait for min. 15, Max. 25 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `comeuli`,
      title: `kubdari`,
      name: { geo: `კუბდარი`, eng: `Kubdari` },
      image: require("../img/cards/1-kubdari.jpg"),
      price: 15,
      info: {
        geo: [
          `ფასი: 1 თეფში — 15ლ.`,
          `დალოდება მოგიწევთ მინ. 15, მაქს. 25 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 15₾`,
          `You will have to wait for min. 15, Max. 25 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `comeuli`,
      title: `lobiani`,
      name: { geo: `ლობიანი`, eng: `Lobiani` },
      image: require("../img/cards/1-lobiani.jpg"),
      price: 12,
      info: {
        geo: [
          `ფასი: 1 თეფში — 12ლ.`,
          `დალოდება მოგიწევთ მინ. 15, მაქს. 25 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 12₾`,
          `You will have to wait for min. 15, Max. 25 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `comeuli`,
      title: `pizza`,
      name: { geo: `პიცა`, eng: `Pizza` },
      image: require("../img/cards/1-pizza.jpg"),
      info: {
        geo: [`ფასი: სხვადასხვა`, `დალოდება მოგიწევთ მინ. 15, მაქს. 25 წუთი`],
        eng: [
          `Price: different`,
          `You will have to wait for min. 15, Max. 25 minutes`,
        ],
      },
      btn: `select-button`,
    },
    {
      tag: `hot`,
      title: `kababi`,
      name: { geo: `ქაბაბი`, eng: `Kebab` },
      image: require("../img/cards/2-kababi.jpg"),
      price: 8,
      info: {
        geo: [
          `ფასი: 1 შამფური — 8ლ.`,
          `300 გრამი`,
          `დალოდება მოგიწევთ მინ. 15, მაქს. 25 წუთი`,
        ],
        eng: [
          `Price: 1 skewer — 8₾`,
          `300 gram`,
          `You will have to wait for min. 15, Max. 25 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `hot`,
      title: `kalmakhi`,
      name: { geo: `კალმახი`, eng: `Trout` },
      image: require("../img/cards/2-kalmakhi.jpg"),
      price: 17,
      info: {
        geo: [
          `ფასი: 1 თეფში — 17ლ.`,
          `დალოდება მოგიწევთ მინ. 15, მაქს. 25 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 17₾`,
          `You will have to wait for min. 15, Max. 25 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `hot`,
      title: `khbos-chashushuli`,
      name: { geo: `ხბოს ჩაშუშული`, eng: `Veal stew` },
      image: require("../img/cards/2-khbos-chashushuli.jpg"),
      price: 18,
      info: {
        geo: [
          `ფასი: 1 თეფში — 18ლ.`,
          `200 გრამი`,
          `დალოდება მოგიწევთ მინ. 18, მაქს. 26 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 18₾`,
          `20 gram`,
          `You will have to wait for min. 18, Max. 26 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `hot`,
      title: `lobio`,
      name: { geo: `ლობიო`, eng: `Beans` },
      image: require("../img/cards/2-lobio.jpg"),
      price: 8,
      info: {
        geo: [
          `ფასი: 1 ქოთანი — 8ლ.`,
          `200 გრამი`,
          `დალოდება მოგიწევთ მინ. 20, მაქს. 30 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 8₾`,
          `200 gram`,
          `You will have to wait for min. 20, Max. 30 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `hot`,
      title: `mwvadi`,
      name: { geo: `მწვადი`, eng: `Georgian Barbecue` },
      image: require("../img/cards/2-mwvadi.jpg"),
      price: 10,
      info: {
        geo: [
          `ფასი: 1 შამფური — 10ლ.`,
          `6 ცალი`,
          `დალოდება მოგიწევთ მინ. 20, მაქს. 25 წუთი`,
        ],
        eng: [
          `Price: 1 skewer — 10₾`,
          `6 piece`,
          `You will have to wait for min. 20, Max. 25 minutes`,
        ],
      },
      btn: `card-button`,
    },
    // {
    //   tag: `hot`,
    //   title: `ojakhuri`,
    //   name: { geo: `ოჯახური`, eng: `Ojakhuri` },
    //   image: require("../img/cards/2-ojakhuri.jpg"),
    //   price: 18,
    //   info: {
    //     geo: [
    //       `ფასი: 1 თეფში — 18ლ.`,
    //       `200 გრამი`,
    //       `დალოდება მოგიწევთ მინ. 15, მაქს. 25 წუთი`,
    //     ],
    //     eng: [`Price: 1 dish — 18₾`,
    // `200 gram`,
    // `You will have to wait for min. 15, Max. 25 minutes`],
    //   },
    //   btn: `card-button`,
    // },
    {
      tag: `hot`,
      title: `shemtsvari-kartopili`,
      name: { geo: `შემწვარი კართოფილი`, eng: `Fried Potato` },
      image: require("../img/cards/2-shemtsvari-kartopili.jpg"),
      price: 7,
      info: {
        geo: [
          `ფასი: 1 თეფში — 7ლ.`,
          `250 გრამი`,
          `დალოდება მოგიწევთ მინ. 15, მაქს. 20 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 7₾`,
          `250 gram`,
          `You will have to wait for min. 15, Max. 20 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `hot`,
      title: `soko`,
      name: { geo: `სოკო`, eng: `Mushroom` },
      image: require("../img/cards/2-soko.jpg"),
      price: 12,
      info: {
        geo: [
          `ფასი: 1 თეფში — 12ლ.`,
          `200 გრამი`,
          `დალოდება მოგიწევთ მინ. 10, მაქს. 20 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 12₾`,
          `200 gram`,
          `You will have to wait for min. 10, Max. 20 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `fast-food`,
      title: `chips`,
      name: { geo: `ჩიფსი`, eng: `Chips` },
      image: require("../img/cards/3-chips.jpg"),
      price: 5,
      info: {
        geo: [
          `ფასი: 1 ჯამი — 5ლ.`,
          `150 გრამი`,
          `დალოდება მოგიწევთ მინ. 5, მაქს. 10 წუთი`,
        ],
        eng: [
          `Price: 1 bowl — 5₾`,
          `150 gram`,
          `You will have to wait for min. 5, Max. 10 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `fast-food`,
      title: `donut`,
      name: { geo: `დონატი`, eng: `Donut` },
      image: require("../img/cards/3-donut.jpg"),
      info: {
        geo: [`ფასი: სხვადასხვა`, `დალოდება მოგიწევთ მინ. 5, მაქს. 10 წუთი`],
        eng: [
          `Price: different`,
          `You will have to wait for min. 5, Max. 10 minutes`,
        ],
      },
      btn: `select-button`,
    },
    {
      tag: `fast-food`,
      title: `fry`,
      name: { geo: `კართოფილი ფრი`, eng: `French Fries` },
      image: require("../img/cards/3-fry.jpg"),
      price: 5,
      info: {
        geo: [
          `ფასი: 1 თეფში — 5ლ.`,
          `150 გრამი`,
          `დალოდება მოგიწევთ მინ. 15, მაქს. 25 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 5₾`,
          `150 gram`,
          `You will have to wait for min. 15, Max. 25 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `fast-food`,
      title: `hamburger`,
      name: { geo: `ჰამბურგერი`, eng: `Hamburger` },
      image: require("../img/cards/3-hamburger.jpg"),
      price: 12,
      info: {
        geo: [
          `ფასი: 1 ცალი — 12ლ.`,
          `დალოდება მოგიწევთ მინ. 12, მაქს. 20 წუთი`,
        ],
        eng: [
          `Price: 1 piece — 12₾`,
          `You will have to wait for min. 12, Max. 20 minutes`,
        ],
      },
      btn: `ingredients-button`,
    },
    {
      tag: `fast-food`,
      title: `hot-dog`,
      name: { geo: `ჰოთ-დოგი`, eng: `Hot dog` },
      image: require("../img/cards/3-hot-dog.jpg"),
      price: 4,
      info: {
        geo: [`ფასი: 1 ცალი — 4ლ.`, `დალოდება მოგიწევთ მინ. 5, მაქს. 15 წუთი`],
        eng: [
          `Price: 1 piece — 4₾`,
          `You will have to wait for min. 5, Max. 15 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `fast-food`,
      title: `mexican-potato`,
      name: { geo: `მექსიკური კართოფილი`, eng: `Mexican potatoes` },
      image: require("../img/cards/3-mexican-potato.jpg"),
      price: 9,
      info: {
        geo: [
          `ფასი: 1 თეფში — 9ლ.`,
          `150 გრამი`,
          `დალოდება მოგიწევთ მინ. 15, მაქს. 25 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 9₾`,
          `150 gram`,
          `You will have to wait for min. 15, Max. 25 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `fast-food`,
      title: `nugets`,
      name: { geo: `ქათმის ნაგეთსი`, eng: `Chicken Nuggets` },
      image: require("../img/cards/3-nugets.jpg"),
      price: 11,
      info: {
        geo: [
          `ფასი: 1 თეფში — 11ლ.`,
          `9 ცალი`,
          `დალოდება მოგიწევთ მინ. 15, მაქს. 22 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 11₾`,
          `9 piece`,
          `You will have to wait for min. 15, Max. 22 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `fast-food`,
      title: `shawarma`,
      name: { geo: `შაურმა`, eng: `Shawarma` },
      image: require("../img/cards/3-shawarma.jpg"),
      info: {
        geo: [`ფასი: სხვადასხვა`, `დალოდება მოგიწევთ მინ. 13, მაქს. 20 წუთი`],
        eng: [
          `Price: different`,
          `You will have to wait for min. 13, Max. 20 minutes`,
        ],
      },
      btn: `select-button`,
    },
    {
      tag: `soups`,
      title: `borshch`,
      name: { geo: `ბორში`, eng: `Borsch` },
      image: require("../img/cards/4-borshch.jpg"),
      price: 5,
      info: {
        geo: [
          `ფასი: 1 თეფში — 5ლ.`,
          `100 გრამი`,
          `დალოდება მოგიწევთ მინ. 11, მაქს. 23 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 5₾`,
          `100 gram`,
          `You will have to wait for min. 11, Max. 23 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `soups`,
      title: `bulioni`,
      name: { geo: `ბულიონი`, eng: `Chicken Soup` },
      image: require("../img/cards/4-bulioni.jpg"),
      price: 5,
      info: {
        geo: [
          `ფასი: 1 თეფში — 5ლ.`,
          `100 გრამი`,
          `დალოდება მოგიწევთ მინ. 11, მაქს. 23 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 5₾`,
          `100 gram`,
          `You will have to wait for min. 11, Max. 23 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `soups`,
      title: `chaqapuli`,
      name: { geo: `ჩაქაფული`, eng: `Chakapuli` },
      image: require("../img/cards/4-chaqapuli.jpg"),
      price: 13,
      info: {
        geo: [
          `ფასი: 1 თეფში — 13ლ.`,
          `180 გრამი`,
          `დალოდება მოგიწევთ მინ. 17, მაქს. 28 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 13₾`,
          `180 gram`,
          `You will have to wait for min. 17, Max. 28 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `soups`,
      title: `cucumber-soup`,
      name: { geo: `კიტრის ცივი წვნიანი`, eng: `Cucumber Cold Soup` },
      image: require("../img/cards/4-cucumber-soup.jpg"),
      price: 5,
      info: {
        geo: [
          `ფასი: 1 თეფში — 5ლ.`,
          `130 გრამი`,
          `დალოდება მოგიწევთ მინ. 5, მაქს. 15 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 5₾`,
          `130 gram`,
          `You will have to wait for min. 5, Max. 15 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `soups`,
      title: `matsvnis-supi`,
      name: { geo: `მაწვნის სუპი`, eng: `Matsoni Soup` },
      image: require("../img/cards/4-matsvnis-supi.jpg"),
      price: 7,
      info: {
        geo: [
          `ფასი: 1 თეფში — 7ლ.`,
          `120 გრამი`,
          `დალოდება მოგიწევთ მინ. 10, მაქს. 15 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 7₾`,
          `120 gram`,
          `You will have to wait for min. 10, Max. 15 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `soups`,
      title: `mushroom-soup`,
      name: { geo: `სოკოს სუპი`, eng: `Mushroom soup` },
      image: require("../img/cards/4-mushroom-soup.jpg"),
      price: 6,
      info: {
        geo: [
          `ფასი: 1 თეფში — 6ლ.`,
          `100 გრამი`,
          `დალოდება მოგიწევთ მინ. 12, მაქს. 18 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 6₾`,
          `100 gram`,
          `You will have to wait for min. 12, Max. 18 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `soups`,
      title: `noodle`,
      name: { geo: `ატრიის წვნიანი`, eng: `Noodles` },
      image: require("../img/cards/4-noodle.jpg"),
      price: 8,
      info: {
        geo: [
          `ფასი: 1 თეფში — 8ლ.`,
          `120 გრამი`,
          `დალოდება მოგიწევთ მინ. 15, მაქს. 20 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 8₾`,
          `120 gram`,
          `You will have to wait for min. 15, Max. 20 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `soups`,
      title: `soup`,
      name: { geo: `სუპი`, eng: `Classic Soup` },
      image: require("../img/cards/4-soup.jpg"),
      price: 5,
      info: {
        geo: [
          `ფასი: 1 თეფში — 5ლ.`,
          `100 გრამი`,
          `დალოდება მოგიწევთ მინ. 12, მაქს. 17 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 5₾`,
          `100 gram`,
          `You will have to wait for min. 12, Max. 17 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `salads`,
      title: `caesar`,
      name: { geo: `ცეზარი`, eng: `Caesar` },
      image: require("../img/cards/5-caesar.jpg"),
      price: 8,
      info: {
        geo: [
          `ფასი: 1 თეფში — 8ლ.`,
          `120 გრამი`,
          `დალოდება მოგიწევთ მინ. 5, მაქს. 15 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 8₾`,
          `120 gram`,
          `You will have to wait for min. 5, Max. 15 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `salads`,
      title: `chicken-salad`,
      name: { geo: `ქათმის სალათა`, eng: `Chicken Salad` },
      image: require("../img/cards/5-chicken-salad.jpg"),
      price: 7,
      info: {
        geo: [
          `ფასი: 1 თეფში — 7ლ.`,
          `120 გრამი`,
          `დალოდება მოგიწევთ მინ. 5, მაქს. 15 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 7₾`,
          `120 gram`,
          `You will have to wait for min. 5, Max. 15 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `salads`,
      title: `cucumber-and-tomato`,
      name: {
        geo: `კიტრის და პამიდვრის სალათა`,
        eng: `Cucumber and Tomato Salad`,
      },
      image: require("../img/cards/5-cucumber-and-tomato.jpg"),
      price: 6,
      info: {
        geo: [
          `ფასი: 1 თეფში — 6ლ.`,
          `150 გრამი`,
          `დალოდება მოგიწევთ მინ. 5, მაქს. 10 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 6₾`,
          `150 gram`,
          `You will have to wait for min. 5, Max. 15 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `salads`,
      title: `fish-salad`,
      name: { geo: `თევზის სალათა`, eng: `Fish Salad` },
      image: require("../img/cards/5-fish-salad.jpg"),
      price: 10,
      info: {
        geo: [
          `ფასი: 1 თეფში — 10ლ.`,
          `100 გრამი`,
          `დალოდება მოგიწევთ მინ. 10, მაქს. 15 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 10₾`,
          `100 gram`,
          `You will have to wait for min. 10, Max. 15 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `salads`,
      title: `greece-salad`,
      name: { geo: `ბერძნული სალათა`, eng: `Greek Salad` },
      image: require("../img/cards/5-greece-salad.jpg"),
      price: 6,
      info: {
        geo: [
          `ფასი: 1 თეფში — 6ლ.`,
          `130 გრამი`,
          `დალოდება მოგიწევთ მინ. 5, მაქს. 10 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 6₾`,
          `130 gram`,
          `You will have to wait for min. 5, Max. 10 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `salads`,
      title: `green-salad`,
      name: { geo: `მწვანე სალათა`, eng: `Green Salad` },
      image: require("../img/cards/5-green-salad.jpg"),
      price: 7,
      info: {
        geo: [
          `ფასი: 1 თეფში — 7ლ.`,
          `130 გრამი`,
          `დალოდება მოგიწევთ მინ. 5, მაქს. 10 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 7₾`,
          `130 gram`,
          `You will have to wait for min. 5, Max. 10 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `salads`,
      title: `muchroom-salad`,
      name: { geo: `სოკოს სალათა`, eng: `Mushroom Salad` },
      image: require("../img/cards/5-muchroom-salad.jpg"),
      price: 9,
      info: {
        geo: [
          `ფასი: 1 თეფში — 9ლ.`,
          `100 გრამი`,
          `დალოდება მოგიწევთ მინ. 8, მაქს. 15 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 9₾`,
          `100 gram`,
          `You will have to wait for min. 8, Max. 15 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `salads`,
      title: `olivie`,
      name: { geo: `ოლივიე (ვინეგრეტი)`, eng: `Olivie` },
      image: require("../img/cards/5-olivie.jpg"),
      price: 8,
      info: {
        geo: [
          `ფასი: 1 თეფში — 8ლ.`,
          `150 გრამი`,
          `დალოდება მოგიწევთ მინ. 7, მაქს. 15 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 8₾`,
          `150 gram`,
          `You will have to wait for min. 7, Max. 15 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `suggestions`,
      title: `corn`,
      name: { geo: `მოხარშული სიმინდი`, eng: `Boild Corn` },
      image: require("../img/cards/6-corn.jpg"),
      price: 5,
      info: {
        geo: [`ფასი: 1 ცალი — 5ლ.`, `დალოდება მოგიწევთ მინ. 13, მაქს. 22 წუთი`],
        eng: [
          `Price: 1 piece — 5₾`,
          `You will have to wait for min. 13, Max. 22 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `suggestions`,
      title: `croissant`,
      name: { geo: `კრუასანი`, eng: `Croissant` },
      image: require("../img/cards/6-croissant.jpg"),
      price: 5,
      info: {
        geo: [`ფასი: 1 ცალი — 5ლ.`, `დალოდება მოგიწევთ მინ. 5, მაქს. 10 წუთი`],
        eng: [
          `Price: 1 piece — 5₾`,
          `You will have to wait for min. 5, Max. 10 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `suggestions`,
      title: `french-toast`,
      name: { geo: `ფრანგული ტოსტი`, eng: `French Toast` },
      image: require("../img/cards/6-french-toast.jpg"),
      price: 6,
      info: {
        geo: [`ფასი: 1 ცალი — 6ლ.`, `დალოდება მოგიწევთ მინ. 5, მაქს. 12 წუთი`],
        eng: [
          `Price: 1 piece — 6₾`,
          `You will have to wait for min. 5, Max. 12 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `suggestions`,
      title: `lasagna`,
      name: { geo: `ლაზანია`, eng: `Lasagna` },
      image: require("../img/cards/6-lasagna.jpg"),
      price: 9,
      info: {
        geo: [`ფასი: 1 ცალი — 9ლ.`, `დალოდება მოგიწევთ მინ. 11, მაქს. 18 წუთი`],
        eng: [
          `Price: 1 piece — 9₾`,
          `You will have to wait for min. 11, Max. 18 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `suggestions`,
      title: `pelmeni`,
      name: { geo: `პელმენი`, eng: `Dumplings` },
      image: require("../img/cards/6-pelmeni.jpg"),
      price: 7,
      info: {
        geo: [
          `ფასი: 1 თეფში — 7ლ.`,
          `18 ცალი`,
          `დალოდება მოგიწევთ მინ. 15, მაქს. 25 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 7₾`,
          `18 piece`,
          `You will have to wait for min. 15, Max. 25 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `suggestions`,
      title: `rice`,
      name: { geo: `ბრინჯი`, eng: `Rice` },
      image: require("../img/cards/6-rice.jpg"),
      price: 11,
      info: {
        geo: [
          `ფასი: 1 თეფში — 11ლ.`,
          `150 გრამი`,
          `დალოდება მოგიწევთ მინ. 12, მაქს. 25 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 11₾`,
          `150 gram`,
          `You will have to wait for min. 12, Max. 25 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `suggestions`,
      title: `shushi`,
      name: { geo: `სუში`, eng: `Sushi` },
      image: require("../img/cards/6-shushi.jpg"),
      price: 12,
      info: {
        geo: [
          `ფასი: 1 ცალი — 12ლ.`,
          `დალოდება მოგიწევთ მინ. 12, მაქს. 23 წუთი`,
        ],
        eng: [
          `Price: 1 piece — 12₾`,
          `You will have to wait for min. 12, Max. 23 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `suggestions`,
      title: `taco`,
      name: { geo: `ტაკო`, eng: `Taco` },
      image: require("../img/cards/6-taco.jpg"),
      price: 9,
      info: {
        geo: [`ფასი: 1 ცალი — 9ლ.`, `დალოდება მოგიწევთ მინ. 13, მაქს. 19 წუთი`],
        eng: [
          `Price: 1 piece — 9₾`,
          `You will have to wait for min. 13, Max. 19 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `dessert`,
      title: `apple-pie`,
      name: { geo: `ვაშლის პეროგი`, eng: `Apple Pie` },
      image: require("../img/cards/7-apple-pie.jpg"),
      price: 13,
      info: {
        geo: [
          `ფასი: 1 ცალი — 13ლ.`,
          `დალოდება მოგიწევთ მინ. 14, მაქს. 23 წუთი`,
        ],
        eng: [
          `Price: 1 piece — 13₾`,
          `You will have to wait for min. 14, Max. 23 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `dessert`,
      title: `chocolate`,
      name: { geo: `შოკოლადი`, eng: `Chocolate` },
      image: require("../img/cards/7-chocolate.jpg"),
      price: 5,
      info: {
        geo: [
          `ფასი: 1 ჯამი — 5ლ.`,
          `12 ცალი`,
          `დალოდება მოგიწევთ მინ. 5, მაქს. 12 წუთი`,
        ],
        eng: [
          `Price: 1 bowl — 5₾`,
          `12 piece`,
          `You will have to wait for min. 5, Max. 12 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `dessert`,
      title: `ice-cream`,
      name: { geo: `ნაყინი`, eng: `Ice cream` },
      image: require("../img/cards/7-ice-cream.jpg"),
      info: {
        geo: [
          `ფასი: სხვადასხვა`,
          `100 გრამი`,
          `დალოდება მოგიწევთ მინ. 5, მაქს. 15 წუთი`,
        ],
        eng: [
          `Price: different`,
          `100 gram`,
          `You will have to wait for min. 5, Max. 15 minutes`,
        ],
      },
      btn: `select-button`,
    },
    {
      tag: `dessert`,
      title: `yogurt`,
      name: { geo: `იოგურტი`, eng: `Yogurt` },
      image: require("../img/cards/7-yogurt.jpg"),
      price: 5,
      info: {
        geo: [
          `ფასი: 1 ჭიქა — 5ლ.`,
          `100 გრამი`,
          `დალოდება მოგიწევთ მინ. 5, მაქს. 15 წუთი`,
        ],
        eng: [
          `Price: 1 cup — 5₾`,
          `100 gram`,
          `You will have to wait for min. 5, Max. 15 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `dessert`,
      title: `khacho`,
      name: { geo: `ხაჭო`, eng: `Cottage Cheese` },
      image: require("../img/cards/7-khacho.jpg"),
      price: 7,
      info: {
        geo: [`ფასი: 1 ცალი — 7ლ.`, `დალოდება მოგიწევთ მინ. 15, მაქს. 20 წუთი`],
        eng: [
          `Price: 1 piece — 7₾`,
          `You will have to wait for min. 15, Max. 20 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `dessert`,
      title: `matsoni`,
      name: { geo: `მაწონი`, eng: `Matsoni` },
      image: require("../img/cards/7-matsoni.jpg"),
      price: 5,
      info: {
        geo: [
          `ფასი: 1 ჭიქა — 5ლ.`,
          `100 გრამი`,
          `დალოდება მოგიწევთ მინ. 5, მაქს. 15 წუთი`,
        ],
        eng: [
          `Price: 1 cup — 5₾`,
          `100 gram`,
          `You will have to wait for min. 5, Max. 15 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `dessert`,
      title: `milkshake`,
      name: { geo: `მილქშეიკი`, eng: `Milkshake` },
      image: require("../img/cards/7-milkshake.jpg"),
      info: {
        geo: [
          `ფასი: სხვადასხვა`,
          `100 გრამი`,
          `დალოდება მოგიწევთ მინ. 5, მაქს. 15 წუთი`,
        ],
        eng: [
          `Price: different`,
          `100 gram`,
          `You will have to wait for min. 5, Max. 15 minutes`,
        ],
      },
      btn: `select-button`,
    },
    {
      tag: `dessert`,
      title: `mixed-fruit`,
      name: { geo: `ხილის ასორტი`, eng: `Fruit assortment` },
      image: require("../img/cards/7-mixed-fruit.jpg"),
      price: 10,
      info: {
        geo: [
          `ფასი: 1 თეფში — 10ლ.`,
          `300 გრამი`,
          `დალოდება მოგიწევთ მინ. 5, მაქს. 15 წუთი`,
        ],
        eng: [
          `Price: 1 dish — 10₾`,
          `300 gram`,
          `You will have to wait for min. 5, Max. 15 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `drinks`,
      title: `borjomi`,
      name: { geo: `ბორჯომი`, eng: `Borjomi water` },
      image: require("../img/cards/8-borjomi.jpg"),
      price: 2,
      info: {
        geo: [
          `ფასი: 1 ბოთლი (0.5ლ) — 2ლ.`,
          `დალოდება მოგიწევთ მინ. 2, მაქს. 5 წუთი`,
        ],
        eng: [
          `Price: 1 bottle (0.5l) — 2₾`,
          `You will have to wait for min. 2, Max. 5 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `drinks`,
      title: `coca-cola`,
      name: { geo: `კოკა კოლა`, eng: `Coca Cola` },
      image: require("../img/cards/8-coca-cola.jpg"),
      price: 3,
      info: {
        geo: [
          `ფასი: 1 ბოთლი (0.5ლ) — 3ლ.`,
          `დალოდება მოგიწევთ მინ. 2, მაქს. 5 წუთი`,
        ],
        eng: [
          `Price: 1 bottle (0.5l) — 3₾`,
          `You will have to wait for min. 2, Max. 5 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `drinks`,
      title: `coffee`,
      name: { geo: `ყავა`, eng: `Coffee` },
      image: require("../img/cards/8-coffee.jpg"),
      info: {
        geo: [`ფასი: სხვადასხვა`, `დალოდება მოგიწევთ მინ. 5, მაქს. 12 წუთი`],
        eng: [
          `Price: different`,
          `You will have to wait for min. 5, Max. 12 minutes`,
        ],
      },
      btn: `select-button`,
    },
    {
      tag: `drinks`,
      title: `energetic`,
      name: { geo: `ენერგეტიკული`, eng: `Energy drink` },
      image: require("../img/cards/8-energetic.jpg"),
      price: 4,
      info: {
        geo: [
          `ფასი: 1 ქილა (0.5ლ) — 4ლ.`,
          `დალოდება მოგიწევთ მინ. 2, მაქს. 5 წუთი`,
        ],
        eng: [
          `Price: 1 can (0.5l) — 4₾`,
          `You will have to wait for min. 2, Max. 5 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `drinks`,
      title: `fanta`,
      name: { geo: `ფანტა`, eng: `Fanta` },
      image: require("../img/cards/8-fanta.jpg"),
      price: 3,
      info: {
        geo: [
          `ფასი: 1 ბოთლი (0.5ლ) — 3ლ.`,
          `დალოდება მოგიწევთ მინ. 2, მაქს. 5 წუთი`,
        ],
        eng: [
          `Price: 1 bottle (0.5l) — 3₾`,
          `You will have to wait for min. 2, Max. 5 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `drinks`,
      title: `limonati`,
      name: { geo: `ლიმონათი`, eng: `Lemonade` },
      image: require("../img/cards/8-limonati.jpg"),
      price: 4,
      info: {
        geo: [
          `ფასი: 1 ბოთლი (1ლ) — 4ლ.`,
          `დალოდება მოგიწევთ მინ. 2, მაქს. 5 წუთი`,
        ],
        eng: [
          `Price: 1 bottle (0.5l) — 4₾`,
          `You will have to wait for min. 2, Max. 5 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `drinks`,
      title: `tea`,
      name: { geo: `ჩაი`, eng: `Tea` },
      image: require("../img/cards/8-tea.jpg"),
      price: 5,
      info: {
        geo: [`ფასი: 1 ჭიქა — 5ლ.`, `დალოდება მოგიწევთ მინ. 5, მაქს. 12 წუთი`],
        eng: [
          `Price: 1 cup — 5₾`,
          `You will have to wait for min. 5, Max. 12 minutes`,
        ],
      },
      btn: `card-button`,
    },
    {
      tag: `drinks`,
      title: `wkali`,
      name: { geo: `წყალი`, eng: `Water` },
      image: require("../img/cards/8-wkali.jpg"),
      price: 2,
      info: {
        geo: [
          `ფასი: 1 ბოთლი (0.5ლ) — 2ლ.`,
          `დალოდება მოგიწევთ მინ. 2, მაქს. 5 წუთი`,
        ],
        eng: [
          `Price: 1 bottle (0.5l) — 2₾`,
          `You will have to wait for min. 2, Max. 5 minutes`,
        ],
      },
      btn: `card-button`,
    },
  ],
  seeMore: [
    {
      name: { geo: `ხაჭაპური`, eng: `Khachapuri` },
      title: `khachapuri`,
      btn: `card-button`,
      selections: [
        {
          name: { geo: `აჭარული ხაჭაპური`, eng: `Adjarian Khachapuri` },
          image: require("../img/opens/open khachapuri/khachapuri-acharuli.jpg"),
          price: 18,
        },
        {
          name: { geo: `იმერული ხაჭაპური`, eng: `Classic Khachapuri` },
          image: require("../img/opens/open khachapuri/khachapuri-imeruli.jpg"),
          price: 12,
        },
        {
          name: { geo: `ფენოვანი ხაჭაპური`, eng: `Fenovani Khachapuri` },
          image: require("../img/opens/open khachapuri/khachapuri-fenovani.jpg"),
          price: 10,
        },
      ],
    },
    {
      name: { geo: `პიცა`, eng: `Pizza` },
      title: `pizza`,
      btn: `card-button`,
      selections: [
        {
          name: { geo: `ყველის პიცა`, eng: `Cheese Pizza` },
          image: require("../img/opens/open pizza/pizza-cheese.jpg"),
          price: 15,
        },
        {
          name: { geo: `მარგარიტა`, eng: `Margarita` },
          image: require("../img/opens/open pizza/pizza-margarita.jpg"),
          price: 15,
        },
        {
          name: { geo: `სიცილიური პიცა`, eng: `Sicilian Pizza` },
          image: require("../img/opens/open pizza/pizza-sicilian.jpg"),
          price: 10,
        },
      ],
    },
    {
      name: { geo: `დონატი`, eng: `Donut` },
      title: `donats`,
      btn: `card-button`,
      selections: [
        // {
        //   name: { geo: `დაბადების დღის დონატი`, eng: `Birthday Donut` },
        //   image: require("../img/opens/open donats/birthday-donut.jpg"),
        //   price: 14,
        // },
        {
          name: { geo: `შოკოლადის დონატი`, eng: `Chocolate Donut` },
          image: require("../img/opens/open donats/chocolate-donuts.jpg"),
          price: 18,
        },
        {
          name: { geo: `მარწყვის დონატი`, eng: `Strawberry Donut` },
          image: require("../img/opens/open donats/donut-strawberry.jpg"),
          price: 14,
        },
      ],
    },
    {
      name: { geo: `შაურმა`, eng: `Shawarma` },
      title: `shawarma`,
      btn: `ingredients-button`,
      selections: [
        {
          name: { geo: `პატარა შაურმა`, eng: `Small Shawarma` },
          image: require("../img/opens/open shawarma/shawarma-1small.jpg"),
          price: 7,
        },
        {
          name: { geo: `საშუალო შაურმა`, eng: `Medium Shawarma` },
          image: require("../img/opens/open shawarma/shawarma-2medium.jpg"),
          price: 9,
        },
        {
          name: { geo: `დიდი შაურმა`, eng: `Large Shawarma` },
          image: require("../img/opens/open shawarma/shawarma-3large.jpg"),
          price: 12,
        },
      ],
    },
    {
      name: { geo: `ნაყინი`, eng: `Ice cream` },
      title: `ice-cream`,
      btn: `card-button`,
      selections: [
        {
          name: { geo: `შოკოლადის ნაყინი`, eng: `Chocolate ice cream` },
          image: require("../img/opens/open ice cream/chocolate-ice.jpg"),
          price: 4,
        },
        {
          name: { geo: `ვანილის ნაყინი`, eng: `Vanilla ice cream` },
          image: require("../img/opens/open ice cream/vanilla.jpg"),
          price: 4,
        },
        {
          name: { geo: `მარწყვის ნაყინი`, eng: `Strawberry ice cream` },
          image: require("../img/opens/open ice cream/ice-cream-strawberry.jpg"),
          price: 5,
        },
      ],
    },
    {
      name: { geo: `მილქშეიკი`, eng: `Milkshake` },
      title: `milkshake`,
      btn: `card-button`,
      selections: [
        {
          name: { geo: `ბანანის მილქშეიკი`, eng: `Banana Milkshake` },
          image: require("../img/opens/open milkshake/milkshake-banana.jpg"),
          price: 6,
        },
        {
          name: { geo: `შოკოლადის მილქშეიკი`, eng: `Chocolate Milkshake` },
          image: require("../img/opens/open milkshake/milkshake-chocolate.jpg"),
          price: 6,
        },
        {
          name: { geo: `მარწყვის მილქშეიკი`, eng: `Strawberry Milkshake` },
          image: require("../img/opens/open milkshake/milkshake-strawberry.jpg"),
          price: 6,
        },
      ],
    },
    {
      name: { geo: `ყავა`, eng: `Coffee` },
      title: `coffee`,
      btn: `card-button`,
      selections: [
        {
          name: { geo: `ყავა ამერიკანო`, eng: `Americano` },
          image: require("../img/opens/open coffee/americano.jpg"),
          price: 6,
        },
        {
          name: { geo: `ყავა ესპრესო`, eng: `Espresso` },
          image: require("../img/opens/open coffee/espresso.jpg"),
          price: 6,
        },
        {
          name: { geo: `ყავა თურქული`, eng: `Turkish Coffee` },
          image: require("../img/opens/open coffee/turkish.jpg"),
          price: 5,
        },
      ],
    },
  ],
  orders: [],
  submittedOrders: [],
  problems: [],
};
// client not touching it, only changes data in state object.
const animationArr = [5, 6, 3, 8, 10, 4, 7, 9, 3, 8, 5, 6, 9, 10, 4, 7];
state.navItems.forEach((el, i) => {
  el.animationS = animationArr[arrayLoop(animationArr.length, i)];
});
state.star.currentStar = 0;
state.star.starAmount = 5;
