export interface IFooterList {
  header: string;
  list: IList[];
}

export interface IList {
  link: string;
  text: string;
}

export const FOOTER_LIST = [
  {
    header: "Must Watch Movies",
    list: [
      { link: "#", text: "Sevappi" },
      { link: "#", text: "Maruthi Nagar Police Station" },
      { link: "#", text: "Rathasaatchi" },
      { link: "#", text: "Writer" },
      { link: "#", text: "Sila Nerangalil Sila Manidhargal" },
      { link: "#", text: "Udanpaal" },
    ],
  },
  {
    header: "Aha Originals",
    list: [
      { link: "#", text: "Vera Maari Office" },
      { link: "#", text: "Akash Vaani" },
      { link: "#", text: "Pettaikaali" },
      { link: "#", text: "Vera Maari Love Story" },
      { link: "#", text: "High On Kadhal" },
      { link: "#", text: "Ammuchi 2" },
    ],
  },
  {
    header: "Genres",
    list: [
      { link: "#", text: "Tamil Drama Movies" },
      { link: "#", text: "Tamil Action Movies" },
      { link: "#", text: "Tamil Comedy Movies" },
      { link: "#", text: "Tamil Romance Movies" },
      { link: "#", text: "Tamil Crime Movies" },
      { link: "#", text: "Tamil Thriller Movies" },
      { link: "#", text: "Tamil Horror Movies" },
    ],
  },
  {
    header: "Learn More",
    list: [
      { link: "#", text: "View Plans" },
      { link: "#", text: "About Us" },
      { link: "#", text: "FAQs / Help" },
      { link: "#", text: "Privacy Policy" },
      { link: "#", text: "Terms of Service" },
      { link: "#", text: "Grievance Redressal" },
      { link: "#", text: "Blog" },
    ],
  },
];
