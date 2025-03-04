---
title: "洗牌次數與隨機性的探索：魔法風雲會玩家該洗幾次牌才夠亂？"
date: "2025-02-10 12:04:55"
tags:
  - "mm"
authors:
  - "mm"
categories:
  - "Deep Dive"
cover: "https://hackmd.io/_uploads/HJnVhMLFkx.jpg"
thumbnail: "https://hackmd.io/_uploads/HJnVhMLFkx.jpg"
excerpt: "你不洗亂牌，遊戲就不好玩"
---

## 1. 前言：為什麼要研究「洗幾次才亂」？
在卡牌遊戲──不論是撲克牌或 **魔法風雲會** （Magic: The Gathering，以下簡稱 **MTG**）中，洗牌都是常見動作。然而，究竟要洗幾次才能確保「牌序混淆到近乎隨機」呢？而這對遊戲的平衡至關重要。 
- **撲克牌**常見52張，一般研究發現洗到7~8次就相當隨機。 
- **MTG**通常一套套牌有60張（不含 Sideboard）。在這種情況下，洗牌次數也可能需要稍做調整，以確保「初始手牌」、「抽牌順序」等都不會被任何可預測的規律影響。

尤其對MTG玩家而言，不只在意單純的「公平」，還要避免因為洗牌不當而出現「地牌集中或缺乏」等極端情況（俗稱 **卡地** 或 **爆地**）。本篇文章將帶大家簡單了解：在60張MTG套牌的前提下，若要洗得足夠隨機，我們該怎麼考慮洗牌次數，並探討數學上怎麼衡量隨機性。


## 2. 簡單結論與實務建議
- **給MTG玩家的建議**：想避免起手不公平或魔法力地牌分布被猜到，建議 **至少洗6次**。如果洗法隨興，最好到 **9次以上** 更保險。


## 3. 為什麼MTG玩家要在意洗牌隨機性？
許多MTG玩家可能都曾想過：「我洗個三、五次就夠了吧？」；但當套牌架構講究曲線、魔法力配置，以及在比賽對局中的牌序不可預測時，就必須確保洗牌的**真正隨機**。這裡有幾個原因： 

1. **確保「起手7張」的公平** 
   不希望因為牌可能被「部分疊在一起」而造成某些關鍵卡過度集中。 
1. **參考撲克牌文獻** 
   Bayer & Diaconis（1992）在研究52張牌時提到「7次riffle shuffle」幾乎足夠。那MTG的60張牌，會不會是洗個7~9次就行了？

洗牌若不夠隨機，就可能有心人去「記牌」、「操縱牌堆」；洗牌過多又浪費寶貴的比賽或休閒時間，於是「最佳洗牌次數」就是重要的研究議題。


## 4. 背景理論：如何衡量「隨機性」？
判斷「是不是夠隨機」，得先有個量化指標。研究中常見兩種方式：

1. **[變異距 （Variation Distance）](https://zh.wikipedia.org/zh-tw/%E5%85%A8%E5%8F%98%E5%B7%AE%E8%B7%9D%E7%A6%BB)** 
   令 Q(pi) 表示洗牌後每種牌序 pi 出現的機率，U(pi) 為「完全均勻」的理想機率（即 1 / (n!)）。則定義：
   
![image](https://hackmd.io/_uploads/HkL_5N5vJg.png)

   
   其中 n = 60 （對MTG而言），S_n 代表所有可能的排列 （共有 n! 種)。若此距離夠小，就可說「跟理想隨機幾乎一樣」。可惜變異距的數學難度比較高，撰寫程式很麻煩，因此可以用另外一個方式替代。
   

2. **[卡方檢定 （Chi-square Test）](https://zh.wikipedia.org/zh-tw/%E5%8D%A1%E6%96%B9%E6%A3%80%E9%AA%8C)** 
   透過模擬大量洗牌結果，與「完全隨機」分布比較，以卡方統計量：
   
![image](https://hackmd.io/_uploads/ByMK94cPyg.png)
   
   觀察是否接近理想分布。 f_i 是實驗中觀測落在第 i 類的次數， e_i 是理論期望次數。若 X^2 小於臨界值，表示洗完的牌序「夠隨機」。
   
   本文核心聚焦在<font color="#FF0000">卡方檢定</font>的方式，方便我們以模擬的角度去找到洗牌次數的關鍵。


## 5. 核心想法：洗牌次數 vs. 隨機性

不論是52張、或60張，關鍵就在「**洗幾次**」才能接近理想分布。 
- 洗1~2次：通常都會留下明顯的偏差，對手若敏銳就能抓到洗牌不澈底的蛛絲馬跡。 
- 洗7~8次左右：對於52張牌的撲克牌，理論模型顯示幾乎足夠隨機。對60張MTG套牌，可能需要多洗幾次。 
- 洗到10~11次以上：再多洗效果增益有限，因為「隨機性」在這之後曲線已經趨於飽和。


## 6. 研究結果與結論

在針對52張撲克牌的洗牌研究中，Bayer與Diaconis所提出的結論指出，連續進行 **7 次** 隨機洗牌後，便能讓撲克牌的排列幾乎達到「與完全隨機無顯著差異」的程度。這也呼應先前 **Bayer & Diaconis (1992)** 的推論：**洗牌次數大約與 `(3/2(logN/log2)` 近似**。若以 \(n = 52\）代入，計算值約略為8.8次，與實際實驗結果（7次即足夠）相去不遠。

本研究以同樣的理論基礎，將 **撲克牌改為60張的MTG套牌**（多數基本套牌設計約為60張），並執行大規模的電腦模擬與卡方檢定，探討「從初始狀態洗至接近完全隨機」所需的洗牌次數。理論上，由Aldous與Bayer & Diaconis的公式推得9次 `(3/2(logN/log2), N=60)` ，意味著洗9次左右應能達到接近最大隨機性。然而，實際模擬結果顯示，隨機洗牌次數約在 **6～7次** 就已經能使 **「整副60張牌的重新排列」和「理想的完全隨機排列」間無顯著差異**。

### 一、模擬與檢定方法

1. **程式模擬** 
   - 為了準確估計洗牌次數的影響，本研究針對「隨機切入點洗牌（riffle shuffle）」進行共20萬次的模擬。
   - 每次皆從「固定的初始排法」開始洗牌，連續進行 \(k\) 次洗牌後，記錄最終牌序與初始排法的「距離」（total_distance）。
   - 洗牌方法模型建立：
        1. **切牌**   
           - 設定切牌位置「大約」在正中央切開。接著設定切牌位置「偏離」中心位置的幅度，使用標準差0.3(整體30%)。   最後確保每半邊至少有幾張牌（程式中預設最少5張）

        2. **交疊（riffle）**   
           - 決定一次「從左邊放幾張」或「從右邊放幾張」的機率分布。  
               - 有60%的機會只放1張  
               - 25%的機會一次放2張  
               - 15%的機會一次放3張  
           - 程式會先從左堆拿1～3張放到新牌堆，再從右堆拿1～3張放到新牌堆，如此交錯進行，直到兩堆牌都放完。
   - 重複上述程序，藉由大量抽樣（萬次級）穩定估計各種洗牌次數下的牌序分布。

2. **[卡方檢定 （Chi-square Test）](https://zh.wikipedia.org/zh-tw/%E5%8D%A1%E6%96%B9%E6%A3%80%E9%AA%8C)** 
   - 以各次洗牌後的 total_distance 為指標，分組後與「完全隨機之下的距離分布」進行卡方檢定。
   - **[虛無假設（H0）](https://zh.wikipedia.org/wiki/%E9%9B%B6%E5%81%87%E8%AE%BE)**：該洗牌次數的分布與完全隨機的分布無顯著差異。
   - **[顯著水準 (α)](https://zh.wikipedia.org/zh-tw/%E6%98%BE%E8%91%97%E6%80%A7%E5%B7%AE%E5%BC%82)**：0.05。
   - 若檢定結果 **[p-value](https://zh.wikipedia.org/zh-tw/P%E5%80%BC) > 0.05**，即「**不拒絕 H0**」，表示該洗牌次數足以讓牌序達到與完全隨機無顯著差異的程度。


> **註一**、 Riffle Shuffle 的概念：
> 1. 分牌：想像你手中有一副牌，將它分成兩疊。這個動作就像是用大拇指和其他手指將牌分成兩部分。
> 2. 交錯插入：接著，從這兩疊牌中交替地隨機抽出一~三張牌，將它們重新組合成一副牌。這個過程就像是將兩疊牌的邊緣對齊，然後用手指輕輕地讓牌交錯地掉落。
    > ![](https://upload.wikimedia.org/wikipedia/commons/1/1e/Riffle_shuffle_1.jpg)


### 二、模擬分析結果

![chi_square_trend](https://hackmd.io/_uploads/SJE1n7FOJl.png)


以下表格整合了從洗牌0次到20次之卡方檢定統計量（Chi2_stat）、自由度 (DOF)、p-value，以及模擬得到的分布敘述統計量 (Mean、Std、Q1、Median、Q3、Min、Max）。

> **註二**：此處 X^2 檢定之[自由度（DOF）](https://zh.wikipedia.org/wiki/%E8%87%AA%E7%94%B1%E5%BA%A6_(%E7%BB%9F%E8%AE%A1%E5%AD%A6))預設為 49，完全隨機的情況則不適用。

| Shuffles | X^2_stat  | p_value | 拒絕H0 |
|---|---|---|---|
| 1        | 355.9             | 0.00  | 是        |
| 2        | 234.9             | 0.00  | 是        |
| 3        | 152.5             | 0.00  | 是        |
| 4        | 100.6             | 0.00  | 是        |
| 5        | 67.5              | 0.04  | 是        |
| **6**    | **49.2**          | **0.47** | **否**  |
| 7        | 42.6              | 0.73  | 否        |
| 8        | 36.0              | 0.92  | 否        |
| 9        | 33.2              | 0.96  | 否        |
| 10       | 31.9              | 0.97  | 否        |
| 11       | 32.0              | 0.97  | 否        |
| 12       | 31.9              | 0.97  | 否        |
| --       | --              | --  | -- |
| 20       | 30.9              | 0.98  | 否        |


根據表格可知：
- 洗牌1~5次，其p-value皆小於0.05，表示此時「與完全隨機有顯著差異」。
- 從洗牌 **6次** 開始，p-value上升到0.4663且大於0.05，代表「與完全隨機無顯著差異」。
- 此後洗牌次數再增長，p-value多維持在高於0.05的範圍，顯示排列分布已趨於與「理想完全隨機」相近。


### 三、最終建議

1. **模擬結果**： 
   - 本實驗顯示，對 **60張MTG套牌** 而言，從初始排法連續洗至 **6次** 以上，即可達到卡方檢定中「不拒絕與完全隨機分布相同」的水準。 

2. **建議與限制**： 
   - **若是一般與朋友的對局、或較隨意的賽事**，洗 **5~6次** 就能有不錯的隨機性。 
   - **若是正式比賽或希望最大程度消弭「記憶、預測」等影響**，則可考慮遵循理論上建議的 **8~9次**甚至更多。 
   - 以上結論仍依賴於「隨機切入點洗牌（riffle shuffle）」的假設，根據研究切牌、印度式洗牌、大洗都幾乎無法達成隨機的目標，可能導致實際隨機程度不足。


## 7. 參考文獻
1. [Bayer, D. and Diaconis, P. (1992). Trailing the dovetail shuffle to its lair. Annals of Applied Probability 2(2) 294-313.](https://projecteuclid.org/journals/annals-of-applied-probability/volume-2/issue-2/Trailing-the-Dovetail-Shuffle-to-its-Lair/10.1214/aoap/1177005705.full) 
2. [Aldous, D. and Diaconis, P. (1986). Shuffling cards and stopping times. American Mathematical Monthly 93 333-348.](https://www.stat.berkeley.edu/~aldous/Papers/shuffling.pdf)
