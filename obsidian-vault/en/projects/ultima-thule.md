---
title: "Ultima Thule"
category: "Projects"
order: 3
lang: "en"
type: "project"
status: "wip"
year: "2026"
tech: "Swift, SwiftUI, SwiftData, ARKit, Supabase"
featured: false
image: "/projects/ultima-thule.svg"
description: "Native iOS travel planner — AI itinerary generator, real-time flight tracking, smart packing, AR navigation, and offline maps. Your entire trip in one place."
---

# Ultima Thule

**Ultima Thule** is a native iOS travel planning app. It combines an AI itinerary generator, real-time flight tracking, smart packing lists, offline maps, and AR navigation in one place. All external APIs are routed through a Supabase Edge Function proxy — works from any country without VPNs.

## Motivation

Planning a trip is scattered across 6+ apps: flights, hotels, routes, expenses, weather, documents — no unified hub, no personalisation, no offline. Ultima Thule eliminates that chaos.

## Features

- **AI Trip Generator**: 4-step wizard — AI builds a day-by-day itinerary based on interests, travel style, and budget; real flight prices via Aviasales
- **Flight tracking**: live status, delays, and gates via AirLabs; OCR booking scan and Gmail/Yandex Mail parsing
- **Smart packing**: AI-generated packing list tailored to the specific trip, climate, and traveller profile
- **Travel journal**: drag-and-drop photo book, geotags, notes, export
- **AR navigation**: ARKit overlay with directional pointers to waypoints
- **Offline access**: MKMapSnapshotter caches map tiles; weather and place data stored locally

## Architecture

- **UI**: SwiftUI + SwiftData (local persistence)
- **Backend**: Supabase — auth (Apple/Google/Email), sync, photo storage, Edge Functions as unified API proxy
- **AI layer**: Gemini (primary), Claude, GPT-4 — via cloud proxy, no keys in the app
- **Maps**: MapKit + CoreLocation + GeofenceManager
- **AR**: ARKit + RealityKit

## Status

Active development, 26 sessions. All core modules implemented; UX polish and Live Activities integration in progress.

## Related
- [[supabase]]
- [[swift]]
