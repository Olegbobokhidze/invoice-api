import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema({
  fromStreetAddress: {
    type: String,
    required: true,
  },
  fromCity: {
    type: String,
    required: true,
  },
  fromPostCode: {
    type: String,
    required: true,
  },
  fromCountry: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  clientMail: {
    type: String,
    required: true,
  },
  toStreetAddress: {
    type: String,
    required: true,
  },
  toCity: {
    type: String,
    required: true,
  },
  toPostCode: {
    type: String,
    required: true,
  },
  toCountry: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  options: {
    type: String,
    required: true,
  },
  project: {
    type: String,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});
export const InvoiceModel = mongoose.model("invoices", InvoiceSchema);
