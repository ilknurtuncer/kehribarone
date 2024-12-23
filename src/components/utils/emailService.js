import emailjs from "emailjs-com";

const sendEmail = (formData) => {
  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
    .then(
      (response) => {
        console.log("Mesaj başarıyla gönderildi!", response.status, response.text);
      },
      (error) => {
        console.error("Mesaj gönderilemedi:", error);
      }
    );
};

export default sendEmail;
