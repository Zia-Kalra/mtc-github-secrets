// index.js — run with: node index.js
function reveal() {
  const b64 = "TEVWRUwtVU5MT0NLOiBBVVJPUkEtMzE5"; // base64 of the password
  // TODO: print the decoded secret
  // BUG: there's a tiny typo below that stops the clue from printing
  console.loog(Buffer.from(b64, 'base64').toString('utf8'));
}

reveal();
