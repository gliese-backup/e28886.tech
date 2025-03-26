console.log("Hello");

const ACCOUNT_ID = "";
const MODEL_NAME = "@cf/black-forest-labs/flux-1-schnell";
const CLOUDFLARE_API_TOKEN = "";

const URL = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai/run/${MODEL_NAME}`;

console.log(URL);

fetch(URL, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    prompt: "A cute young boy",
  }),
})
  .then((res) => res.json())
  .then((data) =>
    Bun.write(
      "./file.txt",
      "data:image/jpeg;base64," + JSON.stringify(data.result.image)
    )
  );
