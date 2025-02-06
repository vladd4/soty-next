import { storage } from "@/firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";

class ImageService {
  constructor() {}

  async fetchImagesFromFirebase() {
    const imageListRef = ref(storage, "images/");

    try {
      const res = await listAll(imageListRef);

      const urls = await Promise.all(
        res.items.map(async (item) => {
          try {
            return await getDownloadURL(item);
          } catch (error) {
            console.error(`Failed to fetch URL for ${item.name}`, error);
            return null;
          }
        })
      );

      const validUrls = urls.filter((url) => url !== null);
      const uniqueUrls = Array.from(new Set(validUrls));

      return uniqueUrls;
    } catch (error) {
      console.error("Error fetching images from Firebase:", error);
      throw new Error("Failed to fetch images from Firebase");
    }
  }
}

const imageService = new ImageService();

export default imageService;
