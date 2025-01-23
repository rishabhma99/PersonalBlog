---
title: 'An instruction set for ANNs -- building a VM for virtual machines'
description: 'An of the cuff thought I had'
pubDate: 'Jan 20 2024'
heroImage: '/PersonalBlog/nn.png'
---

<i>To preface this article, I have little-to-no professional experience with machine learning, so take
this article's with the smallest grain of salt. I have some background with college, internships,
and casual reading through out the years, I still have a basic understanding, at best -- though,
that won't stop me from writing this article. I thought this blog would be a good mental exercise,
as I don't get a chance to explore random ideas I have since graduatin.  I have no interest nor the
skill to have some revolutionary, useful insight; I simply want to spitball and theorycraft
through fun ideas without thinking of practical reasons why not to and why the idea is uninformed</i>

## Introduction

I was reading some opinion's regarding the future of Artificial-intelligence, given the
extraordinary capabilities of LLM and how quickly they became ever-present. They were dicussing
the cap in the growth of these models' 'intelligence.' Generally, there are two potential limits I've seen
brought up: the number of parameters (more generally the transformer architecture)  and the quantity of data (
there is an overall limit to the amount of data these LLMs can be trained on.) The first limit is what
caught my eye.

Honestly, I forgot most of what I read, but the general takeaway was that scaling based on parameters wasn't
tenable. Either there would be architectural overhauls -- moving away from backpropogation for instance, hardware
improvements or incremental software improvements. And quite frankly that makes sense to me; without getting into specific,
to improve a generic ml model we can either a) use more and better data b) a better logical architecuture for training or
representing our model c) train a 'deeper' model which to be done in a reasonable time needs more compute, either in quantity
or quality of hardware.

Whenever, I've read up anologies between the brain and ANN, I'm immediately bombarded with groans about how they aren't analogus,
and we shouldnt seriously be trying draw parallels. But I was wondering why the learning of brains isn't completely
dwarfed by that of a computer-based ANN. I'm choosing to discount the duration of learning, which for a brain spans over decades,
because I believe that is offset by the scale of hardware and the 'intentional training' of the models vs mostly wasted time of
learning for human brains. Furthermore, the number of parameters for a brain vs an ANN is roughly similar in magnitude (80 billion to
300-1000 billion for Chatgpt), but that gaps probably widens significantly when we can consider a substantial amount of the brain's
compute goes towards subconcious physical processes (eg. motor skills, breathing etc). Its important to note I also know nothing about
Biology.

One thing I thought is that we rely alot upon abstractions for computation in the ANN. While abstractions are useful because
it simplifies the logical problems we are facing, they can limit our ability to reason about the exact computational steps we make.
The uniformed thought/hypthesis I had is that there a wastage due to the brain more 'general-purpose' than a computer which has a lot
more competing factors for a running program.

## Idea
