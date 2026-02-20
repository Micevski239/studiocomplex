# GoDevLab

A modern, premium portfolio website for GoDevLab - a rapid-delivery development studio.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Deployment**: Vercel

## Design System

### Colors
- Primary Background: `#0A0E1A` (Deep Space)
- Secondary Background: `#111827` (Slate Dark)
- Accent Background: `#1E293B` (Card Surface)
- Primary Accent: `#3B82F6` (Sharp Blue)
- Secondary Accent: `#06B6D4` (Cyan Highlight)
- Text Primary: `#F9FAFB` (Off-White)
- Text Secondary: `#94A3B8` (Slate Gray)

### Typography
- Headings: Inter (700/800 weight)
- Body: Inter (400/500 weight)
- Monospace: JetBrains Mono

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
godevlab/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Problem.tsx     # Problem section
│   ├── Solution.tsx    # Solution section
│   ├── Services.tsx    # Services cards
│   ├── HowItWorks.tsx  # Process section
│   ├── WhyUs.tsx       # Why GoDevLab
│   ├── WhoItsFor.tsx   # Client filtering
│   ├── FAQ.tsx         # FAQ accordion
│   ├── FinalCTA.tsx    # Contact CTA
│   └── Footer.tsx      # Footer
└── ...config files
```

## Customization

### Update Contact Links

Replace placeholder links in:
- `components/FinalCTA.tsx` - Cal.com booking link and email
- `components/Footer.tsx` - Social media links

### Adjust Pricing

Update service pricing in `components/Services.tsx`

### Modify Timeline

Update delivery timelines in `components/Services.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

## License

Private - All rights reserved
