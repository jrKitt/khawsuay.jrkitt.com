# 🎂 Happy Birthday Khaw Suay

A delightful interactive birthday website featuring an SVG cake, progressive candle lighting, and a personalized birthday letter with photo gallery.

## ✨ Features

### 🎂 Interactive SVG Cake
- Beautiful layered cake created with custom SVG graphics
- Click-to-light candles with animated flames
- Hover effects and smooth transitions
- Progress counter showing lit candles

### Progressive Candle Lighting
- 5 candles to light progressively
- Each click adds one animated candle
- Candles positioned at different heights on the cake
- Flame animations with pulsing effects

### 💌 Birthday Letter Modal
- Appears automatically after all candles are lit
- Heartfelt birthday wishes in Thai language
- Scrollable photo gallery with real images
- Beautiful modal design with custom styling

### 📸 Photo Gallery
- Displays actual photos from `/public` folder
- Horizontal scrollable gallery
- Fallback placeholder if images fail to load
- Hover effects and smooth transitions

### 🎨 Design & Styling
- **Color Palette**: Warm pastel tones
  - `#FFDCDC` - Soft pink
  - `#FFF2EB` - Cream white
  - `#FFE8CD` - Light peach
  - `#FFD6BA` - Warm beige
- **Typography**: Itim font (Thai-friendly Google Font)
- **Background**: Animated SVG decorations (gifts, confetti, stars, party hats)
- **Responsive**: Works on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/jrKitt/khawsuay.jrkitt.com.git
cd khawsuay.jrkitt.com
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Add photos** (optional)
Place your photos in the `/public` folder with these names:
- `1.JPG`
- `2.JPG` 
- `3.JPG`
- `4.JPG`
- `5.JPG`

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 How to Use

1. **Start the Experience**: Visit the website to see the beautiful cake
2. **Light the Candles**: Click on the cake 5 times to light all candles
3. **Read the Letter**: After all candles are lit, a birthday letter will appear automatically
4. **View Photos**: Scroll through the photo gallery in the letter
5. **Re-read**: Close the letter and click "อ่านจดหมายอวยพรอีกครั้ง" to read it again

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Graphics**: Custom SVG illustrations
- **Fonts**: Google Fonts (Itim)
- **Deployment**: Ready for Vercel/Netlify

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Itim font
│   ├── page.tsx           # Main birthday page component
│   └── globals.css        # Global styles
├── public/
│   ├── 1.JPG             # Birthday photos
│   ├── 2.JPG
│   ├── 3.JPG
│   ├── 4.JPG
│   └── 5.JPG
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── README.md             # This file
```

## 🎨 Customization

### Change the Birthday Person's Name
Edit the name in `/app/page.tsx`:
```tsx
<h2 className="text-3xl font-semibold text-[#8B4513] mb-8">
  สุขสันต์วันเกิด [YOUR_NAME_HERE]! 
</h2>
```

### Modify the Birthday Message
Update the birthday wishes in the `BirthdayLetter` component in `/app/page.tsx`

### Add More Photos
Simply add more image files to `/public` and update the array in:
```tsx
{['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG'].map((fileName, index) => (
  <PhotoCard key={index} fileName={fileName} index={index} />
))}
```

### Change Colors
Modify the color palette by updating the Tailwind classes throughout the components.

## 🚀 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify

## 📱 Browser Support

- ✅ Chrome/Chromium (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**jrKitt**
- GitHub: [@jrKitt](https://github.com/jrKitt)
- Website: [khawsuay.jrkitt.com](https://khawsuay.jrkitt.com)

## 🎉 Acknowledgments

- Inspired by the joy of birthday celebrations
- Built with love for Khao Suay
- Special thanks to the Next.js and Tailwind CSS communities

---

Made with ❤️ for birthday celebrations
