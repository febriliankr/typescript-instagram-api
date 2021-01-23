import connect from "instagram-web-api";
import dotenv from "dotenv";
import FileCookieStore from 'tough-cookie-filestore'

dotenv.config();

const username = process.env.username;
const password = process.env.password;

const cookieStore = new FileCookieStore('./cookies.json')
const client = new connect({ username, password, cookieStore });

async function getProfile() {
  const loggingIn = await client.login();
  console.log('loggingIn', loggingIn)
  try {
    const profile = await client.search({ query: 'fkui' })
    console.log(profile);
  } catch (error) {
    console.error(error);
  }
}

getProfile();
