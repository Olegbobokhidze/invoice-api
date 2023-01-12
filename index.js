import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { InvoiceModel } from "./model/invoice.js";
const app = express();
const PORT = 4000;
app.use(express.json());
app.use(cors());
dotenv.config();
mongoose.set("strictQuery", false);
app.get("/invoices", (req, res) => {
  InvoiceModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.delete("/invoices/:id", async (req, res) => {
  const id = req.params.id;
  InvoiceModel.findByIdAndDelete(id, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Item deleted successfully");
    }
  });
});
app.post("/api/invoices", async (req, res) => {
  const invoice = req.body;
  console.log(invoice);
  const newInvoice = new InvoiceModel(invoice);
  await newInvoice.save();
  res.json(invoice);
});
app.put("/editInvoice/:id", (req, res) => {
  InvoiceModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((user) => {
      console.log(req.body, "req");
      res.json(user);
      console.log(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`listening on ${PORT}`);
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
