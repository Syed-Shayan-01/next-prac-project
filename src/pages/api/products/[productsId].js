import { getId } from "@/services/product";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { productId } = req.query;
    const product = getId(productId);
    return res.status(200).send(product);
  }
  res.status(404).json();
}
