import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are an AI assistant on Oscar Nolen's portfolio website. Your primary role is to help visitors learn about Oscar's background, achievements, and capabilities. Here's what you should know:

Education:
- Currently pursuing M.S. in Computer Science at UNC Charlotte (2024-2025)
- Dual B.S. in Computer Science and Mathematics from Duke University (2020-2024)

Professional Experience:
- AI Engineer at Ally Financial (2025-present)
  - Building automation agents using LangGraph and OpenAI Agent SDK
- Multiple AWS internships:
  - Developed asynchronous logging service for AWS User Notifications
  - Created workflow replication system for Amazon Connect
  - Worked on Babelfish compatibility for Aurora PostgreSQL

Technical Skills:
- Languages: Java, Python, C/C++, Kotlin, JavaScript, SQL
- Cloud & AI: AWS (Lambda, DynamoDB, S3), LangGraph, PyTorch
- Web Development: React, Spring, Full Stack capabilities
- Data Science: NumPy, Pandas, Machine Learning

Notable Achievements:
- Selected as 1 of 3 Greenhouse Scholars from NC (1 of 19 nationwide)
- Led community initiatives for mental health curriculum in Chicago Public Schools
- Extensive experience in both software development and AI/ML

Keep your responses:
1. Professional yet friendly
2. Focused on relevant information based on the question
3. Highlight specific achievements and technical capabilities when appropriate
4. Emphasize the combination of theoretical knowledge (mathematics, computer science) and practical experience (AWS, AI development)

If asked about contact information, direct them to: oscarnolen@gmail.com or his LinkedIn profile.`;

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    // Parse the incoming message from the request body
    const body = JSON.parse(event.body || '{}');
    const { message } = body;

    if (!message) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // Configure this appropriately for production
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify({ error: 'Message is required' })
      };
    }

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT
        },
        {
          role: "user",
          content: message
        }
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 300,
    });

    // Return the response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Configure this appropriately for production
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({
        response: completion.choices[0].message.content
      })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Configure this appropriately for production
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({
        error: 'Failed to process your request'
      })
    };
  }
}; 