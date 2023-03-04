import config from "config";
import { json } from "express";

const url = "https://api.openai.com/v1/completions";


export const review = (data) => {
    try {
        const { Configuration, OpenAIApi } = require("openai");

        const configuration = new Configuration({
           apiKey: config.chatGPT.apiKey,
           //apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        
        const p = "Review the following job listing regarding how inclusive it is and provide points out of 100 and feedback on why points were given and deducted in dot points.\n" + JSON.stringify(data) + "\nGive the response in the following format\nScore: /100\nPositive Feedback:\nAreas for Improvement:\nReasons for Point Deductions:\n###";
        

        const response = openai.createCompletion({
            model: "text-davinci-003",
            prompt: p,
            temperature: 0,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["###"],
        });

        return response;
    }
    catch (error) {
        console.log(error);
    }
}

