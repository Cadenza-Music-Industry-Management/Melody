<p align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/Cadenza-Music-Industry-Management/Melody/blob/main/src/assets/MelodyLogoWhite.png">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Cadenza-Music-Industry-Management/Melody/main/src/assets/MelodyLogoBlack.png">
      <img alt="Melody Design Library" src="https://raw.githubusercontent.com/Cadenza-Music-Industry-Management/Melody/main/src/assets/MelodyLogoBlack.png">
    </picture>
</p>

# Melody Design Library

This library is in development for the 2024 NextJS redesign of [Cadenza Music Industry Management](https://cadenzamim.com).

**Storybook Link:** https://cadenza-music-industry-management.github.io/MelodyStorybook/

**Storybook Repository:** https://github.com/Cadenza-Music-Industry-Management/MelodyStorybook [OUTDATED as of 12/15/2023]

---

## Instructions

### Libraries Required To Install

These libraries are the current dependencies for use on this library and will be auto-installed when this library has been published to NPM in the future.

* React-Select
* HeadlessUI
* Tailwind
* chart.js
* chartjs-plugin-datalabels
* react-chartjs-2
* react-datepicker
* @types/react-datepicker
* @tiptap/extension-character-count
* tiptap/extension-color
* tiptap/extension-link
* tiptap/extension-text-style
* tiptap/extension-underline
* tiptap/pm
* tiptap/react
* tiptap/starter-kit
* dayjs
* **TODO**

### TODO List

* Remove "melody-" Tailwind prefix on all classes for better reusability in other applications.
* Make all current components more generic (non-Cadenza MIM specific use).
* Publish to NPM.
* **TODO**

---

## Library Details

### Inputs

* Button
* Button Menu
* Checkbox
* Color Picker
* Date Picker
* Dropdown
* File Upload (1 of 2 variants implemented)
* Radio Button
* Switch
* Text Area
* Text Input
* Rich Text Editor
* Radio Group - **not developed**

### Layouts

* Accordion
* Avatar
* Badge
* Breadcrumb
* Image Carousel
* Icon
* Icon Tooltip
* Indicator
* Label
* Progress Bar
* Rating
* Spinner
* Overlay
* Chart
* Tooltip
  * Two components details as:
    * "Tooltip" is fixed positioned
    * "AbsoluteTooltip" is absolute positioned
* Alert - **not developed**
* Image Placeholder - **not developed**
* Text Placeholder - **not developed**
* Stacked Avatars - **not developed**
* Tabbed Layout - **not developed**

### Sections

* Pricing Component
* FooterContainer
* FooterContainer Notification
* Modal Template
* Navigation Bar
* Page Container
* Sidebar
* Slide Over
* Striped List Layout

### Utility Functions

Functions Available (utils/functions.ts)
* **TODO**

Hooks Available (utils/hooks.ts)
* useClickOutside

Constants Available (utils/constants.ts)
* **TODO**

### Tailwind Config Details

We are working to expand our Tailwind Config to support our parent application with use in colors, shadowing, and more. Here are the current available custom classes:

* Shadows
  * melody-shadow-main - "box-shadow: rgba(12, 25, 44, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"
* Colors
  * melody-primary-100 - "color: #0C192C"
  * melody-primary-200 - "color: #1B3B6B"
  * melody-primary-300 - "color: #2A63B6"
  * melody-primary-400 - "color: #607a9f"
  * melody-secondary-100 - "color: #9F8560"
  * melody-secondary-200 - "color: #DBAB67"
  * melody-secondary-300 - "color: #F3CA91"
  * melody-accent-100 - "color: #ABDDE5"
  * melody-accent-200 - "color: #73ECFF"
  * melody-accent-300 - "color: #00DCFF"

### Custom Icons

In use with our parent application, [Cadenza MIM](https://cadenzamim.com), we had custom icons designed and added to Melody in addition to using FontAwesome v4 on our <Icon /> component. These icons include:

* melody-none
* melody-org
* melody-org-tools
* melody-owner
* melody-pandora
* melody-payment-settings
* melody-kanban
* melody-pricing
* melody-promoters
* melody-promotion
* melody-promotion-pages
* melody-public-site
* melody-read
* melody-release-promotions
* melody-releases
* melody-send-email
* melody-settings
* melody-site-builder
* melody-sources
* melody-staff-management
* melody-tidal
* melody-tiktok
* melody-tools
* melody-visibility
* melody-accounting
* melody-archive
* melody-artist
* melody-artist-management
* melody-artist-org
* melody-audius
* melody-beatport
* melody-bin
* melody-blog-post
* melody-calendar
* melody-content
* melody-content-management
* melody-csv
* melody-email
* melody-expenses
* melody-favorite
* melody-file-storage
* melody-history
* melody-home
* melody-iheartradio
* melody-image
* melody-income
* melody-info
* melody-join-org
* melody-label
* melody-legal
* melody-links
* melody-merchandise
* melody-apparel-order
* melody-apparel-items

## License

This project is licensed under the terms of the [MIT license](https://github.com/Cadenza-Music-Industry-Management/Melody/blob/main/LICENSE).
