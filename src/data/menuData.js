const menuData = {
  navbar: [
    { title: "Home", slug: "/" },
    {
      title: "Products",
      slug: "products",
      "sub-menu": [
        { title: "Kolye", slug: "kolye" },
        { title: "Bileklik", slug: "bileklik" },
        { title: "Tesbih", slug: "tesbih" },
      ],
    },
   
  ],
  languages: [
    { title: "German", code: "de" },
    { title: "Polish", code: "pl" },
    { title: "English", code: "en" },
  ],
};

export default menuData;
