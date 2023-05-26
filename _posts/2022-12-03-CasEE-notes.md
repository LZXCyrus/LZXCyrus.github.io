---
layout: post
title:  "An event extraction experiment based on CasEE"
date:   2022-12-03
excerpt: "Based on the code of CasEE"
tag:
- EE
- notes
- CasEE
---

<br/>

The experiment is based on the code of paper *CasEE: A Joint Learning Framework with Cascade Decoding for Overlapping Event Extraction*.

The code adress: https://github.com/JiaweiSheng/CasEE

The paper adress: https://arxiv.org/abs/2107.01583

<br/>

## Introduction

CasEE is a joint learning framework with Cascade decoding for overlapping Event Extraction. Specifically, CasEE realizes event extraction with a shared textual encoder and three decoders for type detection, trigger extraction and argument extraction. To extract overlapped targets across events, CasEE sequentially decodes the three subtasks, conducting trigger extraction and argument extraction according to the former predictions.

<br/>

## Contributions

* InvestigatING the overlapping problems in EE, and categorize them into three patterns. This paper is among the first to simultaneously tackle all the three overlapping patterns.
* Proposing CasEE, a novel joint learning framework with cascade decoding, to simultaneously solve all the three overlapping patterns.
* Conducting experiments on a public Chinese financial event extraction benchmark, FewFC.

