const db = require('../db');
const format = require('pg-format');
const { dropTables, createTables } = require('../helpers/manage-tables');

const seed = async ({ briefData }) => {
	await dropTables();
	await createTables();

	const insertBriefsQueryStr = format(
		'INSERT INTO briefs (company_name, first_name, last_name, email, contact_number, logo_services, domain_services, email_services, page_services, cms_services, gallery_services, products_services, blog_services, admin_services, seo_services, personalisation_services, socials_services) VALUES %L RETURNING *;',
		briefData.map(
			({
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
			}) => [
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
		)
	);
	const briefsPromise = db
		.query(insertBriefsQueryStr)
		.then((result) => result.rows);

	await Promise.all([briefsPromise]);
};

module.exports = seed;
