import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://nodeijs-mailler01-3hsx.vercel.app/sendmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        navigate("/contact-success");
      } else {
        console.error("Form data submission failed");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="py-14 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 flex flex-col lg:flex-row">
        {/* Sol taraf: Harita ve Başlık */}
        <div className="lg:w-1/3 flex flex-col space-y-4">
          <h3 className="text-teal-500 text-3xl font-semibold sm:text-4xl">
            {t("contact.address")}
          </h3>
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509616!2d-122.42067948467774!3d37.77492977975817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6b5ed4a5%3A0x4e84d8f1e6e8dc2b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2str!4v1602105413461!5m2!1sen!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Sağ taraf: Form ve iletişim bilgileri */}
        <div className="lg:w-2/3 lg:pl-12 mt-12 lg:mt-0">
          <div className="space-y-3 text-xl font-semibold text-gray-600">
            <h3 className="text-teal-500 text-3xl font-semibold sm:text-4xl">
              {t("contact.title")}
            </h3>
            <p className="text-gray-500 mt-4">{t("contact.subtitle")}</p>
          </div>
          <form
            onSubmit={submitForm}
            className="mt-6 space-y-5 bg-white p-6 rounded-lg shadow-lg"
          >
            <div>
              <label className="font-medium text-lg text-gray-700">
                {t("contact.form.name")}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-teal-300 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium text-lg text-gray-700">
                {t("contact.form.email")}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-teal-300 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium text-lg text-gray-700">
                {t("contact.form.company")}
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-teal-300 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium text-lg text-gray-700">
                {t("contact.form.message")}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-teal-300 shadow-sm rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium text-lg bg-teal-500 hover:bg-teal-600 active:bg-teal-500 rounded-lg duration-150"
            >
              {t("contact.form.submit")}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
