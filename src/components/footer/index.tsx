import Image from "next/image";
import FooterStyles from "./footer.module.scss";
import SubscribeImg from "@/assets/images/undraw_cooking_p7m1.svg";
import CommunityImg from "@/assets/images/undraw_people_re_8spw.svg";

const Footer = () => {
  return (
    <div className={FooterStyles.container}>
      <div className={FooterStyles.left}>
        <h3>Join the community</h3>
        <p>
          Sign up to receive the best recipes directly to your inbox and be a
          part of our growing community of 2500 members!
        </p>
        <p>
          We respect your privacy. Your email will not be shared and will only
          be used to send you our newsletter.
        </p>
      </div>
      <form className={FooterStyles.right}>
        <input type="text" placeholder="Your full name" />
        <input type="email" placeholder="Your email address" />

        <div className={FooterStyles.checkbox}>
          <input type="checkbox" name="termsAndConditions" />
          <label htmlFor="termsAndConditions">
            I agree to the terms and conditions
          </label>
        </div>
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default Footer;
