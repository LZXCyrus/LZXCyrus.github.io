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

> Examples of event overlapping problem: (a)Events with overlapped triggers and arguments; (b) An event with an overlapped argument in several roles.



* Proposing CasEE, a novel joint learning framework with cascade decoding, to simultaneously solve all the three overlapping patterns.

* Conducting experiments on a public Chinese financial event extraction benchmark, FewFC.

> a sample:
> {"id": "cbc5a8ed0bc6dcebd15cbe5d2b6b8311", "content": "兴发集团发布公告,控股股东宜昌兴发集团有限责任公司于2019年11月20日将2000万股进行质押,质押方为上海浦东发展银行股份有限公司宜昌分行,质押股数占其所持股份比例的8.50%,占公司总股本的2.15%。", "occur": ["质押"], "type": "质押", "triggers": [[46, 48]], "index": 0, "args": {"collateral": [[43, 44]], "proportion": [[85, 90]], "obj-org": [[53, 71]], "number": [[38, 43]], "date": [[26, 37]], "sub-org": [[13, 25]]}}

<br/>

## Code
**Environments required by the paper**:

python 3.6

CUDA: 9.0

GPU: Tesla T4

pytorch == 1.1.0

transformers == 4.9.1

**My experiments**:

python 3.9

CUDA: 11.7

GPU: Tesla V100

pytorch == 1.13.1

transformers == 4.20.1

> Using  bert pre-training model "Bert-Base-Chinese" provided by Hugging Face

First to deal with data sets: 

TYPES = [ '起诉', '投资', '减持', '股份股权转让', '质押', '收购', '判决', '签署合同', '担保', '中标' ]

> eg.

> {"id": "9e573f697633ad200c9aa86d70bc2103", "content": "此外,隆鑫通用的公告还透露,除了中信证券,隆鑫控股与四川信托有限公司、中国国际金融有限公司、国民信托有限公司的股票质押合同均已到期,但“经与质权人友好协商,目前暂不会做违约处置”。", "events": [

> {"type": "质押", "trigger": {"span": [57, 59], "word": "质押"}, "args": {"sub-org": [{"span": [3, 7], "word": "隆鑫通用"}], "obj-org": [{"span": [16, 20], "word": "中信证券"}], "collateral": [{"span": [55, 57], "word": "股票"}]}}}

Then Type Detection Decoder, Trigger Extraction Decoder and Argument Extraction Decoder are used to learn data.

## Training

I didn't complete the whole training because of the time constraints. When the model trained on the first epoch of training steps 335, ED loss basically started to fluctuate and stopped declining. However,



