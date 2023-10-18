// Add Course
function StudentAdd() {
    var id = $('#stuID').val();
    var fname = $('#stufName').val();
    var lname = $('#stulName').val();
    var age = $('#stuAge').val();
    var courseid = $('#couID').val();
    

    var student = {
        StudentID: id,
        StudentfName: fname,
        StudentlName: lname,
        Age: age,
        CourseID: courseid

    };

    $.ajax({
        url: 'https://localhost:7010/api/student',
        type: 'POST',
        data: JSON.stringify(student),
        contentType: 'application/json',
        success: function() {
            // Clear form
            $('#studentForm')[0].reset();
            // Update Student List
            fetchstudents();
        }
    });
}

// Update Course

function UpdateStudent() {
    var id = $('#StudentID').val();
    var fname = $('#StudentfName').val();
    var lname = $('#StudentlName').val();
    var age = $('#StudentAge').val();
    var courseid = $('#CourseID').val();
    

    var student = {
        StudentID: id,
        StudentfName: fname,
        StudentlName: lname,
        Age: age,
        CourseID: courseid

    };

    $.ajax({
        url: 'https://localhost:7010/api/student/updatestudent',
        type: 'PUT',
        data: JSON.stringify(student),
        contentType: 'application/json',
        success: function() {
            // Clear form
            $('#studentForm')[0].reset();
            // Update Student List
            fetchstudents();
        }
    });
}


//  Delete Course

function DeleteStudent() {
    var id = $('#ID').val();
    
    

    var student = {
        StudentID: id
    };

    $.ajax({
        url: 'https://localhost:7010/api/student/'+id,
        type: 'DELETE',
        data: JSON.stringify(student),
        contentType: 'application/json',
        success: function() {
            // Clear form
            $('#studentForm')[0].reset();
            // Update Student List
            fetchstudents();
        }
    });
}





// Fetch Courses
function fetchstudents() {
    $.ajax({
        url: 'https://localhost:7010/api/student',
        type: 'GET',
        success: function(data) {
            $('#studentList').empty();
            data.forEach(function(student) {
                $('#studentList').append('<li class="list-group-item">' + student.StudentID+ ', ' + student.StudentfName + ', ' + student.StudentlName + ', ' + student.Age + ', ' + student.CourseID +  '</li>');
            });
        }
    });
}

// Initial fetch
$(document).ready(function() {
    fetchstudents();
});










