var StudentID="7777777";
var Password="321";
var checkID;
var checkPassword;


//order of the course detail is :
//CRN, SEC, CMP, DAYS, TIME, CAP, ACT, INSTRUCTOR, DATE, LOCATION

var accounting = 
           [[["ACC1100","Introductory Financial Accounting","3.00"],
             ["51749","A01","M","MW","11:30 am-12:45 am",80,0,"Mingzhi Liu (P)","01/03-04/06", "Drake 110"],
             ["50042","A02","M","TR","01:00 am-02:15 pm",80,0,"Mingzhi Liu (P)","01/03-04/06", "Drake 107"]],
            [["ACC2020","Intermediate Accounting - Equities","3.00"],
             ["50048","A01","M","MW","10:00 am-11:15 am",60,0,"Wendy L. Schultz (P)","01/03-04/06", "TBA"],
             ["50049","A02","M","TR","11:30 am-12:45 pm",50,0,"Wendy L. Schultz (P)","01/03-04/06", "TBA"]],
            [["ACC4030","Accounting Theory","3.00"],
             ["50076","A01","M","MW","05:30 pm-06:45 pm",80,0,"Cynthia M. Driedger (P)","01/03-04/06", "TBA"]]];



var AboriginalBusinessStudies = 
           [[["ABIZ0440","Agricultural Economics & Marketing 1","4.00"],
             ["50807","A01","M","MWF","08:30 am-09:20 am",86,0,"Gavin M. Betker (P), Terence C. Betker","01/03-03/28", "TBA"]],
            [["ABIZ1000","Introduction to Agribusiness Management","3.00"],
             ["50812","A01","M","TR","11:30 am-12:45 pm",80,0,"Farhan Islam (P)","01/03-04/06", "130 Agriculture"],
             ["13339","A02","M","MWF","10:00 am-11:15 am",120,0,"Cynthia M. Driedger (P)","01/03-04/06", "100 Agriculture"]]];



var biochemistry = 
           [[["BGEN3020","Introduction to Human Genetics","6.00"],
             ["10848","A01","M","TR","11:30 am-12:45 pm",50,0,"David Merz (P)","01/03-04/06", "115 Armes"]],
            [["BGEN4010","Project Course in Human Genetics","6.00"],
             ["10855","A01","B","TR","11:30 am-12:45 pm",15,0,"Roman D. Gietz (P)","01/03-04/06", "TBA"]]];


var bioSciences = 
           [[["BIOL1000","Biology: Foundations of Life","3.00"],
             ["10226","A01","M","TR","11:30 am-12:45 pm",192,0,"John Markham (P)","01/03-04/06", "231 Isbister"],
             ["11557","A04","M","MWF","01:30 pm-02:20 pm",226,0,"Emily A. McKinnon (P)","01/03-04/06", "418 Machray Hall"],
             ["10229","A03","M","TR","01:00 pm-02:15 pm",178,0,"Jason R. Treberg (P)","01/03-04/06", "343 Drake Centre"],
             ["10230","A02","M","MWF","11:30 am-12:20 pm",165,0,"John Markham (P)","01/03-04/06", "200 Fletcher Argue"]],
            [["BIOL2242","The Flowering Plants","3.00"],
             ["11443","A01","M","MWF","01:30 pm-02:20 pm",117,0,"Carla D. Zelmer (P)","01/03-04/06", "207 Buller"]],
            [["BIOL3100","Skills in Biological Sciences","3.00"],
             ["11443","A01","M","TR","10:00 am-11:15 am",23,0,"Jane M. Waterman (P)","01/03-04/06", "301 Biological Sciences"]]];



var classical= [[["CLAS1270","Introduction to Ancient Greek Culture","3.00"],
                 ["10013","A01","M","MWF","09:30 am-10:20 am",78,0,"Christopher M. Sampson (P)","01/03-04/06", "301 Biological Sciences"]],
                [["CLAS3684","Greek and Roman Tragedy","3.00"],
                 ["10014","A01","M","MWF","01:30 pm-02:20 pm",66,0,"Matthew T. Xu (P)","01/03-04/06", "105 EITC E2"]]];



var civilEngineering = [[["CIVL2830","Graphics for Civil Engineers","2.00"],
                         ["10013","A01","M","T","02:30 pm-05:15 pm",30,0,"Christopher Laing (P)","01/03-04/06", "210 Eitc E2"],
                         ["10014","A02","M","R","02:30 pm-05:15 pm",36,0,"Christopher Laing (P)","01/03-04/06", "210 Eitc E2"]],
                        [["CIVL3690","Environmental Engineering Analysis","4.00"],
                         ["10015","A01","M","MWF","02:30 pm-05:15 pm",36,0,"Beata Gorczyca (P)","01/03-04/06", "320 Eitc E2"]],
                        [["CIVL4022","Properties and Design of Concrete Mixtures","4.00"],
                         ["10016","A01","M","TR","02:30 pm-05:15 pm",100,0,"Mohamed T. Bassuoni (P)","01/03-04/06", "350 Eitc E2"]]];

var dentistry = [[["DENT1202","Early Clinical Experience","3.00"],
                  ["10017","A01","B","T","02:30 pm-05:15 pm",30,0,"Larissa T. Bubnowicz (P)","01/03-04/06", "D18 Dentistry"]],
                 [["DENT4202","Interdisciplinary Patient Centred Care Case Studies","2.00"],
                  ["10018","A01","B","T","02:30 pm-05:15 pm",40,0,"Anthony T. Nowakowski (P)","01/03-04/06", "D18 Dentistry"]]];

var compSci = [[["COMP1010","Introductory Computer Science 1","3.00"],
                ["12135","A01","M","TR","02:30 pm-05:15 pm",100,0,"John A. Bate (P)","01/03-04/06", "150 Eitc E2"],
                ["12136","A02","M","MWF","08:30 am-09:20 am",102,0,"Michael Domaratzki (P)","01/03-04/06", "250 Eitc E2"],
                ["12137","A03","M","TR","02:30 pm-05:15 pm",130,0,"Michael Domaratzki (P)","01/03-04/06", "350 Eitc E2"],
                ["12138","A04","M","MWF","09:30 am-10:20 am",110,0,"Michael Domaratzki (P)","01/03-04/06", "450 Eitc E2"]],
               [["COMP2130","Discrete Mathematics for Computer Science","3.00"],
                ["12177","A01","M","MWF","04:30 pm-05:15 pm",100,0,"Ruppa K. Thulasiram (P)","01/03-04/06", "050 Eitc E2"]],
               [["COMP2140","Data Structures and Algorithms","3.00"],
                ["12172","A01","M","MWF","04:30 pm-05:15 pm",100,0,"Stephane J. Durocher (P)","01/03-04/06", "110 Eitc E2"]],
               [["COMP2160","Programming Practices","3.00"],
                ["12425","A01","M","TR","11:30 pm-12:45 pm",100,0,"Stela H. Seo (P)","01/03-04/06", "210 Eitc E2"]],
               [["COMP3020","Human-Computer Interaction 1","3.00"],
                ["12452","A01","M","MWF","11:30 pm-12:15 pm",100,0,"Andrea Bunt (P)","01/03-04/06", "105 Eitc E2"]],
               [["COMP3370","Computer Organization","3.00"],
                ["84883","A01","M","MWF","04:30 pm-05:15 pm",100,0,"Peter Grabrel (P)","01/03-04/06", "165 Eitc E2"]],
               [["COMP3380","Databases Concepts and Usage","3.00"],
                ["12111","A01","M","TR","04:00 pm-05:15 pm",100,0,"Carson K. Leung (P)","01/03-04/06", "110 Eitc E2"]]];

var econ = [[["ECON1010","Introduction to Microeconomic Principles","3.00"],
             ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
            [["ECON2010","Microeconomic Theory 1","3.00"],
             ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
            [["ECON4140","Evaluation of Economic Policy and Programs","3.00"],
             ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var edua = [[["EDUA1560","Adult Learning and Development","3.00"],
			 ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
            [["EDUA3000","Canadian School Systems and Their Public Purposes","3.00"],
             ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var fin = [[["FIN3270","Personal Financial Planning","3.00"],
			["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
           [["FIN4250","Behavioral Finance","3.00"],
            ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var foodSci = [[["FOOD1000","Food Safety Today and Tomorrow","3.00"],
				["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
          	   [["FOOD4010","Food Process 2","3.00"],
          	    ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var geog = [[["GEOG1280","Introduction to Human Geography","3.00"],
			 ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
            [["GEOG2300","Atmospheric Thermodynamics, Clouds and Precipitation","3.00"],
             ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
          	[["GEOG4660","Honours Thesis","3.00"],
          	 ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var intb =[[["INTB2200","International Management","3.00"],
			["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
           [["INTB2201","Introduction au management international","3.00"],
            ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var itln =[[["ITLN1080","Introductory Italian","6.00"],
			["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
           [["ITLN2100","Writing in Italian","3.00"],
            ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var icel =[[["ICEL1200","Introduction to Icelandic","6.00"],
			["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
           [["ICEL3200","Intermediate Icelandic","6.00"],
            ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var jud = [[["JUD3010","Topics in Jewish Studies","3.00"],
			["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var latn = [[["LATN1080","Introduction to the Reading of Latin","3.00"],
			 ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var lead = [[["LEAD3030","Corporate, Social, and Environmental Responsibility","3.00"],
			 ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var law = [[["LAW1100","Contracts","6.00"],
			["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
           [["LAW2400","Wills and Succession","3.00"],
            ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
           [["LAW3018","Human Rights Law","3.00"],
            ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var ling =[[["LING1200","Introduction to Linguistics","6.00"],
			["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
           [["LING2440","Analytic Techniques","6.00"],
            ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var msci =[[["MSCI2150","Introduction to Management Sciences","3.00"],
         	["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var math = [[["MATH1300","Vector Geometry and Linear Algebra","3.00"],
			 ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
            [["MATH1500","Introduction to Calculus","3.00"],
             ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
            [["MATH3320","Algebra","3.00"],
             ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var mbio = [[["MBIO1010","Microbiology I","3.00"],
			 ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
            [["MBIO2420","Introductory Virology","3.00"],
             ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
            [["MBIO3030","Microbiology II","3.00"],
             ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var nurs =[[["NURS1500","Preparing for Professional Nursing Education","3.00"],
   			["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
           [["NURS2500","Health and Illness 1: Pathophysiology/ Pharmacology/Assessment","6.00"],
            ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var opm = [[["OPM3300","Topics in Advanced Production and Operations Management","3.00"],
			["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var phil =[[["PHIL1200","Introduction to Philosophy","6.00"],
			["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
           [["PHIL2140","Theory of Knowledge","3.00"],
            ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var phrm =[[["PHRM1000","Introduction to Pharmacy","1.00"],
   			["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
           [["PHRM1110","Pharmacy Skills Laboratory","3.00"],
            ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var rlgn =[[["RLGN1322","Introduction to Eastern Religions","3.00"],
			["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
           [["RLGN4160","Religion and Philosophy","3.00"],
            ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var rusn =[[["RUSN1300","Introductory Russian","6.00"],
			["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var span =[[["SPAN1180","Introductory Spanish","6.00"],
			["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var soc =[[["SOC1200","Introduction to Sociology","6.00"],
  		   ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
          [["SOC2010","Critical Issues in Sociology","3.00"],
           ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var stat = [[["STAT1000","Basic Statistical Analysis 1","3.00"],
			 ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]],
            [["STAT2000","Basic Statistical Analysis 2","3.00"],
             ["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var thtr =[[["THTR1220","Introduction to Theatre","6.00"],
			["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var ukrn =[[["UKRN1310","Introductory Ukrainian","6.00"],
			["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var womn =[[["WOMN1500","Introduction to Women's and Gender Studies in the Humanities","3.00"],
			["15741","A01","M","TR","04:00 pm-05:15 pm",100,0,"Mehmet U. Oguzoglu (P)","01/03-04/06", "237 University College"]]];

var student2 = ["Adam","7777777","Computer science",["COMP1010","Introductory Computer Science 1","3.0","A01","MWF","9:30-10:20","EITC E2 105","M"],
["MATH1300","Linear Algebra 1","3.0","A01","MWF","9:30-10:20","Armes 208","M"],["STAT1000","Basic Statistical Analysis 1","3.00","A01","MWF","9:30-10:30","237 University College","M"],
["WOMN1500","Introduction to Women's and Gender Studies in the Humanities","3.00","A01","MWF","9:30-10:30","301 Biological Sciences","M"]];

function mycheck() {
    var x = document.getElementById("Password1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


$(document).ready(function()
{
  
  $("#stuID").append(student2[1]);
  $("#stuName").append(student2[0]);
  $("#program").append(student2[2]);
  for(var m=3;m<student2.length;m++)
  {
    $("#myTable3 #courseReg").append('<tr></tr>');
    for(var n=0;n<student2[m].length;n++)
    {
      $("#myTable3 #courseReg tr:last-child").append('<td>'+student2[m][n]+'</td>');
    }
    $("#myTable3 #courseReg tr:last-child").append('<td>' + '<input type="checkbox" class="toDrop" value="Drop">' + '</td>');
  }


  $("#dropBtn").click(function(){
    if ($("#myTable3 input:checkbox:checked").length > 0){
       if(confirm("Are you sure drop the couse?")==true)
       {
           $('#myTable3 :checkbox:checked').each(function()
           {
               $(this).parent().parent().remove();
           });
       }
     }
     else{
      alert("nothing selected!");
     }
  });

  $("#LoginSubmit").click(function()
  {
    if($("#StudentID1").val()=='' || $("#Password1").val()=='')
    {
      alert("StudentID or Password is empty");
    }
    else if($("#StudentID1").val()!=StudentID || $("#Password1").val()!=Password)
    {
      alert("StudentID or Password is not correct");
    }
    else if($("#StudentID1").val()==StudentID || $("#Password1").val()==Password)
    {
      //alert("Log In Successful");
            window.location= "coursesPage.html";
          }
    });

    $("#submitButton").click(function()
    {
       var temp=[];
       $('#myTable2').hide();
       $('#tbodyID').empty();
       $('#tbodyID2').empty();
       $('#registerBtn').hide();
        if($("#subject").text() != 'Select subject from the tab')
        {
           if($("#subject").text() == 'Accounting')
           {
              temp = accounting;
           }
           else if($("#subject").text() == 'Aboriginal Business Studies')
           {
              temp = AboriginalBusinessStudies;
           }
           else if($("#subject").text() == 'Biochemistry')
           {
              temp = biochemistry;
           }
           else if($("#subject").text() == 'Biological Sciences')
           {
              temp = bioSciences;
           }
           else if ($("#subject").text() == 'Classics') 
           {
             temp = classical;
           }
           else if($("#subject").text() == 'Civil Engineering')
           {
            temp = civilEngineering;
           }
           else if($("#subject").text() == 'Dentistry')
           {
              temp = dentistry;
           }
           else if($("#subject").text() == 'Computer Science')
           {
              temp = compSci;
           }
           else if($("#subject").text() == 'Economics')
           {
              temp = econ;
           }
           else if($("#subject").text() == 'Education')
           {
              temp = edua;
           }
           else if($("#subject").text() == 'Finance')
           {
              temp = fin;
           }
           else if($("#subject").text() == 'Food Science')
           {
              temp = foodSci;
           }
           else if($("#subject").text() == 'Geography')
           {
              temp = geog;
           }
           else if($("#subject").text() == 'International Business')
           {
              temp = intb;
           }
           else if($("#subject").text() == 'Italian')
           {
              temp = itln;
           }
           else if($("#subject").text() == 'Icelandic')
           {
              temp = icel;
           }
           else if($("#subject").text() == 'Judaic Civilization')
           {
              temp = jud;
           }
           else if($("#subject").text() == 'Latin')
           {
              temp = latn;
           }
           else if($("#subject").text() == 'Leadership and Organizations')
           {
              temp = lead;
           }
           else if($("#subject").text() == 'Law')
           {
              temp = law;
           }
           else if($("#subject").text() == 'Linguistics')
           {
              temp = ling;
           }
           else if($("#subject").text() == 'Management')
           {
              temp = msci;
           }
           else if($("#subject").text() == 'Mathematics')
           {
              temp = math;
           }
           else if($("#subject").text() == 'Microbiology')
           {
              temp = mbio;
           }
           else if($("#subject").text() == 'Nursing')
           {
              temp = nurs;
           }
           else if($("#subject").text() == 'Operations Management/Research')
           {
              temp = opm;
           }
           else if($("#subject").text() == 'Philosophy')
           {
              temp = phil;
           }
           else if($("#subject").text() == 'Pharmacy')
           {
              temp = phrm;
           }
           else if($("#subject").text() == 'Religion')
           {
              temp = rlgn;
           }
           else if($("#subject").text() == 'Russian')
           {
              temp = rusn;
           }
           else if($("#subject").text() == 'Spanish')
           {
              temp = span;
           }
           else if($("#subject").text() == 'Sociology')
           {
              temp = soc;
           }
           else if($("#subject").text() == 'Statistics')
           {
              temp = stat;
           }
           else if($("#subject").text() == 'Theatre')
           {
              temp = thtr;
           }
           else if($("#subject").text() == 'Ukrainian')
           {
              temp = ukrn;
           }
           else if($("#subject").text() == 'Women and Gender Studies')
           {
              temp = womn;
           }

           for (var i = 0; i < temp.length; i++) 
           {
                  $('#myTable #tbodyID').append('<tr></tr>');
                  for (var j = 0; j < 3; j++) 
                  {
                    $('#myTable #tbodyID tr:last-child').append('<td>' + temp[i][0][j] + '</td>');
                  }
                  $('#myTable #tbodyID tr:last-child').append('<td>' + '<input type="button" class="sec" value="View Sections">' + '</td>');
           }
         

           $('#myTable #tbodyID tr .sec').click(function(){
            var deCourse=temp[$(this).closest('td').parent()[0].sectionRowIndex];
            $('#myTable').hide();
            for(var a = 1; a < deCourse.length; a++){
              $('#myTable2 #tbodyID2').append('<tr></tr>')
              for(var c = 0; c < 3; c++){
                $('#myTable2 #tbodyID2 tr:last-child').append('<td>' + deCourse[0][c] + '</td>');
              }
              for(var b = 0; b < 10; b++){

                $('#myTable2 #tbodyID2 tr:last-child').append('<td>' + deCourse[a][b] + '</td>');
              }
              $('#myTable2 #tbodyID2 tr:last-child').append('<td>' + '<input type="radio" name="aaa"/>' + '</td>');
            }
             $('#myTable2').show();
             $('#registerBtn').show();
           });


        }
    });
});