/*global: ESLint, $, console, window, document*/
$(function () {

    // // getting data from API
    $.get("https://cors-anywhere.herokuapp.com/http://ipda3-tech.com/blood-bank/api/v1/donation-requests?api_token=Zz9HuAjCY4kw2Ma2XaA6x7T5O3UODws1UakXI9vgFVSoY3xUXYOarHX2VH27", function (obj) {
        
        console.log(obj['data']);
        console.log(obj["data"].last_page);
        // Create Pagination Dynamicaly
        const pages = obj["data"].last_page;
        for (i = 1; i <= pages; i++) {
            const li = '<li class="page-item"><a class="page-link" href="#">'+ i +'</a></li>';
            $('.pagination').append(li);
        };

        // Get Request Donation From API
        obj["data"].data.forEach(function (singleElement) {
            const div = "<div class='case'><span class='Blood-platoon'> " + singleElement.blood_type.name + " </span><ul class='list-unstyled'><li>اسم الحالة:</li><span>" + singleElement.patient_name + "</span><br><li>المستشفي:</li><span> " + singleElement.hospital_name + "</span><br><li>المدينة:</li><span>" + singleElement.city.name + "</span></ul><a href='#'>التفاصيل</a></div>"
            $('.req-cases').append(div);
        });

    });

    // changing data based on page number
    $(document).on('click', '.pagination a', function (e) {
        e.preventDefault();


        const val = $(this).html();
        

        $(window).scrollTop(0);

        $('.req-cases').empty();

        // getting data from API
        $.get("https://cors-anywhere.herokuapp.com/http://ipda3-tech.com/blood-bank/api/v1/donation-requests?api_token=Zz9HuAjCY4kw2Ma2XaA6x7T5O3UODws1UakXI9vgFVSoY3xUXYOarHX2VH27&page=" + val, function (obj) {

            obj["data"].data.forEach(function (singleElement) {
                const div = '<div class="case"><span class="Blood-platoon">' + singleElement.blood_type.name + '</span><ul class="list-unstyled"><li>اسم الحالة:</li><span>' + singleElement.patient_name + '</span><br><li>المستشفي:</li><span>' + singleElement.hospital_name + '</span><br><li>المدينة:</li><span>' + singleElement.city.name + '</span></ul><a href="#">التفاصيل</a></div>';
                $('.req-cases').append(div);
            });
        });
    });
});