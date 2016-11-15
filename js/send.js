function ChkState() {
    var name = $('#posName').val();
    var email = $('#posEmail').val();
    var text = $('#posText').val();
    var r = new RegExp(/.+@.+\..+/i)


        if (r.test($('#posEmail').val()) && name.length >= 3 && text.length !=0)
        {
            $('#send').removeAttr('disabled');
    }
    else
    {
        $('#send').attr('disabled','disabled');
    }
}