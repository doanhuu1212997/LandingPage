$(document).ready(function () {

    $(document).on('click', '.accroding .accroding_wrap .accroding_wrap-item .title ', function (e) {
        $('.accroding .accroding_wrap .accroding_wrap-item .title ').not($(this)).removeClass('active');
        $(this).toggleClass('active');
        $('.accroding .accroding_wrap .accroding_wrap-item .content ').not($(this).next()).slideUp();
       
        $('.accroding .accroding_wrap .accroding_wrap-item .title .item ').not($(this).children()).removeClass('active');
        $(this).next().slideToggle();
        $(this).children().toggleClass('active');
    })


    $('.btn-contact').click(function (e) {
        let name = $("input[name='name']").val();
        let email = $("input[name='email']").val();
        let phone = $("input[name='phone']").val();
        let erros = {
            name: [],
            email: [],
            phone: []
        }
        e.preventDefault();


        if (name == "") {
            erros.name.push('Tên không được để trống')
        }
        else {
            if (name.length < 6) {
                erros.name.push('Tên phải lớn hơn 6 ký tự')
            }
        }
        if (email == "") {
            erros.email.push('Email được để trống')

        }
        else {
            if (!isEmail(email)) {
                erros.email.push('Email không  hợp lệ')
            }
        }
        if (phone == "") {
            erros.phone.push('Số điện thoại không được để trống')

        }
        else {
            if (phone.length < 10 || phone.length > 11) {
                erros.phone.push('Số điện thoại từ 10 số đến 11 số ạ')
            }
        }
        let succes = true;
        let subcess = $('.subcsess')
        $('.erros').remove();
        for (let i in erros) {
            if (erros[i].length > 0) {
                subcess = false;
                let htmlErros = `<div class="erros" style="color:red;font-weight:bold">${erros[i][0]}</div>`;
                $(`input[name=${i}]`).parent().append(htmlErros);
            }
            else {
                subcess.text("Thành công rồi nha");

            }
        }

        function isEmail(string_email) {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(string_email)) {
                return (true)
            }
            return false;
        }

        console.log(erros)

    });

    $.ajax({
        method: "GET",
        url: "http://zuzo.xyz/api/v1/regions",
        success: function (response) {
            response.data.forEach(function (item) {
                let option = `<option value="${item.id}">${item.name}</option>`;

                $('select[name="regions"]').append(option);
            })


        }
    });

    $('select[name="regions"]').change(function (e) {
        e.preventDefault();

        let region_id = $(this).val()
        $.ajax({
            method: "GET",
            url: 'http://zuzo.xyz/api/v1/regions/' + region_id + '/cities',

            success: function (response) {
                $('select[name="cities"]').empty();

                $('select[name="cities"]').append(`<option value="">Chọn Huyện</option>`);
                $('select[name="wards"]').empty();
                $('select[name="wards"]').append(`<option value="">Chọn Xã</option>`);
                response.data.forEach(function (item) {
                    let option = `<option value="${item.id}">${item.name}</option>`;

                    $('select[name="cities"]').append(option);
                })


            }
        });
    });
    $('select[name="cities"]').change(function (e) {
        e.preventDefault();

        let city_id = $(this).val()
        $.ajax({
            method: "GET",
            url: 'http://zuzo.xyz/api/v1/cities/' + city_id + '/wards',
            success: function (response) {
                $('select[name="wards"]').empty();
                $('select[name="wards"]').append(`<option value="">Chọn Xã</option>`);
                response.data.forEach(function (item) {
                    let option = `<option value="${item.id}">${item.name}</option>`;

                    $('select[name="wards"]').append(option);
                })
            }
        });
    });
    $('.nav li a').click(function (e) {
        e.preventDefault()
        $('.panel').removeClass('active')
        $('.nav li a').removeClass('active')
        let attr_nav = $(this).attr('data-content');
        $('#' + attr_nav).addClass('active');
        $(this).addClass('active');
    })
    $(document).on('keypress','input[name="tags"]',function(e)
    {
        if(e.keyCode == 13)
   
        {
            let value_tags= $(this).val();
            let txt_tag='<div class="tag">'+value_tags+'<span class="remove">x</span> </div>';
            $('.tags .list').append(txt_tag);
            $(this).val("")
        }
    })
    $('.tag .remove').click(function (e) { 
        e.preventDefault();
        $(this).parent().remove();
        
    });
});
