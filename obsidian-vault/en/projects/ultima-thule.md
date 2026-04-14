---
title: "Ultima Thule"
category: "Projects"
order: 3
lang: "en"
type: "project"
status: "wip"
year: "2026"
tech: "Swift, SwiftUI, SwiftData, ARKit, Supabase, Gemini"
featured: false
image: "/projects/ultima-thule.png"
description: "Native iOS travel planner — AI itinerary generator, real-time flight tracking, smart packing, AR navigation, and offline maps. Your entire trip in one place."
---

# Ultima Thule

**Ultima Thule** is a native iOS travel planning app. It combines an AI itinerary generator, real-time flight tracking, smart packing lists, offline maps, AR navigation, and a travel journal in one place. All external APIs are proxied through Supabase Edge Functions — works from any country without a VPN.

## Motivation

Planning a trip is scattered across 6+ apps: flights, hotels, routes, expenses, weather, documents — no unified hub, no personalisation, no offline. Ultima Thule eliminates that chaos.

## Features

**AI Trip Generator** — a 4-step wizard: destination (with AI suggestions based on season and cheap flight availability), dates, budget (slider + Economy/Mid-range/Unlimited chips), and travel style (Active, Cultural, Gastro, etc.). AI builds a day-by-day itinerary with real prices via Aviasales/Travelpayouts.

**Flight tracking** — live status, delays, and gates via AirLabs. Boarding passes added via OCR scanning or Gmail/Yandex Mail parsing.

**Smart packing** — AI generates a packing list tailored to the specific trip, climate, duration, and traveller profile.

**Travel journal** — drag-and-drop photo book with geotags, notes, and export. Dedicated Memory Book view.

**GPS route tracking** — real-time path recording, with tracking automatically resumed after app restart. Geofences with "Mark as visited" notifications.

**Visited countries map** — full geographic visualisation of all trips.

**AR navigation** — ARKit overlay with directional pointers to waypoints via RealityKit.

**Offline access** — MKMapSnapshotter caches map tiles; weather and place data stored locally via OfflineCacheManager.

**Widget Extension** — home screen widget showing current trip info.

## Architecture

- **UI**: SwiftUI + SwiftData (local persistence with migrations)
- **Backend**: Supabase — auth (Apple/Google/Email + OAuth callback), sync via SyncManager, photo storage, Edge Functions as unified API proxy
- **AI layer**: Gemini (primary), Claude, GPT-4 — via cloud proxy, no API keys in the app
- **Maps**: MapKit + CoreLocation + GeofenceManager
- **AR**: ARKit + RealityKit
- **Currency**: CurrencyService with auto-refresh and background pause
- **Security**: biometric lock on background exit, Secrets via xcconfig (never in source)

## Design

Multiple colour palettes (including Sakura), full dark and light mode support. Localised in Russian and English via Localizable.xcstrings.

## Status

Active development, 26 sessions. All core modules implemented; UX polish and Live Activities integration in progress.

