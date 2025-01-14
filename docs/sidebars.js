/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars are explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guidesSidebar: [
    {
      type: "autogenerated",
      dirName: "guides",
    },
  ],

  developerSidebar: [
    {
      type: "autogenerated",
      dirName: "developer",
    },
  ],

  docsSidebar: [
    {
      type: "autogenerated",
      dirName: "docs",
    },
  ],

  communitySidebar: [
    "community/community",
    {
      type: "category",
      label: "Events",
      collapsible: true,
      collapsed: true,
      items: [
        "events/nvidia-llm-day-nov-23",
        {
          type: "doc",
          label: "Oct 23: HCMC Hacker House",
          id: "events/hcmc-oct23",
        },
      ],
    },
  ],

  aboutSidebar: [
    {
      type: "doc",
      label: "About Jan",
      id: "about/about",
    },
    {
      type: "doc",
      label: "Company Handbook",
      id: "handbook/overview",
    },
    {
      type: "link",
      label: "Careers",
      href: "https://janai.bamboohr.com/careers",
    },
  ],

  handbookSidebar: [
    {
      type: "autogenerated",
      dirName: "handbook",
    },
  ],
  postmortemSidebar: [
    {
      type: "autogenerated",
      dirName: "postmortem",
    },
  ],
};

module.exports = sidebars;
