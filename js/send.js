function ChkState() {
    var name = $('#posName').val();
    var email = $('#posEmail').val();
    var text = $('#posText').val();

    if(name.length >= 3 && email.length != 0 && text.length != 0)
    {
        $('#send').removeAttr('disabled');
    }
    else
    {
        $('#send').attr('disabled','disabled');
    }
}