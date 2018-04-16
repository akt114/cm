$(document).ready(function () {
    let userData = {
        currentPassword: '',
        id: '',
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        website: '',
        country: '',
        about_me: '',
        fb_link: '',
        twiter_link: '',
        google_link: '',
        linkedIn_link: ''
    };
    let;
    let _id = '';
    function getInitialData() {
        $.ajax({
            type: 'POST',
            url: 'http://ec2-35-154-91-106.ap-south-1.compute.amazonaws.com:8080/api/nonngo/byemail',
            dataType: 'json',
            data: { email: 'sommething@som.com' },
            headers: {
                'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2MiOnsiZnVuZHJhaXNlcnMiOltdLCJkb25hdGlvbnMiOltdLCJfaWQiOiI1YWNiNmJjZjkwYzQwNjAyMTJiNTM4NjUiLCJmdWxsTmFtZSI6InRlc3Rpbmcgbm9uIG5nbyIsImVtYWlsIjoic29tbWV0aGluZ0Bzb20uY29tIiwicGFzc3dvcmQiOiIxMjM0NTY3ODkiLCJwaG9uZSI6MTIzNDU2Nzg5MCwiY3JlYXRlZCI6IjIwMTgtMDQtMDlUMTM6MzQ6MDcuNzE5WiIsInVwZGF0ZWQiOiIyMDE4LTA0LTA5VDEzOjM0OjA3LjcxOVoiLCJfX3YiOjB9LCJpYXQiOjE1MjMyODA4NzksImV4cCI6MTUyMzM2NzI3OX0.-bCX8mpeCVSvuTtONq8YQFWkhmRgVUOjeNAo_29Rsvs'
            },
            success: function (res) {
                userData.fullName = res.data.fullName;
                userData.email = res.data.email;
                userData.currentPassword = res.data.password;
                userData.phone = res.data.phone;
                userData.city = res.data.city || '';
                userData.country = res.data.country || '';
                userData.address = res.data.address || '';
                userData.website = res.data.website || '';
                userData.about_me = res.data.about_me || '';
                userData.fb_link = res.data.fb_link || '';
                userData.twiter_link = res.data.tw_link || '';
                userData.google_link = res.data.g_link || '';
                userData.linkedIn_link = res.data.li_link || '';
                userData.id = res.data._id;
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
    function setInitialData() {
        $("#fullName").val(userData.fullName);
        $("#email").val(userData.email);
        $("#password").val(userData.currentPassword);
        $("#phone").val(userData.phone);
        $("#city").val(userData.city);
        $("#country").val(userData.country);
        $("#address").val(userData.address);
        $("#website").val(userData.website);
        $("#bio").val(userData.about_me);
        $("#facebook").val(userData.fb_link);
        $("#twitter").val(userData.twiter_link);
        $("#google").val(userData.google_link);
        $("#linkedin").val(userData.linkedIn_link);
        


    }

    $('.--js-save-btn').click(function (e) {
        e.preventDefault();
        if ($('#password1').val()) {
            if (currentPassword == $('#password').val() && $('#password1').val() == $('#password2').val()) {
                var data = {
                    fullName: $('#fullName').val(),
                    DOB: $('#datepicker4').val(),
                    id: _id,
                    address: $('#address').val(),
                    city: $('#city').val(),
                    website: $('#website').val(),
                    country: $('#country').val(),
                    phone: $('#phone').val(),
                    about_me: $('#bio').val(),
                    password: $('#password2').val()
                };
                console.log(data);
                $.ajax({
                    type: 'PUT',
                    url: 'http://ec2-35-154-91-106.ap-south-1.compute.amazonaws.com:8080/api/nonngo/edit',
                    dataType: 'json',
                    data: data,
                    headers: {
                        'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2MiOnsiZnVuZHJhaXNlcnMiOltdLCJkb25hdGlvbnMiOltdLCJfaWQiOiI1YWNiNmJjZjkwYzQwNjAyMTJiNTM4NjUiLCJmdWxsTmFtZSI6InRlc3Rpbmcgbm9uIG5nbyIsImVtYWlsIjoic29tbWV0aGluZ0Bzb20uY29tIiwicGFzc3dvcmQiOiIxMjM0NTY3ODkiLCJwaG9uZSI6MTIzNDU2Nzg5MCwiY3JlYXRlZCI6IjIwMTgtMDQtMDlUMTM6MzQ6MDcuNzE5WiIsInVwZGF0ZWQiOiIyMDE4LTA0LTA5VDEzOjM0OjA3LjcxOVoiLCJfX3YiOjB9LCJpYXQiOjE1MjMyODA4NzksImV4cCI6MTUyMzM2NzI3OX0.-bCX8mpeCVSvuTtONq8YQFWkhmRgVUOjeNAo_29Rsvs'
                    },
                    success: function (res) {
                        $('#fullName').val(res.data.fullName);
                        $('#phone').val(res.data.phone);
                        currentPassword = res.data.password
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            } else {
                alert('Enter correct password');
            }
        } else {
            var data = {
                fullName: $('#fullName').val(),
                DOB: $('#datepicker4').val(),
                id: _id,
                address: $('#address').val(),
                city: $('#city').val(),
                website: $('#website').val(),
                country: $('#country').val(),
                phone: $('#phone').val(),
                about_me: $('#bio').val()
            };
            console.log(data);
            $.ajax({
                type: 'PUT',
                url: 'http://ec2-35-154-91-106.ap-south-1.compute.amazonaws.com:8080/api/nonngo/edit',
                dataType: 'json',
                data: data,
                headers: {
                    'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2MiOnsiZnVuZHJhaXNlcnMiOltdLCJkb25hdGlvbnMiOltdLCJfaWQiOiI1YWNiNmJjZjkwYzQwNjAyMTJiNTM4NjUiLCJmdWxsTmFtZSI6InRlc3Rpbmcgbm9uIG5nbyIsImVtYWlsIjoic29tbWV0aGluZ0Bzb20uY29tIiwicGFzc3dvcmQiOiIxMjM0NTY3ODkiLCJwaG9uZSI6MTIzNDU2Nzg5MCwiY3JlYXRlZCI6IjIwMTgtMDQtMDlUMTM6MzQ6MDcuNzE5WiIsInVwZGF0ZWQiOiIyMDE4LTA0LTA5VDEzOjM0OjA3LjcxOVoiLCJfX3YiOjB9LCJpYXQiOjE1MjMyODA4NzksImV4cCI6MTUyMzM2NzI3OX0.-bCX8mpeCVSvuTtONq8YQFWkhmRgVUOjeNAo_29Rsvs'
                },
                success: function (res) {
                    $('#fullName').val(res.data.fullName);
                    $('#phone').val(res.data.phone);
                    currentPassword = res.data.password
                },
                error: function (err) {
                    console.log(err);
                }
            });
        }



        // After clarification
        /* 
        {
            fb_link: $('#fullName').val(),
            tw_link: $('#fullName').val(),
            li_link: $('#fullName').val(),
            g_link: $('#fullName').val(),
        }
        */

    })

}) //end of ready function