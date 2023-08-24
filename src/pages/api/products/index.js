import { getData, save } from "@/services/product";

export default function handler(req, res) {
  if (req.method === "GET") {
    const data = getData();
    return res.status(200).send(data);
  } else if (req.method === "POST") {
    const { name, desc, price,  color,  Img } = req.body;
    save(name, desc, price, color, Img);
    return res.status(201).send({});
  }
  res.status(404).json();
}
