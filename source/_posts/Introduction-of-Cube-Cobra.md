---

title: 'Cube設計 - Cube Cobra介紹'
date: 2025-04-08 21:30:57
tags:
  - dalance

cover: "https://cards.scryfall.io/art_crop/front/a/4/a4b759f0-901f-4be3-93fa-224609b08d48.jpg"
thumbnail: "https://cards.scryfall.io/art_crop/front/7/4/74cd063c-9134-43ae-9113-8c667c2d892c.jpg?1562545730"
excerpt: "萬能的Cube Cobra，請賜給我神奇的力量！"
authors:
  - "dalance"

categories:
  - "Limited"
  - "Cube"
---

本篇是延伸介紹 **Cube** 的文章，邀請喜歡輪抽體驗的讀者先從[什麼是 CUBE - 你的第一個 Cube](https://guildmagesforum.tw/What-is-Cube/)讀起唷。

## CubeCobra是什麼

[Cube Cobra](https://cubecobra.com/landing)是一個管理維護Cube的平台（以下或稱Cobra），設計者可以在上面維護跟分享自己的Cube。在以前要做Cube，設計者要把大量的牌放在桌上來找靈感；在數位時代下可以利用製表軟體來輔助設計；如今，你也可以利用各種Deck Builder網站來建立Cube。
這次要介紹的Cube Cobra具備強大的功能，使得設計與管理Cube變得更加直覺且高效，用過一次就回不去了。

> 更早期的Cube做法可能更加粗暴，可以參考前美國國家冠軍玩家Kyle Rose的經驗，有興趣的讀者可以去Youtube搜尋 This History of Cube Drafts...as told by me on my stream! 就能找到他的這則影片（粗口注意！！！），他只用便當盒就做出了他的Cube。

此外這是Magic Cube專欄，本文也會盡可能的補充跟Magic與Cube相關的知識，也同時讓讀者盡快地對Cobra的功能有初步的了解。

---
### 使用工具的動機

在Cube設計上面設計者想要透過工具達成以下目的：

1. 每張牌都是有用的，讓玩家願意抽它。
2. 每張牌至少能夠適用於一種以上的套牌。
3. 每個雙色主題都可以得到支持。
4. Cube有合適的Mana曲線。
![image](https://hackmd.io/_uploads/rJiaIlZhke.png)
在這邊簡單補充幾種套牌Archetype：分別是快攻、中速、控制和組合技，在輪抽中裡面常見的套牌都是中速或快攻。而在Cube中，如果設計者想要提供組合技或者控制就要在對應的Mana Curve中，加上足夠的牌讓玩家可以抽。
例如足夠多的低費牌和戰鬥詭計可以用來支持快攻、同樣的足夠的妨礙咒語、移除和終結者可以讓控制的計畫成型，組合技亦同。

接著會介紹Cobra功能是怎麼滿足設計者的需求的。

---

### 製作第一個Cube

建立Cube有兩種方法，手動建立、與Clone（複製現有Cube）

#### 方法一：以一個FDN系列單卡Cube（Foundation Set singletone Cube）為例

> 手動建立段落感謝 cephille 提供

1. Scryfall上搜尋對應的系列，如本次示範，選擇"set:dft"。
2. 把圖片預覽（Image）改成純文字預覽（Checklst），並依自己的需求把全部卡牌複製下來。
> Scryfall在checklist介面沒辦法直接匯出，就到空白處把需要的卡牌整列複製下來就好；也有可能有更簡便的方法，也歡迎大家嘗試後分享囉！

![image](https://hackmd.io/_uploads/S1WCy3rhyx.png)

3. 貼到待編輯的介面，如Microsoft Excel、Google試算表等，然後只複製卡名（Name）的那一欄。

![image](https://hackmd.io/_uploads/SyjlxhHhye.png)

4. 在Cube Cobra創建一個新的Cube（Creat A New Cube），這個步驟必須先註冊自己的Cube Cobra帳號後並登入。有趣的是，創新Cube還需要回答簡單的魔風小知識，答錯可是建不成的XD
![image](https://hackmd.io/_uploads/H1NSg3Hn1g.png)
![image](https://hackmd.io/_uploads/HkHue3Sh1e.png)

5. 進到新建立的Cube裡 List > Import/Export > Paste Text ，然後回到步驟4裡，把所有卡名複製過來貼上，接著點選"Add Cards"，~~美味蟹堡就完成了~~ 就建立好我們的單卡Cube了。
> 如果要加入[SPG](https://scryfall.com/sets/spg)、或舊系列的額外系列牌張（如WOE的魅附奇譚（WOT）、STX的秘典（STA）等）該系列開得到的單卡的話，就比照上面的方法，依序加入該Cube中。
![image](https://hackmd.io/_uploads/r1yjx2Bhkl.png)
![image](https://hackmd.io/_uploads/HyR3ehS31l.png)
![image](https://hackmd.io/_uploads/H1OG-hrnJx.png)
![image](https://hackmd.io/_uploads/ry7D-2r21l.png)

---

#### 方法二：複製別人的
選一個你喜歡的Cube，這邊以[Vanilla Cube](https://cubecobra.com/cube/list/van)為例：

1. 到[Vanilla Cube](https://cubecobra.com/cube/list/van) 頁面
![image](https://hackmd.io/_uploads/HyfKR9K3Je.png)
2. 點右上的List
![image](https://hackmd.io/_uploads/SJs-G2r31l.png)
3. 點Export，然後選擇Clone
![image](https://hackmd.io/_uploads/r1QXC9Fnkl.png)

你就可以得到一份Vanilla Cube的備份了，在你的備份內你可以盡情修改不會影響到原Cube。

---

### List 列表

設計中最常接觸到的就是List頁面，這是設計過程當中會盯最久的頁面，也是與其他人交流的地方，以下介紹List的功能。

#### List - Add card 加牌

加牌進去有三種方式，
1. 是直接在對話框裡面輸入。
2. 在Import/Export點Paste然後大量輸入。
3. Maybeboard點擊單卡中把牌再點"Move To Mainboard"。

![image](https://hackmd.io/_uploads/HJd3VsqoJg.png)
![image](https://hackmd.io/_uploads/SyxdTNoqs1l.png)
![image](https://hackmd.io/_uploads/Bylgrsqo1x.png)

#### List - Remove 移除

在"Card to Remove"輸入框輸入牌名即可移除，或者點開牌的資訊頁面選"Remove from cube"

#### List ChangeList

特別注意當你對List進行修改的時候，修改並不會馬上儲存下來，Cobra使用了ChangeList來讓你看這個批次修改了哪些東西。
你可以在修改之後按下"Save Changes"儲存，或者"Discard All"丟棄，你也可以點卡名左邊的"X"來把這個變更撤銷掉。

![image](https://hackmd.io/_uploads/SJOSJiFn1x.png)

---

#### List - Maybeboard 備牌

實用的功能，在修改Cube中要選擇牌是件麻煩事，Maybeboard給你一個候選的區域可以讓你放備牌，可以把考慮中要加入或者刪除的牌先放在這邊。

---

#### List - Modify 修改

點下List中的單卡會打開的資訊窗，這邊可以修改單卡的資訊，能夠修改的資訊相當的多，包含了顏色、擁有狀態、卡面版本。

1. **顏色**：牌上的顏色是可以修改的，目的是可以讓一些牌在分類的時候分到你期望的顏色去，例如歷險牌 {% mtglink "Imodane's Recruiter//Train Troops" %}，會被預設作為Boros，但設計者也可以只把它標記成紅色。
2. **Status**：牌的狀態，這邊是這張牌的擁有狀態，我會用這個來追踨是否有這張牌，好作為買牌下單的參考。以下是狀態介紹：
   - Not Owned：沒有
   - Owned：已擁有
   - Ordered：已下單
   - Proxied：代牌 
   - Bororwed：借來的

   事後也可以用Sort來追蹤牌的購買狀態或者是否已經整理進Cube裡了。
3. **tag**：一開始容易忽略但意外強大的功能，以下面一段文章來介紹。

---

#### List - Modify - Tag

設計者可以在這邊打上自訂的tag，tag是很強力的工具，設計者可以用tag去描述牌的特性，之後透過tag，設計者可以將Cube的組成與分布看得更加清楚。要寫上什麼tag並沒有強制的規定，端看Cube設計而定，要寫得多準確也沒有硬性的規定，只要方便你能夠tag你感興趣的特性即可。

舉個例子

常見的 {% mtglink "Merfolk Looter" alt="掠奪人魚" %} ，可以怎麼標記tag呢？
* 如果你有人魚主題，也可以加上"merfolk"
* 如果你的抽二主題在乎抽牌，可以加上"draw"
* 如果你有瘋魔主題所以要棄牌，可以加上"discrd"
* 如果你覺得這樣子兩個tag很麻煩，也可以加上"loot"就好

> "對於還是不知道該怎麼做的人，有沒有可以抄tag的地方？"

答案是有的，還記得之前提及的Scryfall嗎？
Scryfall提供一個由社群支持的[Scryfall Tagger](https://tagger.scryfall.com/)站，用來標記每張牌的特性。

[掠奪人魚的tagger](https://tagger.scryfall.com/card/afc/86)

![image](https://hackmd.io/_uploads/BJRZGncikg.png)

tagger會列出掠奪人魚的特性，掠奪人魚在tagger上特性直接被標成loot了，在特性的旁邊也可以看到有類似功能的牌，有些是相似的牌，有些則是上位牌。
找牌沒有想法的時候來看看tagger，有時也會有不同的收穫。

> 此外tagger也有針對美術風格做標記，推薦給喜歡某些美術的玩家 例如 [絕對領域](https://tagger.scryfall.com/tags/artwork/zettai-ryoiki)

---

#### Sort 排序

排序功能，CubeCobra可以使用四種卡的特性來排序，你可以按照自己感興趣的方式來排序，以下介紹幾種常用的。

**Color / Color Category**
![image](https://hackmd.io/_uploads/H1GVXf13ke.png)
這是預設的分類，多色那邊也會按公會色來分組，之後再用Mana分小群，群內則用字母順序來排序。

![image](https://hackmd.io/_uploads/BJlI7zy3yg.png)

這是我用來整理Cube的時候用的，在最後要出試玩Cube版本的時候，要把Cobra上面的卡表轉換成紙本的Cube，這時我會把紙牌按顏色分開，之後再用Mana數量來排序，再來跟Cobra上面的List對照，不要讓少牌或者放錯牌打擾你美好的測試時光。

{% mtgpick "lgn" 26 %}
{% mtgpick "ons" 19 %}
> 兩張長那麼像是要怎麼不搞錯！！
> 延伸閱讀：[Kai Budde 搞錯morph的牌，最後在PT輸掉的軼事](https://articles.starcitygames.com/articles/scg-daily-time-spiral-through-the-lens-of-its-forebears-5/)

**Color / Tag**
如果之前有準備好tag的話，在這邊就可以收到tag帶來的設計助益，如第一篇文提及的：「如果在Cube中找不到你的雙色主題，那他就不是你的主題」。用tag可以去檢查主題在顏色裡的分布，確認主題真的有被支持，後面還會介紹更好的工具來分析tag。

**Color / ELO**
這個可以觀察各色的[ELO](###ELO)分布，ELO是前人測試完留下的分數，雖然在不同的環境下牌會有不同的能力，但是有個基礎參考總是比較方便，期待會有一天在看到一張低ELO牌的時候我們會有信心說：
> 「This card is fine, learn to play」

**Color / Power**
用來評估環境的速度。端看你喜歡小兵互打然後漸漸變化的戰局，還是風雲驟變一下子大軍壓境帶來壓力的玩法。

**Color / Toughness**
可以用來評估移除牌的作用，如果整個Cube生物防禦都只有1/2的話，那麼 {% mtglink "Shock" %} 跟 {% mtglink "Murder" %} 其實是等價的，在設計移除的時候不妨考慮一下這點來思考移除的射程。

{% mtgcard "Shock" %}
{% mtgcard "Murder" %}

---
### ELO

ELO是用來做排名的一種數學系統，在Cobra用來指稱輪抽當中單卡的強度，如果你對Cobra怎麼處理ELO有興趣可以參考下面文章。

[DraftBot 與 ELO](https://cubecobra.com/content/article/6008b17565264010480a4a84)

ELO可以透過玩家的pick順序輸出參考分數，但這只有在比較的二張卡在同一個輪抽池子裡面才有參考價值；例如新系列的牌推出時，被放進Cube並且輪抽測試的機會比舊牌要少很多，所以ELO分數也相較沒有說服力。

知道Cobra的ELO限制之後，如果想知道在系列中的單卡強度該怎麼辦呢？可以參考[17lands](https://www.17lands.com/card_data)。
17lands是一個讓玩家把輪抽和對戰紀錄作成資料再分析並且視覺化的網站，可以從這裡找到各系列單卡在該系列的表現。

---

#### Filter 篩選器

可以讓你過濾List內牌的功能，語法可以參照[這裡](https://cubecobra.com/filters)
自從發現這個可以利用filter來打tag之後，深深覺得Cobra實在太強大了。
例如我想要關注我的Cube裡面的delirium牌夠不夠，我可以在filter輸入以下指令來找
> o:delirium(找出牌中的文字框有delirium的牌)

前面提到的Cobra修改牌張資訊除了點單卡還可以點上面的Label，以上圖的Green為例，我想要把這些生物都打上delirium的tag的話，先下完指令。

![image](https://hackmd.io/_uploads/SJJcxPlnyx.png)

再點開Label，也就是圖中的Creature

![image](https://hackmd.io/_uploads/ByK7ZPlhJx.png)

在tag處輸入delirium後再按Apply to all就能對這些牌打上delirium tag了

![image](https://hackmd.io/_uploads/rJHSWwl2kg.png)

之後就可以用delirium tag來搜尋牌了！
![image](https://hackmd.io/_uploads/Ska0MoFhyl.png)

> 用tag而不用o來找的原因是：當你有複合類別咒語的時候，你可以把它當成一種可以支持delirium的牌並且打上tag，但是o:做不到這件事情。

---

打完各色主題的tag後，接著可以檢查tag的漏網之魚。filter一樣可以提供查詢的方法。

> tags=0 (找出牌的tag數量為零者，即為沒有tag的)

這樣子就不會漏了，這時候也可以留意如果主題都filter過一輪也打過tag了，這時候還沒有tag的牌就值得注意了，這些牌可能和你的主題不相關，可以考慮把這些牌給換掉。

{% mtgpick "10e" 268 %}

> 當然這也是一個找灰棕熊的快捷方法，愛熊幫的學起來！！

此外有一個類似項目也可檢查：

> tags=1 (找出牌的tag數量為1者)

在打完tag後，tags=1的牌可能也是值得留意一下的，這些牌可能只支持單個主題，變成某個主題的專武，這通常發生在某主題太弱，所以加單卡來增強。但是專武一多就沒有搶pick的樂趣了，這在設計上會讓輪抽體驗變差。

Filter讓設計者修飾與確認Cube的小細節更加方便。

---

### History 歷史

Cube的修改歷史，Cobra這裡不能像版本控管一樣回到舊版或作diff（比對） / branch（分支）實在非常可惜。期望可以在修改過程中定版、或者分支合併之類的功能。

> 以上是軟體工程師的murmur，但其實Cobra的[站長](https://github.com/dekkerglen)本身也是AWS的工程師啊啊啊啊！！！

---

### Playtest 測試

測試Cube的地方，有提供和AI抽，或者和玩家抽的功能，抽的過程會回饋到ELO系統去，設計者可以自己抽一下看看各個主題組起來會長成什麼樣子。要和朋友線上測試的話，目前也有支援[DraftMancer](https://draftmancer.com/)。

---

### Analysis 分析

Cobra最強大的地方，提供圖表和表格的分析，讓你從統計數據上更加理解你的Cube。

先說對支持主題最重要的[asfan](https://magic.wizards.com/en/news/making-magic/few-more-words-rd-2016-11-07)，在Maro的文章有提到asfan是設計Magic系列輪抽會檢查的指標。


#### Analysis - Asfan

[asfan](https://magic.wizards.com/en/news/making-magic/few-more-words-rd-2016-11-07)是一包中會開到幾張XX的期望值，這裡預設是一包15張，例如每包都有一張非基本地的話，非基本地的asfan就是1，在這裡可以看tag的asfan，這也是一個主題是否真的在你的Cube裡的重要指標。
如果主題有delirium，就要在asfan上看的到足夠的delirium tag。
asfan的值沒有標準答案，以一個10個主題的Cube，用一包15張卡來計算的話，每個主題約有 15 / 10 = 1.5的期望值，可以用這個作基準來調整。

#### Analysis - Token

貼心功能，可以列出你Cube裡面所需要的token、和產出token的牌名。

#### Analysis - Recommender 建議器

強大功能，對於背後秘辛可以參考作者的訪談[Better Design with Cube Cobra](https://www.youtube.com/watch?v=46-dy991j9k)，簡單說就是Cobra會用AI來找出你Cube的核心，並且依照核心找出適合你的牌，所以在你少牌或想換牌的時候，你可以來Recommender找找，很有可能就是你要的牌。

在核心牌的排序當中，越後面的牌可能就是越不適合你的牌，在Cut牌的時候也可以考慮這些牌，

**但是AI並不能完全掌握Magic，所以你有把握的話也可以不理這個Recommender。**

---

### CubeCora 功能介紹 Content

Cobra還有社群的功能，可以在這裡挖到不少寶。
Browse / Article / Podcast / Video

### CubeCora 功能介紹 - Cube搜尋

搜尋功能不是很直觀，請使用 Lucky Paper的[Cube MAP](https://luckypaper.co/resources/cube-map/)。

Lucky Paper是Cube Cobra的索引站，這裡提供用模糊比對的方式來尋找Cube。
在Cube Map中，每一個點都是一個Cube，點和點的距離越近表示越相似，在Map上的絕對位置沒什麼意義，所以當你的Cube被索引在上面的時候你也可以看看你的鄰居長什麼樣子，用Map來看大家的Cube是怎麼分布是件很有趣的事情。

**注意**：這個索引幾個月才會更新一次，所以看不到你的Cube表示你的Cube還太~~嫩~~年輕。

喜歡分析資料的同學我把[raw data](https://data.luckypaper.co/cube-map/2024-12-30/cube-map.csv)放這裡你可以自己玩，注意索引日期會變，可以自己換URL內的日期。
我會看一些follower高的Cube作參考，也會找一些相似自己牌庫大小的Cube看人家怎麼設計。

### CubeCora 功能介紹 Cards

不太常用的區塊。

#### Search Syntax／Search Cards 介紹

[Cobra 搜尋語法](https://cubecobra.com/filters)

Cobra搜尋做的沒有Scryfall那麼來的方便，Cobra只有提供兩種特別資料
1. **ELO**：舉例[漂念精](https://cubecobra.com/tool/card/eb6d8d1c-8d23-4273-9c9b-f3b71eb0e105)的ELO約是1390，是優於常人的強度；ELO 1200是平均的卡，1300是優秀，1600非常強力了。
3. **單卡與其他牌的關係**：頁面下面會有三列大數據的分析資料，可以作為選牌參考，分別是
   - Often Drafted With：常常會和什麼一起抽
   - Often Cubed With：常常和什麼一起放進Cube
   - Synergistic Cards：機制上和什麼牌可以協同

---

### Top Cards

牌張使用的統計，看看就好。

---

### Package 套件

可以將[循環卡](https://mtg.fandom.com/wiki/Cycle)加入套件，點擊一下就能將整個套件添加到Cube中。例如，我可以將神器地製作成一個套件，然後在這裡點一下，就能一鍵加入Cube。

期望的改善是能在系列中預先打包雙色主題，這樣在選擇雙色主題時，可以直接將相關牌納入，而不必手動複製貼上。此外，也可以參考 **Jumpstart** 的設計，將主題製作成 20 張的小包，玩家可以抓取兩個小包，組成一副 40 張的限制賽Deck。Cobra上已有玩家設計這樣的Cube，但目前套件功能尚未提供這類資源。

~~另外，目前執行速度真的很慢，體驗不佳。~~

---

### Overview 預覽

這裡是介紹你的Cube內容的地方，通常會放置主題的介紹、Combo或特殊規則，並且支援 **Markdown** 語法。許多有趣的Cube都會撰寫詳細的介紹，讓玩家能夠快速理解Cube的設計理念。

預覽就像Cube的手冊頁面，一份清楚的文件可以大幅減少新手理解的時間，加快理解Cube的速度，提升遊戲體驗。

---

## 結語

二十一世紀的Cube設計者在工具輔助下，能更快將構想實現，使Cube的構築與修改變得更為高效，並能清楚掌握設計上的盲點，做到「見樹又見林」。透過 **Cobra**，設計者能滿足大部分的設計需求，而 AI 演算法則提供更輕鬆的方式來探索 **Magic** 的龐大牌池。

相信在閱讀本文後，你也會認同 **Cobra** 是Cube設計的最佳工具，能幫助你更迅速地穿梭於Cube這座巨大神秘島嶼。

下篇我們將探討各種輪抽方式，再會！
