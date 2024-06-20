import { Timestamp } from "firebase/firestore";

export interface ProjectTypes {
  id: string;
  name: string;
  ownerId: string;
  description?: string;
  createdAt: Timestamp;
  updateAt: Timestamp;
}