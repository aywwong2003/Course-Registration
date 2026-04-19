/**
 * api.js - Connects GitHub to Google Sheets
 */

// IMPORTANT: Replace with your deployed Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzUktVfJp9RhU-tM3VaYqXaSaeAMmH8U76L3Fu_HUi4gyGD1GaSaMR5tC1Y_JerUzCclw/exec";

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