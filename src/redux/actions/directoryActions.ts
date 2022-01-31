import { CREATE_FOLDER } from "../constants";

export const create_folder = (
  folderName: string,
  location: string
): { type: string; folderName: string; location: string } => {
  return {
    type: CREATE_FOLDER,
    folderName: folderName.trim(),
    location,
  };
};
