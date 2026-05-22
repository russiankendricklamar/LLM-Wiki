---
title: Hash Tables
category: Data Structures
order: 106
lang: en
slug: hash-tables
---

## Overview
A hash table is a data structure that implements an associative array abstract data type, mapping keys to values using a hash function.

## Performance
The hash function computes an index into an array of buckets. Under assumption of simple uniform hashing, lookups, insertions, and deletions take $O(1)$ on average.
Collisions are typically resolved via **Chaining** (linked lists at each bucket) or **Open Addressing** (probing for the next empty slot).