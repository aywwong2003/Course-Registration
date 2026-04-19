/**
 * api.js - Connects GitHub to Google Sheets
 */

// IMPORTANT: Replace with your deployed Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbypEwqlxoCggqg1K7G8m96N0PF0ipD3C7xxgqosBvxqLT-KrhM3gQx8-cCMr5jtUwBXcg/exec";

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