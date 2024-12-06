---

title: "文章翻譯 — FDN輪抽體驗：日本限制賽強豪玩家的看法"
date: "2024-12-06 09:52:25"
tags:
  - "Kappa"
authors:
  - "Kappa"
categories:
  - "Limited"
  - "FDN"
cover: "https://i.postimg.cc/Y9BQHM43/MTG-write-a1.png"
thumbnail: "https://i.postimg.cc/Y9BQHM43/MTG-write-a1.png"
excerpt: "現在抽塊地就行了…幹怎麼是地脈斧？永遠不會起手來的嗎？爛遊戲！充滿來錯時機的FDN限制賽！ 初嘗試翻譯文章，來看看日本玩家用箱形圖分析FDN限制賽的「爛」！"
---

## 原文資訊

原文名稱：【MTG】 FDNリミテはクソだと叫びたい
名稱翻譯：【MTG】 想大叫FDN限制賽真是爛

>譯者注：[君が好きだと叫びたい](https://www.youtube.com/watch?v=ufDlhed1iJQ)？

[原文連結](https://note.com/yamabekafka/n/n63b98b191446)

原作者：[山辺カフカ＠MTGリミテッド](https://twitter.com/yamabekafka)

譯者：Kappa
**本文章翻譯已獲得原作者授權。**

## 序言

在MTG圈內有傳言說，基石系列(FDN)的限制賽環境很爛，筆者在Arena Open也有感受到這點。
這篇文章，只是想用數據來證明這件事的文章。

## 分析方法

不良的限制賽環境有好幾種。

**超高速環境，先手超有利環境，炸彈亂飛環境**…等等

然而對於FDN環境，上述的理由都不是令筆者覺得那麼合適。
怎說好呢，有種大叫著「現在不要抽到那張呀～！！」然後就輸了的印象。
想用點方法證明這件事。
所以，讓我們著目於17Lands.com的**GIH WR**以及**OH WR**上。

* GIH WR (Game In Hand Win Rate)：為人熟悉，在一場遊戲中卡牌出現在手牌中時的個別勝率
* OH WR (Open Hand Win Rate)：起手就在手牌時的卡牌個別勝率

今次我們將會著目於這兩者的相差， **Δ(OH WR － GIH WR)** 。

Δ容易明白又明顯的例子就是[羅堰妖精](https://scryfall.com/card/fdn/227/llanowar-elves)。

{% mtgpick "fdn" 227 %}

這傢伙的OH WR=61.4%是所有C卡中是最高的，但GIH WR是56.7%，算是相當不錯的C卡範疇。
前期越不用就會越降低價值的卡，Δ就會越大。

相反Δ很小的例子就有[吞世巨蛇寇瑪](https://scryfall.com/card/fdn/121/koma-world-eater)。

{% mtgpick "fdn" 121 %}

GIH WR=56.6%雖然在合格點上，但OH WR=52.2%相當低，因此在初手時在手牌的話，實質上和手牌少了一張一樣，容易不利。

今次，筆者的假設是， **FDN中有許多Δ(OH WR － GIH WR)很大或很小的牌** 。
簡單而言，就是因為抽牌的波動性大所以引起不穩定。
接下來將對此進行驗證。

## 驗證

>譯者注：因為是數學知識相關的緣故，這邊加入圖表方便讀者理解，以及修改下方一部分內容的表達手法更易於理解，但表達的意思沒變。

比較結果使用[箱形圖](https://zh.wikipedia.org/zh-tw/%E7%AE%B1%E5%BD%A2%E5%9C%96)來進行驗證。箱形圖的各點定義如下：

![箱形圖](https://i.meee.com.tw/8xAeXiO.png)

- Q0： **最小值（minimum）**
- Q1： **第一[四分位數](https://zh.wikipedia.org/wiki/%E5%9B%9B%E5%88%86%E4%BD%8D%E6%95%B0)（lower quartile）**
- Q2： **[中位數](https://zh.wikipedia.org/wiki/%E4%B8%AD%E4%BD%8D%E6%95%B8)（第二[四分位數](https://zh.wikipedia.org/wiki/%E5%9B%9B%E5%88%86%E4%BD%8D%E6%95%B0)、median）**
- Q3： **第三[四分位數](https://zh.wikipedia.org/wiki/%E5%9B%9B%E5%88%86%E4%BD%8D%E6%95%B0)（upper quartile）**
- Q4： **最大值（maximum）**

其中Q1與Q3的差值也叫**IQR（[四分位距](https://zh.wikipedia.org/wiki/%E5%9B%9B%E5%88%86%E4%BD%8D%E8%B7%9D)）**，IQR是得出箱形圖最大、最小值的重要參數：
- 最小值 Q0 = Q1 - 1.5×IQR
- 最大值 Q4 = Q3 + 1.5×IQR

對於超出 Q0～Q4 這個範圍的資料點，我們稱為**離群值（outlier）**。

>譯者注：原文對此說明較簡略，為避免讀者對箱形圖這個數學工具理解困難，和上面的譯者注釋之間的內容有補充一些額外說明。

將FDN的所有卡的Δ(OH WR - GIH WR)，與最近的2彈卡包（DSK、BLB）進行比較。比較後的圖表如下：

![1](https://i.meee.com.tw/J9HLPeM.png)

箱形圖中顯示FDN的範圍最寬，FDN似乎可以說在Δ的變異性上，至少比DSK・BLB更大。

順帶一提FDN之中展示出最大Δ的是[地脈斧](https://scryfall.com/card/fdn/129/leyline-axe)。果然是這樣。

{% mtgpick "fdn" 129 %}

BLB的[受雇利爪](https://scryfall.com/card/blb/140/hired-claw)有著凌駕這把斧頭的Δ，可見厲害之處。

{% mtgpick "blb" 140 %}

在這裡將以良好環境而見稱的MH3也加入圖表。

![2](https://i.meee.com.tw/BbjX6lv.png)

MH3展示出比哪個環境都更小的變異性，從這項驗證中可以說明這是一個「抽牌波動較小」的環境。
事實上，由於「[背面為地的模式雙面牌](https://scryfall.com/card/mh3/260/suppression-ray-orderly-plaza)」和「[帶循環的找地地](https://scryfall.com/card/mh3/217/bountiful-landscape)」的幫助，令手牌事故不易發生，所以被稱為良好環境的原因之一。

接下來，將Play Booster發行後的其餘環境，MKM、OTJ加至圖表中。

![3](https://i.meee.com.tw/POQSM0j.png)

根據筆者個人的意見，OTJ也是相當爛的環境，能在這裡看到共同點真的有趣。

>譯者注：與 FDN 恰好相反，OTJ 反而是炸彈過多，變成上述有提到的炸彈橫飛環境，但結果在統計上呈現相似的結果，殊途同歸相當有趣。從圖表上可以看到，OTJ 的 MR 往往出現在箱形圖的兩極，可以看出炸彈級的 MR 對這個限制環境的重大影響…… 或者爛到 Unplayable。

另一方面，雖然對MKM的印象並不是特別好，但它展示出的數據卻不遜色於MH3。
可能是因為偽裝的幫助，費用重的卡片的OH WR不易降低。

還想再驗證一下，但還有其他惡名昭彰的環境嗎…啊！

![](https://imageio.forbes.com/specials-images/imageserve/6397814510ea85c23e3ef9b2/0x0.jpg?format=jpg&width=1200)

追加非瑞克西亞：萬界歸一（ONE）至圖表中。

![4](https://i.meee.com.tw/J1wesNK.png)

這邊得出遠比預期好得多的結果。
ONE之所以惡名昭彰是因為環境異常地高速和先手優勢，但這種驗證方法是觀察抽牌的波動性，因此這一點大致上會被無視。
正確而言，環境速度過快也會產生Δ看起來較小的效果，這一點需要補充說明。這與前述的MH3有著共通點。

之後還想看看什麼核心系列之類的環境…
不過核心系列的17Lands數據幾乎不存在…啊！

![](https://4.bp.blogspot.com/-X564HeK5qBg/VAnSc6ZtPoI/AAAAAAAAX_c/_c74AqcXKt4/s1600/khans%2Bof%2Btarkir%2Bbanner.jpg)

追加以「昭和MTG」而廣為人知，韃契可汗（KTK）至圖表中看看。

>譯者注：「昭和MTG」即是指復古的MTG時代，比較接近以前第九版前，該時代的限制賽環境經常發生白板對撞，解牌的性能也不太高，KTK因節奏的緩慢以及平均卡牌性能的低落，就被戲稱這個名字。

![5](https://i.meee.com.tw/a5UoaMB.png)

沒有背叛預測，得到了與FDN近似寬度的箱形圖。
在容易變成長線遊戲的所謂基本系列環境中，處理爆費的方法非常重要，但由於這些牌不希望在初手抽到，因此推測會出現這種近似FDN的情況。

## 應用

由於在驗證中得到了大致接近假說的結果，因此進入應用篇。
將FDN的卡片的Δ(OH WR - GIH WR)按顏色分別進行比較。

![6](https://i.meee.com.tw/Tdv8uv7.png)

從這圖表可以看出，藍色的箱形圖極端狹窄，而黑色和綠色則反過來相對寬廣。
由於黑色和綠色的牌多為長線遊戲導向，因此推測它們的抽牌波動也會較大，但藍色也應該相對偏向長線遊戲才對。
緩和這一點的可能是以[批駁](https://scryfall.com/card/fdn/48/refute)為首的抽濾牌，如果能夠抽棄那些有抽牌波動性的牌，那麼OH WR就不會下降太多。

## （12/3追加）

因為收到比想像中更好的評價感到很開心，所以也將DSK和BLB也按顏色整理了一下。
由於圖表平台（Flourish）的規格問題，顏色的順序和軸的排列不一，還請見諒。

DSK

![7](https://i.meee.com.tw/pFIBsT9.png)

雖然在偏近OH WR或偏近GIH WR之中可以看到各種顏色的特徵，但整體分布上個別顏色的變異性不大，給人一種相當平衡的印象。
原本應該是強色的白色在數據上卻顯示出最大的抽牌波動性，這一點也很有趣，輕量兼具有生還異能的生物中，白色的比例比較高影響了結果。

BLB

![8](https://i.postimg.cc/tT4G9rrm/MTG-write-a9.png)

藍色分布極端地廣泛，且偏向GIH WR，這是一個有趣的數據。
實際上，Δ的Worst 12（並不是指弱牌的方面）全部由藍色和無色牌組成。
事實上，BLB的藍色牌更容易採取建立System並穩扎穩打的勝利策略，雖然刺探和抽濾牌的數量自體與其他系列相當，但在System建構之前各牌單體性能卻往往表現得較弱，似乎是造成這種狀況的原因。

## 小測驗

大家覺得怎麼樣呢？
最後，我想出一道題目作為本文的收尾。請問在至今為止所展示的數據範圍內，最大的Δ的牌是什麼？
由於這是會員特典文章，答案將會放在收費部分。
請以打賞的感覺多多支持，謝謝！

## 譯者總結

由於最後的答案是收費部分，根據與本文作者的協定，本篇翻譯文章不便於直接放答案，若果有興趣的讀者，可以去[原文note](https://note.com/yamabekafka/n/n63b98b191446)那邊支持100円，也歡迎各位在專頁猜測答案。

這次是本站第一次嘗試翻譯日文的MTG文章，因為這篇文章用獨特的數學角度切入，引起了我們編輯的興趣，各位讀者覺得如何呢？若果有任何意見也歡迎在專頁寫下，希望看更多的翻譯文章的話，也可以記下你們的意見！多謝各位閱畢本篇翻譯文章！

以下會提供上述小測驗的提示，若果想憑自力猜出答案的話，請不要點開下面的提示。

————(防雷警戒線)————

{% folding blue :: 提示1 %}

在某個系列加入之後，圖表的右側最大數字一口氣拉到12，那究竟是什麼呢？

{% endfolding %}

{% folding blue :: 提示2 %}

是一張M卡，而且第一回合就會大放存在感的卡！(譯者的情況是有點想剷牌的衝動了

{% endfolding %}

{% folding blue :: 提示3 %}

Special Guest的卡。

{% endfolding %}
