# 🎴 3D Card Hover Effect (Responsive)

This project showcases a stylish **3D card hover effect** built with HTML and CSS. The design features:
- A background image (cover)
- A floating title
- A character/image that appears on hover
- Fully **responsive** behavior across screen sizes


## 🚀 Features

- Smooth 3D hover animation
- Layered lighting effects using gradients
- Responsive design for mobile, tablet, and desktop
- Clean and modern UI using only HTML & CSS

## 📁 File Structure

project-folder\
├── index.html # Main HTML file\
├── style.css # All CSS styles, including media queries\
├── script.js # (Optional) JS file if you want to add interactivity\
├── README.md # Project info and setup\
├── Ayaz 1.JPG # Cover image\
├── Ayaz 2.png # Character image\
└── dark_rider-title.png # Title image


## 🧑‍💻 How to Use

1. Clone or download this repository.
2. Place your images in the root directory:
   - `Ayaz 1.JPG` (cover)
   - `Ayaz 2.png` (character on hover)
   - `dark_rider-title.png` (title overlay)
3. Open `index.html` in any modern web browser.

## 📱 Responsive Behavior

The card layout adapts automatically to different screen sizes:

| Device         | Width           | Height          |
|----------------|------------------|------------------|
| Mobile         | 90% of screen    | 250px            |
| Tablet         | 70% of screen    | 280px            |
| Laptop         | 60% of screen    | 300px            |
| Desktop        | Default 3D size  | 300px            |

## 🛠 Customization

You can replace the images with your own:
- **Cover Image**: Background image inside the `.wrapper`
- **Title**: Logo or text image
- **Character**: Element that floats on hover

To adjust card size:
```css
:root {
  --card-height: 300px;
}


💡 Ideas for Improvement
 • Add flip animation or rotation

 • Add clickable buttons or links

 • Use dynamic content with JavaScript

 • Support multiple cards in a grid layout
