import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const revalidate = 5;

export const GET = async (request) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log("Error:",error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
