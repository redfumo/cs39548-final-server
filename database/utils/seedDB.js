/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York.",
		imageUrl: "https://2.bp.blogspot.com/-32s96bEJ2vY/VpjBoBNTQdI/AAAAAAAA244/QrWyBSxabqM/s1600/bg_hospital.jpg"
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York.",
		imageUrl: "https://1.bp.blogspot.com/-FoUrPjaUSRY/Us_L_nhHZ1I/AAAAAAAAc_Q/WJYPClruxuM/s800/daigaku_toudai.png"
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York.",
		imageUrl: "https://3.bp.blogspot.com/-hbt3RdWmYio/W0mGG5hgXNI/AAAAAAABNXE/sflm47-JWyIvo6FBo-ztv8V6Fuc8dwbgwCLcBGAs/s800/school_shiken_kaijou.png"
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
      	lastname: "Smith",
		email: "jsmith@gmail.com",
		imageUrl: "https://1.bp.blogspot.com/-sT0aNSDSNd8/W6DT3AoIEtI/AAAAAAABO_4/OH0B97M-Hu8lyzYFM6V1m-z0qCx-WV_bgCLcBGAs/s800/talk4_green_man.png",
		gpa: 3.5
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
      	lastname: "Johnson",
		email: "mjohnson@gmail.com",
		imageUrl: "https://1.bp.blogspot.com/-gjkLAFYclZM/W6DT1Ozx4eI/AAAAAAABO_k/0A7OaEJCJxEKs7B36v3MzlD5UueJow-fgCLcBGAs/s800/talk1_purple_woman.png",
		gpa: 3.9
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;