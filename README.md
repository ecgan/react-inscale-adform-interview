# React INSCALE AdForm Interview

[![Build Status](https://travis-ci.org/ecgan/react-inscale-adform-interview.svg?branch=master)](https://travis-ci.org/ecgan/react-inscale-adform-interview) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A React application to answer the interview assignment for a Technical Frontend Lead position in INSCALE / AdForm.

[INSCALE](https://www.inscale.net/) supplies offshore development teams to technology companies who are looking to scale their development capacity.

[AdForm](https://site.adform.com/) is one of the world’s largest private and independent advertising technology companies.  The company is best known for its seamlessly integrated DSP, DMP, and Ad Server.

## Application Requirements

Full requirement document is available [here](/docs/KUL-F-EHomework%20(004).docx).

> The application should be a simple page with the following elements:
>
> * A list of Campaign which shows
>   * The Name
>   * The startDate
>   * The endDate
>   * A flag to state if the Campaign is active (a campaign is running when the current date is inside the start-end date range)
>   * The Budget (in USD dollar)
> * A Search Form before the list in order to filter the list by Campaign Name
> * A DateRange component that filters the list of campaigns based on a Start and End Date.
>   * If the campaign has a startDate that is contained in the range, it should show.
>   * If the campaign has an endDate that is contained in the range, it should show.
>   * You should not be able to select an end-date that is before the start-date.
> * If the endDate is before the start Date, the campaign should not show.

In addition:

> The candidate will expose a global method called 'AddCampaigns' that takes an array of Campaigns and will render them.
>
> This function will be invoked from the browser’s JavaScript console for testing purposes. If it cannot be invoked, the submission will be rejected. The method is allowed to be called multiple times. If so, the new campaigns will append to the existing list.

## Usage

This application is built with [Create React App](https://create-react-app.dev/).

First, run `npm install` to install the dependencies.

`npm run start` to start the application in local development mode.

`npm run test` to run tests in watch mode.

`npm run test:coverage` to run tests with code coverage report.

## Questions / Issues

If you have any question, feel free to open a GitHub issue, or reach out to me at Twitter [@ecgan](https://twitter.com/ecgan).
