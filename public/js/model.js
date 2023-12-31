import { arrayLoop } from "./helper.js";
export const state = {
  table: {
    currentTable: +window.localStorage.getItem("currentTable") || 1,
    tableAmount: 10,
  },
  navItems: [
    {
      title: `comeuli`,
      name: `ცომეული`,
      image: "/img/navs/comeuli.jpg",
    },
    {
      title: `hot`,
      name: `ცხელი კერძები`,
      image: "/img/navs/hot.jpg",
    },
    {
      title: `fast-food`,
      name: `სწრაფი კვება`,
      image: "/img/navs/fast-food.jpg",
    },
    {
      title: `soups`,
      name: `წვნიანები`,
      image: "/img/navs/soups.jpg",
    },
    {
      title: `salads`,
      name: `სალათები`,
      image: "/img/navs/salads.jpg",
    },
    {
      title: `suggestions`,
      name: `შემოთავაზებული`,
      image: "/img/navs/suggestions.jpg",
    },
    {
      title: `dessert`,
      name: `დესერტი`,
      image: "/img/navs/dessert.jpg",
    },
    {
      title: `drinks`,
      name: `სასმელები`,
      image: "/img/navs/drinks.jpg",
    },
  ],
  food: [
    {
      tag: `comeuli`,
      title: `blini`,
      name: `ბლინი`,
      image: `/img/cards/1-blini.jpg`,
      price: 5,
      info: [
        `ფასი: 1 თეფში — 5ლ.`,
        `6 ცალი ბლინი`,
        `დალოდება მოგიწევთ მინ. 5, მაქს. 15 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `comeuli`,
      title: `bubliki`,
      name: `ბუბლიკი`,
      image: "/img/cards/1-bubliki.jpg",
      price: 1,
      info: [`ფასი: 1 ცალი — 1ლ.`, `დალოდება მოგიწევთ მინ. 5, მაქს. 10 წუთი`],
      btn: `card-button`,
    },
    {
      tag: `comeuli`,
      title: `funtusha`,
      name: `ფუნთუშა`,
      image: "/img/cards/1-funtusha.jpg",
      price: 2,
      info: [`ფასი: 1 ცალი — 2ლ.`, `დალოდება მოგიწევთ მინ. 10, მაქს. 15 წუთი`],
      btn: `card-button`,
    },
    {
      tag: `comeuli`,
      title: `khachapuri`,
      name: `ხაჭაპური`,
      image: "/img/cards/1-khachapuri.jpg",
      info: [`ფასი: სხვადასხვა`, `დალოდება მოგიწევთ მინ. 20, მაქს. 25 წუთი`],
      btn: `select-button`,
    },
    {
      tag: `comeuli`,
      title: `khinkali`,
      name: `ხინკალი`,
      image: "/img/cards/1-khinkali.jpg",
      price: 1.5,
      info: [
        `ფასი: 1 ცალი — 1.5ლ.`,
        `დალოდება მოგიწევთ მინ. 15, მაქს. 25 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `comeuli`,
      title: `kubdari`,
      name: `კუბდარი`,
      image: "/img/cards/1-kubdari.jpg",
      price: 15,
      info: [`ფასი: 1 ცალი — 15ლ.`, `დალოდება მოგიწევთ მინ. 15, მაქს. 25 წუთი`],
      btn: `card-button`,
    },
    {
      tag: `comeuli`,
      title: `lobiani`,
      name: `ლობიანი`,
      image: "/img/cards/1-lobiani.jpg",
      price: 12,
      info: [
        `ფასი: 1 თეფში — 12ლ.`,
        `დალოდება მოგიწევთ მინ. 15, მაქს. 25 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `comeuli`,
      title: `pizza`,
      name: `პიცა`,
      image: "/img/cards/1-pizza.jpg",
      info: [`ფასი: სხვადასხვა`, `დალოდება მოგიწევთ მინ. 15, მაქს. 25 წუთი`],
      btn: `select-button`,
    },
    {
      tag: `hot`,
      title: `kababi`,
      name: `ქაბაბი`,
      image: "/img/cards/2-kababi.jpg",
      price: 8,
      info: [
        `ფასი: 1 შამფური — 8ლ.`,
        `300 გრამი ქაბაბი`,
        `დალოდება მოგიწევთ მინ. 15, მაქს. 25 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `hot`,
      title: `kalmakhi`,
      name: `კალმახი`,
      image: "/img/cards/2-kalmakhi.jpg",
      price: 17,
      info: [
        `ფასი: 1 თეფში — 17ლ.`,
        `დალოდება მოგიწევთ მინ. 15, მაქს. 25 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `hot`,
      title: `khbos-chashushuli`,
      name: `ხბოს ჩაშუშული`,
      image: "/img/cards/2-khbos-chashushuli.jpg",
      price: 18,
      info: [
        `ფასი: 1 თეფში — 18ლ.`,
        `200 გრამი ხბოს ჩაშუშული`,
        `დალოდება მოგიწევთ მინ. 18, მაქს. 26 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `hot`,
      title: `lobio`,
      name: `ლობიო`,
      image: "/img/cards/2-lobio.jpg",
      price: 8,
      info: [
        `ფასი: 1 ქოთანი — 8ლ.`,
        `200 გრამი ლობიო`,
        `დალოდება მოგიწევთ მინ. 20, მაქს. 30 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `hot`,
      title: `mwvadi`,
      name: `მწვადი`,
      image: "/img/cards/2-mwvadi.jpg",
      price: 10,
      info: [
        `ფასი: 1 შამფური — 10ლ.`,
        `6 ცალი მწვადის ნაჭერი`,
        `დალოდება მოგიწევთ მინ. 20, მაქს. 25 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `hot`,
      title: `ojakhuri`,
      name: `ოჯახური`,
      image: "/img/cards/2-ojakhuri.jpg",
      price: 18,
      info: [
        `ფასი: 1 თეფში — 18ლ.`,
        `200 გრამი ოჯახური`,
        `დალოდება მოგიწევთ მინ. 15, მაქს. 25 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `hot`,
      title: `shemtsvari-kartopili`,
      name: `შემწვარი კართოფილი`,
      image: "/img/cards/2-shemtsvari-kartopili.jpg",
      price: 7,
      info: [
        `ფასი: 1 თეფში — 7ლ.`,
        `250 გრამი კართოფილი`,
        `დალოდება მოგიწევთ მინ. 15, მაქს. 20 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `hot`,
      title: `soko`,
      name: `სოკო`,
      image: "/img/cards/2-soko.jpg",
      price: 12,
      info: [
        `ფასი: 1 თეფში — 12ლ.`,
        `200 გრამი სოკო`,
        `დალოდება მოგიწევთ მინ. 10, მაქს. 20 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `fast-food`,
      title: `chips`,
      name: `ჩიფსი`,
      image: "/img/cards/3-chips.jpg",
      price: 5,
      info: [
        `ფასი: 1 ჯამი — 5ლ.`,
        `150 გრამი ჩიფსი`,
        `დალოდება მოგიწევთ მინ. 5, მაქს. 10 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `fast-food`,
      title: `donut`,
      name: `დონატი`,
      image: "/img/cards/3-donut.jpg",
      info: [`ფასი: სხვადასხვა`, `დალოდება მოგიწევთ მინ. 5, მაქს. 10 წუთი`],
      btn: `select-button`,
    },
    {
      tag: `fast-food`,
      title: `fry`,
      name: `კართოფილი ფრი`,
      image: "/img/cards/3-fry.jpg",
      price: 5,
      info: [
        `ფასი: 1 თეფში — 5ლ.`,
        `150 გრამი ფრი`,
        `დალოდება მოგიწევთ მინ. 15, მაქს. 25 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `fast-food`,
      title: `hamburger`,
      name: `ჰამბურგერი`,
      image: "/img/cards/3-hamburger.jpg",
      price: 12,
      info: [`ფასი: 1 ცალი — 12ლ.`, `დალოდება მოგიწევთ მინ. 12, მაქს. 20 წუთი`],
      btn: `ingredients-button`,
    },
    {
      tag: `fast-food`,
      title: `hot-dog`,
      name: `ჰოთ-დოგი`,
      image: "/img/cards/3-hot-dog.jpg",
      price: 4,
      info: [`ფასი: 1 ცალი — 4ლ.`, `დალოდება მოგიწევთ მინ. 5, მაქს. 15 წუთი`],
      btn: `card-button`,
    },
    {
      tag: `fast-food`,
      title: `mexican-potato`,
      name: `მექსიკური კართოფილი`,
      image: "/img/cards/3-mexican-potato.jpg",
      price: 9,
      info: [
        `ფასი: 1 თეფში — 9ლ.`,
        `150 გრამი კართოფილი`,
        `დალოდება მოგიწევთ მინ. 15, მაქს. 25 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `fast-food`,
      title: `nugets`,
      name: `ქათმის ნაგეთსი`,
      image: "/img/cards/3-nugets.jpg",
      price: 11,
      info: [
        `ფასი: 1 თეფში — 11ლ.`,
        `9 ცალი ნაგეთსი`,
        `დალოდება მოგიწევთ მინ. 15, მაქს. 22 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `fast-food`,
      title: `shawarma`,
      name: `შაურმა`,
      image: "/img/cards/3-shawarma.jpg",
      info: [`ფასი: სხვადასხვა`, `დალოდება მოგიწევთ მინ. 13, მაქს. 20 წუთი`],
      btn: `select-button`,
    },
    {
      tag: `soups`,
      title: `borshch`,
      name: `ბორში`,
      image: "/img/cards/4-borshch.jpg",
      price: 5,
      info: [
        `ფასი: 1 თეფში — 5ლ.`,
        `100 გრამი ბორში`,
        `დალოდება მოგიწევთ მინ. 11, მაქს. 23 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `soups`,
      title: `bulioni`,
      name: `ბულიონი`,
      image: "/img/cards/4-bulioni.jpg",
      price: 5,
      info: [
        `ფასი: 1 თეფში — 5ლ.`,
        `100 გრამი ბულიონი`,
        `დალოდება მოგიწევთ მინ. 11, მაქს. 23 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `soups`,
      title: `chaqapuli`,
      name: `ჩაქაფული`,
      image: "/img/cards/4-chaqapuli.jpg",
      price: 13,
      info: [
        `ფასი: 1 თეფში — 13ლ.`,
        `180 გრამი ჩაქაფული`,
        `დალოდება მოგიწევთ მინ. 17, მაქს. 28 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `soups`,
      title: `cucumber-soup`,
      name: `კიტრის ცივი წვნიანი`,
      image: "/img/cards/4-cucumber-soup.jpg",
      price: 5,
      info: [
        `ფასი: 1 თეფში — 5ლ.`,
        `130 გრამი წვნიანი`,
        `დალოდება მოგიწევთ მინ. 5, მაქს. 15 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `soups`,
      title: `matsvnis-supi`,
      name: `მაწვნის სუპი`,
      image: "/img/cards/4-matsvnis-supi.jpg",
      price: 7,
      info: [
        `ფასი: 1 თეფში — 7ლ.`,
        `120 გრამი სუპი`,
        `დალოდება მოგიწევთ მინ. 10, მაქს. 15 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `soups`,
      title: `muchroom-soup`,
      name: `სოკოს სუპი`,
      image: "/img/cards/4-muchroom-soup.jpg",
      price: 6,
      info: [
        `ფასი: 1 თეფში — 6ლ.`,
        `100 გრამი სუპი`,
        `დალოდება მოგიწევთ მინ. 12, მაქს. 18 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `soups`,
      title: `noodle`,
      name: `ატრიის წვნიანი`,
      image: "/img/cards/4-noodle.jpg",
      price: 8,
      info: [
        `ფასი: 1 თეფში — 8ლ.`,
        `120 გრამი წვნიანი`,
        `დალოდება მოგიწევთ მინ. 15, მაქს. 20 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `soups`,
      title: `soup`,
      name: `სუპი`,
      image: "/img/cards/4-soup.jpg",
      price: 5,
      info: [
        `ფასი: 1 თეფში — 5ლ.`,
        `100 გრამი სუპი`,
        `დალოდება მოგიწევთ მინ. 12, მაქს. 17 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `salads`,
      title: `caesar`,
      name: `ცეზარი`,
      image: "/img/cards/5-caesar.jpg",
      price: 8,
      info: [
        `ფასი: 1 თეფში — 8ლ.`,
        `120 გრამი სალათა`,
        `დალოდება მოგიწევთ მინ. 5, მაქს. 15 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `salads`,
      title: `chicken-salad`,
      name: `ქათმის სალათა`,
      image: "/img/cards/5-chicken-salad.jpg",
      price: 7,
      info: [
        `ფასი: 1 თეფში — 7ლ.`,
        `120 გრამი სალათა`,
        `დალოდება მოგიწევთ მინ. 5, მაქს. 15 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `salads`,
      title: `cucumber-and-tomato`,
      name: `კიტრის და პამიდვრის სალათა`,
      image: "/img/cards/5-cucumber-and-tomato.jpg",
      price: 6,
      info: [
        `ფასი: 1 თეფში — 6ლ.`,
        `150 გრამი სალათა`,
        `დალოდება მოგიწევთ მინ. 5, მაქს. 10 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `salads`,
      title: `fish-salad`,
      name: `თევზის სალათა`,
      image: "/img/cards/5-fish-salad.jpg",
      price: 10,
      info: [
        `ფასი: 1 თეფში — 10ლ.`,
        `100 გრამი სალათა`,
        `დალოდება მოგიწევთ მინ. 10, მაქს. 15 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `salads`,
      title: `greece-salad`,
      name: `ბერძნული სალათა`,
      image: "/img/cards/5-greece-salad.jpg",
      price: 6,
      info: [
        `ფასი: 1 თეფში — 6ლ.`,
        `130 გრამი სალათა`,
        `დალოდება მოგიწევთ მინ. 5, მაქს. 10 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `salads`,
      title: `green-salad`,
      name: `მწვანე სალათა`,
      image: "/img/cards/5-green-salad.jpg",
      price: 7,
      info: [
        `ფასი: 1 თეფში — 7ლ.`,
        `130 გრამი სალათა`,
        `დალოდება მოგიწევთ მინ. 5, მაქს. 10 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `salads`,
      title: `muchroom-salad`,
      name: `სოკოს სალათა`,
      image: "/img/cards/5-muchroom-salad.jpg",
      price: 9,
      info: [
        `ფასი: 1 თეფში — 9ლ.`,
        `100 გრამი სალათა`,
        `დალოდება მოგიწევთ მინ. 8, მაქს. 15 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `salads`,
      title: `olivie`,
      name: `ოლივიე (ვინეგრეტი)`,
      image: "/img/cards/5-olivie.jpg",
      price: 8,
      info: [
        `ფასი: 1 თეფში — 8ლ.`,
        `150 გრამი სალათა`,
        `დალოდება მოგიწევთ მინ. 7, მაქს. 15 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `suggestions`,
      title: `corn`,
      name: `მოხარშული სიმინდი`,
      image: "/img/cards/6-corn.jpg",
      price: 5,
      info: [`ფასი: 1 ცალი — 5ლ.`, `დალოდება მოგიწევთ მინ. 13, მაქს. 22 წუთი`],
      btn: `card-button`,
    },
    {
      tag: `suggestions`,
      title: `croissant`,
      name: `კრუასანი`,
      image: "/img/cards/6-croissant.jpg",
      price: 5,
      info: [`ფასი: 1 ცალი — 5ლ.`, `დალოდება მოგიწევთ მინ. 5, მაქს. 10 წუთი`],
      btn: `card-button`,
    },
    {
      tag: `suggestions`,
      title: `french-toast`,
      name: `ფრანგული ტოსტი`,
      image: "/img/cards/6-french-toast.jpg",
      price: 6,
      info: [`ფასი: 1 ცალი — 6ლ.`, `დალოდება მოგიწევთ მინ. 5, მაქს. 12 წუთი`],
      btn: `card-button`,
    },
    {
      tag: `suggestions`,
      title: `lasagna`,
      name: `ლაზანია`,
      image: "/img/cards/6-lasagna.jpg",
      price: 9,
      info: [`ფასი: 1 ცალი — 9ლ.`, `დალოდება მოგიწევთ მინ. 11, მაქს. 18 წუთი`],
      btn: `card-button`,
    },
    {
      tag: `suggestions`,
      title: `pelmeni`,
      name: `პელმენი`,
      image: "/img/cards/6-pelmeni.jpg",
      price: 7,
      info: [
        `ფასი: 1 თეფში — 7ლ.`,
        `18 ცალი პელმენი`,
        `დალოდება მოგიწევთ მინ. 15, მაქს. 25 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `suggestions`,
      title: `rice`,
      name: `ბრინჯი`,
      image: "/img/cards/6-rice.jpg",
      price: 11,
      info: [
        `ფასი: 1 თეფში — 11ლ.`,
        `150 გრამი ბრინჯი`,
        `დალოდება მოგიწევთ მინ. 12, მაქს. 25 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `suggestions`,
      title: `shushi`,
      name: `სუში`,
      image: "/img/cards/6-shushi.jpg",
      price: 12,
      info: [`ფასი: 1 ცალი — 12ლ.`, `დალოდება მოგიწევთ მინ. 12, მაქს. 23 წუთი`],
      btn: `card-button`,
    },
    {
      tag: `suggestions`,
      title: `taco`,
      name: `ტაკო`,
      image: "/img/cards/6-taco.jpg",
      price: 9,
      info: [`ფასი: 1 ცალი — 9ლ.`, `დალოდება მოგიწევთ მინ. 13, მაქს. 19 წუთი`],
      btn: `card-button`,
    },
    {
      tag: `dessert`,
      title: `apple-pie`,
      name: `ვაშლის პეროგი`,
      image: "/img/cards/7-apple-pie.jpg",
      price: 13,
      info: [`ფასი: 1 ცალი — 13ლ.`, `დალოდება მოგიწევთ მინ. 14, მაქს. 23 წუთი`],
      btn: `card-button`,
    },
    {
      tag: `dessert`,
      title: `chocolate`,
      name: `შოკოლადი`,
      image: "/img/cards/7-chocolate.jpg",
      price: 5,
      info: [
        `ფასი: 1 ჯამი — 5ლ.`,
        `12 ცალი შოკოლადი`,
        `დალოდება მოგიწევთ მინ. 5, მაქს. 12 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `dessert`,
      title: `ice-cream`,
      name: `ნაყინი`,
      image: "/img/cards/7-ice-cream.jpg",
      info: [
        `ფასი: სხვადასხვა`,
        `100 გრამი ნაყინი`,
        `დალოდება მოგიწევთ მინ. 5, მაქს. 15 წუთი`,
      ],
      btn: `select-button`,
    },
    {
      tag: `dessert`,
      title: `jogurt`,
      name: `იოგურტი`,
      image: "/img/cards/7-jogurt.jpg",
      price: 5,
      info: [
        `ფასი: 1 ჭიქა — 5ლ.`,
        `100 გრამი იოგურტი`,
        `დალოდება მოგიწევთ მინ. 5, მაქს. 15 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `dessert`,
      title: `khacho`,
      name: `ხაჭო`,
      image: "/img/cards/7-khacho.jpg",
      price: 7,
      info: [`ფასი: 1 ცალი — 7ლ.`, `დალოდება მოგიწევთ მინ. 15, მაქს. 20 წუთი`],
      btn: `card-button`,
    },
    {
      tag: `dessert`,
      title: `matsoni`,
      name: `მაწონი`,
      image: "/img/cards/7-matsoni.jpg",
      price: 5,
      info: [
        `ფასი: 1 ჭიქა — 5ლ.`,
        `100 გრამი მაწონი`,
        `დალოდება მოგიწევთ მინ. 5, მაქს. 15 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `dessert`,
      title: `milkshake`,
      name: `მილქშეიკი`,
      image: "/img/cards/7-milkshake.jpg",
      info: [
        `ფასი: სხვადასხვა`,
        `100 გრამი მილქშეიკი`,
        `დალოდება მოგიწევთ მინ. 5, მაქს. 15 წუთი`,
      ],
      btn: `select-button`,
    },
    {
      tag: `dessert`,
      title: `mixed-fruit`,
      name: `ხილის ასორტი`,
      image: "/img/cards/7-mixed-fruit.jpg",
      price: 10,
      info: [
        `ფასი: 1 თეფში — 10ლ.`,
        `300 გრამი ხილი`,
        `დალოდება მოგიწევთ მინ. 5, მაქს. 15 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `drinks`,
      title: `borjomi`,
      name: `ბორჯომი`,
      image: "/img/cards/8-borjomi.jpg",
      price: 2,
      info: [
        `ფასი: 1 ბოთლი (0.5ლ) — 2ლ.`,
        `დალოდება მოგიწევთ მინ. 2, მაქს. 5 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `drinks`,
      title: `coca-cola`,
      name: `კოკა-კოლა`,
      image: "/img/cards/8-coca-cola.jpg",
      price: 3,
      info: [
        `ფასი: 1 ბოთლი (0.5ლ) — 3ლ.`,
        `დალოდება მოგიწევთ მინ. 2, მაქს. 5 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `drinks`,
      title: `coffee`,
      name: `ყავა`,
      image: "/img/cards/8-coffee.jpg",
      info: [`ფასი: სხვადასხვა`, `დალოდება მოგიწევთ მინ. 5, მაქს. 12 წუთი`],
      btn: `select-button`,
    },
    {
      tag: `drinks`,
      title: `energetic`,
      name: `ენერგეტიკული`,
      image: "/img/cards/8-energetic.jpg",
      price: 4,
      info: [
        `ფასი: 1 ქილა (0.5ლ) — 4ლ.`,
        `დალოდება მოგიწევთ მინ. 2, მაქს. 5 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `drinks`,
      title: `fanta`,
      name: `ფანტა`,
      image: "/img/cards/8-fanta.jpg",
      price: 3,
      info: [
        `ფასი: 1 ბოთლი (0.5ლ) — 3ლ.`,
        `დალოდება მოგიწევთ მინ. 2, მაქს. 5 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `drinks`,
      title: `limonati`,
      name: `ლიმონათი`,
      image: "/img/cards/8-limonati.jpg",
      price: 4,
      info: [
        `ფასი: 1 ბოთლი (1ლ) — 4ლ.`,
        `დალოდება მოგიწევთ მინ. 2, მაქს. 5 წუთი`,
      ],
      btn: `card-button`,
    },
    {
      tag: `drinks`,
      title: `tea`,
      name: `ჩაი`,
      image: "/img/cards/8-tea.jpg",
      price: 5,
      info: [`ფასი: 1 ჭიქა — 5ლ.`, `დალოდება მოგიწევთ მინ. 5, მაქს. 12 წუთი`],
      btn: `card-button`,
    },
    {
      tag: `drinks`,
      title: `wkali`,
      name: `წყალი`,
      image: "/img/cards/8-wkali.jpg",
      price: 2,
      info: [
        `ფასი: 1 ბოთლი (0.5ლ) — 2ლ.`,
        `დალოდება მოგიწევთ მინ. 2, მაქს. 5 წუთი`,
      ],
      btn: `card-button`,
    },
  ],
  seeMore: [
    {
      name: `ხაჭაპური`,
      title: `khachapuri`,
      btn: `card-button`,
      selections: [
        {
          name: `აჭარული ხაჭაპური`,
          image: "/img/opens/open-khachapuri/khachapuri-acharuli.jpg",
          price: 18,
        },
        {
          name: `იმერული ხაჭაპური`,
          image: "/img/opens/open-khachapuri/khachapuri-imeruli.jpg",
          price: 12,
        },
        {
          name: `ფენოვანი ხაჭაპური`,
          image: "/img/opens/open-khachapuri/khachapuri-fenovani.jpg",
          price: 10,
        },
      ],
    },
    {
      name: `პიცა`,
      title: `pizza`,
      btn: `card-button`,
      selections: [
        {
          name: `ყველის პიცა`,
          image: "/img/opens/open-pizza/pizza-cheese.jpg",
          price: 15,
        },
        {
          name: `მარგარიტა`,
          image: "/img/opens/open-pizza/pizza-margarita.jpg",
          price: 15,
        },
        {
          name: `სიცილიური პიცა`,
          image: "/img/opens/open-pizza/pizza-sicilian.jpg",
          price: 10,
        },
      ],
    },
    {
      name: `დონატი`,
      title: `donats`,
      btn: `card-button`,
      selections: [
        {
          name: `დაბადების დღის დონატი`,
          image: "/img/opens/open-donats/birthday-donut.jpg",
          price: 14,
        },
        {
          name: `შოკოლადის დონატი`,
          image: "/img/opens/open-donats/chocolate-donuts.jpg",
          price: 18,
        },
        {
          name: `მარწყვის დონატი`,
          image: "/img/opens/open-donats/donut-strawberry.jpg",
          price: 14,
        },
      ],
    },
    {
      name: `შაურმა`,
      title: `shawarma`,
      btn: `ingredients-button`,
      selections: [
        {
          name: `პატარა შაურმა`,
          image: "/img/opens/open-shawarma/shawarma-1small.jpg",
          price: 7,
        },
        {
          name: `საშუალო შაურმა`,
          image: "/img/opens/open-shawarma/shawarma-2medium.jpg",
          price: 9,
        },
        {
          name: `დიდი შაურმა`,
          image: "/img/opens/open-shawarma/shawarma-3large.jpg",
          price: 12,
        },
      ],
    },
    {
      name: `ნაყინი`,
      title: `ice-cream`,
      btn: `card-button`,
      selections: [
        {
          name: `შოკოლადის ნაყინი`,
          image: "/img/opens/open-ice-cream/chocolate-ice.jpg",
          price: 4,
        },
        {
          name: `ვანილის ნაყინი`,
          image: "/img/opens/open-ice-cream/vanilla.jpg",
          price: 4,
        },
        {
          name: `მარწყვის ნაყინი`,
          image: "/img/opens/open-ice-cream/ice-cream-strawberry.jpg",
          price: 5,
        },
      ],
    },
    {
      name: `მილქშეიკი`,
      title: `milkshake`,
      btn: `card-button`,
      selections: [
        {
          name: `ბანანის მილქშეიკი`,
          image: "/img/opens/open-milkshake/milkshake-banana.jpg",
          price: 6,
        },
        {
          name: `შოკოლადის მილქშეიკი`,
          image: "/img/opens/open-milkshake/milkshake-chocolate.jpg",
          price: 6,
        },
        {
          name: `მარწყვის მილქშეიკი`,
          image: "/img/opens/open-milkshake/milkshake-strawberry.jpg",
          price: 6,
        },
      ],
    },
    {
      name: `ყავა`,
      title: `coffee`,
      btn: `card-button`,
      selections: [
        {
          name: `ყავა ამერიკანო`,
          image: "/img/opens/open-coffee/americano.jpg",
          price: 6,
        },
        {
          name: `ყავა ესპრესო`,
          image: "/img/opens/open-coffee/espresso.jpg",
          price: 6,
        },
        {
          name: `ყავა თურქული`,
          image: "/img/opens/open-coffee/turkish.jpg",
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
