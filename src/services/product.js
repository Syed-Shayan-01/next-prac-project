import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "data", "products", 'male.json');

export function getData() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

export function getId(id) {
  const data = getData();
  return data.find((p) => p.id === Number(id));
}

export async function save(name, desc, price, color, Img) {
  const data = getData();
  data.push({
    id: data.length + 1,
    name,
    desc,
    price,
    color,
    Img,
  });
  fs.writeFileSync(filePath, JSON.stringify(data));
}
