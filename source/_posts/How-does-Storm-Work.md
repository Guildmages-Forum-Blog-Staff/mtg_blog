---

title: "風暴是如何運作的？"
date: "2025-03-26 14:38:42"
tags:
  - "JruMTG"
authors:
  - "JruMTG"
categories:
  - "MTG Rules"
cover: "https://i.meee.com.tw/gzrQiC9.png"
thumbnail: "https://i.meee.com.tw/gzrQiC9.png"
excerpt: "風暴你這重出頻率確定滿足風暴量尺10分的定義嗎？"
---

## 前言

風暴是MTG歷史中經典又強大的異能，直到現在，在近代以上的賽制中，風暴套牌依舊是環境中不可忽視的一員。過去MTG的首席設計師 [Maro](https://en.wikipedia.org/wiki/Mark_Rosewater) 曾在自己的部落格中，基於強度而對風暴給出了「最難以回到標準系列機制」的評價，並以此衍伸出了一系列名為 **[風暴量尺（Storm Scale）](https://mtg.fandom.com/wiki/Storm_Scale)** 的專欄文章。

在2006年的[時間漩渦](https://scryfall.com/sets/tsp)環境後，風暴這個異能有長達18年的時間都不被用於設計標準系列卡牌（當然，過程多少有些運作原理致敬風暴異能的牌，例如[千年風暴](https://scryfall.com/card/grn/207/thousand-year-storm)、[展現信心](https://scryfall.com/card/stx/28/show-of-confidence)），直到2024年，[斑隆洛](https://scryfall.com/sets/blb)系列中的[震天急智拉爾](https://scryfall.com/card/blb/230/ral-crackling-wit)，才正式讓風暴於標準重出江湖，不過這次是把這機制應用在鵬洛客的大絕招徽記上，而鵬洛客的大招，在定位上就是要提供一個足夠強力的致勝點，所以對強度與複雜度的接受度也高，倒是沒引起太多討論。

時間回到現在，[韃契：龍襲風暴](https://scryfall.com/sets/tdm)中又出現了一張新的風暴牌 [Stormscale Scion](https://scryfall.com/card/tdm/123/stormscale-scion)，這是一張真正的風暴單卡，甚至連牌名都是官方帶頭玩梗，致敬了風暴量尺的 Storm Scale，那我們就趁著這個機會，來介紹一下風暴究竟是個怎樣的機制吧！

![前言](https://i.meee.com.tw/evs78xQ.png)

---

## 風暴規則定義

風暴的規則本身很簡單，可以說只要念完一遍風暴的敘述，就能理解風暴是如何運作的了：

- 702.40a 風暴屬於<font color="#FF0000">觸發式異能</font>，於堆疊中生效。「風暴」意指：「當你施放此咒語時，本回合<font color="#FF0000">於此咒語之前</font>每施放過一個咒語，便複製該咒語一次。若此咒語需要目標，你可以為任意複製品選擇新的目標。」
> PS：若複製永久物咒語，該咒語結算時會將對應的永久物Token放進戰場。

風暴的核心觀念，就是它是個 **施放觸發** 的 **觸發式異能** ，當風暴異能結算時，會檢查本回合此咒語之前的所有咒語施放紀錄，看共施放過幾次咒語（後稱 N 次），檢查項目包含其他玩家施放的咒語、以及施放後在堆疊上尚未結算的咒語，然後複製該咒語 N 次，且若該咒語有目標，則皆可選擇新目標。

從風暴的規則也能看出，想要善用它就需要在一回合內大量的施放咒語，所以除了一些無限 Loop 的 Combo 外，遊戲畫面很常會變成這樣：

![14](https://i.meee.com.tw/g6i1ztA.png)
> 此場景出自MTG漫畫「消滅所有人類，他們不能重生」第14話

---

## 風暴規則範例

雖然下面舉例時會用上多種風暴範例牌，但老實說，卡片效果本身並不重要，我們只要關注它風暴異能在這些情境中如何運作就好。

![1](https://i.meee.com.tw/7haINS5.png)
> - [電流傳繼](https://scryfall.com/card/mh2/127/galvanic-relay)：
>   放逐你的牌庫頂牌。於你的下個回合中，你可以使用該牌。
>   風暴
> - [托諸記憶](https://scryfall.com/card/mh3/54/consign-to-memory)：
>   覆誦{一}（當你施放此咒語時，每支付一次覆誦費用，就可以將它複製一次。你可以為每個複製品選擇新的目標。）
>   反擊目標觸發式異能或無色咒語。

風暴咒語最難應對的一點就是它會複製N發，像[反擊咒語](https://scryfall.com/card/cmm/81/counterspell)這種一換一的康就只能康掉其中一發，通常根本攔不住對方。但如之前所說，風暴是個觸發式異能，這個異能也是可以被康掉，只要你康了風暴異能，那後面的複製 N 發就壓根不會出現。

![2](https://i.meee.com.tw/aY2oRA7.png)
> - [霰散彈](https://scryfall.com/card/tsr/166/grapeshot)：
>   霰散彈對任意一個目標造成1點傷害。
>   風暴
> - [雙咒擊](https://scryfall.com/card/m10/78/twincast)：
>   複製目標瞬間或巫術咒語。你可以為該複製品選擇新的目標。

假設你施放了一個霰散彈，並且風暴已經結算，在堆疊上複製出 N 發霰散彈複製品，之後使用雙咒擊去複製霰散彈，能再觸發一次風暴，額外複製出 N+2 發霰散彈嗎？

風暴的觸發條件是 **施放時** ，假設你使用某個方法複製了一發堆疊上的風暴咒語，雖然這個咒語也會複製到風暴異能沒錯，但複製的咒語並沒有經過施放，而是直接放上堆疊，因此在這個案例中，你就只是多做了一發霰散彈而已，不會出現第二次風暴。

![3](https://i.meee.com.tw/RlPj6MO.png)
> - [挺過風暴](https://scryfall.com/card/mh1/191/weather-the-storm)：
>   你獲得3點生命。
>   風暴
> - [閃光法師](https://scryfall.com/card/blb/131/coruscation-mage)：
>   每當你施放非生物咒語時，此生物向每位對手各造成1點傷害。
> - [榮休大法師](https://scryfall.com/card/stx/37/archmage-emeritus)：
>   魔藝～每當你施放或複製瞬間或巫術咒語時，抽一張牌。

當你施放挺過風暴並因風暴而複製出N發時，閃光法師＆榮休大法師的異能各自會觸發幾次？

正如上一案例所說，複製咒語並不會經過施放動作，所以閃光法師只會觸發挺過風暴的本體施放那1次而已。

而榮休大法師的魔藝則是施放或複製瞬間/巫術時都會觸發，因此總共會觸發N+1次抽牌（咒語本體1次，複製品N次）。

![4](https://i.meee.com.tw/DgWuiri.png)
> - [行獵獸群](https://scryfall.com/card/mh2/284/hunting-pack)：
>   派出一個4/4綠色野獸衍生生物。
>   風暴
> - [回憶奔騰](https://scryfall.com/card/cmr/82/mnemonic-deluge)：
>   將目標瞬間或巫術牌從墳墓場放逐。複製該牌三次。你可以施放這些複製品，且不需支付其魔法力費用。放逐回憶奔騰。

假設本回合沒有施放過任何咒語，使用回憶奔騰來複製墳場中的行獵獸群3次，結果會得到幾個 4/4 Token？

此題和上面兩個範例的差異是，前面都是複製咒語，並沒有經過施放動作，而回憶奔騰是複製瞬間/巫術牌並 **施放** ，這表示風暴異能會觸發，並且施放咒語是個無法同時執行複數的動作，這代表三個行獵獸群的複製品會被依序施放。

- 608.2f 一些咒語和異能包含對多個玩家和/或物體執行的動作。在大多數情況下，此類動作被同時處理。如果該動作無法同時處理，則在處理時改為看作其對每個受影響的物件或玩家各自考慮。使用「主動玩家先決定」順序作為決定這些動作執行順序的主要依據。其次，如果該動作將同時對一位玩家和其操控的物件、或對多個由同一玩家操控的物件執行，操控正在結算的咒語或異能的玩家來選擇這些動作的相對順序。

施放的順序分別是： 行獵獸群 A ➔ 行獵獸群 B ➔ 行獵獸群 C ， A 所檢查到的此咒語前施放咒語次數是 1 <font color="#999999">（回憶奔騰）</font>， B 會檢查到 2 次 <font color="#999999">（回憶奔騰 + 前面施放的 A）</font>，以此類推，C 是 3 次。你總共會因為風暴複製 6 次，加上 ABC 的咒語本體，最終會有 9 隻 4/4 野獸Token 。





![5](https://i.meee.com.tw/UVYdE8U.png)
> - [迸地](https://scryfall.com/card/tsp/162/ground-rift)：
>   目標不具飛行異能的生物本回合不能進行阻擋。
>   風暴
> - [景仰腐敗僧侶](https://scryfall.com/card/one/192/venerated-rotpriest)：
>   每當一個由你操控的生物成為咒語的目標時，目標對手得到一個中毒指示物。

本回合沒有施放過任何咒語，我方場上有一個[灰棕熊](https://scryfall.com/card/10e/268/grizzly-bears)，我先施放了景仰腐敗僧侶，之後再以景仰腐敗僧侶為目標施放迸地，風暴 N=1 ，複製的那一發迸地則以灰棕熊為目標，這樣對手是否會得到2個中毒指示物？

答案確實如此，複製咒語也會使你的永久物成為目標，進而觸發景仰腐敗僧侶的異能。

如果你在疑惑，風暴中的 **選擇新目標** ，是否代表我會先以原版的景仰腐敗僧侶為目標，之後才轉向改成指定灰棕熊，導致一發咒語複製品觸發兩次景仰腐敗僧侶異能的話，答案是不會發生，因為並且當複製的咒語放進堆疊時，就已經是指定新目標的狀態了。

- 707.10c 一些複製咒語或異能的效應會同時說明其操控者可以為複製品選擇新的目標。該玩家可以保留其中任意數量的目標不作改動，即使這些目標可能不再合法。如果該玩家選擇改變其中一些或全部的目標，則新的目標必須全部合法。只要玩家決定了複製品的新目標，複製品進入堆疊並指定這些目標。





![6](https://i.meee.com.tw/OdXjI1e.png)
> - [絮聒風暴](https://scryfall.com/card/mh2/152/chatterstorm)：
>   派出一個1/1綠色松鼠衍生生物。
>   風暴
> - [震天急智拉爾 [-10] ](https://scryfall.com/card/blb/230/ral-crackling-wit)：
>   抽三張牌。你獲得具有以下異能的徽記～「你施放的瞬間和巫術咒語具有風暴異能。」

如果一個咒語因故同時具有複數個風暴異能時，會怎麼處理呢？ 答案很單純，每個風暴都是獨立的觸發式異能，他們能夠分別觸發，並各自複製出 N 發咒語出來。

- 702.40b 如果一個咒語有多個風暴異能，則每一個都會分別觸發。

---

## 風暴量尺（Storm Scale）

 過去MTG的首席設計師 [Maro](https://en.wikipedia.org/wiki/Mark_Rosewater) 曾在自己的部落格被人問到「風暴重回標準的機率有多大？」，Maro認為風暴實在太強了，不覺得它有什麼機會再回到標準賽系列，如果我們有一把測量某個設計會不會回歸標準的量尺，1分是非常可能、10分是非常不可能的話，那麼風暴會是10分，這讓其他讀者開始詢問各種機制落在這個「 **[風暴量尺](https://mtg.fandom.com/wiki/Storm_Scale)** 」上的位置，在這之後，風暴量尺就成為Maro部落格上的特色之一，並演變成了一系列專欄文章，於MTG官網上刊登。

風暴量尺的評分，會包含該機制的強度、複雜度、人氣、開發限制等多種面向來決定。例如遺存（Embalm），這機制本身強度平衡正常、複雜度不高、人氣也挺好的，但因為風味設計上綁定了阿芒凱的時空特性，所以對於故事背景發生於非阿芒凱時空的系列來說，是難以重出的（[乙太飄移](https://scryfall.com/sets/dft)系列之所以能做出[受詛包裹布](https://scryfall.com/card/dft/81/cursecloth-wrappings)，正是因為故事上有經過阿芒凱），這也導致了遺存的分數被拉高。風暴量尺的評分定義大致如下：

{% notel blue 風暴量尺評分定義 %}

1：肯定會再次見到，很可能就在下個系列
2：肯定會再次見到，但不一定是立刻
3：極為可能再出現，可能會很多次
4：很可能再出現，但有些問題，使得它們少了點保證
5：我們需要為帶回它們找到對的地方，但我很樂觀
6：我們需要找到對的地方把它們帶回來，但我有點沒那麼樂觀
7：它不太會回來，但如果有正確的環境存在的話也是有可能的
8：不太會回來，但如果一切完美配合時，也是有可能的
9：我從來不說絕不，但這需要一點小奇蹟
10，我從來不說絕不，但這需要一個大奇蹟

{% endnotel %}

對於分數定義的詳細資訊，以及各種機制的評分，請見風暴量尺官網文章：

{% notel blue 風暴量尺官網文章連結 %}

[韃契可汗](https://magic.wizards.com/zh-Hant/news/making-magic/storm-scale-khans-tarkir-block-2016-02-29)
[拉尼卡＆再訪拉尼卡](https://magic.wizards.com/zh-Hant/news/making-magic/storm-scale-ravnica-and-return-ravnica-2016-05-02)
[贊迪卡＆再戰贊迪卡](https://magic.wizards.com/zh-Hant/news/making-magic/storm-scale-zendikar-and-battle-zendikar-2016-11-21)
[依尼翠＆依尼翠闇影](https://magic.wizards.com/zh-Hant/news/making-magic/storm-scale-zendikar-and-battle-zendikar-2016-11-21)
[卡拉德許＆阿芒凱](https://magic.wizards.com/zh-Hant/news/making-magic/storm-scale-kaladesh-and-amonkhet-2019-03-25)
[秘羅地＆秘羅地創痕](https://magic.wizards.com/en/news/making-magic/storm-scale-mirrodin-and-scars-mirrodin-blocks-2018-06-11)
[塞洛斯＆塞洛斯：冥途求生](https://magic.wizards.com/zh-Hant/news/making-magic/storm-scale-theros-and-theros-beyond-death-2020-12-07)
[艾卓王權～斯翠海文 Part1](https://magic.wizards.com/zh-Hant/news/making-magic/storm-scale-throne-of-eldraine-through-strixhaven-part-1)
[艾卓王權～斯翠海文 Part2](https://magic.wizards.com/zh-Hant/news/making-magic/storm-scale-throne-of-eldraine-through-strixhaven-part-2)

> PS：網站語系設定為繁體中文時，網頁可能出現不可預期 BUG ，如閃退或偶發性顯示 404 等。 

{% endnotel %}

不過在2019~2020年代，MTG的設計思路發生巨大轉變，在這時期前後的標準系列強度/複雜度皆存在明顯斷層，因此比較早期的文章中，對於各機制的看法可能是已經過時的觀念，並且這終究是Maro的個人評價，並不代表整個官方開發團隊的意見，所以對於裡面的評分也不用過於認真，當個閒話家常輕鬆看就好。

不過還是有一點筆者想吐槽的，那就是風暴這個出鏡率根本不像是10分的定義阿！要不改叫行侶量尺算了，啊行侶只有9分……？ 我放棄吐槽了。 
