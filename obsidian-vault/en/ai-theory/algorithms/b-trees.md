---
title: B-Trees
category: Data Structures
order: 107
lang: en
slug: b-trees
---

## Overview
A B-tree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time.

## Properties
Unlike binary trees, B-trees can have more than two children per node, making them highly efficient for systems that read and write large blocks of data, such as databases and file systems. A B-tree of order $m$ ensures every node (except root) has at least $\lceil m/2 \rceil$ children.