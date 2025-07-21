const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});

    // ✅ Add categories programmatically:
    const categories = ["Trending", "Rooms", "Iconic Cities", "Mountain", "Castles", "Camping", "Farms", "Arctic", "Domes", "Boats"];

    initData.data = initData.data.map((ob, i) => ({
        ...ob,
        owner: "68669bef187782c29edec9d0",
        category: categories[i % categories.length]  // 🟢 Cycle through categories
    }));

    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
};

initDB();
