// Add Course
function CourseAdd() {
    var id = $('#couID').val();
    var name = $('#couName').val();
    

    var course = {
        CourseID: id,
        CourseName: name
    };

    $.ajax({
        url: 'https://localhost:7010/api/course',
        type: 'POST',
        data: JSON.stringify(course),
        contentType: 'application/json',
        success: function() {
            // Clear form
            $('#courseForm')[0].reset();
            // Update Course List
            fetchcourses();
        }
    });
}

// Update Course

function UpdateCourse() {
    var id = $('#CourseID').val();
    var name = $('#CourseName').val();
    

    var course = {
        CourseID: id,
        CourseName: name
    };

    $.ajax({
        url: 'https://localhost:7010/api/course/updatecourse',
        type: 'PUT',
        data: JSON.stringify(course),
        contentType: 'application/json',
        success: function() {
            // Clear form
            $('#courseForm')[0].reset();
            // Update Course List
            fetchcourses();
        }
    });
}


//  Delete Course

function DeleteCourse() {
    var id = $('#ID').val();
    
    

    var course = {
        CourseID: id
    };

    $.ajax({
        url: 'https://localhost:7010/api/course/'+id,
        type: 'DELETE',
        data: JSON.stringify(course),
        contentType: 'application/json',
        success: function() {
            // Clear form
            $('#courseForm')[0].reset();
            // Update Course List
            fetchcourses();
        }
    });
}





// Fetch Courses
function fetchcourses() {
    $.ajax({
        url: 'https://localhost:7010/api/course',
        type: 'GET',
        success: function(data) {
            $('#courseList').empty();
            data.forEach(function(course) {
                $('#courseList').append('<li class="list-group-item">' + course.CourseID + ', ' + course.CourseName +  '</li>');
            });
        }
    });
}

// Initial fetch
$(document).ready(function() {
    fetchcourses();
});










