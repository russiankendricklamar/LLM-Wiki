---
title: "Ultima Thule"
category: "Projects"
order: 4
lang: "en"
type: "project"
status: "wip"
year: "2026"
tech: "Swift, SwiftUI, SwiftData, ARKit, MapKit, Supabase, Gemini"
featured: false
image: "/projects/ultima-thule.png"
description: "Native iOS travel planner — AI itinerary generator, real-time flight tracking, smart packing, AR navigation, turn-by-turn navigation with Dynamic Island, and offline maps. Your entire trip in one place."
---

# Ultima Thule

**Ultima Thule** is a native iOS travel planning app that puts the entire trip — before, during, and after — into a single coherent interface. AI itinerary generation, live flight tracking, turn-by-turn navigation, a travel journal, packing lists, offline maps, and a full sync backend. Built entirely with SwiftUI and Supabase, no API keys in the app.

The ambition: a personal travel operating system. Not another aggregator of links, but a tool that holds the full context of a trip and acts intelligently on it.

## The Problem

Planning and executing a trip is scattered across at least six apps. Flights are in one app, hotels in another. The route exists in Google Maps. Expenses are tracked in a spreadsheet. Photos end up in the camera roll with no context. Weather is checked separately. Packing is a mental note.

None of these tools talk to each other. When you arrive at the airport at 6 AM you have no single place to see your gate, the day's itinerary, today's weather, and how much local currency you have left. Ultima Thule collapses that stack.

## One Context, Five Views

The app is built around a single `Trip` object with five tabs that each provide a different lens on the same data:

- **Dashboard** — countdown, today's highlights, weather, compact flight card
- **Itinerary** — day-by-day plan with places, events, and drag-to-reorder
- **Map** — interactive map with all places, routes, AR navigation, and search
- **Expenses** — multi-currency budget tracking with category breakdown
- **Journal** — drag-and-drop photo book with geotags and Memory Book view

You never leave the trip context. The side menu lets you switch between trips or return to the home screen without losing state.

## What It Can Do

### AI Trip Generator

A 4-step wizard: destination (MKLocalSearchCompleter autocomplete + AI suggestions based on season and live Aviasales prices), date range (DatePicker + seasonal hint from AI), budget (slider + Economy / Mid-range / Unlimited chips), and travel style (Active / Cultural / Gastro / Beach / Business / Adventure — multi-select grid).

AI builds a full day-by-day itinerary via Gemini: places with descriptions, transport between them, estimated costs. Simultaneously, the app fetches real flight offers via Travelpayouts (Aviasales) and hotel options via Hotellook. The generated trip saves to SwiftData with all relationships.

### Flight Tracking

Live flight status — gate, departure time, delays — via AirLabs, routed server-side through a Supabase Edge Function. Boarding passes are added via three paths: OCR scan (Vision framework, VNRecognizeTextRequest, Russian + English), camera input, or plain-text paste. Gmail and Yandex.Mail parsing is also supported: the app authenticates via OAuth (ASWebAuthenticationSession), searches for booking emails from 21 known senders (Aviasales, Booking.com, RZD, Aeroflot, etc.), and feeds the bodies through Gemini to extract structured flight data.

### Turn-by-Turn Navigation

MapKit-powered navigation for walking, driving, and cycling. The `NavigationEngine` tracks position against the active route step-by-step. Deviation beyond 30 m triggers an auto-reroute (with 8-second debounce); in offline mode, rerouting is suppressed and a warning fires instead.

A **Dynamic Island Live Activity** shows the current manoeuvre icon, street name, distance to next step, and ETA throughout navigation. Voice guidance is delivered via `AVSpeechSynthesizer` without any third-party dependency.

The map sheet is a state machine driven by `MapViewModel`: `sheetDetent` (peek / half / full) × `sheetContent` (idle / searchResults / placeDetail / routeInfo / navigation / …). Transitioning between states is a single assignment; the sheet handles its own animation.

### AR Navigation

ARKit + RealityKit overlay that places directional waypoint anchors in the camera view, pointing toward the next places in the day's itinerary. Activated from the map tab.

### Smart Packing

AI generates a packing list tailored to the specific trip — destination, duration, climate, and the traveller's profile (interests, diet pace, chronotype). Items are grouped by category (Documents / Clothing / Electronics / Toiletries / Medicine / Other) with a progress ring. Manual add/edit/delete with swipe actions.

### Travel Journal

A drag-and-drop photo book where each photo card carries a geotag, caption, and timestamp. A separate **Memory Book** view renders the journal as a visual spread, exportable as a PDF.

### GPS Route Tracking

`LocationManager` records the raw GPS path throughout a trip. Tracking is restored automatically after app restart via `resumeTrackingIfNeeded`. Smart geofences notify when the user enters a place radius with a "Mark as visited" actionable notification.

### Offline Access

`OfflineCacheManager` (NWPathMonitor) tracks connectivity. `MKMapSnapshotter` pre-caches per-day map tiles as `OfflineMapCache` SwiftData records. Weather and place data are stored locally on successful fetch and restored from cache on failure. A red offline banner appears automatically. A "Prepare Offline" button in Settings triggers full pre-caching.

### Bucket List & POI Discovery

A global bucket list (not tied to any trip) where saved places can be promoted to a trip's itinerary. POI discovery uses the Google Places API (via Supabase proxy) to find nearby restaurants, attractions, museums, and cafes.

### Travel Stats

Haversine-distance calculation across all trips for flights, trains, and buses. Period filters (all time / year / month). Geographic stats showing visited countries and a world map visualisation.

### Sync & Auth

Supabase handles auth (Apple Sign-In, Google OAuth, Email), all 12 tables with RLS, and photo storage. `SyncManager` pushes and pulls changes with a 60-second debounce, only when online and signed in.

## Why It's Hard to Build

**SwiftData is unforgiving.** Adding a stored property to an `@Model` class without a migration crashes existing installs. The schema must be declared upfront in a fixed `Schema([...])` block passed to `ModelContainer`. Autosave is unreliable for immediate reads — `modelContext.save()` must be called explicitly after every insert.

**@State Trip? goes stale.** SwiftData model references held in `@State` become stale when views are destroyed and recreated. The solution: store only `selectedTripID: UUID?` in state and resolve to `Trip?` via a `@Query`-backed computed property on every access.

**All API keys are server-side.** A unified Supabase Edge Function (`api-proxy`) proxies six services: AirLabs, Travelpayouts, weather, currency, Wikipedia, country info. The Swift client (`SupabaseProxy`) sends a single POST with `{service, action, params}`. No API keys exist in the app binary or xcconfig for production — they live in Supabase Edge Function secrets.

**The map is a state machine, not a sheet.** MapKit's native sheet API doesn't provide the fine-grained control needed for a search-first design. The map uses a custom `MapBottomSheet` driven by `MapViewModel`: one source of truth for detent + content, animated with `Animation.spring(duration: 0.45, bounce: 0.15)`.

**Offline navigation rerouting.** The `NavigationEngine` must detect off-route conditions without making network calls when offline. The `isOfflineMode` flag switches the engine from rerouting to warning, while still advancing steps normally.

**The Dynamic Island contract.** `ActivityAttributes` must be declared before the app launches and cannot be changed without an OS update cycle. `NavigationActivityAttributes` encodes the full step state; `NavigationLiveActivityManager` manages start/update/end lifecycle across navigation sessions.

## Architecture

```
Travel_appApp
├── SwiftData ModelContainer (Trip, TripPhoto, JournalEntry,
│   BucketListItem, PackingItem, OfflineMapCache, CachedRoute)
├── SupabaseManager (auth client, storage)
├── SyncManager (60s debounce push/pull)
└── MainTabView (state machine: Auth → Profile → Onboarding → Home → Tabs)
    ├── DashboardView
    ├── ItineraryView
    ├── TripMapView → MapViewModel (sheet state machine)
    │   ├── NavigationEngine (step tracking, rerouting)
    │   ├── NavigationVoiceService (AVSpeechSynthesizer)
    │   └── NavigationLiveActivityManager (Dynamic Island)
    ├── ExpensesView
    └── JournalView
```

- **UI**: SwiftUI + `@Observable` (iOS 17 Observation framework throughout)
- **Persistence**: SwiftData — local; Supabase — remote sync + auth + photo storage
- **AI**: Gemini via `gemini-proxy` Supabase Edge Function; `AIPromptHelper` injects traveller profile context into every prompt
- **Maps**: MapKit, CoreLocation, ARKit + RealityKit, MKLocalSearchCompleter
- **External data**: all via `SupabaseProxy` → `api-proxy` Edge Function
- **Theme**: 6 `ColorPalette` cases, glassmorphism ViewModifiers (`.cardStyle()`, `.surfaceStyle()`, `.accentCardStyle()`), `GradientBackground` modifier with `@AppStorage` reactivity

## Development

The app was built across 27 focused sessions, each shipping a coherent cluster of features. Early sessions established the data model and core CRUD; later sessions layered AI, sync, and advanced map/navigation capabilities.

```chart
{
  "chartType": "bar",
  "xAxis": "phase",
  "data": [
    {"phase": "S1–3: Core", "features": 6},
    {"phase": "S4–7: Design+Data", "features": 5},
    {"phase": "S8–10: AI+Live", "features": 4},
    {"phase": "S11–15: Multi-trip+Nav", "features": 7},
    {"phase": "S16–18: Discovery+Stats", "features": 5},
    {"phase": "S19–22: AI Scan", "features": 5},
    {"phase": "S23–27: Generator+Proxy", "features": 6}
  ],
  "lines": [
    {"dataKey": "features", "name": "Features shipped", "stroke": "#ec4899"}
  ]
}
```

Feature coverage across travel use cases:

```chart
{
  "chartType": "bar",
  "xAxis": "domain",
  "data": [
    {"domain": "Planning", "coverage": 90},
    {"domain": "Navigation", "coverage": 85},
    {"domain": "Tracking", "coverage": 80},
    {"domain": "Journal", "coverage": 85},
    {"domain": "Finances", "coverage": 75},
    {"domain": "Offline", "coverage": 70},
    {"domain": "Sync", "coverage": 65},
    {"domain": "Discover", "coverage": 60}
  ],
  "lines": [
    {"dataKey": "coverage", "name": "% complete", "stroke": "#10b981"}
  ]
}
```

## Status

Active development, 27 sessions. All core modules are implemented and working on a real device. Current focus: map UX polish and stability. Pending: App Store submission, App Icon, final E2E testing.
