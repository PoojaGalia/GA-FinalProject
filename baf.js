
            function myFunction(){
                document.getElementById('navbar').classList.toggle('responsive')
            }

            function validation() {

            const fname = document.getElementById('fName');
            const lname = document.getElementById('lName');
            const email = document.getElementById('email');
            const age = document.getElementById('age');
            const phone = document.getElementById('phone');
            const date = document.getElementById('date');
            const time = document.getElementById('time');

            
                var flag = true;
                if(fname.value.trim() == '') {
                    document.getElementById('fname-err').innerHTML = "First Name is required.";
                    // fname.style.borderColor = 'red'
                    flag = false;

                } else {
                    document.getElementById('fname-err').innerHTML = "";
                }
                if(lname.value.trim() == '') {
                    document.getElementById('lname-err').innerHTML = "Last Name is required.";
                    // lname.style.borderColor = 'red'
                    flag = false;

                } else {
                    document.getElementById('lname-err').innerHTML = "";
                }
                
                if(date.value == '') {
                    document.getElementById('date-err').innerHTML = "Date is required.";
                    // date.style.borderColor = 'red'
                    flag = false;

                } else {
                    document.getElementById('date-err').innerHTML = "";
                }
                if(time.value == '') {
                    document.getElementById('time-err').innerHTML = "Time is required.";
                    // time.style.borderColor = 'red'
                    flag = false;

                } else {
                    document.getElementById('time-err').innerHTML = "";
                }
               
                return flag;

            }

        
