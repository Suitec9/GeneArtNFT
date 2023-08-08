const NextAuthSecret = process.env.NEXT_AUTH_SECRET;

const NextAuthUrl = process.env.NEXT_AUTH_URL;

const appId = process.env.MORALIS_APP_ID;

Moralis.start({ NextAuthUrl, appId  });