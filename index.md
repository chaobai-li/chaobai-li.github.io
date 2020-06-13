---
layout: default 
---

欢迎访问我的网页！这个网站是李超白的个人页面。

Welcome to visit my website. This is the personal website of LI, Chaobai.

## Some academic articles <small>一些学术文章</small>


* Kennfeldabschätzung für Radialturbinen
  _Prediction of characteristics for radial turbines 向心涡轮的特性曲线预测_
  * 这是我于2014-2019年在[德累斯顿工业大学][TUD-WIKIPEDIA-CN]所作的硕士毕业论文。<br />
    This was my diplom thesis as end of the study in [TU Dresden][TUD-WIKIPEDIA-EN] between 2014 and 2019.
  * [全文下载 Fulltext][DIPLOM-DOWNLOAD] **只有德语版 German version only**
  * [答辩讲稿 Scripts for Defense][DIPLOM-DOWNLOAD-DEFENSE] **只有德语版 German version only**
  * [RTKF](https://github.com/neoatlantis/rtkf): 
    Python 3 程序源码 Source code in Python 3 

* 发动机动态特性数模与计算 _Mathematical Model Revision and Numerical Simulation of the Dynamic Characteristics of Turbo-Engines_
  * 这是我于2009-2013年在[北京航空航天大学][BUAA-WIKIPEDIA-CN]所作的本科毕业论文。
  <br />This was my bachelor thesis as end of the study at [Beihang University][BUAA-WIKIPEDIA-EN] between 2009 and 2013.
  * [全文下载 Fulltext][BACHELOR-DOWNLOAD] **只有中文版 Chinese version only**
  * [答辩讲稿 Scripts for Defense][BACHELOR-DOWNLOAD-DEFENSE] **只有中文版 Chinese version only**


## My hobbies & project ideas <small>个人爱好，想做的项目</small>

### Applications in cryptography: software or hardware <small>关于密码学的应用，包括软件和硬件</small>

<div class="row"><div class="column"> _Opinions / 观点_

[**My thoughts on personal password managements**][THOUGHTS-PASSWORD](details in work) with
protection against <u><i>evil humanity</i></u>. A password manager database
never suffices, a hardware protected system neither. Something MUST be left out
of human brain to prevent evil attack on human physically. And to solve this
problem, a hierachy of passwords is needed.

[THOUGHTS-PASSWORD]: {% post_url 2020-05-24-thoughts-on-password-managements %}


</div></div>


<div class="row">

<div class="column">

_Ideas / 想法_

**Signal-alike protocol on Basiccard**
[BasicCard from Zeitcontrol](http://basiccard.com) are smartcards which can be
programmed via a BASIC dialect. Is it possible to implement the whole key
exchange and management for encrypted peer-to-peer chat, as used by
[Signal](https://en.wikipedia.org/wiki/Signal_Protocol), on the card?

**sphincsplus.js** In 2017 an algorithm named SPINCS+, designed for digital
signatures in post-quantum era, was submitted to NIST. It's time to consider a
pure-JS implementation.

**Design a wireless & cryptographically secured door locking system.** I'm not
satisfied with existing electronic door locks. A good system should have no
physical sensors/readers mounted "outside"(a mechanical failback is
acceptable).  To open the door, it must be done completely wireless yet secure.
The mechanical backup is only activated when electrics failed.


</div>

<div class="column">

_In progress or done / 正在或已经完成的_


**openpgpjs-cli** _planned_ Another GnuPG-alike tool, used for command line
but is written in JavaScript utilizing
[openpgp.js](https://github.com/openpgpjs/openpgpjs). GnuPG is great for human,
but it's a pain to work with it from programs. Also reference: [
Stateless OpenPGP Command Line Interface / draft-dkg-openpgp-stateless-cli-02](https://www.ietf.org/id/draft-dkg-openpgp-stateless-cli-02.html).




**[manjusaka3][MANJUSAKA3]** _in progress_ Generate web pages that self-decrypt
messages based on answers provided by a user. May have various applications,
but initially it's intended to leave post-mortem messages, which have not been
determined yet.

[MANJUSAKA3]: https://github.com/neoatlantis/manjusaka3


**[node-salsa20][NODESALSA20]** A
[Salsa20](https://en.wikipedia.org/wiki/Salsa20) implementation in JavaScript.
Despite the name, it works in both NodeJS and browser.

[NODESALSA20]: https://github.com/neoatlantis/node-salsa20


</div>


</div>





[TUD-WIKIPEDIA-CN]: https://zh.wikipedia.org/wiki/%E5%BE%B7%E7%B4%AF%E6%96%AF%E9%A1%BF%E5%B7%A5%E4%B8%9A%E5%A4%A7%E5%AD%A6
[TUD-WIKIPEDIA-EN]: https://en.wikipedia.org/wiki/TU_Dresden
[BUAA-WIKIPEDIA-CN]: https://zh.wikipedia.org/wiki/%E5%8C%97%E4%BA%AC%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E5%A4%A7%E5%AD%A6
[BUAA-WIKIPEDIA-EN]: https://en.wikipedia.org/wiki/Beihang_University
[BACHELOR-DOWNLOAD]: /academic/bachelor/bachelor.pdf
[BACHELOR-DOWNLOAD-DEFENSE]: /academic/bachelor/defense.pdf
[DIPLOM-DOWNLOAD]: /academic/diplom/diplom.pdf
[DIPLOM-DOWNLOAD-DEFENSE]: /academic/diplom/defense.pdf
