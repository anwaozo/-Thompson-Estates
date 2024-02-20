// export const importFolderData = async (folderpath) => {
//   const files = await import.meta.globEager(`${folderpath}/*.md`);

//   const markdownFiles = Object.keys(files).map((path) => {
//     const { attributes } = files[path].default;
//     return {
//       attributes,
//       slug: path.substring(path.lastIndexOf("/") + 1, path.length - 3),
//     };
//   });

//   return Promise.all(markdownFiles);
// };
// useApartments.js
import { useEffect, useState } from "react";

const importFolderData = (folderPath) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [apartmentsList, setApartmentsList] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const importApartments = async () => {
      try {
        const markdownFiles = require.context(folderPath, false, /\.md$/);
        const files = markdownFiles
          .keys()
          .map((relativePath) => relativePath.substring(2));

        const apartments = await Promise.all(
          files.map(async (path) => {
            const { attributes } = await import(`${folderPath}/${path}`);
            return { attributes, slug: path.substring(0, path.length - 3) };
          })
        );

        setApartmentsList(apartments);
      } catch (error) {
        console.error("Error importing apartments:", error);
      }
    };

    importApartments();
  }, [folderPath]);

  return { apartmentsList };
};

export default importFolderData;
