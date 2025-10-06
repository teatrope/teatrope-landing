export const base = import.meta.env.BASE_URL;

export const header = {
  home: base ,
  features: "#feature",
  plans: "#plan",
  blogs: "#blog",
  reviews: "#review",
  faq: "#faq",
  contact_me:`./contact`,
};

export const mainCard = {
  buton1: "https://play.google.com/store/apps/details?id=com.teatrope.app",
  button2: "https://play.google.com/store/apps/details?id=com.teatrope.app",
};

export const functions = {
  button_0: "",
  button_1: "",
  button_2: "",
};

export const plans = {
  basic: "https://play.google.com/store/apps/details?id=com.teatrope.app",
  pro: "./contact",
  enterprise: "./contact",
};

export const blog = {
  items: [
    {
      imgPath:
        "https://cmsapi.emilima.com.pe/api/files/2fxptrV47chCxOYEGisUW3r1GVm6VG2AlahYukhb.jpg",

      imgAlt: "",

      link: "",
    },
    
    {
      imgPath:
        "https://www.operala.org/ola/wp-content/uploads/2020/03/OLA-en-tu-casa.jpg",

      imgAlt: "",

      link: "",
    },

    {
      imgPath:
        "https://larazon.pe/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-12.12.06-PM.jpeg",

      imgAlt: "",

      link: "",
    },
  ],
};



export const footer = {
  fb: "https://www.facebook.com/",
  ig: "https://www.instagram.com/",
  X: "https://twitter.com/",
};


// Others links

export const icons = {
  logo: base + "teatrope_logo.svg",
};
