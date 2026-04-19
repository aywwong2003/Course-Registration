/**
 * api.js - Connects GitHub to Google Sheets
 */

// IMPORTANT: Replace with your deployed Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzRLyUk7zS0bcvHZp_UvgJmb9HhlHsjlcsADtzXrR_vbd6HmJIRwJt-MNhU4dLHRTKlcA/exec";

/**
 * Replaces google.script.run
 */
async function callGoogle(functionName, args = []) {
  const url = `${GOOGLE_SCRIPT_URL}?function=${functionName}&args=${encodeURIComponent(JSON.stringify(args))}`;

  const response = await fetch(url, {
    method: "GET"
  });

  const result = await response.json();

  if (result.status === "error") throw new Error(result.message);
  return result.data;
}