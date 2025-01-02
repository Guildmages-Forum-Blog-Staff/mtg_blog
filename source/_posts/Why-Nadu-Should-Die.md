---
title: "為什麼 Nadu 必須死：Aug 26th BnR 預測"
cover: "https://guildmagesforum.tw/images/Why-Nadu-Should-Die/silver-nadu.jpg"
thumbnail: "https://guildmagesforum.tw/images/Why-Nadu-Should-Die/silver-nadu.jpg"
excerpt: "Nadu 一路好走"
authors:
  - "MiohitoKiri5474"
date: 2024-08-16 17:51:11
tags:
  - "MiohitoKiri5474"
categories:
  - "Construct"
  - "Modern"
---

{% notel red 注意 %}
本篇文章只是 Aug 26th 的 BnR 預測，並不代表最終 BnR 更新內容，也不應構成任何單卡投資建議。
投資理財有一定風險，賺錢記得分紅 ~~虧錢別來找我~~。
{% endnotel %}

## Before We Start

隨著 MH3 的發售，增加了許多近代強度的新牌。除了補強環境中現有的套牌（例如 Dimir Tempo, Azorius Control 變成 Jeskai Control 以及 Goryo's Reanimator），同時也多了不少新套牌，像是 Boros/Mardu Energy, Ruby Storm 等等。
⋯⋯以及 Bant Nadu Combo。

![](/images/Why-Nadu-Should-Die/nadu-comic.jpg)

## 細數 Nadu 的罪行

Nadu 應該可以說是現在環境中最讓人厭惡的套牌，沒有之一。甚至可以說是比前一年的 Scam 還要讓人討厭。

> 關於一回 Scam 的機率究竟有多少，可以參考我去年寫的文章：[最近的近代怎麼了？](https://guildmagesforum.tw/Whats-Wrong-Modern/)。

特別是這兩張精美的 meta 表和勝率表：
![](/images/Why-Nadu-Should-Die/meta.png)
![](/images/Why-Nadu-Should-Die/win-rate.png)

從勝率表上我們可以發現，Nadu Combo 對上環境中所有套牌基本上都是優開的，overall 有 59% 的勝率，對上主要的 meta deck 中只有 Jeskai Control 稍微劣勢一點點。

除了組合技以外，套牌中有許多活動卡位可以放各式各樣的生物工具箱，並且用 {% mtgcard "Chord of Calling" tooltip=true %} 尋找這些工具箱。

### Nadu 這套牌究竟在做什麼

首先，我們需要先了解 Nadu 這套牌在做什麼，一套 Nadu 套牌大概會長這樣：

![](/images/Why-Nadu-Should-Die/bant-nadu-deck.png)

> 這個套牌是我從最近一場 Modern Challenge 中的八強抄來的，別問我為什麼備牌只有 14 張，我也想問為什麼只有 14 張⋯⋯

主要的組合技元件有：

<script src="https://cdn.tailwindcss.com"></script>
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
  <div>{% mtgcard "Nadu, Winged Wisdom" %}</div>
  <div>{% mtgcard "Shuko" %}</div>
  <div>{% mtgcard "Outrider en-Kor" %}</div>
  <div>{% mtgcard "Springheart Nantuko" %}</div>
</div>

{% mtgcard "Nadu, Winged Wisdom" tooltip=true %} 是套牌核心，其效果為「給予其他生物『當此生物成為咒語或異能的目標時，展示牌庫頂，如果是地的話放進場，反之上手。此異能一回合只會觸發兩次。』」，所以如果搭配免費的指定源，就可以讓觸發這條異能 2X 次（X 為場上的生物數量）。
其中 {% mtgcard "Shuko" tooltip=true %} 和 {% mtgcard "Outrider en-Kor" tooltip=true %} 只要其中一個就好，目的只是要零費啟動的指定源。
最後是 {% mtgcard "Springheart Nantuko" tooltip=true %}，只要有地進場時一定可以生出 1/1 昆蟲。

所以也就是說，我們可以啟動 {% mtgcard "Shuko" tooltip=true %} 或 {% mtgcard "Outrider en-Kor" tooltip=true %} 的異能，目標一隻我的生物，異能觸發翻牌庫頂，地進場其他牌上手，如果地進場就再生一隻 1/1 昆蟲 —— 一隻乾淨還沒有觸發過 Nadu 異能的生物。

接著就是重複以上動作，**有機會** 將牌庫中的所有地丟到場上、其他牌上手。然後看要用 {% mtgcard "Thassa's Oracle" tooltip=true %} 或是 {% mtgcard "Finale of Devastation" tooltip=true %} 贏。

> 簡單提一下要怎麼用 {% mtgcard "Finale of Devastation" tooltip=true %} 贏，這時候場上需要有另外三個元件： {% mtgcard "Endurance" tooltip=true %}, {% mtgcard "Yavimaya, Cradle of Growth" tooltip=true %} 以及 {% mtgcard "Sylvan Safekeeper" tooltip=true %}，其中 {% mtgcard "Endurance" tooltip=true %} 身上必須貼著一張神授的 {% mtgcard "Springheart Nantuko" tooltip=true %}（但如前面所說，基本上會把整套牌抓在手上，這些東西應該都要有才對）。
> 等到將最後一張地牌丟到場上、神授的 {% mtgcard "Springheart Nantuko" tooltip=true %} 時，我們可以回應這個觸發，用 {% mtgcard "Sylvan Safekeeper" tooltip=true %} 的異能將所有的地犧牲（回應自己的啟動式異能再啟動一次，這樣就能用一隻目標生物將所有地犧牲掉）、並且在犧牲前產費（有 {% mtgcard "Yavimaya, Cradle of Growth" tooltip=true %} 其他地也能產綠），然後付兩費複製出一隻 {% mtgcard "Endurance" tooltip=true %} 進場指自己將自己的墳場洗回去，然後繼續做指自己 -> 翻牌庫頂 -> 地進場生 1/1 -> 地都出來的時候複製 {% mtgcard "Endurance" tooltip=true %} 洗自己墳場的動作。
> 這樣就能做到無限隻生物、無限點綠，最後做一發很大發的 {% mtgcard "Finale of Devastation" tooltip=true %} 給所有的生物敏捷踐踏，全推打死人。
> 我個人比較喜歡這個版本，因為可以躲 {% mtgcard "Angel's Grace" tooltip=true %} 之類的東西（可以將自己的墳場洗回去不怕抽乾）、{% mtgcard "Finale of Devastation" tooltip=true %} 前期也能用來當作額外的生物導師找工具箱或組合技組件，也能扛一些墳場套牌。

注意，這邊是 **有機會** 不是 **一定**，因為有可能把場上所有生物都指了一遍但臉很黑一張地都沒有。

欸，發現了嗎？這是一套 `有可能無法做完` 的組合技套牌，雖然的確有不少組合技套牌只要中間一個環節斷了就會做不完，但 Nadu Combo 必須將場上所有生物都點兩次，才能說啊我做不完欸，這時他的場上可能有 10 隻生物，就算一次觸發只花五秒解決，但這樣也是 200 秒⋯⋯更不用說生物更多的時候了。

即便現在套牌已經被特化成很難做不完的情況了，但總是會有 `欸你等等，我去做幾次 trigger 找看看有沒有東西` 的狀況發生，特別是在沒有 {% mtgcard "Springheart Nantuko" tooltip=true %} 的時候。

所以這邊我們先有一個觀念：**Nadu Combo 是一套很花時間的組合技套牌**。

### 既然是手甲（shuko），那幫 Nadu 擋個刀應該沒問題吧

欸，可能還真的擋不了，確實如果把 {% mtgcard "Shuko" tooltip=true %} ban 掉，整個套牌的強度會下降，但套牌中還是有其他可以零費啟動的指定源：{% mtgcard "Outrider en-Kor" tooltip=true %}。

而且在 MH3 環境初期就已經有了這套不需要 {% mtgcard "Shuko" tooltip=true %} 的構築：

![](/images/Why-Nadu-Should-Die/neoform-nadu-deck.png)

更別說環境中還有另一張牌 {% mtgcard "Lightning Greaves" tooltip=true %}，同樣也是零費啟動的指定源，缺點是不能指在原本配戴的生物上。

所以如果 ban 掉 {% mtgcard "Shuko" tooltip=true %}，確實 Nadu Combo 真的變弱了，但還有另一個問題：**Nadu Combo 還是一套很花時間的組合技套牌**。

讓我們往回看 [October 10, 2022, Banned and Restricted Announcement](https://magic.wizards.com/en/news/announcements/october-10-2022-banned-and-restricted-announcement) 來複習一下為什麼 {% mtgcard "Yorion, Sky Nomad" tooltip=true %} 在近代被 ban 了。

{% notel default fa-info "OCT 20th 2022 BnR Update" %}
... Modern specifically entails more shuffling and other physical card manipulation because of the deep card pool of card-selection spells, fetch lands, and so on. Cards encouraging large decks, like Battle of Wits , have existed in the past, but usually on the fringes of competitive play rather than as one of the strongest decks.
Finally, we've also heard from many players that the repeated triggers caused by Yorion and many of the cards surrounding it can lead to repetitive gameplay patterns and long games with lots of downtime between the other player's actions...
{% endnotel %}

> 簡單翻譯：
> ⋯⋯近代特別需要更多的洗牌和其他實體卡牌操作，例如搜尋牌庫的咒語、找地地等等，雖然鼓勵大套牌的單卡，如 {% mtgcard "Battle of Wits" tooltip=true %} 過去就已經存在了，但那畢竟是環境邊緣的套牌，而不是最強的套牌之一。
> 最後，有許多實體卡牌玩家對我們反應：Yorion 使得很多其他牌有許多重複的觸發會導致遊戲模式的重複以及遊戲時間過長，同時其他的操作（如找地）會讓對手不斷地處於停機狀態⋯⋯

所以我們也可以這樣說：就是套牌太厚找地找太久目標又太少，因此殺了 {% mtgcard "Yorion, Sky Nomad" tooltip=true %}。

既然老威不能夠接受找地找太久因此 ban 掉 {% mtgcard "Yorion, Sky Nomad" tooltip=true %}，那一個至少要做五六分鐘可能還做不完的 combo 又有什麼可以活下來的理由？
況且 Nadu Combo 同樣有大量的搜尋牌庫動作（{% mtgcard "Urza's Saga" tooltip=true %}, {% mtgcard "Chord of Calling" tooltip=true %} 和找地地），同樣有大量的操作時間（貼來貼去的 {% mtgcard "Shuko" tooltip=true %} 和指來指去的 {% mtgcard "Outrider en-Kor" tooltip=true %}），聽起來跟當時的 4C Elemental 一模一樣呢。

這邊以我之前去參加貓腳印松江店的 MITQ 來舉例，當天有非常多的和局，而且很多時候都是 Nadu Combo vs Jeskai Control，整個對局看起來就是又臭又長。
沒有錯，Nadu Combo 就是一個這麼討人厭的套牌。

## Ban 了 Nadu 之後

既然把 Nadu ban 了是必要措施，那在把 Nadu ban 了之後呢？環境中會有什麼套牌？

除了一定有的是 Boros/Mardu Energy, Jeskai Control, Goryo's Reanimator，另外還有好打上述套牌的 Dimir Murktide、比較不好打 Control 但好打其他套牌的 Mono-Black Necro 等等。

回頭看一下勝率表，除了 Nadu Combo 以外還有哪套牌的勝率特別高。

![](/images/Why-Nadu-Should-Die/win-rate.png)

以主流來說就是 Mardu Energy，但比起 Nadu Combo 他並沒有那麼平均的高勝率，是由少量的極優勢對局拉起的。
同時 Energy 並沒有「喔如果我把這一張牌 ban 了整個套牌就動不了了」的單卡，真的要說可能就是一費的 {% mtgcard "Guide of Souls" tooltip=true %} 吧。而且 Energy 可以被 {% mtgcard "Suncleanser" tooltip=true %} 斷掉大量的牌張互動。
另外當然還有其他高勝率的套牌存在，以 [MTG Decks 的數據](https://mtgdecks.net/Modern/winrates/range:last30days) 來看，還有 Eldrazi Ramp 的 60%, Izzet Wizards 的 55% 和 Domain Aggro 的 59%（雖然再往下還有其他勝率高於 55%，但樣本數太少了故不採計）。
不過同樣的，這些套牌也是藉由少數的極優勢對局拉起來的，同時樣本數比起上面幾套差了太多，可能會是不錯的嘗試。

## Nadu 的同期獄友們

再來我們換個問題，其他套牌有沒有可能一起被關入小黑屋？

首先我們需要先知道 WotC 近期的 ban 牌策略 —— 其實還蠻簡單的，一言以蔽之就是硬砍出頭鳥，基本上可說是誰強砍誰。
而且有時候會等到社群已經受不了了才有動作（轉頭看向 {% mtgcard "Fury" tooltip=true %} 那一次的 BnR）。

另外還有一個條件：**打死都不預防性羈押**。

我已經不知道吐槽多少次了，早在去年年底的 BnR 就應該要同時處理 cascade 了，不然用膝蓋想都知道接下來環境會被其他哪些套牌制霸環境。
不過 WotC 還是老樣子，不 ban 就是不 ban。

> 好啦我知道當年標準 ban {% mtgcard "Wilderness Reclamation" tooltip=true %} 的時候有預防性羈押 {% mtgcard "Teferi, Time Raveler" tooltip=true %} 啦。
> 但近幾年內也就只有那一次，我認為還是可以認為 WtoC 基本上不會預防性羈押。

{% mtgcard "The One Ring" %}

接著換來看環境中其他的高強度使用率牌張，目前我認為最有可能一起被關小黑屋的牌就是 {% mtgcard "The One Ring" tooltip=true %}。
這張牌在 Jeskai Control 中大放異彩，同時現在還有 {% mtgcard "Phlage, Titan of Fire's Fury" tooltip=true %} 可以補起被 {% mtgcard "The One Ring" tooltip=true %} 扣掉的血量。
或是在少數的 Mono-Black 中搭配 {% mtgcard "Sheoldred, the Apocalypse" tooltip=true %} 血量越抽越多的組合。

另外有其他呼聲很高、但我覺得大概不會被 ban 的牌：{% mtgcard "Necrodominance" tooltip=true %} 和 {% mtgcard "Orcish Bowmasters" tooltip=true %}。

{% mtgcard "Necrodominance" %}

先來說說 {% mtgcard "Necrodominance" tooltip=true %}，有一定資歷的玩家應該都會馬上想到 {% mtgcard "Necropotence" tooltip=true %} 這張牌。
確實 {% mtgcard "Necrodominance" tooltip=true %} 很強，雖然要等到回合結束才能一次性的付血並得到等量的手牌數量，不能根據現在的戰局進程彈性地付血。
不過因為是抽牌，所以可以搭配前面提到的 {% mtgcard "Sheoldred, the Apocalypse" tooltip=true %} 來補血，而且不是起動式異能不會被鎖。

但抽牌是一個雙面刃，這也代表會被對手的 {% mtgcard "Sheoldred, the Apocalypse" tooltip=true %} 或 {% mtgcard "Orcish Bowmasters" tooltip=true %} 懲罰。
同時是回合結束的觸發異能，所以有可能會被 {% mtgcard "Tishana's Tidebinder" tooltip=true %} 之類的東西一卡空掉一回合節奏。
並且也有更多的自肅，例如手牌上限少了兩張、牌張進墳改為放逐（{% mtgcard "Necropotence" tooltip=true %} 是棄掉牌時將該牌放逐、可以利用這個堆疊多做點事情）等等更多的弊處。

{% mtgcard "Orcish Bowmasters" %}

再來說說 {% mtgcard "Orcish Bowmasters" tooltip=true %} 這張牌，我認為更不可能被 ban，因為這張牌可以同時懲罰 {% mtgcard "The One Ring" tooltip=true %} 和前面提到的 {% mtgcard "Necrodominance" tooltip=true %}，在這兩張牌消失之前是不能動 {% mtgcard "Orcish Bowmasters" tooltip=true %} 的，不然真的沒有人可以懲罰這些大抽特抽的抽牌仔了QQ

雖然一直以來我都是強烈的 ban Orcish 派，但事到如今也只能這樣子別無他法。

## 放刑期已滿的大學長們出獄

去年八月我們久違的迎接了刑期已滿的受刑人出獄，但說實在，放 {% mtgcard "Preordain" tooltip=true %} 出來其實並沒有影響到環境，而且當時的藍底套牌都快要被 {% mtgcard "Orcish Bowmasters" tooltip=true %} 壓爛了⋯⋯
轉頭看其他獄中的大學長們，我覺得有另外兩張牌可以考慮放出來：{% mtgcard "Umezawa's Jitte" tooltip=true %} 和 {% mtgcard "Glimpse of Nature" tooltip=true %}。

{% mtgcard "Umezawa's Jitte" %}

先說說 {% mtgcard "Umezawa's Jitte" tooltip=true %}，基本上他的異能已經無法有效的宰制環境了，說穿了 {% mtgcard "Umezawa's Jitte" tooltip=true %} 乃至於整個 Stoneblade 都已經不是環境中可生存的套牌，本來 {% mtgcard "Stoneforge Mystic" tooltip=true %} 還可以在 Nadu Combo 中找 {% mtgcard "Shuko" tooltip=true %} 出來，現在看起來是完全失業了呢⋯⋯

{% mtgcard "Glimpse of Nature" %}

放 {% mtgcard "Glimpse of Nature" tooltip=true %} 出來應該可以拯救妖精球，同時環境中有兩張黑色抽牌康特雙煞 {% mtgcard "Sheoldred, the Apocalypse" tooltip=true %} 和 {% mtgcard "Orcish Bowmasters" tooltip=true %} 在，應該沒問題吧⋯⋯？

除非 WotC 改成如隔壁棚 YGO 一樣的禁牌方式（從限二、限一開始，最後才是禁牌），試著將部分的牌以限一或限二的方式放出來，我覺得如果只能用一張 {% mtgcard "Uro, Titan of Nature's Wrath" tooltip=true %} 或是 {% mtgcard "Oko, Thief of Crowns" tooltip=true %} ，應該還能接受。

> 吐槽一下，WotC 都已經和學 konami 砍出頭鳥的方式動刀，為啥禁牌方式不能也一起學一學啊 = =

## 順便看一下其他賽制

標準基本上很健康不用動，上一次的 BnR WotC 有說標準的 Boros Convoke 和 Domain Ramp 是他們的觀察對象，因為兩者都有一隻生物（{% mtgcard "Atraxa, Grand Unifier" tooltip=true %} 和 {% mtgcard "Knight-Errant of Eos" tooltip=true %}）本身是大生物的同時、還能夠補手牌資源。
不過同時也有提到，在今年的退標之後，Boros Convoke 少了 {% mtgcard "Voldaren Epicure" tooltip=true %} 可以搭配 {% mtgcard "Gleeful Demolition" tooltip=true %} 可以早出 {% mtgcard "Knight-Errant of Eos" tooltip=true %}、Domain Ramp 少了三色地可以穩定的調色和湊 domain，都算是少了一點東西。
剩下大概就是來看一下先驅吧。

先驅目前我也覺得還算是平衡，可能真的比較搞心態的就是 Abzan Amalia Combo，雖然按照網站中某寫手的說法這是一套爛套牌，不過沒有改變這套帶來的絕望感，有時候不是不想解而是解不掉，例如 Izzet Phoenix 看到場上有 {% mtgcard "Selfless Savior" tooltip=true %} 時手上只有一張解牌無法解掉 {% mtgcard "Amalia Benavides Aguirre" tooltip=true %}、等到對面做完後也點不死，或者是看到對手牌庫頂留了一張 {% mtgcard "Aetherflux Reservoir" tooltip=true %}，要有多絕望有多絕望⋯⋯
其他套牌我認為屬於正常強度範圍，不過 Rakdos Vampires 辣個 meta 使用率是沒問題的嗎⋯⋯？

![](/images/Why-Nadu-Should-Die/pioneer-meta-rate.png)

## 最後的最後：個人希望

雖然我保持著一直以來的想法：希望 Izzet Murktide 重返榮耀，但我想不太到現在解 ban 什麼可以救起這套牌了 QQ
解 ban {% mtgcard "Gitaxian Probe" tooltip=true %}, {% mtgcard "Faithless Looting" tooltip=true %}, {% mtgcard "Treasure Cruise" tooltip=true %} 感覺也只是會爽到 Dredge；解 ban {% mtgcard "Ponder" tooltip=true %} 感覺也只是隔靴搔癢，說實在 {% mtgcard "Ponder" tooltip=true %} 也只是比 {% mtgcard "Preordain" tooltip=true %} 好一些些，但我不覺得這一些些有辦法弭平 Izzet Murktide 與 meta 的差距。
與其等待 Izzet Murktide 重返榮耀，不如繼續去做夢有一天真的在近代印 {% mtgcard "Daze" tooltip=true %} 之類的東西算了。
