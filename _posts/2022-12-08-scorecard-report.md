---
layout: post
title:  "一次有趣的课程作业：手机分期贷的用户信用风险评分模型构建"
date:   2022-12-08
excerpt: "基于评分卡（Scorecard）模型"
tag:
- scorecard 
- report
- blog
---

<br/>

复盘后整理的简洁课程作业报告，报告整思路很简单、很学生化，实际应用价值不大，主要是作一个记录和思路整理。

<br/>

## 背景及需要解决的问题
随着中国的网络借贷市场的迅速扩大，用户申请手机分期越来越多。手机贷以采集互联网大数据作为主要征信源，进行有效的数据清洗、分析建模、个人信用评分，并与传统金融授信逻辑相结合，是实现撮合借贷交易的互联网金融平台。本报告将构建基于原始数据以及基于 WOE的逻辑回归模型，建立评分卡，通过2000 名用户申请手机分期的数据集，预测用户逾期未还款的概率，预估用户违约的信用风险。同时与其他分类模型进行分类效果比较，由此为是否给用户发放手机贷款的决策提供参考和建议。
     
That's all.

If you want to make a **Project Page**, you have to use `gh-pages` branch. For **Personal Page**; `master` branch. More info [here](https://help.github.com/articles/about-github-pages-and-jekyll/#jekylls-build-process).

## 数据探索性分析及预处理
* 数据集总体分析（正负样本比、样本范围、观察窗口选择）
* 变量相关性分析（Pearson 相关系数、Spearman相关系数等）
* 数据集缺失值分析（多种方式替换缺失值）

## 变量选择


