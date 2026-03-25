# How to Add Certificate Images

## Step 1: Prepare Your Certificate Images

1. Scan or take clear photos of your certificates
2. Recommended image format: JPG or PNG
3. Recommended dimensions: 1200x800px or similar aspect ratio (3:2)
4. Make sure the text is readable

## Step 2: Add Images to Your Project

### Option A: Using the `src/assets` folder (Recommended)

1. Create an `assets` folder if it doesn't exist:
   ```
   portfolio-1/src/assets/
   ```

2. Add your certificate images to this folder:
   ```
   portfolio-1/src/assets/certificate1.jpg
   portfolio-1/src/assets/certificate2.jpg
   portfolio-1/src/assets/certificate3.jpg
   ```

3. Update `Home.jsx` to import the images:
   ```javascript
   import cert1 from '../assets/certificate1.jpg';
   import cert2 from '../assets/certificate2.jpg';
   import cert3 from '../assets/certificate3.jpg';
   ```

4. Update the certificates array:
   ```javascript
   const certificates = [
       {
           title: "Software Development Internship",
           organization: "CarinaFashions",
           type: "Internship Certificate",
           year: "2024",
           date: "December 2024",
           image: cert1,  // Use the imported image
           link: "#"
       },
       // ... other certificates
   ];
   ```

### Option B: Using the `public` folder

1. Add your certificate images to the `public` folder:
   ```
   portfolio-1/public/certificates/certificate1.jpg
   portfolio-1/public/certificates/certificate2.jpg
   portfolio-1/public/certificates/certificate3.jpg
   ```

2. Update the certificates array in `Home.jsx`:
   ```javascript
   const certificates = [
       {
           title: "Software Development Internship",
           organization: "CarinaFashions",
           type: "Internship Certificate",
           year: "2024",
           date: "December 2024",
           image: "/certificates/certificate1.jpg",  // Path from public folder
           link: "#"
       },
       // ... other certificates
   ];
   ```

## Step 3: Test Your Changes

1. Save all files
2. Check your browser at http://localhost:5173
3. Navigate to the Achievements section
4. Hover over the certificate cards to see the overlay with details

## Features

- **Image Display**: Full certificate image fills the card
- **Hover Overlay**: Information appears when you hover over the card
- **Year Badge**: Shows the year in the top-right corner
- **Responsive**: Works on all screen sizes
- **Placeholder**: If image fails to load, a placeholder with an icon appears

## Tips

- Use high-quality images for better appearance
- Keep file sizes reasonable (under 500KB per image) for faster loading
- Use consistent aspect ratios for all certificates
- Consider optimizing images using tools like TinyPNG or Squoosh
