import type { Metadata } from "next";
import Script from "next/script";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Inför webinaret",
  description:
    "Fyll i uppvärmningsformuläret inför webinaret så anpassar Ola innehållet efter just dina utmaningar.",
  alternates: { canonical: "/webinar/uppvarmning" },
  robots: { index: false, follow: false },
};

const BREVO_FORM_HTML = `
<style>
  @font-face { font-display: block; font-family: Roboto; src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff") }
  @font-face { font-display: fallback; font-family: Roboto; font-weight: 600; src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff") }
  @font-face { font-display: fallback; font-family: Roboto; font-weight: 700; src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff") }
  :where(.sib-form-message-panel) { display: none; }
  :where(.sib-form-message-panel .sib-notification__icon) { width: 20px; height: 20px; }
  #sib-container input:-ms-input-placeholder { font-family: Source Sans 3, webFonts; text-align: left; color: #c0ccda; }
  #sib-container input::placeholder { font-family: Source Sans 3, webFonts; text-align: left; color: #c0ccda; }
  #sib-container textarea::placeholder { font-family: Source Sans 3, webFonts; text-align: left; color: #c0ccda; }
  #sib-container a { text-decoration: underline; color: #f75e15; }
</style>
<link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora&family=Source Sans 3&&display=swap">

<div class="sib-form" style="text-align: center; background-color: transparent;">
  <div id="sib-form-container" class="sib-form-container">
    <div id="error-message" class="sib-form-message-panel" style="font-family:Futura, sans-serif; font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-color:#ff4949; border-radius:3px; max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon"><path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" /></svg>
        <span class="sib-form-message-panel__inner-text">Något gick fel och dina svar kunde inte sparas. Försök igen om en liten stund.</span>
      </div>
    </div>
    <div></div>
    <div id="success-message" class="sib-form-message-panel" style="font-family:Futura, sans-serif; font-size:16px; text-align:left; color:#085229; background-color:#e7faf0; border-color:#13ce66; border-radius:3px; max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" /></svg>
        <span class="sib-form-message-panel__inner-text">Tack för dina svar! De hjälper till att anpassa webinaret efter just dina utmaningar. Vi ses snart!</span>
      </div>
    </div>
    <div></div>
    <div id="sib-container" class="sib-container--large sib-container--vertical" style="max-width:540px; text-align:center; background-color:rgba(247,243,236,1); border-width:0px; border-style:solid; border-color:#C0CCD9; border-radius:12px; direction:ltr">
      <form id="sib-form" method="POST" action="https://2a8f6d4e.sibforms.com/serve/MUIFAMvjZY9fePnvdTY9XclOw3qeiNaucWugk2_QjrzaHw3sIQEzNEcLFsv6L3Znqthmx5hmkj1B00eByiL0VW4mb9MhdAlq3LAxnzjikaNG1TdbE71YpH7C0qnRqbjDmJpeViWKqTyvXEpRlhXTodtdrNx1EsiyZk3eYbuYadaz3u7iVXQaWJmuKV2M-4TeV5Lw-MiRrb8AoUylFQ==" data-type="subscription">
        <div style="padding: 16px 0;">
          <div class="sib-form-block" style="font-family:Lora, webFonts; font-size:22px; text-align:left; color:#173b60; background-color:transparent;">
            <p>Inför webinar: Vägen från 10 till 50 miljoner utan att behöva jobba mer.</p>
          </div>
        </div>
        <div style="padding: 16px 0;">
          <div class="sib-form-block" style="font-family:Source Sans 3, webFonts; font-size:16px; text-align:left; color:#3C4858; background-color:transparent;">
            <div class="sib-text-form-block"><p>Tack för att du tar dig tid att hjälpa mig förstå din verksamhet. Dina svar kommer vara underlag för att göra webinaret mer värdefullt.</p></div>
          </div>
        </div>
        <div style="padding: 16px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block"><div class="form__label-row">
              <label class="entry__label" style="font-weight: 700; text-align: left; font-family:Source Sans 3, webFonts; font-size:16px; color:#3c4858;" for="FULL_NAME" data-required="*">För- och efternamn</label>
              <div class="entry__field"><input class="input" maxlength="200" type="text" id="FULL_NAME" name="FULL_NAME" autocomplete="off" placeholder="För- och efternamn" data-required="true" required /></div>
            </div><label class="entry__error entry__error--primary" style="font-family:Futura, sans-serif; font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-color:#ff4949; border-radius:3px;"></label></div>
          </div>
        </div>
        <div style="padding: 16px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block"><div class="form__label-row">
              <label class="entry__label" style="font-weight: 700; text-align: left; font-family:Source Sans 3, webFonts; font-size:16px; color:#3c4858;" for="EMAIL" data-required="*">E-post</label>
              <div class="entry__field"><input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" value="" placeholder="E-postadress" data-required="true" required /></div>
            </div><label class="entry__error entry__error--primary" style="font-family:Futura, sans-serif; font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-color:#ff4949; border-radius:3px;"></label></div>
          </div>
        </div>
        <div style="padding: 16px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block"><div class="form__label-row">
              <label class="entry__label" style="font-weight: 700; text-align: left; font-family:Source Sans 3, webFonts; font-size:16px; color:#3c4858;" for="name" data-required="*">Företag</label>
              <div class="entry__field"><input class="input" maxlength="200" type="text" id="name" name="COMPANY:name" autocomplete="off" placeholder="Företag" data-required="true" required /></div>
            </div><label class="entry__error entry__error--primary" style="font-family:Futura, sans-serif; font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-color:#ff4949; border-radius:3px;"></label></div>
          </div>
        </div>
        <div style="padding: 16px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block"><div class="form__label-row">
              <label class="entry__label" style="font-weight: 700; text-align: left; font-family:Source Sans 3, webFonts; font-size:16px; color:#3c4858;" for="JOB_TITLE" data-required="*">Roll</label>
              <div class="entry__field"><input class="input" maxlength="200" type="text" id="JOB_TITLE" name="JOB_TITLE" autocomplete="off" placeholder="Din roll i företaget" data-required="true" required /></div>
            </div><label class="entry__error entry__error--primary" style="font-family:Futura, sans-serif; font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-color:#ff4949; border-radius:3px;"></label></div>
          </div>
        </div>
        <div style="padding: 16px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block"><div class="form__label-row">
              <label class="entry__label" style="font-weight: 700; text-align: left; font-family:Source Sans 3, webFonts; font-size:16px; color:#3c4858;" for="industry" data-required="*">Bransch</label>
              <div class="entry__field"><input class="input" maxlength="200" type="text" id="industry" name="COMPANY:industry" autocomplete="off" placeholder="Bransch" data-required="true" required /></div>
            </div><label class="entry__error entry__error--primary" style="font-family:Futura, sans-serif; font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-color:#ff4949; border-radius:3px;"></label></div>
          </div>
        </div>
        <div style="padding: 16px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block"><div class="form__label-row">
              <label class="entry__label" style="font-weight: 700; text-align: left; font-family:Source Sans 3, webFonts; font-size:16px; color:#3c4858;" for="number_of_employees">Antal anställda</label>
              <div class="entry__field"><input maxlength="200" type="text" data-numeric="true" class="input" id="number_of_employees" name="COMPANY:number_of_employees" autocomplete="off" placeholder="Antal anställda" /></div>
            </div><label class="entry__error entry__error--primary" style="font-family:Futura, sans-serif; font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-color:#ff4949; border-radius:3px;"></label></div>
          </div>
        </div>
        <div style="padding: 16px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block"><div class="form__label-row">
              <label class="entry__label" style="font-weight: 700; text-align: left; font-family:Source Sans 3, webFonts; font-size:16px; color:#3c4858;" for="CHALLENGE" data-required="*">Vad är din största utmaning just nu för att växa?</label>
              <div class="entry__field"><input class="input" maxlength="200" type="text" id="CHALLENGE" name="CHALLENGE" autocomplete="off" placeholder="Fyll i ditt svar" data-required="true" required /></div>
            </div><label class="entry__error entry__error--primary" style="font-family:Futura, sans-serif; font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-color:#ff4949; border-radius:3px;"></label></div>
          </div>
        </div>
        <div style="padding: 16px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block"><div class="form__label-row">
              <label class="entry__label" style="font-weight: 700; text-align: left; font-family:Source Sans 3, webFonts; font-size:16px; color:#3c4858;" for="GOAL" data-required="*">Var vill du att företaget ska vara om 3 år?</label>
              <div class="entry__field"><input class="input" maxlength="200" type="text" id="GOAL" name="GOAL" autocomplete="off" placeholder="Fyll i ditt svar" data-required="true" required /></div>
            </div><label class="entry__error entry__error--primary" style="font-family:Futura, sans-serif; font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-color:#ff4949; border-radius:3px;"></label></div>
          </div>
        </div>
        <div style="padding: 16px 0;">
          <div class="sib-form-block" style="text-align: left">
            <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-family:Source Sans 3, webFonts; font-size:15px; text-align:left; color:#FFFFFF; background-color:#f75e15; border-width:0px; border-radius:20px;" form="sib-form" type="submit">
              <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512"><path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" /></svg>
              Skicka in dina svar →
            </button>
          </div>
        </div>
        <input type="text" name="email_address_check" value="" class="input--hidden">
        <input type="hidden" name="locale" value="en">
      </form>
    </div>
  </div>
</div>
`;

const BREVO_CONFIG_SCRIPT = `
window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
window.LOCALE = 'en';
window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "Något av fälten verkar inte stämma. Kontrollera dina uppgifter och försök igen.";
window.REQUIRED_ERROR_MESSAGE = "Det här fältet behöver fyllas i. ";
window.GENERIC_INVALID_MESSAGE = "Något av fälten verkar inte stämma. Kontrollera dina uppgifter och försök igen.";
window.INVALID_NUMBER = "Något av fälten verkar inte stämma. Kontrollera dina uppgifter och försök igen.";
window.INVALID_DATE = "Please enter a valid date";
window.REQUIRED_MULTISELECT_MESSAGE = 'Please select at least 1 option';
window.translation = { common: { selectedList: '{quantity} list selected', selectedLists: '{quantity} lists selected', selectedOption: '{quantity} selected', selectedOptions: '{quantity} selected' } };
var AUTOHIDE = Boolean(1);
`;

export default function WebinarUppvarmningPage() {
  return (
    <>
      <PageHero
        eyebrow="Inför webinaret"
        title="Hjälp Ola förbereda webinaret för dig."
        intro="Dina svar används för att anpassa innehållet efter de utmaningar du faktiskt möter. Tar ett par minuter."
        align="center"
      />

      <section className="pb-24 md:pb-32 sec-papper">
        <div className="container-site">
          <div className="max-w-xl mx-auto">
            <div dangerouslySetInnerHTML={{ __html: BREVO_FORM_HTML }} />
          </div>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{ __html: BREVO_CONFIG_SCRIPT }} />
      <Script
        src="https://sibforms.com/forms/end-form/build/main.js"
        strategy="afterInteractive"
      />
    </>
  );
}
