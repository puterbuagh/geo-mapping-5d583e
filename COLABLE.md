# Geo mapping
Stack: nextjs-supabase-vercel-stripe
Created: 2026-05-20

## Decisions
- Cartographic editorial design system with parchment (#FAF7F0) and terracotta (#C1666B) palette
- Typography stack: Fraunces (display), Work Sans (body), JetBrains Mono (code)
- Grain texture overlay and atmospheric gradients for depth
- Stamp shadow effects for elevated components
- SVG-based interactive map with region paths for click-based geography quiz
- Shared Supabase schema across environments (dev/production) with documented environment variables
- Quiz engine with QuizMode/QuizState/GeoFeature types and helpers (createQuiz, checkAnswer)
- Framer Motion for interactive animations
- US States and Canadian Territories data files with stylized SVG paths on 800x600 viewBox
- Single favicon.svg reference in layout metadata; favicon.ico emptied (cannot be deleted via API)
- TypeScript path alias @/* maps to project root for clean imports
- Named default exports for all components to avoid module resolution issues

## Components
- InteractiveMap: Integrated SVG region paths with hover/selection states, inline QuizControls/QuizFeedback/ResultsScreen, cartographic styling, named default export (components/quiz/InteractiveMap.tsx)
- Layout: Global fonts (Fraunces/Work Sans/JetBrains Mono), grain texture, atmospheric gradients, single favicon.svg metadata reference
- Favicon: AQ lettermark SVG in cartographic style
- lib/geography/quiz-engine.ts: Quiz logic core with type definitions and game flow helpers
- lib/geography/regions.ts: GeoFeature type imports and region data structure
- lib/geography/us-states.ts: US States GeoFeature data with SVG paths
- lib/geography/canadian-territories.ts: Canadian Territories GeoFeature data with SVG paths
- app/page.tsx: Homepage rendering InteractiveMap with @/ path alias
- tsconfig.json: Path alias configuration for @/* mapped to ./*
- next.config.js: Webpack alias configuration aligning with TypeScript paths