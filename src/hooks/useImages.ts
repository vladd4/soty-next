import imageService from "@/http/image.service";

import { useQuery } from "@tanstack/react-query";

const useImages = () => {
  return useQuery({
    queryKey: [`images`],
    queryFn: () => imageService.fetchImagesFromFirebase(),
  });
};

export default useImages;
