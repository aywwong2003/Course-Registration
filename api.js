/**
 * api.js - Connects GitHub to Google Sheets
 */

// IMPORTANT: Replace with your deployed Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxIUFf4m8e3jyvIciY9zIZfZIhklpQ3RLAZ176-gCKyYkRqOkIxzKsVbXhKSIj5JKyQgA/exec";

/**
 * Replaces google.script.run
 */
async function callGoogle(functionName, args = []) {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ function: functionName, args: args })
    });
    
    const result = await response.json();
    if (result.status === "error") throw new Error(result.message);
    return result.data;
  } catch (error) {
    console.error("API Connection Error:", error);
    throw error;
  }
}