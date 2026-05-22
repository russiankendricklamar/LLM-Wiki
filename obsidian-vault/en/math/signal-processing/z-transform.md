---
title: Z-Transform
category: Signal Processing
order: 140
lang: en
slug: z-transform
---

## Overview
The Z-transform converts a discrete-time signal into a complex frequency-domain representation. It is the discrete-time equivalent of the Laplace transform.

## Definition
For a discrete sequence $x[n]$, the bilateral Z-transform is:
$$ X(z) = \mathcal{Z}\{x[n]\} = \sum_{n=-\infty}^{\infty} x[n] z^{-n} $$
where $z$ is a complex number. It is fundamental in digital control and digital filter design.