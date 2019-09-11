
      function dropdownFunction() 
        {
            document.getElementById("myDropdown").classList.toggle("show");
             window.onclick = function(event) 
        {
          if (!event.target.matches('.dropbtn')) 
          {

            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) 
            {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) 
              {
                openDropdown.classList.remove('show');
              }
            }
          }
        }
        }
        //***********************************

        
        function openTab(cityName,elmnt) 
        {
            var i, tabcontent, tablinks;

            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablink");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].style.backgroundColor = "";
            }
            document.getElementById(cityName).style.display = "block";
            elmnt.style.backgroundColor = "orange";
        }
        document.getElementById("defaultOpen").click();
        //******************************/
        function changeButtonName(buttonID,term)
        {
           document.getElementById(buttonID).innerText = term.innerText;
        }

        function checkboxCheck(program)
        {
          var c = document.getElementById(program);
          if (c.checked) 
          {
            document.getElementById("subject").innerText = c.value;
          }
        }

        function showCourseTableIn()
        {
          /*var termInput = "Select Term Here";
          if(document.getElementById("selectTerm1").innerText== termInput)
          {
           showModal2(); 
          }*/
          var termInput = "Select Term Here";
          if(document.getElementById("selectTerm").innerText== termInput)
          {
            alert("Please select term")
          }
          else
          {
            document.getElementById("dropBtn").style.display="block";

          document.getElementById("myTable3").style.display="block"
          }
          
        }

        function showCourseTable()
        {
            var s = document.getElementById("myTable");
            var subjectInput = "Select subject from the tab";
            var termInput = "Select Term Here";
            if(document.getElementById("subject").innerText==subjectInput
              &&document.getElementById("selectTerm").innerText== termInput)
            {
              //alert("Please select term and subject!");
              showModal();
            }
            else if(document.getElementById("subject").innerText==subjectInput)
            {
              //alert("Please select subject!");
              var alertTable = document.getElementById('alertMessage');
              alertTable.innerText = 'Please select subject!';
              showModal();
            }
            else if (document.getElementById("selectTerm").innerText== termInput) 
            {
              //alert("Please select term!");
              var alertTable = document.getElementById('alertMessage');
              alertTable.innerText = 'Please select term!';
              showModal();
            }
            else
            {
              s.style.display = '';
            }
        }
        /********************************************************/
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() 
        {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("toTop").style.display = "block";
            } else {
                document.getElementById("toTop").style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() 
        {
            document.body.scrollTop = 0; // For Chrome, Safari and Opera 
            document.documentElement.scrollTop = 0; // For IE and Firefox
        }
        //*************************************************************
        function searchFunction() 
        {
          var input, filter, table, tr, td, i;
          input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          table = document.getElementById("myTable");
          tr = table.getElementsByTagName("tr");
          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
              if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }       
          }
        }

      /*google translate function*************************/
      function googleTranslateElementInit() 
      {
      new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
      }

      /*modal function*******************************/
      // Get the modal
      var modal = document.getElementById('myModal');

      // Get the button that opens the modal
      var btn = document.getElementById("submitButton");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks the button, open the modal 
      function showModal() {
          modal.style.display = "block";
      }

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
          modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }

        