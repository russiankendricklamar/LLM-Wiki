---
title: U-Net
category: AI Architectures
order: 127
lang: en
slug: u-net
---

## Overview
U-Net is a convolutional neural network architecture heavily used for biomedical image segmentation.

## Architecture
The network consists of a contracting path (encoder) to capture context, and a symmetric expanding path (decoder) that enables precise localization. Skip connections concatenate high-resolution feature maps from the encoder to the upsampled output of the decoder, preventing the loss of spatial information.