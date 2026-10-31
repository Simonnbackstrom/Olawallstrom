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
<link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">

<div class="ola-brevo-wrap sib-form" style="text-align:center; background-color:transparent;">
  <div id="sib-form-container" class="sib-form-container">
    <div id="error-message" class="sib-form-message-panel ola-brevo-msg ola-brevo-msg--error">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon" aria-hidden><path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" /></svg>
        <span class="sib-form-message-panel__inner-text">Något gick fel och dina svar kunde inte sparas. Försök igen om en liten stund.</span>
      </div>
    </div>
    <div></div>
    <div id="success-message" class="sib-form-message-panel ola-brevo-msg ola-brevo-msg--success">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon" aria-hidden><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" /></svg>
        <span class="sib-form-message-panel__inner-text">Tack för dina svar! De hjälper till att anpassa webinaret efter just dina utmaningar. Vi ses snart!</span>
      </div>
    </div>
    <div></div>
    <div id="sib-container" class="sib-container--large sib-container--vertical ola-brevo-container">
      <form id="sib-form" method="POST" action="https://2a8f6d4e.sibforms.com/serve/MUIFAMvjZY9fePnvdTY9XclOw3qeiNaucWugk2_QjrzaHw3sIQEzNEcLFsv6L3Znqthmx5hmkj1B00eByiL0VW4mb9MhdAlq3LAxnzjikaNG1TdbE71YpH7C0qnRqbjDmJpeViWKqTyvXEpRlhXTodtdrNx1EsiyZk3eYbuYadaz3u7iVXQaWJmuKV2M-4TeV5Lw-MiRrb8AoUylFQ==" data-type="subscription">
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

const BRAND_FORM_CSS = `
.ola-brevo-wrap { max-width: 540px; margin-inline: auto; }
.ola-brevo-container {
  max-width: none !important;
  background: var(--papper) !important;
  border: 1px solid var(--border-soft) !important;
  border-radius: 20px !important;
  padding: 32px 28px !important;
  box-shadow: 0 24px 60px -32px rgba(23, 59, 96, 0.25), 0 2px 6px rgba(23, 59, 96, 0.04);
}
@media (min-width: 640px) {
  .ola-brevo-container { padding: 40px 36px !important; }
}
.ola-brevo-wrap #sib-form .sib-input,
.ola-brevo-wrap #sib-form .sib-form-block { padding: 0 !important; }
.ola-brevo-wrap #sib-form > div { padding: 10px 0 !important; }
.ola-brevo-wrap .form__entry .form__label-row { display: block !important; }
.ola-brevo-wrap .entry__label {
  display: block !important;
  margin-bottom: 6px !important;
  font-family: var(--font-text), system-ui, sans-serif !important;
  font-size: 0.78rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  color: var(--marin) !important;
  text-align: left !important;
}
.ola-brevo-wrap .entry__field {
  background: #fff !important;
  border: 1px solid var(--border-soft) !important;
  border-radius: 12px !important;
  padding: 0 !important;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.ola-brevo-wrap .entry__field:focus-within {
  border-color: var(--glod) !important;
  box-shadow: 0 0 0 4px rgba(242, 106, 46, 0.15) !important;
}
.ola-brevo-wrap .entry__field .input {
  width: 100% !important;
  height: 52px !important;
  padding: 0 16px !important;
  background: transparent !important;
  border: 0 !important;
  outline: 0 !important;
  font-family: var(--font-text), system-ui, sans-serif !important;
  font-size: 1rem !important;
  color: var(--ink) !important;
  box-shadow: none !important;
}
.ola-brevo-wrap .entry__field .input::placeholder {
  color: #9aa3af !important;
  font-family: var(--font-text), system-ui, sans-serif !important;
}
.ola-brevo-wrap .entry__error { font-family: var(--font-text), system-ui, sans-serif !important; font-size: 0.85rem !important; border-radius: 10px !important; }
.ola-brevo-wrap #sib-form .sib-form-block__button {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 10px !important;
  width: 100% !important;
  padding: 16px 28px !important;
  margin-top: 10px !important;
  background: var(--glod) !important;
  color: #fff !important;
  font-family: var(--font-text), system-ui, sans-serif !important;
  font-weight: 600 !important;
  font-size: 0.98rem !important;
  text-align: center !important;
  border: 0 !important;
  border-radius: 999px !important;
  box-shadow: 0 10px 24px -8px rgba(242, 106, 46, 0.55) !important;
  transition: background 0.25s ease, transform 0.25s ease !important;
  cursor: pointer;
}
.ola-brevo-wrap #sib-form .sib-form-block__button:hover {
  background: var(--glod-dark) !important;
  transform: translateY(-1px);
}
.ola-brevo-wrap #sib-form .sib-form-block__button .icon { display: none !important; }
.ola-brevo-wrap .ola-brevo-msg {
  display: none;
  max-width: none !important;
  margin: 0 0 16px !important;
  padding: 14px 18px !important;
  border-radius: 14px !important;
  font-family: var(--font-text), system-ui, sans-serif !important;
  font-size: 0.95rem !important;
  text-align: left !important;
}
.ola-brevo-wrap .ola-brevo-msg--error { color: #7a1d1d !important; background: #fdecec !important; border: 1px solid #f3c4c4 !important; }
.ola-brevo-wrap .ola-brevo-msg--success { color: #0b4a28 !important; background: #e7faf0 !important; border: 1px solid #b7ead1 !important; }
.ola-brevo-wrap .sib-form-message-panel__inner-text { font-family: var(--font-text), system-ui, sans-serif !important; }
.ola-brevo-wrap .sib-notification__icon { width: 20px !important; height: 20px !important; margin-right: 8px !important; }
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
        title={
          <span className="hyphens-none [word-break:keep-all]">
            Hjälp Ola förbereda webinaret för dig.
          </span>
        }
        intro="Dina svar används för att anpassa innehållet efter de utmaningar du faktiskt möter. Tar ett par minuter."
        align="center"
      />

      <section className="pb-24 md:pb-32 sec-sand">
        <div className="container-site">
          <div className="max-w-xl mx-auto -mt-10 md:-mt-16 relative z-10">
            <div dangerouslySetInnerHTML={{ __html: BREVO_FORM_HTML }} />
          </div>
          <p className="mt-10 text-center text-[0.85rem] text-muted max-w-md mx-auto">
            Dina svar går enbart till Ola och används för att skräddarsy webinaret. Inget delas vidare.
          </p>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: BRAND_FORM_CSS }} />
      <script dangerouslySetInnerHTML={{ __html: BREVO_CONFIG_SCRIPT }} />
      <Script
        src="https://sibforms.com/forms/end-form/build/main.js"
        strategy="afterInteractive"
      />
    </>
  );
}
