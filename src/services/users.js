import { compare, hash } from "bcryptjs";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "data", "users.json");

export function getUserData() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

export function getById(id) {
  const data = getUserData();
  return data.find((p) => p.id === Number(id));
}

export function getByEmail(email) {
  const data = getUserData();
  return data.find((p) => p.email.toLowerCase() === email.toLowerCase());
}

export async function verifyPass(hashPass, password) {
  const isValid = await compare(password, hashPass);
  return isValid;
}

export async function saveData(email, password) {
  const found = getByEmail(email);
  if (found) {
    throw new Error("User ALredy Exist");
  }
  const data = getUserData();
  const hashPass = await hash(password, 12); // Encrypt Password Method
  data.push({
    id: data.length + 1,
    email,
    password: hashPass,
  });
  fs.writeFileSync(filePath, JSON.stringify(data));
}
