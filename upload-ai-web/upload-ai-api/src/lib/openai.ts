import 'dotenv/config'
import { OpenAI } from "openai";

export const openai = new OpenAI({
    organization: "org-5RxYoIQ1YPhKFEfgHHG8ekSJ",
    apiKey: process.env.OPENAI_KEY,
})