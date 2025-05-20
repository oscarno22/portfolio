import { NextResponse } from 'next/server';
import { LambdaClient, InvokeCommand, InvocationType } from "@aws-sdk/client-lambda";
import dotenv from 'dotenv';

dotenv.config();

// Initialize AWS Lambda client
const lambda = new LambdaClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
  }
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Prepare the Lambda input
    const params = {
      FunctionName: process.env.CHAT_LAMBDA_NAME || 'portfolio-chat-handler',
      InvocationType: InvocationType.RequestResponse,
      Payload: new TextEncoder().encode(JSON.stringify({ body: JSON.stringify({ message }) }))
    };

    // Invoke Lambda
    const command = new InvokeCommand(params);
    const { Payload } = await lambda.send(command);

    if (!Payload) {
      throw new Error('No response from Lambda');
    }

    // Parse Lambda response
    const responseJson = JSON.parse(new TextDecoder().decode(Payload));
    const responseBody = JSON.parse(responseJson.body);

    if (responseJson.statusCode !== 200) {
      throw new Error(responseBody.error || 'Lambda invocation failed');
    }

    return NextResponse.json({ 
      response: responseBody.response 
    });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}
