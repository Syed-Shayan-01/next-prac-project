import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "data", "products", 'women.json');

export function getWomenData() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

export function getWomenId(id) {
  const data = getWomenData();
  return data.find((p) => p.id === Number(id));
}

export async function save(name, desc, price, color, thumbnail) {
  const data = getWomenData();
  data.push({
    id: data.length + 1,
    name,
    desc,
    price,
    color,
    thumbnail,
  });
  fs.writeFileSync(filePath, JSON.stringify(data));
}
