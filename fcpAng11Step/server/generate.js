var faker = require('faker');

var database = { products: [] };

for (var i = 1; i <= 300; i++) {
    database.products.push({
        id: i,
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        price: faker.commerce.price(),
        // imageUrl: "https://source.unsplash.com/1600x900/?product",
        // imageUrl: "https://source.unsplash.com/random/1600x900/?product",
        imageUrl: `https://source.unsplash.com/collection/19${faker.random.number(1000)}${i}/1600x900/?product`,
        // imageUrl: "http://placeimg.com/640/480/tech",
        // imageUrl: faker.image.imageUrl(400, 400, "tech"),
        quantity: faker.random.number()
    });
}
console.log(JSON.stringify(database));