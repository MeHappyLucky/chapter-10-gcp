const express = require("express");

if (!process.env.PORT) {
    throw new Error("Please specify the port number for the HTTP server with the environment variable PORT.");
}

const PORT = process.env.PORT;

async function main() {
    const app = express();

    app.use("/images", express.static("public/images"));

    const ads = [
        {
            name: "Shopee",
            url: "https://shopee.co.th/",
            imageFile: "shopee.svg",
        },
        {
            name: "Lazada",
            url: "https://www.lazada.co.th/",
            imageFile: "lazada.svg",
        },
        {
            name: "Kaidee",
            url: "https://www.kaidee.com/",
            imageFile: "kaidee.svg",
        },
    ];

    app.get("/ads", async (req, res) => {
        res.json({
            ads: ads.map(ad => ({
                name: ad.name,
                url: ad.url,
                imagePath: `/images/${ad.imageFile}`,
            })),
        });
    });

    app.listen(PORT, () => {
        console.log("Microservice online.");
    });
}

main().catch(err => {
    console.error("Microservice failed to start.");
    console.error(err && err.stack || err);
});

