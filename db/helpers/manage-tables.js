const db = require('../db');

const createTables = async () => {
	const briefsTablePromise = db.query(`
  CREATE TABLE briefs (
    brief_id SERIAL PRIMARY KEY,
    company_name TEXT NOT NULL,
	first_name TEXT NOT NULL,
	last_name TEXT NOT NULL,
	email TEXT NOT NULL,
	contact_number TEXT NOT NULL,
	logo_services TEXT NOT NULL,
	domain_services TEXT NOT NULL,
	email_services TEXT NOT NULL,
	page_services TEXT NOT NULL,
	cms_services TEXT NOT NULL,
	gallery_services TEXT NOT NULL,
	products_services TEXT NOT NULL,
	blog_services TEXT NOT NULL,
	admin_services TEXT NOT NULL,
	seo_services TEXT NOT NULL,
	personalisation_services TEXT NOT NULL,
	socials_services TEXT NOT NULL
  );`);

	await Promise.all([briefsTablePromise]);
};

const dropTables = async () => {
	await db.query(`DROP TABLE IF EXISTS briefs;`);
};

module.exports = { createTables, dropTables };
