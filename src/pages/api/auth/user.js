import { saveData } from "@/services/users";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(404).send();
  }
  const { email, password } = req.body;
  try {
    saveData(email, password);
    res.status(201).send();
  } catch (err) {
     res.status(400).json({message : err})
  }
}
