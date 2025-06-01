# 🕒 Analog Clock Project

This project is a clean and animated **Analog Clock** built using HTML, CSS, and JavaScript. It features hour, minute, and second hands that rotate smoothly in real-time. The design is responsive and modern, with customizable hand colors and styles.

---

## 📁 Project Structure

analog-clock\
├── index.html # Main HTML file with clock layout\
├── style.css # CSS file for styling and responsiveness\
├── script.js # JavaScript logic to update clock hands\
└── README.md # Project documentation (you are here!)

---

## 🚀 Features

- Real-time movement of hour, minute, and second hands
- Responsive layout with media queries
- Custom colored hands using CSS variables
- Smooth animations with no external libraries
- Branding support in the center of the clock (`A2z`)

---

## 🛠️ Technologies Used

- **HTML5** – Structure of the analog clock
- **CSS3** – Styling, animations, and responsiveness
- **JavaScript (ES6)** – Dynamic time calculations and hand rotations

---

## 🧠 How It Works

- `setInterval()` calls `displayTime()` every second.
- The `Date` object is used to get the current hour, minute, and second.
- The hands are rotated based on:
  - Hour hand: `30 × hh + mm / 2`
  - Minute hand: `6 × mm`
  - Second hand: `6 × ss`
- CSS variables (`--clr`, `--h`) define the color and length of each hand.
- Hand rotation is applied using inline styles via JavaScript.

---

## 📱 Responsive Design

The layout is centered and fits all screen sizes using Flexbox. Font size for the center branding (`.name span`) can be adjusted based on screen width if needed.

---

## ✨ Customization Tips

- To change hand colors, update the `--clr` values in the `index.html` or CSS.
- You can customize the center name/logo (`.name span`) as desired.
- Clock size can be scaled by updating `.clock` width/height in `style.css`.

---

## 📌 To Run the Project

1. Download or clone the repository.
2. Open `index.html` in your browser.
3. You’ll see a live analog clock ticking in real time!

---

📄 License

This project is open-source and free to use under the MIT License.

---

👨‍💻 Author
A2z

Feel free to contribute or customize this project further!


Let me know if you want this with a download link or in a `.md` file format.
