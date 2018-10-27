$(function(){
//----------------------------------------------------------------------------

function showStatus(verified){
    var success = false;
    console.log(verified);
    try{
        success = verified.signatures[0].valid;
    }catch(e){
    }
    $("#result")
        .removeClass("error success")
        .addClass((success?"success":"error"))
    ;
    $("#original").val(verified.data);
}

function verify(){
    var data = $("#data").val(),
        keyring = $("#keyring").text();
    try{
        openpgp.verify({
            message: openpgp.cleartext.readArmored(data),
            publicKeys: openpgp.key.readArmored(keyring).keys,
        }).then(showStatus);
    }catch(e){
        showStatus(false);
    }
    $("#data").val("");
}

$("#verify").click(verify);

//----------------------------------------------------------------------------
});
