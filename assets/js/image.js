document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("file-input");
  const image = document.getElementById("image");
  // Load the image from localStorage if it exists
  const storedImage = localStorage.getItem("uploadedImage");
  if (storedImage) {
    image.src = storedImage;
  }
  // Handle image file selection
  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Store the image data in localStorage
        localStorage.setItem("uploadedImage", reader.result);
        // Update the image source
        image.src = reader.result;
      };
      // Read the file as a Data URL
      reader.readAsDataURL(file);
    }
  });
});
