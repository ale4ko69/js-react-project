/***************************************/
/**  Created By (c) Kagansky Alexey   **/
/**       2025-07-12 16:05:50         **/
/**  https://github.com/ale4ko69      **/
/***************************************/
import { useTranslation } from "react-i18next";
import HtmlToTag from "../components/HtmlToTag";

function Contact({ id }) {
	const { t } = useTranslation();

	// Set document title
	document.title = t("contact.title");

	return (
		<div id={id} className="contact-container">
			<h1>{t("contact.title")}</h1>
			<div className="contact-content">
				{<HtmlToTag tag={"p"} htmlContent={t("contact.description")} />}
				{<HtmlToTag tag={"p"} htmlContent={t("contact.formLibraries")} />}
				<div className="contact-form">
					<div className="form-group">
						<label htmlFor="name">{t("contact.name")}</label>
						<input type="text" id="name" name="name" placeholder={t("contact.namePlaceholder")} />
					</div>

					<div className="form-group">
						<label htmlFor="email">{t("contact.email")}</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder={t("contact.emailPlaceholder")}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="message">{t("contact.message")}</label>
						<textarea
							id="message"
							name="message"
							rows="5"
							placeholder={t("contact.messagePlaceholder")}
						></textarea>
					</div>

					<button className="button button--primary" type="submit">
						{t("contact.send")}
					</button>
				</div>
			</div>
		</div>
	);
}

export default Contact;
