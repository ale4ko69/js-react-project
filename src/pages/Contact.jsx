function Contact() {
	return (
		<div className="contact-container">
			<h1>Контакты</h1>
			<div className="contact-content">
				<p>
					Если у вас есть вопросы или предложения по улучшению этого бойлерплейта, пожалуйста,
					свяжитесь с нами.
				</p>

				<div className="contact-form">
					<div className="form-group">
						<label htmlFor="name">Имя</label>
						<input type="text" id="name" name="name" placeholder="Введите ваше имя" />
					</div>

					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" placeholder="Введите ваш email" />
					</div>

					<div className="form-group">
						<label htmlFor="message">Сообщение</label>
						<textarea
							id="message"
							name="message"
							rows="5"
							placeholder="Введите ваше сообщение"
						></textarea>
					</div>

					<button className="button button--primary" type="submit">
						Отправить
					</button>
				</div>
			</div>
		</div>
	);
}

export default Contact;
