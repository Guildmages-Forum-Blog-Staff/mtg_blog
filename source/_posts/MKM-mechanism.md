---

title: "卡洛夫莊園謀殺案機制解析"
date: "2024-01-22 23:06:22"
tags:
  - "JruMTG"
  - "Limited"
  - "MKM"
cover: "https://images.ctfassets.net/s5n2t79q9icq/5IpzwfzisqktbGso4ADudz/b82affc918ac3f6ccc6e2b0bccc125ec/SuzzZi1lLfhTt7T_1600x1080.jpg?q=70&w=1920&fm=avif"
thumbnail: "https://images.ctfassets.net/s5n2t79q9icq/5IpzwfzisqktbGso4ADudz/b82affc918ac3f6ccc6e2b0bccc125ec/SuzzZi1lLfhTt7T_1600x1080.jpg?q=70&w=1920&fm=avif"
excerpt: "來看看卡洛夫莊園謀殺案中出現了哪些機制吧！"
---

## 連體牌（Split Cards）
![連體牌](https://i.imgur.com/mem7fh4.png)

說到拉尼卡怎麼能沒有連體牌呢?

連體牌又俗稱餅乾牌，顧名思義，是將兩張牌連接在一張牌上。本系列的連體牌為兩個瞬間或巫術左右拼接而成，你在施放這張牌的時候，可以選擇其中一邊施放，它在堆疊上時只有你所施放那邊的特徵，其餘時候這張牌的特徵是左右兩邊的綜合。

讓我們以新牌[Cease//Desist](https://scryfall.com/card/mkm/246/cease-desist)為例：
- 當你施放此卡時，如果你施放左邊的Cease它就是2費黑綠咒語，如果你施放右邊的Desist，它就是6費白綠色咒語，對手若想以[倨傲擊](https://scryfall.com/card/woe/47/disdainful-stroke)康你，只康的到6費的Desist。
- 在堆疊以外的區域時，這是一張總魔法力值（Mana Value）為8的黑白綠三色牌，如果被[長吼食肉龍](https://scryfall.com/card/lci/171/trumpeting-carnosaur)傾探5（Discover5）所翻出來，將會因為卡片的費用大於5而被判為不滿足條件。
- 在堆疊以外的區域時，這張牌同時有瞬間與巫術類別，對[大一統飛將亞崔夏](https://scryfall.com/card/one/196/atraxa-grand-unifier)的進場異能而言，你可以將它視為瞬間或巫術牌，使用那類別的額度拿上手。
- 連體牌的兩邊有各自的牌名，你想使用[祝聖和平護衛](https://scryfall.com/card/dmu/2/anointed-peacekeeper)宣言一個牌名時，只能宣言其中一邊的牌名，假設你用了祝聖和平護衛的異能宣言了左半邊的Cease，那麼就只有Cease的施放費用要增加2費，對手施放右半邊的Desist時施放費用不受影響。


## 線索（Clue） & 探查（Investigate）
![線索](https://i.imgur.com/HyOkchI.jpg)

線索是一個神器副類別，具有起動式異能「{2}，犧牲此神器：抽一張牌」。

線索最常見的來源是派出線索衍生物的效應，這類效應通常會使用探查這個關鍵字，探查即代表派出一個線索衍生物（例如本系列的新牌[Deduce](https://scryfall.com/card/mkm/52/deduce)），如果一個效應寫探查N次的話，那就是派出N個線索衍生物的意思（例如[Ezrim, Agency Chief](https://scryfall.com/card/mkm/202/ezrim-agency-chief)的進場異能為探查兩次，即為派出兩個線索衍生物）。


## 懷疑（Suspect）
![Suspect](https://i.imgur.com/Wh8OulB.jpg)

懷疑是本系列新增的關鍵字異能，一些效應可以懷疑指定的生物，被懷疑的生物會變成遭疑（Suspected）狀態，遭疑的生物獲得威懾異能、並且不能進行阻擋，遭疑是個永久持續性效應，生物會一直保持遭疑的狀態，直到這個生物離場、或是有某個效應終止遭疑狀態（例如[Airtight Alibi](https://scryfall.com/card/mkm/149/airtight-alibi)）。

另外提醒一點，懷疑只是鼓勵生物攻擊，並非強制生物攻擊，哪怕你的生物因為變成遭疑狀態而不能阻擋，也可以視戰術需求先按兵不動，不是只能硬推出去當敢死隊。


## 案件（Case）
![Case](https://i.imgur.com/aXCm54U.png)

案件是一種新的結界類別，案件皆由三個部分組成：標準異能、偵辦條件、偵結異能。

一個案件剛進場時還是未偵結的狀態，只擁有第一段的標準異能，這部分就跟一個常規結界一樣。

第二段的偵辦則是一個觸發式異能，如果在你的結束步驟開始時，這個案件還未偵結，並且滿足了偵辦所指定的條件，就會觸發此異能，此異能成功結算後，該案件就已偵結。另外要注意的是，偵辦異能要滿足條件才會上堆疊，並且結算時還會再檢查一次條件，如果異能結算時條件不滿足，這個案件就無法在該次成功偵結。

第三段就就是這個案件透過偵辦成功偵結後獲得的追加能力，即使之後這個案件經歷操控權轉移，該案件也依舊是偵結狀態，並擁有偵結後的異能。

以本系列的新牌[Case of the Filched Falcon](https://scryfall.com/card/mkm/44/case-of-the-filched-falcon)為例，第一段的標準異能是進場時探查，也就是派出一個線索衍生物。第二段的偵辦要求在你的結束步驟開始時操控至少3個神器，如果你操控神器未滿三個，那偵辦完全不會上堆疊，就算偵辦上堆疊了，如果在結算前神器被回應去除，導致結算時神器不足3個，那該案件同樣無法偵結。當你成功偵結後，這個案件就會額外有第三段的異能。

最後提醒一點，案件在狀態表示上，玩家或許會習慣使用骰子點數或放置位置來表示目前進度，不過案件在運作機制上不依靠任何外部指示物，這些就只是輔助記憶的工具而已，請注意不要跟真正有指示物的物件混淆了。


## 蒐證（Collect Evidence）
![Evidence](https://i.imgur.com/fQEuSCO.jpg)

蒐證是一種新的費用支付方式，多見於施放一個咒語時可選的額外施放費用，類似增幅（Kicker）&加碼（Bargain），或是異能的起動費用，另外也可以設計成守護的支付費用，好比說[Axebane Ferox](https://scryfall.com/card/mkm/153/axebane-ferox)。

蒐證後面都會接著一個數字N，蒐證N代表從墳場放逐任意數量的牌，且這些牌的總魔法力值（Mana Value）總合要大於等於N。


## 偽裝（Disguise）
![Disguise](https://i.imgur.com/diLp0Ip.jpg)

歡迎來到本系列最複雜的機制：偽裝。

偽裝大致上可以視為變身（Morph）的上位升級版，是個使用到「牌面朝下/牌面朝上」規則的罕見機制，在[什麼是可複製特徵](https://guildmagesforum.tw/What-is-Copiable-Value/#Before-We-Start)這篇文章中對此也有介紹過。

偽裝包含了以下規則：

- 你可以支付3費並面朝下的施放具有偽裝異能的牌，這屬於一種替代性費用，該咒語會以面朝下的狀態進入堆疊，其他玩家不會知道他是甚麼。
- 以面朝下的狀態施放並成功結算後，它會是個擁有守護2異能的2/2生物，沒有名稱、魔法力費用、顏色、生物類別、魔法力值視為0。
- 在任何你有優先權的時候，你可以展示偽裝牌的正面，並支付偽裝費用讓它變為面朝上，這是一個特殊動作，不上堆疊也無法被回應。只有面朝下的永久物才能以此方式變為面朝上，面朝下的瞬間巫術牌無法以此法變為面朝上。
- 如果面朝下的生物失去異能，則無法透過支付偽裝費用將其轉為面朝上，因為它不再具有偽裝異能與偽裝費用。
- 因為該永久物本來就在戰場上，沒有經歷過區域變化，面朝下的生物翻為面朝上不會觸發任何進場觸發的異能；同理該生物上的靈氣、武具、指示物或其他持續性效應也依舊維持不變。
- 面朝下的牌在離開戰場或遊戲結束時，都必須以面朝上展示給對手確認。此外也須確保戰場上多個面朝下的牌，進場順序需能清晰辨識（推薦使用按順序擺放的方式呈現）。

以這系列的[Defenestrated Phantom](https://scryfall.com/card/mkm/11/defenestrated-phantom)為例，你可以正常的花6費施放它，它就是個4/3飛兵，你也可以選擇利用偽裝異能，面朝下的支付3費施放它，對手不會知道它是誰，假若這時它被康掉了，這張牌會以正面進墳場，並且這屬於公開資訊，施放成功結算後，它是個如上規則所述的2/2守護2生物，現在你可以在任何你有優先權的時候，支付4W費用讓它變為面朝上，這是個不上堆疊的特殊動作，一旦支付費用宣告翻面就會立刻翻為面朝上，如果對手想用[電震](https://scryfall.com/card/mkm/144/shock)處理掉這精靈就要抓緊你沒有費用的時機了。


當然也不是只有生物能夠偽裝，一個地牌也能把自己偽裝成生物，好比說[Branch of Vitu-Ghazi](https://scryfall.com/card/mkm/258/branch-of-vitu-ghazi)。

## 匿伏（Cloak）
![Cloak](https://i.imgur.com/pp4kYYJ.jpg)

如果說偽裝是對應變身（Morph），那麼匿伏就是對應顯化（Manifest）。

偽裝是一張牌透過自己的能力變成面朝下，而匿伏則是把其他牌強制變為面朝下狀態，並請被匿伏變為面朝下的牌的特徵與偽裝一樣，是個擁有守護2異能的2/2生物，沒有名稱、魔法力費用、顏色、生物類別、魔法力值視為0。

匿伏一張牌的來源有很大的設計空間，一種比較常見的設計是匿伏自己牌庫頂的一張牌（將牌庫頂的一張牌面朝下的放進戰場，它成為上述的2/2守護2生物）。

匿伏的牌如果是生物牌，操控者可以在擁有優先權的時候，支付該生物的魔法力費用將其翻為面朝上，如果該牌正好是有偽裝/變身異能的牌，你也可以支付偽裝費/變身用來翻為面朝上（當然，這系列內你不會看到變身）。匿伏的其餘規則基本與偽裝相同，可以參考偽裝的規則解說。

最後提一個特別容易讓人混淆的規則，當你匿伏一個轉化式雙面牌時會怎樣？
面朝上/下與轉化式雙面牌的正反面是完全不相干的，你可以把轉化式雙面牌理解為兩張擁有牌背的牌交替使用，但他們依舊是有牌背的，也能被改為面朝下，一個轉化式雙面牌因為匿伏或其他原因變成面朝下時，與一般牌無異，並沒有面朝下=轉化的規則存在。

---

## 準備迎接卡洛夫莊園謀殺案

卡洛夫莊園謀殺案的售前現開賽將於2024年2月2日開始，前往附近的店家體驗新系列吧！

![Final](https://i.imgur.com/Fyo1LEp.jpg)

>卡洛夫莊園謀殺案行事曆：
2月2日~8日 - 售前現開賽
2月9日~11日 - 體驗日
2月10日~3月31日 - 農曆新年慶典賽與標準賽對決
2月16日~18日 - 指揮官歡慶會 浪客小徑
2月9日 - 卡洛夫莊園謀殺案發售日
2月23日~25日 - 拉尼卡：妙探尋兇版上市紀念賽
2月24日 - 拉尼卡：妙探尋兇版發售
3月3日~10日 - 店家冠軍賽