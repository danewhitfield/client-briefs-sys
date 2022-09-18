const {
	findBriefs,
	findBriefById,
	createBrief,
} = require('../models/briefs.model');

// GET
exports.getBriefs = (req, res, next) => {
	findBriefs()
		.then((brief) => {
			res.status(200).send(brief);
		})
		.catch((err) => {
			next(err);
		});
};

exports.getBriefById = (req, res, next) => {
	const { brief_id } = req.params;
	findBriefById(brief_id)
		.then((brief) => {
			res.status(200).send(brief);
		})
		.catch((err) => {
			next(err);
		});
};

exports.getQuote = (req, res, next) => {
	const { brief_id } = req.params;
	findBriefById(brief_id)
		.then((brief) => {
			console.log(brief);
			res.status(200).send(brief);
		})
		.catch((err) => {
			next(err);
		});
};

// // -------------------------------------------------------------------

// // POST
exports.postBrief = async (req, res, next) => {
	const {
		company_name,
		first_name,
		last_name,
		email,
		contact_number,
		logo_services,
		domain_services,
		email_services,
		page_services,
		cms_services,
		gallery_services,
		products_services,
		blog_services,
		admin_services,
		seo_services,
		personalisation_services,
		socials_services,
	} = req.body;
	createBrief(
		company_name,
		first_name,
		last_name,
		email,
		contact_number,
		logo_services,
		domain_services,
		email_services,
		page_services,
		cms_services,
		gallery_services,
		products_services,
		blog_services,
		admin_services,
		seo_services,
		personalisation_services,
		socials_services
	)
		.then((brief) => {
			res.status(201).send(brief);
		})
		.catch((err) => {
			next(err);
		});
};

// // -------------------------------------------------------------------

// // UPDATE
// exports.updateClientPassword = (req, res, next) => {
// 	const { client_id } = req.params;
// 	const { password } = req.body;
// 	changeClientPassword(password, client_id)
// 		.then((client) => {
// 			res.status(200).send(client, { msg: 'Password Updated!' });
// 		})
// 		.catch((err) => {
// 			next(err);
// 		});
// };

// // -------------------------------------------------------------------

// // DELETE
// exports.deleteClient = (req, res, next) => {
// 	const { client_id } = req.params;
// 	removeClient(client_id)
// 		.then(() => {
// 			res.status(204);
// 		})
// 		.catch((err) => {
// 			next(err);
// 		});
// };

// // -------------------------------------------------------------------

// // LOGIN
// // exports.loginClient = (req, res, next) => {
// // 	const { username, password } = req.body;
// // 	signinClient(username, password)
// // 		.then(async (client) => {
// // 			if (client) {
// // 				const validPassword = await bcrypt.compare(password, client.password);

// // 				if (validPassword) {
// // 					res.status(201).send(client);
// // 				} else {
// // 					res.status(404).send('Password is incorrect');
// // 				}
// // 			} else {
// // 				res.status(404).send(`Client doesn't exist!`);
// // 			}
// // 		})
// // 		.catch((err) => {
// // 			next(err);
// // 		});
// // };
