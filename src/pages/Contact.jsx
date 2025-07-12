function Contact() {
	return (
		<div className="contact-container">
			<h1>Contact Us</h1>
			<div className="contact-content">
				<p>
					If you have any questions or suggestions for improving this boilerplate, please contact us.
				</p>

				<div className="contact-form">
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input type="text" id="name" name="name" placeholder="Enter your name" />
					</div>

					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" placeholder="Enter your email" />
					</div>

					<div className="form-group">
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							rows="5"
							placeholder="Enter your message"
						></textarea>
					</div>

					<button className="button button--primary" type="submit">
						Send Message
					</button>
				</div>
			</div>
		</div>
	);
}

export default Contact;
