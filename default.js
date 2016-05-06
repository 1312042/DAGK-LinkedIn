angular.module("MyCV", [])
	.controller('ProfileController', function($scope) {
		$scope.firstname = "Buu";
		$scope.lastname = "Nguyen Quoc";

		$scope.headline = "Student at University of Science Ho Chi Minh City";

		$scope.country = "VietNam";
		$scope.industry = "Information Technology and Services";

		$scope.current = "University of Science Ho Chi Minh City";
		$scope.previous = "Duc Hoa Senior HighSchool";
		$scope.education = "University of Science Ho Chi Minh City";

		$scope.position1 = "Alumnus";
		$scope.companyname1 = "University of Science Ho Chi Minh City";
		$scope.location1 = "September 2013 – Present (2 years 9 months) | Ho Chi Minh City";
		$scope.description1 = "Student of Information Technology Faculty";
		
		$scope.position2 = "Student";
		$scope.companyname2 = "Duc Hoa Senior HighSchool";
		$scope.location2 = "September 2009 – June 2013 (3 years 10 months) | Long An, Viet Nam";
		$scope.description2 = "";

		$scope.project1 = "Chess";
		$scope.date1 = "March 2015";
		$scope.projectdescription1 = "C++ Programming";
		
		$scope.project2 = "Mobile Phone Store System Management";
		$scope.date2 = "November 2015";
		$scope.projectdescription2 = "Information Systems Analysis and Design";

		$scope.project3 = "Hibernate";
		$scope.date3 = "April 2016";
		$scope.projectdescription3 = "Java Programming";

		$scope.skill1 = "Data Mining";
		$scope.skill2 = "Microsoft SQL Server";
		$scope.skill3 = "Oracle";
		$scope.skill4 = "Databases";
		$scope.skill5 = "DAC, RBAC";
		$scope.skill6 = "C, C++, C#, Java";
		$scope.skill7 = "HTML, CSS, JavaScript";
		$scope.skill8 = "Report Writing";
		$scope.skill9 = "Teamwork";

		$scope.school1 = "University of Science Ho Chi Minh City";
		$scope.fieldofstudy1 = "Information Technology";
		$scope.datesattended1 = "2013 – 2017";

		$scope.school2 = "Duc Hoa Senior HighSchool";
		$scope.fieldofstudy2 = "Grade 10, 11, 12";
		$scope.datesattended2 = "2009 – 2013";
	});

	
