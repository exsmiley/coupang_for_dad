const functions = require("firebase-functions");
const express = require("express");
const axios = require("axios");
require('dotenv').config();
const admin = require('firebase-admin');

// Firebase Admin SDK 초기화 (최우선으로 호출)
admin.initializeApp();

const database = admin.database();
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const getPixabayImages = async (keyword) => {
    const apiKey = '45415071-3b277c3fa63a50258bb8f4186';  // Pixabay에서 발급받은 API 키를 여기에 입력하세요.
    const URL = "https://pixabay.com/api/?key="+apiKey+"&q="+encodeURIComponent(keyword)+"&per_page=3";

    try {
        const response = await axios.get(URL);
        return response.data.hits[0]? response.data.hits[0].webformatURL : "https://pixabay.com/get/gfa193f1fe36df39c4122da4ffd6c0b0251aad06f5fbcc6bb254e9b33884bf18fe3d5b2fbf5f187a00f587ecb353b46b3cd10efe5cd2ed69038ea9272f115c89d_640.jpg";
    } catch (error) {
        console.error('Error fetching images from Pixabay:', error);
        throw error;
    }
};

// Route to return "Hello, World!"
app.get('/hello', (req, res) => {
    res.json({ message: "Hello, World!" });
});

// Route to echo back the JSON data sent in the POST request
app.get('/webhook', async (req, res) => {

    const {keyword, type, ingredientId} = req.query;
    let data = {
        status: "ACTIVE",
        recipe: "",
        ingredients: ""
    };

    const prompt = keyword || "피자"; // 기본 프롬프트 설정

    let response;
    if(type == "food"){
        response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: "질문에 대한 답만 말해." },
                    { role: "user", content: `${prompt}를 영어로 변환해줘.` },
                ],
                max_tokens: 50, // 생성할 텍스트 길이
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.OPEN_API}`,
                },
            }
        );
        value = response.data.choices[0].message.content
    }
    

    try {
        // 데이터 삽입
        data.recipe = type == "food" ? await getRecipes(value) : await getIngredients(ingredientId);
        await database.ref('data').set(data);
        console.log('Data inserted successfully');
        res.status(200).send(data);
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).send('Error inserting data');
    }
});

// Route to fetch recipes from the Spoonacular API
app.get('/get-recipes', async (req, res) => {
    const {keyword} = req.query;
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${encodeURIComponent(keyword)}`;
    const querystring = {
        instructionsRequired: "true",
        fillIngredients: "false",
        addRecipeInformation: "false",
        addRecipeInstructions: "false",
        addRecipeNutrition: "false",
        maxReadyTime: "45",
        ignorePantry: "true",
        sort: "max-used-ingredients",
        offset: "0",
        number: "20"
    };

    const headers = {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPID_API || '33ee2960efmshec60df803b3cbfap1f8843jsn5407f2ebb6ca',
    };

    try {
        const response = await axios.get(url, { headers, params: querystring });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the recipes' });
    }
});

async function getRecipes(keyword){
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${encodeURIComponent(keyword)}`;
    const querystring = {
        instructionsRequired: "true",
        fillIngredients: "false",
        addRecipeInformation: "false",
        addRecipeInstructions: "false",
        addRecipeNutrition: "false",
        maxReadyTime: "45",
        ignorePantry: "true",
        sort: "max-used-ingredients",
        offset: "0",
        number: "20"
    };

    const headers = {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPID_API || '33ee2960efmshec60df803b3cbfap1f8843jsn5407f2ebb6ca',
    };

    try {
        const response = await axios.get(url, { headers, params: querystring });
        return response.data.results;
    } catch (error) {
        console.error(error);
        return []
    }
}

async function getIngredients(recipeId){
    const options = {
        method: 'GET',
        url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/ingredientWidget.json`,
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY || '33ee2960efmshec60df803b3cbfap1f8843jsn5407f2ebb6ca',
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        let ingredients = [];
        if(response.data.ingredients.length > 0){
            const ingredients = await Promise.all(
                response.data.ingredients.map(async (d) => {
                    return {
                        name: d.name,
                        image: await getPixabayImages(d.name)
                    };
                })
            );
            
            return ingredients
        } else {
            return []
        }
    } catch (error) {
        return []
    }
}


// Define the route that will call the Spoonacular API
app.get('/get-ingredients', async (req, res) => {
    const { recipeId } = req.query;
    
    if (!recipeId) {
        return res.status(400).json({ error: 'Recipe ID is required' });
    }

    const options = {
        method: 'GET',
        url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/ingredientWidget.json`,
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY || '33ee2960efmshec60df803b3cbfap1f8843jsn5407f2ebb6ca',
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        let ingredients = [];
        if(response.data.ingredients.length > 0){
            const ingredients = await Promise.all(
                response.data.ingredients.map(async (d) => {
                    return {
                        name: d.name,
                        image: await getPixabayImages(d.name)
                    };
                })
            );
            
            res.json(ingredients);
        } else {
            res.json([]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching data from the API' });
    }
});

// Export the Express app as a Firebase Function
exports.api = functions.https.onRequest(app);
