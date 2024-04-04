const imageExists = async (url) => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    return false;
  }
};

(async () => {
  // While images exist in the projects folder to display we will display them
  let imageNumber = 1;
  while (imageNumber) {
    const assumedSrc = `./images/projects/image_${imageNumber}.jpg`
    const imgExists = await imageExists(assumedSrc);

    if (imgExists) {
      // Create a new image element 
      var img = document.createElement('img'); 
      img.src = assumedSrc;
      img.id = 'project-image';
      
      // Get two column elements
      const columns = document.getElementsByClassName("column");
      
      // Place images into two columns
      if (imageNumber % 2 !== 0) {
        columns[0].appendChild(img);
      } else {
        columns[1].appendChild(img);
      }

      imageNumber++
    } else {
      imageNumber = 0;
    }
  }
})()