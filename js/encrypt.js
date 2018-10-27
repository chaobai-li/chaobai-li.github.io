$(function(){
//----------------------------------------------------------------------------

function encodeUTF8(arr) {
    var i, s = [];
    for (i = 0; i < arr.length; i++) s.push(String.fromCharCode(arr[i]));
    return decodeURIComponent(escape(s.join('')));
};


var myKeys = openpgp.key.readArmored($("#keyring").text()).keys;

$("#encrypt button").click(function(){
    var self = this;
    var role = $(this).attr("data-role");
    if(role == "encrypt"){
        var plaintext = $("#encrypt textarea").val();
        var ciphertext = openpgp.encrypt({
            data: plaintext,
            publicKeys: myKeys,
        }).then(function(ciphertext){
            $("#encrypt textarea").val(ciphertext.data);
            $(self)
                .attr("data-role", "clear")
                .text($(self).attr("data-clear-text"))
            ;
        });
    } else {
        if(!confirm("确定要清除已经加密的文本？ / Are you sure to clear the encrypted message?")) return;
        $("#encrypt textarea").val("");
        $(self)
            .attr("data-role", "encrypt")
            .text($(self).attr("data-encrypt-text"))
        ;
    }
});



function showStatus(verified){
    if(!verified){
        $("#result").removeClass("error success");
        return;
    }
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
    if(typeof verified.data == "string" || verified.data instanceof String){
        $("#original").val(verified.data);
    } else {
        $("#original").val(encodeUTF8(verified.data));
    }
}

function verify(){
    var data = $("#data").val();
    try{
        if(data.indexOf("PGP SIGNED MESSAGE") >= 0){
            var message = openpgp.cleartext.readArmored(data);
        } else {
            var message = openpgp.message.readArmored(data);
        }
        openpgp.verify({
            message: message,
            publicKeys: myKeys,
        }).then(showStatus).catch(function(e){
            alert("输入不正确，这不是一条被签署的消息。/ Incorrect input: not a message with signature.");
            showStatus(false);
        });
    }catch(e){
        console.error("Error",e);
        alert("输入不正确，这不是一条被签署的消息。/ Incorrect input: not a message with signature.");
        showStatus(false);
    }
    $("#data").val("");
}

$("#verify").click(verify);

//----------------------------------------------------------------------------
});
