---
title: "克撒傳怎麼自爆了"
date: 2023-09-05 17:42:48
tags:
  - "JruMTG"
cover: "https://i.meee.com.tw/qzVEuiz.png"
thumbnail: "https://i.meee.com.tw/qzVEuiz.png"
categories:
  - "MTG Rules"
authors:
  - "JruMTG"
excerpt: "腥紅之月為何會是克撒傳殺手？"
---

## <font color="#FF0000">重大規則變更</font>

FIN系列對傳紀規則做出重大變更，新規則修改了傳紀失去異能後的處置方式，因此本文章對於失去異能之傳紀的規則解析已不再適用，現行規則請參閱新文章：[血月如何從克撒傳的天敵變隊友](https://guildmagesforum.tw/How-does-Urzas-Saga-Become-Blood-Moons-Friend/)。



---

## 前言

要問起近代新篇2中哪張牌讓裁判收到了最多次的規則諮詢，那我想非[克撒傳](https://scryfall.com/card/mh2/259/zht/%E5%85%8B%E6%92%92%E5%82%B3)莫屬了，不僅是史上第一張結界地，更是前無古人(可能也後無來者)的傳紀地，這也讓它的規則Q&A異常精彩。

其中最常見的問題便是與[腥紅之月](https://scryfall.com/card/2xm/118/blood-moon)、[海域蔓延](https://scryfall.com/card/zen/70/spreading-seas)等單卡的互動如何導致[克撒傳](https://scryfall.com/card/mh2/259/zht/%E5%85%8B%E6%92%92%E5%82%B3)自爆，今天就來聊聊有關傳紀的一些規則話題。

(備註 : 為便於閱讀理解，以下引用規則文時會適當忽略部分規則描述，完整規則請以連結原文為主。)

{% mtgpick "mh2" 259 %}

---

## 傳紀甚麼時候會主動犧牲

在討論比較複雜的[克撒傳](https://scryfall.com/card/mh2/259/zht/%E5%85%8B%E6%92%92%E5%82%B3)之前，我們先來看看一般的傳紀是如何運作的。在[傳紀規則714.4](https://mtg.fandom.com/wiki/Saga)中是如此規範的 : 

- 714.4
如果傳紀上的學問指示物(lore counters)數量大於等於該傳紀最終章節編號，且該傳紀不是已觸發且尚未離開堆疊的章節觸發式異能來源，則犧牲該傳紀，此狀態動作不使用堆疊。

這也是為甚麼我們在傳紀抵達最終章節時，可以在傳紀犧牲前回應最後的章節觸發式異能，例如啟動[克撒傳](https://scryfall.com/card/mh2/259/zht/%E5%85%8B%E6%92%92%E5%82%B3)章節II的效果派出一個Token，或是使用[明滅命運](https://scryfall.com/card/thb/16/zht/%E6%98%8E%E6%BB%85%E5%91%BD%E9%81%8B)這類的牌回應章節III異能(異能上堆疊且尚未結算時)雲移傳紀，讓傳紀重新進場免於犧牲。

神河霓朝紀中的雙面傳紀(如[破鏡奇譚](https://scryfall.com/card/neo/141/fable-of-the-mirror-breaker-reflection-of-kiki-jiki))也是利用此規則，當最終章異能結算時，這個傳紀已經被放逐並作為一個新物件以轉化後的形式進場了，自然不會因為傳紀本來的規則而被犧牲掉。

---

## 腥紅之月做了甚麼

![紅月](https://i.meee.com.tw/F5YVfif.png)

[腥紅之月](https://scryfall.com/card/2xm/118/blood-moon)會將所有非基本地改為山脈，這時[規則305.7](https://mtg.fandom.com/wiki/Land)將生效 : 

- 305.7
將一塊地的子類別設置為一種或數種基本地類別時，它將失去原有的地類別，也失去的從原有規則文本、類別所獲得的所有異能，並獲得產出與現有基本地類別對應顏色魔法力的異能。設置地的子類別並不會導致其失去其他卡牌類別(生物、結界)或超類別(基本、傳奇、雪境等)

當[腥紅之月](https://scryfall.com/card/2xm/118/blood-moon)在場時，[克撒傳](https://scryfall.com/card/mh2/259/zht/%E5%85%8B%E6%92%92%E5%82%B3)會失去原本所擁有的全部異能，但沒有失去結界類別，以及作為結界子類別的傳紀類別，傳紀類別帶來的規則依然生效。而當一個傳紀失去異能時，[規則714.2d](https://mtg.fandom.com/wiki/Saga)是這麼規範的 : 

- 714.2d
傳紀的最終章節編號為其章節異能中數字最大的值，如果傳紀因為某些原因沒有章節異能，則最終章節編號為0。

也就是說，[腥紅之月](https://scryfall.com/card/2xm/118/blood-moon)在會使[克撒傳](https://scryfall.com/card/mh2/259/zht/%E5%85%8B%E6%92%92%E5%82%B3)成為一個沒有異能、最終章節為0的傳紀(簡化後的示意圖如下)，這時根據前面[714.4](https://mtg.fandom.com/wiki/Saga)的規則，狀態檢查會發現這是一個**學問指示物大於等於最終章節編號、且沒有尚未結算的觸發式異能**的傳紀，進而犧牲此傳紀。

![克撒山脈](https://i.meee.com.tw/JGVkQFX.png)

---

## 克撒傳自爆大禮包

除了上文提到的[腥紅之月](https://scryfall.com/card/2xm/118/blood-moon)與[紅月賢者](https://scryfall.com/card/tsr/175/magus-of-the-moon)之外，還有許多牌可以令[克撒傳](https://scryfall.com/card/mh2/259/zht/%E5%85%8B%E6%92%92%E5%82%B3)自爆，例如[月輪山影](https://scryfall.com/card/m19/128/alpine-moon)、[腥紅之日](https://scryfall.com/card/rix/92/blood-sun)、[海域蔓延](https://scryfall.com/card/zen/70/spreading-seas)，這些牌究竟如何令克撒傳自爆的，都可以用上述規則解釋。以後在看牌表如果看到這些消除地牌異能效應的牌，都別忘了可以用來讓克撒傳自爆。

![克撒傳對策](https://i.meee.com.tw/24LYDNC.png)

---

## 傳紀學問失去指示物會如何

最後再附上一個與傳紀的小搭配，上面我們知道了傳紀的學問指示物如果大於等於最終章節編號就會犧牲，但如果傳紀單純的失去學問指示物會如何呢? 

答案是甚麼都不會發生，傳紀不會犧牲，也不會有任何章節異能在此時觸發，傳紀只會等到下次獲得學問指示物時執行對應章節的異能，因此搭配上[力量渠道](https://scryfall.com/card/ncc/376/power-conduit)、[戮日者格莉莎](https://scryfall.com/card/one/202/glissa-sunslayer)、[失去活性](https://scryfall.com/card/mom/123/render-inert)等移除指示物的異能，可以將傳紀的執行進度倒車，把前面已經執行過的章節再利用一遍。

![移除指示物](https://i.meee.com.tw/bxepLWy.png)

其中如[力量渠道](https://scryfall.com/card/ncc/376/power-conduit)這類瞬間時機移除指示物的效應，還可以與傳紀達成更精妙的配合。

在你的傳紀最終章節異能觸發時，可以回應堆疊上的異能移除傳紀的學問指示物，由於此時傳紀的觸發式異能尚未離開堆疊，不滿足[714.4](https://mtg.fandom.com/wiki/Saga)中犧牲傳紀的條件，而在該章節異能結算時，由於傳紀的學問指示物已經被移除，並非大於等於最終章節編號的狀態，因此也不用犧牲傳紀。最終就是你白嫖了一次傳紀的最終章異能，但傳紀依舊留在場上。
