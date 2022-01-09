import {
  SubscripeNewsletterContainer,
  SubscripeNewsletterBox,
  SubscripeNewsletterForm,
} from "./SubscriptNewsletter.style";
import { Button } from "../Base/Button.style";
import { Container } from "../Base/Container.style";
function SubscriptNewsletter() {
  return (
    <SubscripeNewsletterContainer>
      <Container>
        <SubscripeNewsletterBox>
          <img src="./imgs/message.png" alt="" />
          <h1>
            Subscribe to get information, latest news and other interesting
            offers about Cobham
          </h1>
          <SubscripeNewsletterForm>
            <div className="form-group">
              <svg width="21" height="18" viewBox="0 0 21 18">
                <g
                  id="Group_46"
                  data-name="Group 46"
                  transform="translate(-418 -4133)"
                >
                  <path
                    id="Vector_5"
                    data-name="Vector 5"
                    d="M0,0,6,4.5,12,0"
                    transform="translate(422 4139)"
                    fill="none"
                    stroke="#39425d"
                    strokeLinecap="round"
                    strokeWidth="1"
                  />
                  <g
                    id="Rectangle_22"
                    data-name="Rectangle 22"
                    transform="translate(418 4133)"
                    fill="none"
                    stroke="#39425d"
                    strokeWidth="1"
                  >
                    <rect width="21" height="18" rx="5" stroke="none" />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="20"
                      height="17"
                      rx="4.5"
                      fill="none"
                    />
                  </g>
                </g>
              </svg>

              <input type="email" placeholder="Your email" />
            </div>
            <Button color="linear-gradient(#FF946D, #FF7D68)">Subscribe</Button>
          </SubscripeNewsletterForm>
        </SubscripeNewsletterBox>
      </Container>
    </SubscripeNewsletterContainer>
  );
}

export default SubscriptNewsletter;
