# Personal Website Project

This project is part of the HNG internship program, aiming to build and host a simple single-page website that outlines my goals for the next 2 years in the tech field. The website is built using HTML, CSS, and JavaScript.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- Display Slack Display Name
- Show Slack Profile Picture with natural dimensions
- Display Slack Email
- Show the current time in UTC
- Display the current day of the week
- Provide links to HNG Learn, Keyword Dog, and Scrape Any Web
- Responsive design, functioning well on all devices (desktop, tablet, mobile)
- Visually appealing and well-organized layout

## Requirements

- Use only HTML, CSS, and JavaScript
- The website must be responsive
- All images must have natural dimensions
- Each required element should have a `data-testid` attribute for easy identification and testing

### Required Elements and Attributes

- **Slack Name**: Display your Slack Display Name
  - Attribute: `data-testid="slackDisplayName"`
- **Current Time in UTC**: Display the current time in UTC
  - Attribute: `data-testid="currentTimeUTC"`
- **Current Day of the week**: Display the current day of the week
  - Attribute: `data-testid="currentDay"`
- **Slack Email**: Display your Slack Email
  - Attribute: `data-testid="slackEmail"`
- **Slack Profile Picture**: Display your Slack Profile Picture
  - Attribute: `data-testid="slackProfilePicture"`
- **Links**:
  - HNG Learn: `data-testid="hngLink"`
  - Keyword Dog: `data-testid="keywordLink"`
  - Scrape Any Web: `data-testid="scrapeanywebLink"`

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Adufe-Obanijesu/HNG_Two_Year_Plan.git
   ```

2. Open the project in your preferred code editor.

## Usage

1. Open `index.html` in your browser to view the website locally.
2. Ensure you have an active internet connection to view icons.

## Project Structure

```
personal-website/
├── index.html      # Main HTML file
├── styles.css      # CSS styles
├── script.js       # JavaScript file for dynamic content - Day and Time (UTC)
├── assets/images/         # Directory for images
│          └── profile.png # Slack Profile Picture
└── README.md       # Project README file
```
