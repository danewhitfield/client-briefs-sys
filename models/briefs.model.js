const app = require('../app');
const db = require('../db/db');

// GET
exports.findBriefs = async () => {
	const result = await db.query('SELECT * FROM briefs');
	if (result.rows.length === 0) {
		return Promise.reject({ status: 404, msg: 'not found!' });
	}
	return result.rows;
};

exports.findBriefById = async (brief_id) => {
	const result = await db.query('SELECT * FROM briefs WHERE brief_id = $1', [
		brief_id,
	]);
	if (result.rows.length === 0) {
		return Promise.reject({ status: 404, msg: 'not found!' });
	}
	return result.rows[0];
};

// // -------------------------------------------------------------------

// // POST
exports.createBrief = async (
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
) => {
	const result = await db.query(
		`
  INSERT INTO briefs
  (company_name,
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
	socials_services) 
	VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) 
	RETURNING *;`,
		[
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
		]
	);
	if (result.rows.length === 0) {
		return Promise.reject({ status: 404, msg: 'not found!' });
	}
	return result.rows[0];
};

// // -------------------------------------------------------------------

// // UPDATE
// exports.changeClientPassword = async (password, client_id) => {
// 	const result = await db.query(
// 		`
//         UPDATE clients
//         SET password = $1
//         WHERE client_id = $2;
//         `,
// 		[password, client_id]
// 	);
// 	if (result.rows.length === 0) {
// 		return Promise.reject({ status: 404, msg: 'not found!' });
// 	}
// 	return result.rows[0];
// };

// // -------------------------------------------------------------------

// // DELETE
// exports.removeClient = async (client_id) => {
// 	const result = await db.query(
// 		`
//         DELETE FROM clients WHERE client_id = $1;
//         `,
// 		[client_id]
// 	);
// 	if (result.rows.length === 0) {
// 		return Promise.reject({ status: 404, msg: 'not found!' });
// 	}
// 	return result.rows[0];
// };

// // -------------------------------------------------------------------

// // LOGIN
// // exports.signinClient = async (username) => {
// // 	const client = await db.query(
// // 		`
// //         SELECT * FROM clients WHERE username = $1;
// //         `,
// // 		[username]
// // 	);
// // 	if (client.rows.length === 0) {
// // 		return Promise.reject({ status: 404, msg: 'User not found!' });
// // 	}
// // 	return client.rows[0];
// // };
