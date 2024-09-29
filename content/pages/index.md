---
title: Home
slug: /
sections:
  - type: GenericSection
    title:
      text: We build Apps and stuff.
      color: text-dark
      type: TitleBlock
    subtitle: Our APPs just slay.
    text: >
      As an Tech agency, we own 5 APPs that cater to the needs of 5m active
      users. We also are working on 3 new apps in gaming and education vertical.
      We will share more details on thee website once they are ready for launch.
    actions: []
    media:
      url: /images/main-hero.svg
      altText: Unblock your team boost your time to production preview
      elementId: ''
      type: ImageBlock
    badge:
      label: We are Canal Infotech b.v.
      color: text-primary
      type: Badge
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
  - type: FeaturedItemsSection
    title:
      type: TitleBlock
      text: ''
      color: text-primary
      styles:
        self:
          textAlign: center
    subtitle: ''
    items:
      - type: FeaturedItem
        title: Guess The Place
        tagline: APP
        subtitle: Discover new travel destinations
        text: |
          Discover the world while playing a trivia game.
        image:
          type: ImageBlock
          url: /images/abstract-feature1.svg
          altText: Placeholder image
          styles:
            self:
              borderRadius: x-large
        actions: []
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
      - type: FeaturedItem
        title: Feature Item Two
        tagline: APP
        subtitle: This is the item subtitle
        text: |
          Follow the tutorial to build your first awesome Netlify site.
        image:
          type: ImageBlock
          url: /images/abstract-feature2.svg
          altText: Placeholder image
          styles:
            self:
              borderRadius: x-large
        actions: []
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
      - type: FeaturedItem
        title: Feature Item Three
        tagline: This is the tagline
        subtitle: This is the item subtitle
        text: |
          Learn from the tutorial and build your first awesome Netlify site.
        image:
          type: ImageBlock
          url: /images/abstract-feature3.svg
          altText: Placeholder image
          styles:
            self:
              borderRadius: x-large
        actions: []
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
    actions: []
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-8
          - pb-16
          - pr-8
        justifyContent: center
      subtitle:
        textAlign: center
  - title:
      text: Wanna say "Hi"?
      color: text-dark
      type: TitleBlock
    subtitle: Please use the form below and we will get in touch with you shortly.
    text: >
      We are **actively looking** to work with **ambitious** people who wants to
      add value to consumers and have **fun** while doing it.
    media:
      fields:
        - name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          width: full
          type: TextareaFormControl
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: FormBlock
      submitButton:
        type: SubmitButtonFormControl
        label: Send
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: null
    badge:
      label: usually replies within an hour
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    type: GenericSection
  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection
seo:
  metaTitle: Canal Infotech
  metaDescription: >-
    We build IOS and Android consumer APPs, that solve niche problems in the
    travel, leisure and gaming industry.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
