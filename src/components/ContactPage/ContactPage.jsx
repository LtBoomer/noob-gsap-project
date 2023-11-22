import "./ContactPage.scss";
import clockWallpaper from "../../img/clockworkPicture.jpg";
import watchesOnDisplay from "../../img/Watches on display.jpg";
import { useEffect, useState } from "react";
const ContactPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [Email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [wrongInputMessage, setWrongInputMessage] = useState(false);

  useEffect(() => {
    document.querySelector(".submit-btn").addEventListener("click", (event) => {
      event.preventDefault();
    });
  }, []);

  return (
    <div className="contact-wrapper">
      <div className="component-wrapper">
        <div className="image-wrapper">
          <img src={clockWallpaper} />
        </div>
        <div className="form-wrapper">
          <h2>For more information, do not hesitate to contact us!</h2>
          <form>
            <input
              placeholder="First Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            ></input>
            <input
              placeholder="Last Name"
              onChange={(event) => {
                setSurname(event.target.value);
              }}
            ></input>
            <input
              placeholder="E-mail"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            ></input>
            <textarea
              placeholder="Message"
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            ></textarea>
            <button
              className="submit-btn"
              onClick={() => {
                if (
                  Email.includes("@gmail.com") ||
                  Email.includes("@yahoo.com")
                ) {
                } else {
                  setWrongInputMessage(true);
                  setTimeout(() => {
                    setWrongInputMessage(false);
                  }, 1000);
                }
              }}
            >
              Submit
            </button>
          </form>

          <div className="error-message-wrapper">
            {wrongInputMessage && <p>Check your Email adress again.</p>}
          </div>

          <div className="social-media-logos-wrapper">
            <div className="logos-guide">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/facebook--v1.png"
                alt="facebook--v1"
              />
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/instagram-new--v1.png"
                alt="instagram-new--v1"
              />
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/tiktok--v1.png"
                alt="tiktok--v1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
