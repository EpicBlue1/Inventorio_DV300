import { Schema, model } from "mongoose";

export interface Location {
  name: string;
  index: number;
  link: string;
  icon: string;
  userId: string;
  items: string[];
}

export const LocationSchema = new Schema<Location>(
  {
    name: { type: String, required: true },
    index: { type: Number, required: true },
    link: { type: String, required: true },
    icon: { type: String, required: true },
    userId: { type: String, required: true },
    items: { type: [String] },
  },
  { timestamps: true }
);

export const LocationModel = model<Location>("location", LocationSchema);
